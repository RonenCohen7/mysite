#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "../frontend");
const SRC = path.join(ROOT, "src");

const moves = [
  ["sec/components/Hero/main/Hero.tsx", "components/HeroArea/Hero/Hero.tsx"],
  ["sec/components/Hero/main/Hero.styles.ts", "components/HeroArea/Hero/Hero.styles.ts"],
  ["sec/components/Hero/layout/HeroVideoBackground.tsx", "components/HeroArea/HeroVideoBackground/HeroVideoBackground.tsx"],
  ["sec/components/Hero/layout/HeroVideoBackground.styles.ts", "components/HeroArea/HeroVideoBackground/HeroVideoBackground.styles.ts"],
  ["sec/components/Hero/video/Cinematic_futuristic_technolog.mp4", "Assets/Video/Cinematic_futuristic_technolog.mp4"],
  ["sec/components/Process/main/Process.tsx", "components/ProcessArea/Process/Process.tsx"],
  ["sec/components/Process/main/Process.styles.ts", "components/ProcessArea/Process/Process.styles.ts"],
  ["sec/components/Services/main/Services.tsx", "components/ServicesArea/Services/Services.tsx"],
  ["sec/components/Services/main/Services.styles.ts", "components/ServicesArea/Services/Services.styles.ts"],
  ["sec/components/Solutions/main/Solutions.tsx", "components/SolutionsArea/Solutions/Solutions.tsx"],
  ["sec/components/Solutions/main/Solutions.styles.ts", "components/SolutionsArea/Solutions/Solutions.styles.ts"],
  ["sec/components/Portfolio/main/Portfolio.tsx", "components/PortfolioArea/Portfolio/Portfolio.tsx"],
  ["sec/components/Portfolio/main/Portfolio.styles.ts", "components/PortfolioArea/Portfolio/Portfolio.styles.ts"],
  ["sec/components/Portfolio/main/ProjectCard.tsx", "components/PortfolioArea/ProjectCard/ProjectCard.tsx"],
  ["sec/components/TechStack/main/TechStack.tsx", "components/TechStackArea/TechStack/TechStack.tsx"],
  ["sec/components/TechStack/main/TechStack.styles.ts", "components/TechStackArea/TechStack/TechStack.styles.ts"],
  ["sec/components/Stats/main/Stats.tsx", "components/StatsArea/Stats/Stats.tsx"],
  ["sec/components/Stats/main/Stats.styles.ts", "components/StatsArea/Stats/Stats.styles.ts"],
  ["sec/components/Testimonials/main/Testimonials.tsx", "components/TestimonialsArea/Testimonials/Testimonials.tsx"],
  ["sec/components/Testimonials/main/Testimonials.styles.ts", "components/TestimonialsArea/Testimonials/Testimonials.styles.ts"],
  ["sec/components/Contact/main/Contact.tsx", "components/ContactArea/Contact/Contact.tsx"],
  ["sec/components/Contact/main/Contact.styles.ts", "components/ContactArea/Contact/Contact.styles.ts"],
  ["sec/components/Admin/main/AdminLogin.tsx", "components/AdminArea/AdminLogin/AdminLogin.tsx"],
  ["sec/components/Admin/main/AdminDashboard.tsx", "components/AdminArea/AdminDashboard/AdminDashboard.tsx"],
  ["sec/components/Admin/main/Admin.styles.ts", "components/AdminArea/AdminDashboard/Admin.styles.ts"],
  ["sec/components/Admin/main/ProjectEditor.tsx", "components/AdminArea/ProjectEditor/ProjectEditor.tsx"],
  ["sec/components/TechStack/models/techStack.ts", "Models/techStack.ts"],
  ["sec/components/Contact/service/contact.service.ts", "Services/ContactService.ts"],
  ["config/site.ts", "Models/site.ts"],
  ["app/services/api.ts", "Services/ApiService.ts"],
  ["utils/cn.ts", "Utils/cn.ts"],
  ["hooks/useScrollSpy.ts", "Utils/useScrollSpy.ts"],
  ["components/Navbar/images/profile.png", "Assets/Images/profile.png"],
];

function ensureDir(f) {
  fs.mkdirSync(path.dirname(f), { recursive: true });
}

function mv(from, to) {
  const src = path.join(SRC, from);
  const dest = to.startsWith("../") ? path.join(ROOT, to.slice(3)) : path.join(SRC, to);
  if (!fs.existsSync(src)) return;
  ensureDir(dest);
  fs.renameSync(src, dest);
  console.log("mv", from, "->", to);
}

for (const [from, to] of moves) mv(from, to);

// Process images
const procImg = path.join(SRC, "sec/components/Process/images");
const assetsImg = path.join(SRC, "Assets/Images");
if (fs.existsSync(procImg)) {
  fs.mkdirSync(assetsImg, { recursive: true });
  for (const f of fs.readdirSync(procImg)) {
    mv(`sec/components/Process/images/${f}`, `Assets/Images/${f}`);
  }
}

// Legacy assets
for (const sub of ["images", "video"]) {
  const legacy = path.join(SRC, "assets", sub);
  const target = path.join(SRC, sub === "images" ? "Assets/Images" : "Assets/Video");
  if (!fs.existsSync(legacy)) continue;
  fs.mkdirSync(target, { recursive: true });
  for (const f of fs.readdirSync(legacy)) {
    const dest = path.join(target, f);
    if (!fs.existsSync(dest)) fs.renameSync(path.join(legacy, f), dest);
  }
}

// Remove empty junk folders at components root
const junk = ["AnimatedCounter","AnimatedGrid","AuroraBackground","Badge","Footer","GlassCard","IconButton","MouseGlow","Navbar","ParticleNetwork","Section","SectionHeading","TechIcon","Tooltip"];
for (const j of junk) {
  const p = path.join(SRC, "components", j);
  if (fs.existsSync(p)) {
    try { fs.rmdirSync(p); console.log("rmdir", j); } catch {}
  }
}

console.log("done");
