import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { MongoClient } from "mongodb";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mysite";

const seedProjects = [
  {
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
    titleHe: "Vacation Abroad — קטלוג חופשות בחו״ל",
    slug: "vacation-abroad",
    description:
      "An overseas vacation catalog with weather for the trip dates, and local recommendations for art, food, and activities.",
    descriptionHe:
      "קטלוג חופשות בחו״ל עם מזג אוויר לפי תאריכי החופשה, והמלצות לאומנות, אוכל ובילויים לפי היעד.",
    challenge:
      "Seeing overseas vacations wasn’t enough. Travelers also needed the expected weather for those exact dates, and local ideas for art, food, and nightlife — without searching ten different sites.",
    challengeHe:
      "רק לראות חופשות בחו״ל לא הספיק. היה צריך גם לדעת איך יהיה מזג האוויר בתאריכי החופשה, ולקבל המלצות מקומיות לאומנות, אוכל ובילויים — בלי לחפש בעשרה אתרים.",
    solution:
      "A catalog where every trip shows the expected weather for those dates, and returns recommendations for art tours, local food, and activities at the destination.",
    solutionHe:
      "מערכת קטלוג שבה כל חופשה מציגה את מזג האוויר הצפוי ליעד באותם תאריכים, ומחזירה המלצות לסיורי אומנות, אוכל מקומי ובילויים.",
    outcome:
      "The user picks a vacation, sees the weather for those days, and gets local recommendations — all in one place.",
    outcomeHe:
      "המשתמש בוחר חופשה, רואה את מזג האוויר לאותם ימים, ומקבל המלצות מקומיות — הכול במקום אחד.",
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
    techStack: [],
    githubUrl: "https://github.com/RonenCohen7/vecationProject2",
    featured: true,
    published: true,
    order: 3,
    images: [],
  },
  {
    title: "Court Judgments Search System",
    titleHe: "מערכת לחיפוש פסקי דין",
    slug: "lowproject-court-judgments",
    description:
      "A legal information system for attorneys — a judgments library with simple search, without expensive or complicated access.",
    descriptionHe:
      "מערכת מידע משפטי לעורכי דין — מאגר פסקי דין וחיפוש פשוט, בלי גישה יקרה ומסורבלת.",
    challenge:
      "An attorney needed legal information to represent clients, but access to court judgments today is too expensive and too complicated for day-to-day research.",
    challengeHe:
      "עורך דין נזקק למידע משפטי לייצוג לקוחות — אבל הגישה לפסקי דין כיום יקרה ומורכבת מדי לעבודת מחקר שוטפת.",
    solution:
      "A system that gathers court judgments into one library, and lets the lawyer search in plain language to find the relevant ruling with the important excerpts.",
    solutionHe:
      "מערכת שאוספת פסקי דין מבתי המשפט למאגר אחד, ומאפשרת לחפש בשפה פשוטה ולקבל את הפסק הרלוונטי יחד עם הקטעים החשובים.",
    outcome:
      "The lawyer searches freely and gets relevant judgments from a library they control — instead of fighting expensive, cumbersome legal sites.",
    outcomeHe:
      "עורך הדין מחפש חופשי ומקבל פסקי דין רלוונטיים ממאגר שבשליטתו — במקום להיאבק באתרים יקרים ומסורבלים.",
    industry: "LegalTech / Research",
    industryHe: "משפט / מחקר משפטי",
    clientName: "עורכי דין — מחקר פסקי דין",
    coverUrl: "/projects/lowproject/rag-search.jpg",
    galleryUrls: [
      "/projects/lowproject/rag-search.jpg",
      "/projects/lowproject/admin-pipeline.jpg",
    ],
    techStack: [],
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
