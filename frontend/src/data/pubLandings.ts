export type PubLandingId = "excel" | "stock" | "reports";

export interface PubLandingCopy {
  id: PubLandingId;
  path: string;
  adAngle: string;
  eyebrow: { en: string; he: string };
  headline: { en: string; he: string };
  punch: { en: string; he: string };
  image: string;
  imageCaption: { en: string; he: string };
  painTitle: { en: string; he: string };
  pain: { en: string; he: string }[];
  offerTitle: { en: string; he: string };
  offer: { en: string; he: string }[];
  proof: { en: string; he: string };
  cta: { en: string; he: string };
  formNote: { en: string; he: string };
  leadTag: string;
}

export const pubLandings: PubLandingCopy[] = [
  {
    id: "excel",
    path: "/lp/pub/excel",
    adAngle: "זמן במקום אקסל",
    eyebrow: { en: "Pub inventory system", he: "מערכת לניהול מלאי בפאב" },
    headline: {
      en: "Enough Excel files. Let inventory work for you.",
      he: "די לקבצי אקסל. תנו למלאי לעבוד בשבילכם.",
    },
    punch: {
      en: "Close tracking across dozens of spreadsheets eats hours every month. One simple system replaces the chase — and gives the team their evenings back.",
      he: "מעקב צמוד על עשרות קבצים גוזל שעות בכל חודש. מערכת אחת, פשוטה לשימוש, מחליפה את הרדיפה אחרי טבלאות — ומחזירה לצוות את הערב.",
    },
    image: "/projects/hamasgeria/products-page.jpg",
    imageCaption: {
      en: "Products and stock in one place — not in a pile of files.",
      he: "מוצרים ומלאי במקום אחד — לא בערימת קבצים.",
    },
    painTitle: { en: "What this costs you today", he: "מה זה עולה לכם היום" },
    pain: [
      {
        en: "Files scattered between shifts, with no single source of truth.",
        he: "קבצים שמתפזרים בין משמרות, בלי מקור אחד אמין.",
      },
      {
        en: "Copy-paste mistakes that show up as missing bottles or surprise orders.",
        he: "טעויות העתקה שמתגלות כבקבוק חסר או הזמנה מיותרת.",
      },
      {
        en: "Hours of tracking instead of hours with guests.",
        he: "שעות על מעקב במקום שעות עם האורחים.",
      },
    ],
    offerTitle: { en: "What you get", he: "מה מקבלים" },
    offer: [
      {
        en: "A system the staff can actually use — no training marathon.",
        he: "מערכת שהצוות באמת מצליח להשתמש בה — בלי קורס של שבוע.",
      },
      {
        en: "Complete control of inventory, including orders and receiving goods.",
        he: "שליטה מלאה במלאי — כולל הזמנות וקבלת סחורה.",
      },
      {
        en: "Real hours saved every month, and fewer avoidable costs.",
        he: "חיסכון אמיתי בשעות כל חודש, ופחות הוצאות מיותרות.",
      },
    ],
    proof: {
      en: "Already running in a real pub — not a demo slide.",
      he: "כבר רצה בפאב אמיתי — לא במצגת.",
    },
    cta: { en: "Talk to me about your inventory", he: "דברו איתי על המלאי שלכם" },
    formNote: {
      en: "Leave a number. I’ll get back to you personally.",
      he: "השאירו מספר. אחזור אליכם אישית.",
    },
    leadTag: "דף נחיתה — די לאקסל",
  },
  {
    id: "stock",
    path: "/lp/pub/stock",
    adAngle: "מלאי חי",
    eyebrow: { en: "Live inventory for the bar", he: "מלאי חי לבר ולמחסן" },
    headline: {
      en: "Every product sold — stock updates now.",
      he: "כל מוצר שנמכר — המלאי מתעדכן עכשיו.",
    },
    punch: {
      en: "No waiting for a count. See what left the shelf, what remains, and what to order from the supplier — while the evening is still running.",
      he: "לא לחכות לספירה. לדעת מה ירד מהמדף, מה נשאר, ומה צריך להזמין מהספק — בזמן שהערב עדיין רץ.",
    },
    image: "/projects/hamasgeria/dashboard.jpg",
    imageCaption: {
      en: "A live board: products, suppliers, and stock in one view.",
      he: "לוח חי: מוצרים, ספקים ומלאי במבט אחד.",
    },
    painTitle: { en: "What happens without live stock", he: "מה קורה בלי מלאי חי" },
    pain: [
      {
        en: "A bottle runs out in the middle of a rush.",
        he: "נגמר בקבוק באמצע הלחץ.",
      },
      {
        en: "You order extra “just in case” — and cash sits on the shelf.",
        he: "מזמינים עודף \"ליתר ביטחון\" — והכסף יושב על המדף.",
      },
      {
        en: "Nobody can answer, right now, what is actually in stock.",
        he: "אף אחד לא יודע לענות, ברגע הזה, מה באמת יש במלאי.",
      },
    ],
    offerTitle: { en: "What you get", he: "מה מקבלים" },
    offer: [
      {
        en: "Live information on every product the moment it sells.",
        he: "מידע חי על כל מוצר ברגע שהוא נמכר.",
      },
      {
        en: "Current stock and a minimum level — ready for a supplier order.",
        he: "מלאי קיים ומלאי מינימום — מוכן להזמנה מהספק.",
      },
      {
        en: "Receiving goods that updates the same numbers the bar already uses.",
        he: "קבלת סחורה שמעדכנת את אותם מספרים שהבר כבר עובד איתם.",
      },
    ],
    proof: {
      en: "Built around how a pub actually sells — drink by drink.",
      he: "נבנתה סביב איך פאב באמת מוכר — משקה אחרי משקה.",
    },
    cta: { en: "I want live stock in the business", he: "רוצים מלאי חי בעסק" },
    formNote: {
      en: "A short conversation. We’ll see if it fits your bar.",
      he: "שיחה קצרה. נבדוק אם זה מתאים לבר שלכם.",
    },
    leadTag: "דף נחיתה — מלאי חי",
  },
  {
    id: "reports",
    path: "/lp/pub/reports",
    adAngle: "שליטת הנהלה",
    eyebrow: { en: "Full control for management", he: "שליטה מלאה להנהלה" },
    headline: {
      en: "Reports without waiting for a stock count.",
      he: "דוחות בלי לחכות לספירת מלאי.",
    },
    punch: {
      en: "Owners see a full picture online. Full sync, full control — not once a month after a count.",
      he: "ההנהלה רואה תמונה מלאה אונליין. סנכרון מלא, שליטה מלאה — לא פעם בחודש אחרי ספירה.",
    },
    image: "/projects/hamasgeria/dashboard.jpg",
    imageCaption: {
      en: "The control board — so decisions are based on numbers, not a feeling.",
      he: "לוח הבקרה — כדי להחליט לפי מספרים, לא לפי תחושה.",
    },
    painTitle: { en: "What management is missing", he: "מה חסר להנהלה היום" },
    pain: [
      {
        en: "Decisions wait for a count that always comes too late.",
        he: "החלטות מחכות לספירה שתמיד מגיעה מאוחר.",
      },
      {
        en: "The bar and the office don’t share the same numbers.",
        he: "הבר והמשרד לא חיים על אותם מספרים.",
      },
      {
        en: "You can’t see the business unless you’re standing in it.",
        he: "אי אפשר לראות את העסק בלי לעמוד בתוכו.",
      },
    ],
    offerTitle: { en: "What you get", he: "מה מקבלים" },
    offer: [
      {
        en: "Online reports at any moment — not only after a physical count.",
        he: "דוחות אונליין בכל רגע — לא רק אחרי ספירה פיזית.",
      },
      {
        en: "Full sync so management has one clear picture.",
        he: "סנכרון מלא — תמונה אחת ברורה להנהלה.",
      },
      {
        en: "Control of inventory without living inside Excel.",
        he: "שליטה במלאי בלי לחיות בתוך אקסל.",
      },
    ],
    proof: {
      en: "Made for owners who want the numbers — without the headache.",
      he: "עבור בעלים שרוצים את המספרים — בלי כאב הראש.",
    },
    cta: { en: "Get control of the inventory", he: "לקבל שליטה על המלאי" },
    formNote: {
      en: "Tell me the name of the place. I’ll come back with a clear next step.",
      he: "כתבו את שם המקום. אחזור עם צעד ברור להמשך.",
    },
    leadTag: "דף נחיתה — דוחות להנהלה",
  },
];

export function getPubLanding(id: string | undefined): PubLandingCopy | undefined {
  return pubLandings.find((page) => page.id === id);
}
