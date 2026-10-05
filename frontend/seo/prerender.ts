/**
 * Build-time SEO pages: real HTML (text, meta tags, structured data) for crawlers that don't run JavaScript —
 * ChatGPT, Claude, Perplexity, Bing. Built from the same translations and case studies the React app shows.
 *
 * Output (inside dist/):
 *   _pages/home.html, _pages/about.html, _pages/projects/<slug>.html   served by the backend per route
 *   sitemap.xml, llms.txt
 *
 * The static content sits inside #root, so React replaces it on load. Visitors with JavaScript never see it:
 * it is hidden with the `scripting` media query, because the site's CSP blocks inline scripts.
 */
import fs from "fs";
import path from "path";
import type { Plugin, ResolvedConfig } from "vite";
import type { Project } from "@mysite/shared";
import { translations } from "../src/i18n/translations";
import { pickStoryProjects } from "../src/data/caseStudies";
import { siteConfig } from "../Models/site";

const he = translations.he;
const SITE = siteConfig.url;
const PAGES_DIR = "_pages";

const areasHe = siteConfig.serviceAreas.map((a) => a.he);
const areasSentence = `ב${areasHe.slice(0, -1).join(", ")} ו${areasHe[areasHe.length - 1]}`;

const HOME_TITLE = "מערכות בהתאמה אישית לעסקים, אוטומציות ו-AI | רונן כהן";
const HOME_DESCRIPTION =
  `רונן כהן — פיתוח מערכות ווב בהתאמה אישית, אוטומציות n8n, סוכני AI ואינטגרציות לעסקים קטנים ובינוניים ` +
  `${areasSentence}, וגם מרחוק בכל הארץ.`;

/** Maps a site path to its prerendered file under dist/_pages (the backend keeps the same mapping). */
export function prerenderedPage(pathname: string): string | null {
  const route = pathname.replace(/\/+$/, "") || "/";
  if (route === "/") return "home.html";
  if (route === "/about") return "about.html";
  const project = /^\/projects\/([a-z0-9-]+)$/.exec(route);
  return project ? `projects/${project[1]}.html` : null;
}

interface Page {
  file: string;
  url: string;
  title: string;
  description: string;
  body: string;
  jsonLd: object;
}

function esc(text: string | undefined): string {
  return (text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const STATIC_CSS =
  ".seo-static{max-width:52rem;margin:0 auto;padding:1.5rem 1.1rem 3rem;font-family:system-ui,-apple-system,Arial,sans-serif;" +
  "line-height:1.7;color:#0f172a}.seo-static a{color:#0e7490}.seo-static nav a{margin-inline-end:1rem}" +
  ".seo-static h1{font-size:2rem;line-height:1.2}.seo-static h2{margin-top:2.2rem;font-size:1.4rem}" +
  ".seo-static h3{margin-bottom:.3rem;font-size:1.1rem}.seo-static img{max-width:100%;height:auto;border-radius:.75rem}" +
  "@media (scripting:enabled){.seo-static{display:none}}";

const ronen = {
  "@type": "Person",
  "@id": `${SITE}/#ronen`,
  name: "Ronen Cohen",
  alternateName: "רונן כהן",
  jobTitle: "Full Stack Developer & AI Automation Architect",
  url: `${SITE}/about`,
  sameAs: [siteConfig.linkedin, siteConfig.github],
};

const business = {
  "@type": "ProfessionalService",
  "@id": `${SITE}/#business`,
  name: "Ronen Cohen — מערכות בהתאמה אישית לעסקים",
  alternateName: ["רונן כהן", "Ronen Cohen"],
  url: `${SITE}/`,
  description: HOME_DESCRIPTION,
  founder: { "@id": ronen["@id"] },
  sameAs: [siteConfig.linkedin, siteConfig.github],
  knowsLanguage: ["he", "en"],
  areaServed: [
    ...siteConfig.serviceAreas.map((a) => ({ "@type": "City", name: a.he, alternateName: a.en })),
    { "@type": "Country", name: "ישראל", alternateName: "Israel" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: he.sections.services.label,
    itemListElement: he.services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.description },
    })),
  },
};

function header(): string {
  return (
    `<header><p><a href="/"><strong>${esc(he.site.name)}</strong></a> — ${esc(he.hero.headline)}</p>` +
    `<nav><a href="/#portfolio">${esc(he.nav.portfolio)}</a><a href="/#services">${esc(he.nav.services)}</a>` +
    `<a href="/about">${esc(he.nav.about)}</a><a href="/#contact">${esc(he.nav.contact)}</a></nav></header>`
  );
}

function footer(): string {
  return (
    `<footer><h2>${esc(he.sections.contact.label)}</h2>` +
    `<p>${esc(he.faq.items[he.faq.items.length - 1].a)} <a href="/#contact">${esc(he.hero.ctaCall)}</a></p>` +
    `<p><a href="${esc(siteConfig.linkedin)}">LinkedIn</a> · <a href="${esc(siteConfig.github)}">GitHub</a></p>` +
    `<p>© ${new Date().getFullYear()} ${esc(he.site.name)}. ${esc(he.footer.rights)}</p></footer>`
  );
}

function projectList(projects: Project[]): string {
  return `<ul>${projects
    .map(
      (p) =>
        `<li><h3><a href="/projects/${esc(p.slug)}">${esc(p.titleHe || p.title)}</a></h3>` +
        `<p>${esc(p.descriptionHe || p.description)}</p></li>`
    )
    .join("")}</ul>`;
}

function homePage(projects: Project[]): Page {
  const body =
    header() +
    `<main><h1>${esc(he.hero.headline)}</h1><p>${esc(he.hero.subtitle)}</p>` +
    `<p>${esc(he.hero.punchLine1)}. ${esc(he.hero.punchLine2)}.</p>` +
    `<p>אזורי שירות: ${esc(areasHe.join(", "))}, וגם מרחוק בכל הארץ.</p>` +
    `<section><h2>${esc(he.sections.portfolio.label)}</h2><p>${esc(he.sections.portfolio.subtitle)}</p>${projectList(projects)}</section>` +
    `<section><h2>${esc(he.valueNeeds.title)}</h2><p>${esc(he.valueNeeds.subtitle)}</p>` +
    he.valueNeeds.items.map((i) => `<h3>${esc(i.title)}</h3><p>${esc(i.need)}</p><p>${esc(i.value)}</p>`).join("") +
    `</section><section><h2>${esc(he.sections.services.label)}</h2><p>${esc(he.sections.services.subtitle)}</p>` +
    he.services
      .map(
        (s) =>
          `<h3>${esc(s.title)}</h3><p>${esc(s.description)}</p><ul>${s.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>`
      )
      .join("") +
    `</section><section><h2>${esc(he.whyCustom.title)}</h2><p>${esc(he.whyCustom.subtitle)}</p>` +
    he.whyCustom.items.map((i) => `<h3>${esc(i.title)}</h3><p>${esc(i.description)}</p>`).join("") +
    `</section><section><h2>${esc(he.faq.title)}</h2>` +
    he.faq.items.map((i) => `<h3>${esc(i.q)}</h3><p>${esc(i.a)}</p>`).join("") +
    `</section></main>` +
    footer();

  return {
    file: "home.html",
    url: `${SITE}/`,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    body,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "WebSite", "@id": `${SITE}/#website`, url: `${SITE}/`, name: he.site.name, inLanguage: ["he", "en"] },
        business,
        ronen,
        {
          "@type": "FAQPage",
          mainEntity: he.faq.items.map((i) => ({
            "@type": "Question",
            name: i.q,
            acceptedAnswer: { "@type": "Answer", text: i.a },
          })),
        },
      ],
    },
  };
}

function aboutPage(projects: Project[]): Page {
  const body =
    header() +
    `<main><h1>${esc(he.site.name)}</h1><p>${esc(he.site.title)}</p><p>${esc(he.about.experience.trim())}</p>` +
    he.about.bio.map((p) => `<p>${esc(p)}</p>`).join("") +
    `<section><h2>${esc(he.sections.portfolio.label)}</h2>${projectList(projects)}</section></main>` +
    footer();

  return {
    file: "about.html",
    url: `${SITE}/about`,
    title: "אודות רונן כהן — מפתח Full Stack ו-AI Automation",
    description: `${he.about.bio[0]} ${he.about.bio[1]}`,
    body,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [{ "@type": "AboutPage", url: `${SITE}/about`, mainEntity: { "@id": ronen["@id"] } }, ronen, business],
    },
  };
}

function projectPage(project: Project, projects: Project[]): Page {
  const title = project.titleHe || project.title;
  const description = project.descriptionHe || project.description;
  const url = `${SITE}/projects/${project.slug}`;
  const others = projects.filter((p) => p.slug !== project.slug);
  const section = (heading: string, text?: string) => (text ? `<h2>${esc(heading)}</h2><p>${esc(text)}</p>` : "");

  const body =
    header() +
    `<main><p><a href="/#portfolio">${esc(he.portfolio.backToProjects)}</a></p>` +
    `<h1>${esc(title)}</h1>` +
    (project.industryHe || project.industry ? `<p>${esc(project.industryHe || project.industry)}</p>` : "") +
    `<p>${esc(description)}</p>` +
    (project.coverUrl ? `<img src="${esc(project.coverUrl)}" alt="${esc(title)}" loading="lazy">` : "") +
    section(he.portfolio.challenge, project.challengeHe || project.challenge) +
    section(he.portfolio.solution, project.solutionHe || project.solution) +
    section(he.portfolio.outcome, project.outcomeHe || project.outcome) +
    (project.demoUrl ? `<p><a href="${esc(project.demoUrl)}">${esc(he.portfolio.demo)}</a></p>` : "") +
    `<section><h2>פרויקטים נוספים</h2>${projectList(others)}</section></main>` +
    footer();

  return {
    file: `projects/${project.slug}.html`,
    url,
    title: `${title} | פרויקט של רונן כהן`,
    description,
    body,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CreativeWork",
          name: title,
          alternateName: project.title,
          description,
          url,
          inLanguage: "he",
          creator: { "@id": ronen["@id"] },
          ...(project.coverUrl ? { image: `${SITE}${project.coverUrl}` } : {}),
          ...(project.industryHe ? { genre: project.industryHe } : {}),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: he.nav.home, item: `${SITE}/` },
            { "@type": "ListItem", position: 2, name: he.nav.portfolio, item: `${SITE}/#portfolio` },
            { "@type": "ListItem", position: 3, name: title, item: url },
          ],
        },
        ronen,
      ],
    },
  };
}

function render(template: string, page: Page): string {
  if (!template.includes('<div id="root"></div>')) throw new Error("seo-prerender: #root not found in index.html");
  const head =
    `<meta name="description" content="${esc(page.description)}" />\n` +
    `    <link rel="canonical" href="${esc(page.url)}" />\n` +
    `    <meta property="og:type" content="website" />\n` +
    `    <meta property="og:locale" content="he_IL" />\n` +
    `    <meta property="og:site_name" content="${esc(he.site.name)}" />\n` +
    `    <meta property="og:title" content="${esc(page.title)}" />\n` +
    `    <meta property="og:description" content="${esc(page.description)}" />\n` +
    `    <meta property="og:url" content="${esc(page.url)}" />\n` +
    `    <style>${STATIC_CSS}</style>\n` +
    `    <script type="application/ld+json">${JSON.stringify(page.jsonLd).replace(/</g, "\\u003c")}</script>\n  `;

  return template
    .replace(/<html[^>]*>/, '<html lang="he" dir="rtl">')
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(page.title)}</title>`)
    .replace(/\s*<meta name="description"[^>]*>/, "")
    .replace(/\s*<meta property="og:[^>]*>/g, "")
    .replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/, "")
    .replace("</head>", `  ${head}</head>`)
    .replace('<div id="root"></div>', `<div id="root"><div class="seo-static">${page.body}</div></div>`);
}

function sitemap(pages: Page[]): string {
  const today = new Date().toISOString().slice(0, 10);
  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    pages.map((p) => `  <url><loc>${esc(p.url)}</loc><lastmod>${today}</lastmod></url>\n`).join("") +
    `</urlset>\n`
  );
}

function llmsTxt(projects: Project[]): string {
  const en = translations.en;
  return [
    `# ${he.site.name} (Ronen Cohen) — ${he.hero.headline}`,
    "",
    `> ${HOME_DESCRIPTION}`,
    "",
    `Ronen Cohen builds custom web systems, n8n automations, AI agents and integrations for small and mid-sized businesses ` +
      `in ${siteConfig.serviceAreas.map((a) => a.en).join(", ")} and remotely across Israel.`,
    "",
    `## ${he.sections.services.label}`,
    "",
    ...he.services.map((s) => `- **${s.title}** — ${s.description}`),
    "",
    `## ${he.sections.portfolio.label}`,
    "",
    ...projects.map((p) => `- [${p.titleHe || p.title}](${SITE}/projects/${p.slug}): ${p.descriptionHe || p.description}`),
    "",
    `## ${he.faq.title}`,
    "",
    ...he.faq.items.flatMap((i) => [`### ${i.q}`, "", i.a, ""]),
    `## ${en.faq.title}`,
    "",
    ...en.faq.items.flatMap((i) => [`### ${i.q}`, "", i.a, ""]),
    "## Contact",
    "",
    `- [${he.hero.ctaCall} / ${en.hero.ctaCall}](${SITE}/#contact)`,
    `- [${he.nav.about} / About](${SITE}/about)`,
    `- [LinkedIn](${siteConfig.linkedin})`,
    `- [GitHub](${siteConfig.github})`,
    "",
  ].join("\n");
}

export function seoPrerender(): Plugin {
  let config: ResolvedConfig;

  return {
    name: "seo-prerender",
    configResolved(resolved) {
      config = resolved;
    },
    closeBundle() {
      if (config.command !== "build") return;
      const outDir = path.resolve(config.root, config.build.outDir);
      const template = fs.readFileSync(path.join(outDir, "index.html"), "utf8");
      const projects = pickStoryProjects([]);
      const pages = [homePage(projects), aboutPage(projects), ...projects.map((p) => projectPage(p, projects))];

      for (const page of pages) {
        const file = path.join(outDir, PAGES_DIR, page.file);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, render(template, page));
      }
      fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemap(pages));
      fs.writeFileSync(path.join(outDir, "llms.txt"), llmsTxt(projects));
      config.logger.info(`seo-prerender: ${pages.length} pages, sitemap.xml, llms.txt`);
    },
    configurePreviewServer(server) {
      const pagesDir = path.resolve(server.config.root, server.config.build.outDir, PAGES_DIR);
      server.middlewares.use((req, res, next) => {
        if (req.method !== "GET" && req.method !== "HEAD") return next();
        const page = prerenderedPage(new URL(req.url ?? "/", "http://localhost").pathname);
        const file = page && path.join(pagesDir, page);
        if (!file || !fs.existsSync(file)) return next();
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(fs.readFileSync(file));
      });
    },
  };
}
