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
    order: 0,
    images: [],
  },
  {
    title: "T.MORE Freelancer Talent Pool",
    titleHe: "מאגר טאלנטים לפרילנסרים — T.MORE",
    slug: "tmore-talent-pool",
    description:
      "Structured talent pool for freelancers who want to partner with T.MORE: register once, filter by specialty, and match professional need to freelancer expertise — instead of CVs arriving by email or chat.",
    descriptionHe:
      "מאגר טאלנטים מסודר לפרילנסרים שרוצים להרחיב שותפויות עם T.MORE: נרשמים פעם אחת, מסננים לפי מקצועיות, ומתאימים בין הצורך המקצועי להתמחות — במקום קורות חיים שמגיעים במייל או בהודעה.",
    challenge:
      "Freelancers who wanted to present themselves and grow partnerships with T.MORE were contacting the company and sending CVs by email or message. There was no structured pool to filter by specialty or match a project need to the right professional.",
    challengeHe:
      "פרילנסרים שרצו להציג את עצמם ולהרחיב שותפויות עם T.MORE היו פונים לחברה ושולחים קורות חיים במייל או בהודעה. לא היה מאגר מסודר לסינון לפי מקצועיות או להתאמה בין צורך מקצועי להתמחות הנכונה.",
    solution:
      "Built a Next.js + MongoDB landing and registration flow (5-step wizard) so freelancers join a shared pool with specialty, CV, and certificates. An admin search filters by professionalism and supports Hebrew/English matching between project need and freelancer expertise.",
    solutionHe:
      "בניתי דף נחיתה ורישום ב־Next.js + MongoDB (אשף 5 שלבים) שבו פרילנסרים נכנסים למאגר משותף עם התמחות, קורות חיים ותעודות. ממשק אדמין מאפשר חיפוש וסינון לפי מקצועיות והתאמה בעברית/אנגלית בין הצורך המקצועי לבין הפרילנסר.",
    outcome:
      "T.MORE works from one searchable talent pool: filter by specialty, find the right match faster, and freelancers present themselves once instead of chasing inboxes.",
    outcomeHe:
      "T.MORE עובדת ממקום אחד: מאגר שניתן לסנן לפי מקצועיות, למצוא התאמה מהר יותר, והפרילנסרים מציגים את עצמם פעם אחת במקום לרדוף אחרי תיבות דואר.",
    industry: "Learning / Talent Marketplace",
    industryHe: "למידה / מאגר טאלנטים",
    clientName: "T.MORE",
    coverUrl: "/projects/tmore/admin-search.jpg",
    galleryUrls: [
      "/projects/tmore/admin-search.jpg",
      "/projects/tmore/landing.jpg",
      "/projects/tmore/register.jpg",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "MongoDB",
      "Mongoose",
      "Zod",
      "Docker",
    ],
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
    order: 2,
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
    order: 3,
    images: [],
  },
  {
    title: "Hadar Pub Management System",
    titleHe: "מערכת ניהול לפאב המסגריה — הדר",
    slug: "hamasgeria-hadar-pub",
    description:
      "Full pub platform: inventory, event tickets, and a VIP club with exclusive chef dishes, cocktails, prepaid cards, and a customer portal for transaction history.",
    descriptionHe:
      "פלטפורמה מלאה לפאב: מלאי, כרטיסים להופעות, ומועדון VIP עם מנות שף וקוקטיילים בלעדיים, כרטיסים נטענים, ופורטל לקוח להיסטוריית עסקאות.",
    challenge:
      "The pub needed one system for stock and suppliers, ticket sales for shows, and — most importantly — a VIP club: exclusive chef specials and cocktails for members only, prepaid cards, and a customer login to see every load and charge on the card.",
    challengeHe:
      "הפאב היה צריך מערכת אחת למלאי ולספקים, מכירת כרטיסים להופעות, ובעיקר מועדון VIP: מנות שף וקוקטיילים בלעדיים לחברים בלבד, כרטיסים נטענים, וכניסת לקוח לצפייה בכל טעינה וחיוב בכרטיס.",
    solution:
      "Built React + Node + MySQL end-to-end: inventory & suppliers, events with regular/VIP ticket prices, VIP cards (bronze/silver/gold) with POS charge/recharge, a customer VIP dashboard with chef dishes and exclusive cocktails, and a full transactions page for loads and payments.",
    solutionHe:
      "בניתי מקצה לקצה ב-React + Node + MySQL: מלאי וספקים, אירועים עם מחיר כרטיס רגיל/VIP, כרטיסי VIP (ארד/כסף/זהב) עם חיוב/טעינה בקופה, דשבורד לקוח VIP עם מנות שף וקוקטיילים בלעדיים, ומסך עסקאות מלא לטעינות ולחיובים.",
    outcome:
      "Staff manage stock and sell with VIP Card at the bar; members log in to see exclusive menu perks and their full card history — loads, charges, and balance.",
    outcomeHe:
      "הצוות מנהל מלאי ומוכר עם כרטיס VIP בבר; החברים נכנסים לפורטל, רואים הטבות ומנות בלעדיות, ואת כל היסטוריית הכרטיס — טעינות, חיובים ויתרה.",
    industry: "Hospitality / Pub",
    industryHe: "מסעדנות / פאב",
    clientName: "המסגריה — הדר",
    coverUrl: "/projects/hamasgeria/vip-customer-dashboard.jpg",
    galleryUrls: [
      "/projects/hamasgeria/vip-customer-dashboard.jpg",
      "/projects/hamasgeria/products-page.jpg",
      "/projects/hamasgeria/events-home.jpg",
      "/projects/hamasgeria/vip-chef.jpg",
      "/projects/hamasgeria/exp-aaffd62f.jpg",
      "/projects/hamasgeria/chef-pizza.jpg",
      "/projects/hamasgeria/cocktail-2.jpg",
      "/projects/hamasgeria/cocktail-1.jpg",
      "/projects/hamasgeria/cocktail-blue.jpg",
      "/projects/hamasgeria/pub-drinks.jpg",
      "/projects/hamasgeria/vip-transactions.jpg",
      "/projects/hamasgeria/vip-sale.jpg",
      "/projects/hamasgeria/dashboard.jpg",
    ],
    techStack: ["React", "TypeScript", "Node.js", "Express", "MySQL", "Socket.io", "Redux"],
    githubUrl: "https://github.com/RonenCohen7/hamasgeriaHadar",
    featured: true,
    published: true,
    order: 4,
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
