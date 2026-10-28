type Caption = { en: string; he: string };

const captionsByFile: Record<string, Record<string, Caption>> = {
  "ronen-ai-agents": {
    "home.jpg": {
      en: "Your team keeps working when you are away — agents around you, and a live log of what is happening.",
      he: "הצוות ממשיך לעבוד גם כשאתה לא כאן — סוכנים סביבך, ויומן חי של מה שקורה.",
    },
    "steps.jpg": {
      en: "Three steps: send an email, the team does the work, you approve.",
      he: "שלושה צעדים: שולחים מייל, הצוות עובד, אתה מאשר.",
    },
    "agents.jpg": {
      en: "The whole agent team in one place — role, cost, and status.",
      he: "כל הסוכנים במקום אחד — תפקיד, עלות וסטטוס.",
    },
    "tasks.jpg": {
      en: "Tasks move between agents — who sent, who received, and what was decided.",
      he: "משימות עוברות בין הסוכנים — מי שלח, מי קיבל, ומה הוחלט.",
    },
    "protocol.jpg": {
      en: "A meeting protocol is prepared in the system and ready for approval.",
      he: "פרוטוקול הישיבה נבנה במערכת ומחכה לאישור.",
    },
    "protocol-draft.jpg": {
      en: "Open a new meeting, record it, and the protocol is drafted for you.",
      he: "פותחים ישיבה חדשה, מקליטים, והפרוטוקול נכתב עבורך.",
    },
    "protocol-pdf.jpg": {
      en: "The protocol comes out as a PDF you can download.",
      he: "הפרוטוקול יוצא כקובץ PDF שאפשר להוריד.",
    },
    "email.jpg": {
      en: "The protocol is sent by email, with the file attached.",
      he: "הפרוטוקול נשלח במייל, עם הקובץ מצורף.",
    },
    "telegram.jpg": {
      en: "The same agents are also connected through Telegram.",
      he: "אותם סוכנים מחוברים גם דרך טלגרם.",
    },
    "content.jpg": {
      en: "Posts for Instagram, Facebook, and LinkedIn wait for approval before they go out.",
      he: "תוכן לאינסטגרם, לפייסבוק וללינקדאין מחכה לאישור לפני שהוא יוצא.",
    },
  },
  "hamasgeria-hadar-pub": {
    "dashboard.jpg": {
      en: "Control board — stock, suppliers, and events at a glance.",
      he: "לוח בקרה — מלאי, ספקים ואירועים במבט אחד.",
    },
    "products-page.jpg": {
      en: "Product and inventory screen — current stock and minimum levels.",
      he: "מסך מוצרים ומלאי — מלאי קיים ומלאי מינימום.",
    },
    "events-home.jpg": {
      en: "Public events page — tickets and VIP pricing.",
      he: "דף האירועים — כרטיסים ומחירי VIP.",
    },
    "vip-sale.jpg": {
      en: "Point of sale — charging with a VIP card at the bar.",
      he: "מכירה בקופה — חיוב עם כרטיס VIP בבר.",
    },
    "vip-transactions.jpg": {
      en: "Transactions — loads, charges, and card history.",
      he: "עסקאות — טעינות, חיובים והיסטוריית הכרטיס.",
    },
    "vip-customer-dashboard.jpg": {
      en: "Member area — balance, perks, and club activity.",
      he: "אזור אישי לחבר המועדון — יתרה, הטבות ופעילות.",
    },
  },
  "tmore-talent-pool": {
    "admin-search.jpg": {
      en: "Search and filter the talent pool by specialty, location, and more.",
      he: "חיפוש וסינון במאגר לפי התמחות, מיקום ועוד.",
    },
    "landing.jpg": {
      en: "The public landing page — an invitation to join the pool.",
      he: "דף הנחיתה — הזמנה להצטרף למאגר.",
    },
    "register.jpg": {
      en: "Simple registration — all freelancer details in one place.",
      he: "רישום פשוט — כל פרטי הפרילנסר במקום אחד.",
    },
  },
  "see-you-tomorrow": {
    "manager-board.jpg": {
      en: "The manager’s board — the published schedule for the whole team.",
      he: "לוח המנהל — השיבוץ שמופץ לכולם.",
    },
    "employee-requests.jpg": {
      en: "Employees send their preferred schedule two weeks ahead.",
      he: "העובד שולח את השיבוץ המועדף עליו שבועיים מראש.",
    },
    "ai-queue.jpg": {
      en: "The system reviews every request against management rules.",
      he: "המערכת בודקת כל בקשה מול דרישות ההנהלה.",
    },
    "help-agent.jpg": {
      en: "When needed, the request is sent to the manager for final approval.",
      he: "במקרה הצורך הבקשה עולה לאישור סופי של המנהל.",
    },
  },
  "vacation-abroad": {
    "catalog.jpg": {
      en: "The vacation catalog — destinations at a glance.",
      he: "קטלוג החופשות — היעדים במבט אחד.",
    },
    "details.jpg": {
      en: "Trip details — dates, destination, and package info.",
      he: "פרטי החופשה — תאריכים, יעד ופרטי החבילה.",
    },
    "weather.jpg": {
      en: "Expected weather for those exact vacation dates.",
      he: "מזג האוויר הצפוי בדיוק לתאריכי החופשה.",
    },
    "ai-recommend.jpg": {
      en: "Local recommendations — art, food, and activities.",
      he: "המלצות מקומיות — אומנות, אוכל ובילויים.",
    },
  },
  "lowproject-court-judgments": {
    "rag-search.jpg": {
      en: "Plain-language search — relevant judgments with key excerpts.",
      he: "חיפוש בשפה פשוטה — פסקי דין רלוונטיים עם הקטעים החשובים.",
    },
    "admin-pipeline.jpg": {
      en: "Collecting and updating the judgments library.",
      he: "איסוף ועדכון מאגר פסקי הדין.",
    },
  },
};

function fileName(url: string): string {
  return url.split("/").pop()?.split("?")[0] || url;
}

export function getScreenCaption(slug: string, url: string, locale: "en" | "he"): string | undefined {
  const caption = captionsByFile[slug]?.[fileName(url)];
  if (!caption) return undefined;
  return locale === "he" ? caption.he : caption.en;
}

export function getExplainedScreens(
  slug: string,
  gallery: string[],
  locale: "en" | "he"
): { url: string; caption: string }[] {
  const explained = gallery
    .map((url) => {
      const caption = getScreenCaption(slug, url, locale);
      return caption ? { url, caption } : null;
    })
    .filter((item): item is { url: string; caption: string } => Boolean(item));

  if (explained.length > 0) return explained;
  return gallery.slice(0, 6).map((url, i) => ({ url, caption: `${i + 1}` }));
}
