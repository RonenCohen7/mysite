import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { MongoClient } from "mongodb";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mysite";

const seedProjects = [
  {
    title: "See You Tomorrow — AI Workforce Scheduling",
    titleHe: "See You Tomorrow — שיבוץ כוח אדם עם AI",
    slug: "see-you-tomorrow",
    description:
      "Hybrid workforce platform that saves managers many hours: employees submit schedule requests, an AI agent resolves conflicts against manager rules, and everyone sees a transparent two-week board — office, outsourcing, vacation, or studies.",
    descriptionHe:
      "פלטפורמת כוח אדם היברידי שחוסכת למנהלים שעות רבות: עובדים מגישים בקשות שיבוץ, סוכן AI פותר התנגשויות מול חוקי המנהל, וכולם רואים לוח שקוף לשבועיים — משרד, מיקור חוץ, חופשה או לימודים.",
    challenge:
      "Managers were burning hours building schedules by hand and still couldn’t answer, at any moment for the next two weeks, where each employee was — outsourcing, vacation, or studies. Requests collided with coverage rules, and exceptions needed a clear final gate.",
    challengeHe:
      "מנהלים בזבזו שעות על שיבוץ ידני ועדיין לא יכלו לדעת בכל רגע, לשבועיים הקרובים, איפה כל עובד — במיקור חוץ, בחופשה או בלימודים. בקשות התנגשו עם חוקי כיסוי, וחריגים נזקקו לשער אישור סופי ברור.",
    solution:
      "Built a microservices stack (React, Node, MongoDB): employees submit preferences in advance; an AI scheduling agent checks all requests against manager-defined rules, auto-assigns when valid, and routes exceptions to the manager. The published schedule is transparent to the whole team. A permission-scoped help agent answers questions about anything already in the system.",
    solutionHe:
      "בניתי מערכת מיקרו־שירותים (React, Node, MongoDB): עובדים מגישים העדפות מראש; סוכן AI לשיבוץ בודק את כל הבקשות מול חוקים שהמנהל הגדיר, משבץ אוטומטית כשאין סתירה, ומעביר חריגים לאישור סופי של המנהל. השיבוץ שקוף לכולם. סוכן עזרה עונה על כל מה שקיים במערכת — בגבולות ההרשאות שניתנו לו.",
    outcome:
      "Scheduling that used to take hours becomes a rules-checked pipeline: managers always see the next two weeks of status, the team shares one transparent board, and only real exceptions need a final human decision.",
    outcomeHe:
      "שיבוץ שלקח שעות הופך לצינור עם בדיקת חוקים: המנהל תמיד רואה את הסטטוס לשבועיים הקרובים, הצוות חולק לוח שקוף אחד, ורק חריגים אמיתיים דורשים החלטה אנושית סופית.",
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
    techStack: [
      "React",
      "TypeScript",
      "MUI",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Socket.io",
      "OpenAI",
      "Docker",
    ],
    githubUrl: "https://github.com/RonenCohen7/see-you-tomorrow",
    featured: true,
    published: true,
    order: 2,
    images: [],
  },
  {
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
    featured: true,
    published: true,
    order: 1,
    images: [],
  },
  {
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
    featured: true,
    published: true,
    order: 3,
    images: [],
  },
  {
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
    featured: true,
    published: true,
    order: 4,
    images: [],
  },
  {
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
    featured: true,
    published: true,
    order: 0,
    images: [],
  },
];

async function seed() {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  const db = client.db();

  const force = process.argv.includes("--force") || process.env.FORCE_SEED === "1";
  const existing = await db.collection("projects").countDocuments();

  if (existing > 0 && !force) {
    console.log(`[seed] ${existing} projects already exist. Re-run with --force to replace with real case studies.`);
    await client.close();
    return;
  }

  if (existing > 0 && force) {
    await db.collection("projects").deleteMany({});
    console.log(`[seed] Cleared ${existing} existing projects.`);
  }

  const now = new Date();
  const docs = seedProjects.map((p) => ({ ...p, createdAt: now, updatedAt: now }));
  await db.collection("projects").insertMany(docs);
  console.log(`[seed] Inserted ${docs.length} real case studies.`);
  console.log("[seed] Manage projects at /ronen");

  await client.close();
}

seed().catch((err) => {
  console.error("[seed] failed:", err);
  process.exit(1);
});
