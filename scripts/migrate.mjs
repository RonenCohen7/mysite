#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, "../frontend/src");

const SECTIONS = ["Hero", "Process", "Services", "Solutions", "Portfolio", "TechStack", "Stats", "Testimonials", "Contact"];

const GLOBAL = [
  ["components/ui/Badge", "Badge"],
  ["components/ui/GlassCard", "GlassCard"],
  ["components/ui/IconButton", "IconButton"],
  ["components/ui/SectionHeading", "SectionHeading"],
  ["components/ui/TechIcon", "TechIcon"],
  ["components/ui/Tooltip", "Tooltip"],
  ["components/ui/AnimatedCounter", "AnimatedCounter"],
  ["components/layout/Navbar", "Navbar"],
  ["components/layout/Footer", "Footer"],
  ["components/layout/Section", "Section"],
  ["components/effects/AnimatedGrid", "AnimatedGrid"],
  ["components/effects/AuroraBackground", "AuroraBackground"],
  ["components/effects/HeroVideoBackground", "HeroVideoBackground"],
  ["components/effects/MouseGlow", "MouseGlow"],
  ["components/effects/ParticleNetwork", "ParticleNetwork"],
];

function kebab(s) {
  return s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase();
}

function parseObjectBody(body) {
  const obj = {};
  let i = 0;
  while (i < body.length) {
    const keyMatch = body.slice(i).match(/^\s*(\w+)\s*:\s*/);
    if (!keyMatch) { i++; continue; }
    const key = keyMatch[1];
    i += keyMatch.index + keyMatch[0].length;

    if (body[i] === "{") {
      let depth = 0, start = i;
      for (; i < body.length; i++) {
        if (body[i] === "{") depth++;
        if (body[i] === "}") { depth--; if (depth === 0) { i++; break; } }
      }
      obj[key] = parseObjectBody(body.slice(start + 1, i - 1));
    } else if (body[i] === '"') {
      let end = i + 1;
      while (end < body.length) {
        if (body[end] === '"' && body[end - 1] !== "\\") break;
        end++;
      }
      obj[key] = body.slice(i + 1, end);
      i = end + 1;
    } else {
      i++;
    }
    while (body[i] === "," || body[i] === "\n" || body[i] === " ") i++;
  }
  return obj;
}

function parseStylesFile(content) {
  const exports = {};
  const re = /export const (\w+)\s*=\s*\{/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    const name = m[1];
    let depth = 1, i = re.lastIndex;
    const start = i;
    for (; i < content.length && depth > 0; i++) {
      if (content[i] === "{") depth++;
      if (content[i] === "}") depth--;
    }
    exports[name] = parseObjectBody(content.slice(start, i - 1));
  }
  return exports;
}

function flattenClasses(prefix, obj, acc = {}) {
  for (const [key, val] of Object.entries(obj)) {
    if (typeof val === "string") {
      const cls = `${prefix}-${kebab(key)}`;
      acc[key] = { cls, tw: val };
    } else {
      acc[key] = {};
      for (const [nk, nv] of Object.entries(val)) {
        const cls = `${prefix}-${kebab(key)}-${kebab(nk)}`;
        acc[key][nk] = { cls, tw: nv };
      }
    }
  }
  return acc;
}

function generateCss(prefix, flat) {
  const lines = ['@import "tailwindcss";', ""];
  function walk(node) {
    for (const val of Object.values(node)) {
      if (val.cls) lines.push(`.${val.cls} { @apply ${val.tw}; }`, "");
      else walk(val);
    }
  }
  walk(flat);
  return lines.join("\n");
}

function generateClassTs(componentName, exports, flatMaps) {
  const lines = [`/** Class name map for ${componentName}.css */`];
  for (const [exportName, flat] of Object.entries(flatMaps)) {
    const varName = exportName.replace(/Styles$/, "Classes").replace(/^./, (c) => c.toLowerCase());
    const map = {};
    for (const [key, val] of Object.entries(flat)) {
      if (val.cls) map[key] = val.cls;
      else {
        map[key] = {};
        for (const [nk, nv] of Object.entries(val)) map[key][nk] = nv.cls;
      }
    }
    lines.push(`export const ${varName} = ${JSON.stringify(map, null, 2)} as const;`);
  }
  return lines.join("\n\n");
}

function convertStyles(stylesPath, componentName, outDir) {
  if (!fs.existsSync(stylesPath)) return {};
  const content = fs.readFileSync(stylesPath, "utf8");
  const exports = parseStylesFile(content);
  const prefix = kebab(componentName);
  const flatMaps = {};
  for (const [ename, obj] of Object.entries(exports)) {
    flatMaps[ename] = flattenClasses(prefix, obj);
  }
  const flat = Object.values(flatMaps)[0];
  fs.writeFileSync(path.join(outDir, `${componentName}.css`), generateCss(prefix, flat));
  fs.writeFileSync(path.join(outDir, `${componentName}.classes.ts`), generateClassTs(componentName, exports, flatMaps));
  return exports;
}

function replaceStyleRefs(content, oldVar, newVar) {
  return content
    .replace(new RegExp(`\\b${oldVar}\\.`, "g"), `${newVar}.`)
    .replace(new RegExp(`\\b${oldVar}\\b`, "g"), newVar);
}

function migrateStylesImport(content, componentName, rel = ".") {
  const oldImport = `from "${rel}/${componentName}.styles"`;
  const newImport = `from "${rel}/${componentName}.classes"`;
  content = content.replace(oldImport, newImport);
  content = content.replace(
    `import { ${componentName.charAt(0).toLowerCase() + componentName.slice(1)}Styles`,
    `import { ${componentName.charAt(0).toLowerCase() + componentName.slice(1)}Classes`
  );
  const styleVar = `${componentName.charAt(0).toLowerCase() + componentName.slice(1)}Styles`;
  const classVar = `${componentName.charAt(0).toLowerCase() + componentName.slice(1)}Classes`;
  content = replaceStyleRefs(content, styleVar, classVar);
  // heroIconVariants
  content = content.replace(/heroIconVariants/g, "heroClasses.heroIconVariants");
  content = content.replace(/gridStyles/g, "animatedGridClasses");
  content = content.replace(/sectionHeadingStyles/g, "sectionHeadingClasses");
  content = content.replace(/sectionStyles/g, "sectionClasses");
  content = content.replace(/navbarStyles/g, "navbarClasses");
  content = content.replace(/footerStyles/g, "footerClasses");
  content = content.replace(/contactStyles/g, "contactClasses");
  content = content.replace(/processStyles/g, "processClasses");
  content = content.replace(/servicesStyles/g, "servicesClasses");
  content = content.replace(/solutionsStyles/g, "solutionsClasses");
  content = content.replace(/portfolioStyles/g, "portfolioClasses");
  content = content.replace(/techStackStyles/g, "techStackClasses");
  content = content.replace(/statsStyles/g, "statsClasses");
  content = content.replace(/testimonialsStyles/g, "testimonialsClasses");
  content = content.replace(/adminStyles/g, "adminClasses");
  content = content.replace(/badgeStyles/g, "badgeClasses");
  content = content.replace(/glassCardStyles/g, "glassCardClasses");
  content = content.replace(/iconButtonStyles/g, "iconButtonClasses");
  content = content.replace(/techIconStyles/g, "techIconClasses");
  content = content.replace(/tooltipStyles/g, "tooltipClasses");
  content = content.replace(/auroraStyles/g, "auroraBackgroundClasses");
  content = content.replace(/heroVideoStyles/g, "heroVideoBackgroundClasses");
  content = content.replace(/mouseGlowStyles/g, "mouseGlowClasses");
  content = content.replace(/particleStyles/g, "particleNetworkClasses");
  if (!content.includes(`import "./${componentName}.css"`)) {
    content = content.replace(
      new RegExp(`(import .+${componentName}\\.classes.+\\n)`),
      `$1import "./${componentName}.css";\n`
    );
  }
  return content;
}

function updatePaths(content) {
  return content
    .replace(/@\/sections\/(\w+)\/(\w+)/g, (_, sec, file) => `@/sec/components/${sec}/main/${file}`)
    .replace(/@\/components\/ui\/(\w+)/g, "@/components/$1/$1")
    .replace(/@\/components\/layout\/(\w+)/g, "@/components/$1/$1")
    .replace(/@\/components\/effects\/(\w+)/g, "@/components/$1/$1")
    .replace(/@\/assets\/images\/process-/g, "@/sec/components/Process/images/process-")
    .replace(/@\/assets\/video\/Cinematic_futuristic_technolog\.mp4/g, "@/sec/components/Hero/video/Cinematic_futuristic_technolog.mp4")
    .replace(/@\/assets\/images\/profile\.png/g, "@/components/Navbar/images/profile.png")
    .replace(/@\/config\/techStack/g, "@/sec/components/TechStack/models/techStack")
    .replace(/@\/pages\/admin\//g, "@/sec/components/Admin/main/")
    .replace(/@\/services\/api/g, "@/app/services/api");
}

function copyAsset(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

// Assets
copyAsset(path.join(SRC, "assets/video/Cinematic_futuristic_technolog.mp4"), path.join(SRC, "sec/components/Hero/video/Cinematic_futuristic_technolog.mp4"));
copyAsset(path.join(SRC, "assets/images/profile.png"), path.join(SRC, "components/Navbar/images/profile.png"));
for (const img of fs.readdirSync(path.join(SRC, "assets/images")).filter((f) => f.startsWith("process-"))) {
  copyAsset(path.join(SRC, "assets/images", img), path.join(SRC, "sec/components/Process/images", img));
}
copyAsset(path.join(SRC, "config/techStack.ts"), path.join(SRC, "sec/components/TechStack/models/techStack.ts"));

// Sections
for (const name of SECTIONS) {
  const old = path.join(SRC, "sections", name);
  const main = path.join(SRC, "sec/components", name, "main");
  fs.mkdirSync(main, { recursive: true });

  const tsx = path.join(old, `${name}.tsx`);
  if (fs.existsSync(tsx)) {
    let c = fs.readFileSync(tsx, "utf8");
    c = updatePaths(c);
    c = migrateStylesImport(c, name);
    c = c.replace(/@\/components\/layout\/Section/g, "@/components/Section/Section");
    c = c.replace(/@\/components\/ui\/SectionHeading/g, "@/components/SectionHeading/SectionHeading");
    c = c.replace(/@\/components\/effects\/HeroVideoBackground/g, "@/sec/components/Hero/layout/HeroVideoBackground");
    c = c.replace(/@\/components\/ui\/IconButton/g, "@/components/IconButton/IconButton");
    fs.writeFileSync(path.join(main, `${name}.tsx`), c);
  }

  for (const f of fs.readdirSync(old).filter((f) => f.endsWith(".tsx") && f !== `${name}.tsx`)) {
    let c = fs.readFileSync(path.join(old, f), "utf8");
    c = updatePaths(c);
    fs.writeFileSync(path.join(main, f), c);
  }

  convertStyles(path.join(old, `${name}.styles.ts`), name, main);

  // HeroVideoBackground to Hero/layout
  if (name === "Hero") {
    const hvb = path.join(SRC, "components/effects/HeroVideoBackground.tsx");
    const hvbStyles = path.join(SRC, "components/effects/HeroVideoBackground.styles.ts");
    const layout = path.join(SRC, "sec/components/Hero/layout");
    fs.mkdirSync(layout, { recursive: true });
    if (fs.existsSync(hvb)) {
      let c = fs.readFileSync(hvb, "utf8");
      c = updatePaths(c);
      c = migrateStylesImport(c, "HeroVideoBackground");
      c = c.replace(/@\/assets\/video/g, "@/sec/components/Hero/video");
      fs.writeFileSync(path.join(layout, "HeroVideoBackground.tsx"), c);
    }
    convertStyles(hvbStyles, "HeroVideoBackground", layout);
  }

  fs.writeFileSync(path.join(SRC, "sec/components", name, "app/index.ts"), `export { ${name} } from "../main/${name}";\n`);

  // Contact service
  if (name === "Contact") {
    fs.mkdirSync(path.join(SRC, "sec/components/Contact/service"), { recursive: true });
    fs.writeFileSync(path.join(SRC, "sec/components/Contact/service/contact.service.ts"), `export { sendContact } from "@/app/services/api";\n`);
    fs.mkdirSync(path.join(SRC, "sec/components/Contact/controller"), { recursive: true });
  }
}

// Global components
for (const [from, name] of GLOBAL) {
  if (name === "HeroVideoBackground") continue;
  const dest = path.join(SRC, "components", name);
  fs.mkdirSync(dest, { recursive: true });
  const tsx = path.join(SRC, `${from}.tsx`);
  const styles = path.join(SRC, `${from}.styles.ts`);
  if (fs.existsSync(tsx)) {
    let c = fs.readFileSync(tsx, "utf8");
    c = updatePaths(c);
    c = migrateStylesImport(c, name);
    fs.writeFileSync(path.join(dest, `${name}.tsx`), c);
  }
  convertStyles(styles, name, dest);
}

// Admin
const adminMain = path.join(SRC, "sec/components/Admin/main");
fs.mkdirSync(adminMain, { recursive: true });
for (const f of fs.readdirSync(path.join(SRC, "pages/admin"))) {
  if (f.endsWith(".tsx")) {
    let c = fs.readFileSync(path.join(SRC, "pages/admin", f), "utf8");
    c = updatePaths(c);
    if (f === "AdminDashboard.tsx" || f === "ProjectEditor.tsx") c = migrateStylesImport(c, "Admin");
    fs.writeFileSync(path.join(adminMain, f), c);
  }
}
convertStyles(path.join(SRC, "pages/admin/Admin.styles.ts"), "Admin", adminMain);
fs.writeFileSync(path.join(SRC, "sec/components/Admin/app/index.ts"), `export { AdminLogin } from "../main/AdminLogin";\nexport { AdminDashboard } from "../main/AdminDashboard";\nexport { ProjectEditor } from "../main/ProjectEditor";\n`);

// App services
fs.mkdirSync(path.join(SRC, "app/services"), { recursive: true });
fs.copyFileSync(path.join(SRC, "services/api.ts"), path.join(SRC, "app/services/api.ts"));

// App.tsx
let app = fs.readFileSync(path.join(SRC, "App.tsx"), "utf8");
app = updatePaths(app);
for (const s of SECTIONS) app = app.replace(`@/sections/${s}/${s}`, `@/sec/components/${s}/app`);
app = app.replace(/@\/components\/layout\/Navbar/g, "@/components/Navbar/Navbar");
app = app.replace(/@\/components\/layout\/Footer/g, "@/components/Footer/Footer");
app = app.replace(/@\/components\/effects\//g, "@/components/");
app = app.replace(/@\/pages\/admin\//g, "@/sec/components/Admin/main/");
fs.mkdirSync(path.join(SRC, "app"), { recursive: true });
fs.writeFileSync(path.join(SRC, "app/App.tsx"), app);

// main.tsx
let main = fs.readFileSync(path.join(SRC, "main.tsx"), "utf8");
main = main.replace(/from "\.\/App"/, 'from "./app/App"');
fs.writeFileSync(path.join(SRC, "main.tsx"), main);

console.log("Migration complete");
