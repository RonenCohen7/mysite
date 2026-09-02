import type { Project } from "@mysite/shared";

/** Real portfolio case studies only — no invented demos. */
export const fallbackCaseStudies: Project[] = [
  {
    _id: "case-see-you-tomorrow",
    title: "See You Tomorrow — Workforce Scheduling",
    titleHe: "See You Tomorrow — מערכת לתכנון וניהול שיבוץ עובדים",
    slug: "see-you-tomorrow",
    description:
      "A system for planning and managing employee scheduling. The challenge was never this simple.",
    descriptionHe:
      "מערכת לתכנון וניהול שיבוץ עובדים. האתגר מעולם לא היה פשוט וקל כל כך.",
    challenge:
      "Scheduling a large workforce while maximizing both employee preferences and client requirements. Getting everyone aligned takes many hours and constant changes — until it's exhausting.",
    challengeHe:
      "ניהול שיבוץ של כמות עובדים גדולה, שמאפשר התחשבות מקסימלית ברצון העובד ובהתחשבות בדרישות הלקוחות. יצירת תיאום מקסימלי דורשת שעות רבות והמון שינויים עד כדי התשה.",
    solution:
      "A management system with AI agents: employees submit their schedule two weeks ahead. The system consolidates everyone's data and assigns according to management requirements; if needed, the agent escalates to the manager for final approval.",
    solutionHe:
      "מערכת ניהול בשילוב סוכני AI שמאפשרת לעובד לשלוח את השיבוץ שלו שבועיים מראש. המערכת מתכללת את הנתונים של כולם ומשבצת לפי דרישות ההנהלה — ובמקרה הצורך הסוכן מעלה לאישור מנהל סופי.",
    outcome:
      "The schedule is then published on a shared calendar for everyone. It just works — beautifully.",
    outcomeHe:
      "לאחר מכן השיבוץ מופץ בלוח שנה לכולם. פשוט עובד מדהים.",
    industry: "Workforce / Hybrid Office",
    industryHe: "כוח אדם / משרד היברידי",
    clientName: "See You Tomorrow",
    coverUrl: "/projects/see-you-tomorrow/manager-board.jpg",
    galleryUrls: [
      "/projects/see-you-tomorrow/manager-board.jpg",
      "/projects/see-you-tomorrow/ai-queue.jpg",
      "/projects/see-you-tomorrow/employee-requests.jpg",
      "/projects/see-you-tomorrow/help-agent.jpg",
    ],
    techStack: [],
    githubUrl: "https://github.com/RonenCohen7/see-you-tomorrow",
    images: [],
    featured: true,
    published: true,
    order: 2,
    createdAt: new Date(0).toISOString(),
    updatedAt: new Date(0).toISOString(),
  },
  {
    _id: "case-tmore-talent-pool",
    title: "T.MORE Talent Pool for Freelancers",
    titleHe: "מאגר טאלנטים — פרילנסרים עבור T.MORE",
    slug: "tmore-talent-pool",
    description:
      "A dynamic professional pool of content experts for T.MORE — filter by specialty, location, availability, and price.",
    descriptionHe:
      "מאגר דינמי ומקצועי של מומחי תוכן עבור T.MORE — עם מסננים לפי התמחות מקצועית, מיקום, זמינות ומחיר.",
    challenge:
      "The company needed a system to manage a dynamic, professional pool of content experts, and to grow collaboration through filters on relevant topics such as specialty, location, availability, and price.",
    challengeHe:
      "מערכת שמאפשרת לחברה לנהל מאגר דינמי ומקצועי של מומחי תוכן. המערכת מאפשרת הגדלת שיתוף פעולה על ידי יצירת מסננים לפי נושאים רלוונטיים כגון: התמחות מקצועית, מיקום, זמינות ומחיר.",
    solution:
      "A simple, fast registration system that gathers all information into one database, so the client can grow business collaboration with talents by pulling the right information quickly, easily, and conveniently.",
    solutionHe:
      "מערכת רישום פשוטה ומהירה שמאגדת למאגר נתונים אחד את כלל המידע, ומאפשרת ללקוח להגדיל את שיתוף הפעולה העסקי עם הטאלנטים על ידי מיצוי המידע בצורה מהירה, קלה ונוחה.",
    outcome:
      "One talent pool, filtered by specialty, location, availability, and price — so matching and collaboration with freelancers is fast, easy, and convenient.",
    outcomeHe:
      "מאגר אחד, מסונן לפי התמחות מקצועית, מיקום, זמינות ומחיר — כך שיתוף הפעולה עם הטאלנטים נהיה מהיר, קל ונוח.",
    industry: "Learning / Talent Marketplace",
    industryHe: "למידה / מאגר טאלנטים",
    clientName: "T.MORE",
    coverUrl: "/projects/tmore/admin-search.jpg",
    galleryUrls: [
      "/projects/tmore/admin-search.jpg",
      "/projects/tmore/landing.jpg",
      "/projects/tmore/register.jpg",
    ],
    techStack: [],
    githubUrl: "https://github.com/RonenCohen7/t.more-landig-page",
    demoUrl: "https://www.t-more.co.il/",
    images: [],
    featured: true,
    published: true,
    order: 1,
    createdAt: new Date(0).toISOString(),
    updatedAt: new Date(0).toISOString(),
  },
  {
    _id: "case-vacation-abroad",
    title: "Vacation Abroad — Overseas Trip Catalog",
    titleHe: "Vacation Abroad — קטלוג חופשות בחול",
    slug: "vacation-abroad",
    description:
      "Overseas vacation catalog with per-trip weather forecast and an AI agent that recommends art tours, local food, and activities for the destination.",
    descriptionHe:
      "קטלוג חופשות בחול עם חיזוי מזג אוויר לפי תאריכי החופשה, וסוכן AI שממליץ על סיורי אומנות, אוכל ובילויים בהתאם ליעד.",
    challenge:
      "Browsing overseas vacations wasn’t enough — travelers also needed the expected weather for those exact trip dates, plus local ideas for art, food, and nightlife without searching ten different sites.",
    challengeHe:
      "רק לראות חופשות בחול לא הספיק — היה צריך גם חיזוי מזג אוויר צפוי לפי תאריכי החופשה, והמלצות מקומיות לאומנות, אוכל ובילויים בלי לחפש בעשרה אתרים.",
    solution:
      "Built a microservices vacation app (React, Node, Docker): each trip shows a destination weather forecast filtered to the package dates, and an AI recommendation agent returns cultural places, local food, and adventure/activities for that vacation destination.",
    solutionHe:
      "בניתי אפליקציית חופשות במיקרו־שירותים (React, Node, Docker): בכל חופשה מוצג חיזוי מזג אוויר ליעד מסונן לתאריכי החבילה, וסוכן AI מחזיר המלצות לסיורי אומנות/תרבות, אוכל מקומי ובילויים לפי יעד החופשה.",
    outcome:
      "Users pick a trip, see the expected weather for that vacation window, and get AI-curated local recommendations for art, food, and more — all inside the same product.",
    outcomeHe:
      "המשתמש בוחר חופשה, רואה את מזג האוויר הצפוי לאותם תאריכים, ומקבל מהסוכן המלצות מקומיות לאומנות, אוכל ובילויים — בתוך אותו מוצר.",
    industry: "Travel / Vacations",
    industryHe: "תיירות / חופשות",
    clientName: "Vacation Project",
    coverUrl: "/projects/vacation/catalog.jpg",
    galleryUrls: [
      "/projects/vacation/catalog.jpg",
      "/projects/vacation/weather.jpg",
      "/projects/vacation/ai-recommend.jpg",
      "/projects/vacation/details.jpg",
      "/projects/vacation/home.jpg",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Redux",
      "Node.js",
      "Express",
      "MySQL",
      "MongoDB",
      "Docker",
      "OpenAI",
      "Weather API",
    ],
    githubUrl: "https://github.com/RonenCohen7/vecationProject2",
    images: [],
    featured: true,
    published: true,
    order: 3,
    createdAt: new Date(0).toISOString(),
    updatedAt: new Date(0).toISOString(),
  },
  {
    _id: "case-lowproject-court-rag",
    title: "Court Judgments Scraping + RAG Search",
    titleHe: "איסוף פסקי דין + חיפוש RAG",
    slug: "lowproject-court-judgments",
    description:
      "Legal intelligence system for attorneys: scraping agents collect Israeli court judgments, the corpus becomes a RAG index, and search agents return relevant rulings for the query — without expensive, complex access.",
    descriptionHe:
      "מערכת מידע משפטי לעורכי דין: סוכני scraping אוספים פסקי דין מבתי המשפט, מהמאגר נבנה RAG, וסוכני חיפוש מוצאים פסק דין רלוונטי לפי השאילתה ומציגים את המידע — בלי גישה יקרה ומורכבת מדי.",
    challenge:
      "An attorney needed legal information to represent clients, but access to judgments today is too expensive and too complex for day-to-day research.",
    challengeHe:
      "עורך דין פנה בחיפוש אחר מידע משפטי לייצוג לקוחות — אבל הנגישות לפסקי דין כיום יקרה ומורכבת מדי לעבודת מחקר שוטפת.",
    solution:
      "Built a Python pipeline with scraping agents on court.gov.il (metadata → download → JSON → MongoDB), turned the corpus into a RAG knowledge base, and added agents that retrieve and present relevant judgments for a given search.",
    solutionHe:
      "בניתי צינור Python עם סוכני scraping על court.gov.il (מטא־דאטה → הורדה → JSON → MongoDB), יצרתי מהמידע RAG, והוספתי סוכנים שמוצאים פסק דין רלוונטי לפי חיפוש ומציגים את המידע.",
    outcome:
      "The lawyer searches in plain language and gets relevant court rulings with cited excerpts from a locally owned corpus — instead of fighting costly, hard-to-use legal portals.",
    outcomeHe:
      "עורך הדין מחפש בשפה חופשית ומקבל פסקי דין רלוונטיים עם קטעים מצוטטים ממאגר שבבעלותו — במקום להיאבק בפורטלים משפטיים יקרים ומסורבלים.",
    industry: "LegalTech / Research",
    industryHe: "משפט / מחקר משפטי",
    clientName: "עורכי דין — מחקר פסקי דין",
    coverUrl: "/projects/lowproject/rag-search.jpg",
    galleryUrls: [
      "/projects/lowproject/rag-search.jpg",
      "/projects/lowproject/admin-pipeline.jpg",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "Selenium",
      "MongoDB",
      "RAG",
      "OpenAI",
      "Pydantic",
    ],
    githubUrl: "https://github.com/RonenCohen7/LowProject",
    images: [],
    featured: true,
    published: true,
    order: 4,
    createdAt: new Date(0).toISOString(),
    updatedAt: new Date(0).toISOString(),
  },
  {
    _id: "case-hamasgeria-hadar",
    title: "Pub Management System",
    titleHe: "מערכת לניהול פאב",
    slug: "hamasgeria-hadar-pub",
    description:
      "A practical pub inventory system that replaces stacks of Excel files with live control over stock, orders, and receiving goods.",
    descriptionHe:
      "מערכת יישומית לניהול מלאי בפאב — מחליפה כמויות של קבצי אקסל בשליטה אונליין על מלאי, הזמנות וקבלת סחורה.",
    challenge:
      "A practical solution was needed to replace stacks of Excel files that required close tracking and many work hours every month.",
    challengeHe:
      "מציאת פתרון יישומי שמחליף כמויות של קבצי אקסל, שדורשים מעקב צמוד והמון שעות עבודה בחודש.",
    solution:
      "A system that's simple to use and gives complete control over inventory management — saving many work hours and cutting inventory costs, including supplier orders and receiving goods.",
    solutionHe:
      "מערכת שמאפשרת פשטות בשימוש ומייצרת שליטה מוחלטת בניהול המלאי. חיסכון בשעות עבודה רבות וחיסכון בהוצאות ניהול המלאי — לרבות הזמנות וקבלת הסחורה.",
    outcome:
      "Online information for every product sold, at any moment, with current stock and minimum-stock levels ready for a supplier order. Reports online — not only after a physical count. Full sync for complete management control.",
    outcomeHe:
      "קבלת מידע אונליין עבור כל מוצר שנמכר, בכל רגע, תוך עדכון מלאי קיים ומלאי מינימום להכנת הזמנה מהספק. הפקת דוחות אונליין — ולא רק לאחר ספירת מלאי. סנכרון מלא לשליטה מלאה של ההנהלה.",
    industry: "Hospitality / Pub",
    industryHe: "מסעדנות / פאב",
    clientName: "פאב",
    coverUrl: "/projects/hamasgeria/events-home.jpg",
    galleryUrls: [
      "/projects/hamasgeria/events-home.jpg",
      "/projects/hamasgeria/products-page.jpg",
      "/projects/hamasgeria/dashboard.jpg",
      "/projects/hamasgeria/vip-sale.jpg",
      "/projects/hamasgeria/vip-transactions.jpg",
      "/projects/hamasgeria/vip-customer-dashboard.jpg",
      "/projects/hamasgeria/vip-chef.jpg",
      "/projects/hamasgeria/chef-pizza.jpg",
      "/projects/hamasgeria/cocktail-2.jpg",
      "/projects/hamasgeria/cocktail-1.jpg",
      "/projects/hamasgeria/cocktail-blue.jpg",
      "/projects/hamasgeria/pub-drinks.jpg",
      "/projects/hamasgeria/exp-aaffd62f.jpg",
    ],
    techStack: [],
    demoUrl: "https://hamasgeria.com/",
    githubUrl: "https://github.com/RonenCohen7/hamasgeriaHadar",
    images: [],
    featured: true,
    published: true,
    order: 0,
    createdAt: new Date(0).toISOString(),
    updatedAt: new Date(0).toISOString(),
  },
];

const IGNORED_DEMO_SLUGS = new Set([
  "clinic-appointment-automation",
  "inventory-sync-online-store",
  "lead-followup-service-business",
  "ai-automation-platform",
  "crm-integration-system",
  "business-process-automation",
  "analytics-dashboard",
  "react-enterprise-application",
  "python-backend-system",
]);

/** Fixed public portfolio order — do not rely on array declaration order. */
const PORTFOLIO_SLUG_ORDER = [
  "hamasgeria-hadar-pub",
  "tmore-talent-pool",
  "see-you-tomorrow",
  "vacation-abroad",
  "lowproject-court-judgments",
] as const;

function portfolioRank(slug: string, order = 999): number {
  const i = (PORTFOLIO_SLUG_ORDER as readonly string[]).indexOf(slug);
  return i === -1 ? 1000 + order : i;
}

export function pickStoryProjects(apiProjects: Project[]): Project[] {
  const sortProjects = (list: Project[]) =>
    [...list].sort((a, b) => portfolioRank(a.slug, a.order) - portfolioRank(b.slug, b.order));

  const realFromApi = apiProjects.filter(
    (p) =>
      !IGNORED_DEMO_SLUGS.has(p.slug) &&
      Boolean(p.challenge || p.coverUrl || (p.galleryUrls && p.galleryUrls.length))
  );

  if (realFromApi.length === 0) return sortProjects(fallbackCaseStudies);

  const bySlug = new Map(fallbackCaseStudies.map((p) => [p.slug, p]));
  for (const p of realFromApi) {
    const base = bySlug.get(p.slug);
    if (!base) {
      bySlug.set(p.slug, p);
      continue;
    }
    const galleryUrls =
      (p.galleryUrls?.length || 0) >= (base.galleryUrls?.length || 0)
        ? p.galleryUrls
        : base.galleryUrls;
    bySlug.set(p.slug, {
      ...base,
      ...p,
      title: base.title || p.title,
      titleHe: base.titleHe || p.titleHe,
      description: base.description || p.description,
      descriptionHe: base.descriptionHe || p.descriptionHe,
      challenge: base.challenge || p.challenge,
      challengeHe: base.challengeHe || p.challengeHe,
      solution: base.solution || p.solution,
      solutionHe: base.solutionHe || p.solutionHe,
      outcome: base.outcome || p.outcome,
      outcomeHe: base.outcomeHe || p.outcomeHe,
      // Curated portfolio copy, live URL, and visuals win over stale API data.
      coverUrl: base.coverUrl || p.coverUrl,
      galleryUrls: base.galleryUrls?.length ? base.galleryUrls : galleryUrls,
      techStack: base.techStack,
      demoUrl: base.demoUrl || p.demoUrl,
      githubUrl: p.githubUrl || base.githubUrl,
      order: base.order,
    });
  }
  return sortProjects(Array.from(bySlug.values()));
}

export function findStoryProjectBySlug(slug: string, apiProjects: Project[] = []): Project | undefined {
  return pickStoryProjects(apiProjects).find((p) => p.slug === slug);
}

export function getProjectGallery(project: Project, mediaUrl?: (fileId: string) => string): string[] {
  const uploaded = (project.images || []).map((img) => (mediaUrl ? mediaUrl(img.fileId) : img.fileId));
  const gallery = [...(project.galleryUrls || []), ...uploaded].filter(Boolean);
  if (project.coverUrl && !gallery.includes(project.coverUrl)) {
    gallery.unshift(project.coverUrl);
  }
  return gallery;
}
