export type Locale = "en" | "he";

export const translations = {
  en: {
    site: {
      name: "Ronen Cohen",
      title: "Custom Systems for Small Businesses | Full Stack & AI",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Projects",
      techStack: "Tech Stack",
      process: "Process",
      contact: "Contact",
    },
    hero: {
      line1: "Less Manual Work",
      line2: "More Time to Grow",
      line3: "Systems That Talk",
      headline: "Custom systems for small businesses",
      subtitle:
        "I design and build tailored web systems and automations around your real workflow — so the business runs with less friction, fewer errors, and hours saved every week.",
      subtitleLine2: "Stop working for the business. Let the business work for you.",
      subtitleLine3:
        "From inventory and VIP clubs to tickets and integrations — if it repeats every day, we turn it into a system.",
      ctaCall: "Schedule a Call",
      ctaProjects: "See Real Projects",
      scroll: "Scroll",
    },
    sections: {
      services: {
        label: "Services & automations",
        subtitle:
          "Web scraping, AI workflows, integrations, and databases — practical capabilities with demo videos.",
      },
      portfolio: {
        label: "What I build",
        subtitle: "Real projects for small businesses — the requirement, what we built, and the result.",
      },
      techStack: { label: "Tech Stack", subtitle: "Industry-leading tools and platforms for system development, AI-driven automation, and business integrations." },
      process: { label: "Process", subtitle: "A proven methodology delivering results from discovery to deployment." },
      testimonials: { label: "Collaboration with" },
      contact: { label: "Let's talk", subtitle: "" },
    },
    valueNeeds: {
      label: "[ When you need a custom system ]",
      title: "The need behind every build",
      subtitle:
        "I don't start from features — I start from the operational pain. Here's when a tailored system creates real value.",
      items: [
        {
          title: "Too much manual work",
          need: "Your team lives in spreadsheets, WhatsApp, and copy-paste between tools.",
          value: "Value: reclaim hours every week and cut avoidable mistakes.",
        },
        {
          title: "Systems that don't talk",
          need: "Stock, customers, sales, and events sit in separate places with no single source of truth.",
          value: "Value: one connected flow — data moves once, everywhere stays updated.",
        },
        {
          title: "Off-the-shelf isn't enough",
          need: "Generic software forces your business into someone else's process (VIP clubs, tickets, special workflows).",
          value: "Value: a system shaped around how you actually operate.",
        },
        {
          title: "Growth without more headcount",
          need: "Demand grows, but hiring for repetitive ops isn't sustainable.",
          value: "Value: scale operations with automation instead of extra manual load.",
        },
      ],
    },
    whyCustom: {
      label: "[ Why custom ]",
      title: "Time saved. Clear business value.",
      subtitle: "Every custom system I build is measured by what it removes from the team — and what it unlocks for the business.",
      items: [
        {
          step: "01",
          title: "Hours back every week",
          description:
            "We map the repetitive tasks first, then automate or digitize them so staff focus on customers — not admin.",
        },
        {
          step: "02",
          title: "Built around your workflow",
          description:
            "Discovery → architecture → build. The product follows your real process, roles, and edge cases — not a template.",
        },
        {
          step: "03",
          title: "Integrations from day one",
          description:
            "APIs, databases, WhatsApp, calendars, payments — connected in the architecture so nothing becomes a fragile afterthought.",
        },
        {
          step: "04",
          title: "Value you can explain",
          description:
            "Fewer errors, faster response, better control of stock/customers/sales — outcomes owners can feel in daily operations.",
        },
      ],
    },
    techTooltips: {
      react: "React — JavaScript library for building fast, interactive user interfaces.",
      typescript: "TypeScript — Typed JavaScript for safer, more maintainable code.",
      nodejs: "Node.js — JavaScript runtime for servers, APIs, and backend services.",
      python: "Python — Versatile language for backends, automation, AI, and data.",
      fastapi: "FastAPI — Modern Python framework for high-performance REST APIs.",
      mongodb: "MongoDB — Flexible NoSQL document database for modern apps.",
      mysql: "MySQL — Popular relational database for web applications.",
      postgresql: "PostgreSQL — Advanced open-source relational database.",
      docker: "Docker — Container platform for packaging and deploying applications.",
      linux: "Linux — Open-source OS for servers, cloud, and production environments.",
      openai: "OpenAI — AI platform for models, APIs, and intelligent automation.",
      git: "Git — Version control for tracking and collaborating on code.",
      aws: "AWS — Amazon cloud platform for hosting, storage, and infrastructure.",
      claude: "Claude — Anthropic's AI assistant for reasoning, writing, and coding.",
      cursor: "Cursor — AI-powered code editor that accelerates development.",
      gpt: "GPT — OpenAI language models for text, code, and intelligent tasks.",
      deepseek: "DeepSeek — Advanced AI model specialized in coding and reasoning.",
      n8n: "n8n — Visual workflow automation for connecting apps and APIs.",
    },
    services: [
      {
        icon: "Bot",
        category: "Custom Systems",
        title: "Tailored Business Systems",
        description: "Custom web systems built around your process — not generic software — so operations run faster, with less manual work and clearer control.",
        highlights: ["Map the real need before writing code", "Digitize repetitive office workflows", "Save hours every week for the team", "Grow without adding headcount for admin"],
        tags: ["Custom Build", "Time Saved"],
      },
      {
        icon: "Workflow",
        category: "Automations",
        title: "n8n Automation Development",
        description: "Custom automations built on demand to optimize workflows, save time, and elevate the quality of service you deliver.",
        highlights: ["Tailored n8n workflows for your business", "Connect apps, APIs, and databases seamlessly", "Save hours on repetitive manual tasks", "Improve response times and customer experience"],
        tags: ["n8n", "Workflow Automation"],
      },
      {
        icon: "Globe",
        category: "Data Intelligence",
        title: "Web Scraping",
        description: "Mining information from the open web for any purpose — market research, lead generation, monitoring, and more.",
        highlights: ["Extract data from public web sources", "Market research and competitor tracking", "Lead generation pipelines", "Scheduled monitoring and alerts"],
        tags: ["Data Mining", "Real-Time Insights"],
      },
      {
        icon: "Plug",
        category: "Integrations",
        title: "System Integrations",
        description: "Seamless integrations between platforms, tools, and business systems for unified, efficient operations.",
        highlights: ["API connections across platforms", "Real-time data synchronization", "CRM, ERP, and third-party tools", "Unified operational workflows"],
        tags: ["Zero Friction", "Connected Systems"],
      },
      {
        icon: "Database",
        category: "Databases",
        title: "Database Build & Performance",
        description: "Building, optimizing, and maintaining high-performance databases — indexes, stored procedures, and reliable backups.",
        highlights: ["Index design and query optimization", "Stored procedures and database logic", "Backup strategies and disaster recovery", "Specialized in MSSQL and MongoDB"],
        tags: ["MSSQL", "MongoDB"],
      },
    ],
    process: [
      { step: "01", title: "Discovery", description: "Understanding goals, requirements, and existing systems." },
      { step: "02", title: "Architecture", description: "Designing scalable solutions with the right tech stack." },
      { step: "03", title: "Development", description: "Building with clean code, tests, and best practices." },
      { step: "04", title: "Integration", description: "Connecting APIs, databases, and third-party services." },
      { step: "05", title: "Automation", description: "Implementing intelligent workflows and triggers." },
      { step: "06", title: "Deployment", description: "Production-ready deployment with CI/CD pipelines." },
      { step: "07", title: "Support", description: "Ongoing maintenance, monitoring, and optimization." },
    ],
    contact: {
      name: "Full name",
      email: "Email",
      company: "Company",
      mobile: "Mobile",
      message: "Message",
      send: "Send",
      successTitle: "Message Sent!",
      successText: "Thank you. I'll get back to you as soon as possible.",
      error: "Failed to send message. Please try again.",
      placeholders: {
        name: "Add full name please",
        email: "you@company.com",
        company: "Company name / Business name",
        mobile: "Add mobile number",
        message: "Tell me what you need help with...",
      },
    },
    footer: { rights: "All rights reserved.", about: "About", linkedin: "LinkedIn", github: "GitHub", email: "Email", whatsapp: "WhatsApp" },
    about: {
      label: "About Me",
      backHome: "Back to Home",
      experience: "15+ years of experience",
      bio: [
        "My name is Ronen Cohen — a Full Stack Developer and AI Automation Architect with over 15 years of experience.",
        "I build intelligent systems that optimize businesses through automation and custom AI agents tailored to office needs.",
        "I specialize in custom SaaS development, API integrations, web scraping, and AI-powered automation that saves teams countless hours and drives measurable ROI.",
        "I guide businesses end to end — from needs analysis and understanding workflows to finding the best-fit solution — by building scalable solutions with modern tools like React, TypeScript, Node.js, Python, n8n, Claude, Cursor, GPT, DeepSeek, and more.",
      ],
    },
    notFound: {
      title: "This page does not exist",
      backHome: "Back to Home",
    },
    portfolio: {
      loading: "Loading projects...",
      empty: "Case studies coming soon.",
      demo: "Live Demo",
      github: "View on GitHub",
      challenge: "The need",
      solution: "What I built",
      outcome: "The result",
      screenshot: "Screenshot",
    },
    servicesShowcase: {
      videoSoon: "Demo video coming soon",
      carouselLabel: "Service cards",
    },
    lang: { en: "EN", he: "HE" },
    ui: { openMenu: "Open Menu", closeMenu: "Close Menu" },
  },
  he: {
    site: {
      name: "רונן כהן",
      title: "מערכות בהתאמה אישית לעסקים קטנים | Full Stack ו-AI",
    },
    nav: {
      home: "בית",
      about: "אודות",
      services: "שירותים",
      portfolio: "פרויקטים",
      techStack: "טכנולוגיות",
      process: "תהליך",
      contact: "צור קשר",
    },
    hero: {
      line1: "פחות עבודה ידנית",
      line2: "יותר זמן לצמוח",
      line3: "מערכות שמחוברות",
      headline: "מערכות בהתאמה אישית לעסקים קטנים",
      subtitle:
        "אני מתכנן ובונה מערכות ווב ואוטומציות סביב תהליך העבודה האמיתי שלכם — פחות חיכוך, פחות טעויות, וחיסכון של שעות בכל שבוע.",
      subtitleLine2: "תפסיקו לעבוד בשביל העסק. תנו לעסק לעבוד בשבילכם.",
      subtitleLine3:
        "ממלאי ומועדון VIP ועד כרטיסים לאירועים ואינטגרציות — אם זה חוזר כל יום, הופכים את זה למערכת.",
      ctaCall: "קביעת שיחה",
      ctaProjects: "פרויקטים אמיתיים",
      scroll: "גלילה",
    },
    sections: {
      services: {
        label: "שירותים ואוטומציות",
        subtitle:
          "Scraping, תהליכי AI, אינטגרציות ומסדי נתונים — יכולות פרקטיות עם סרטוני הדגמה.",
      },
      portfolio: {
        label: "מה אני בונה",
        subtitle: "פרויקטים אמיתיים לעסקים קטנים — הדרישה, מה נבנה, והתוצאה.",
      },
      techStack: { label: "טכנולוגיות", subtitle: "כלים ופלטפורמות מובילות לפיתוח מערכות, אוטומציה מבוססת AI ואינטגרציות עסקיות." },
      process: { label: "תהליך", subtitle: "מתודולוגיה מוכחת שמספקת תוצאות מגילוי ועד פריסה." },
      testimonials: { label: "שיתוף פעולה עם" },
      contact: { label: "בואו נדבר", subtitle: "" },
    },
    valueNeeds: {
      label: "[ מתי צריך מערכת בהתאמה אישית ]",
      title: "הצורך מאחורי כל פיתוח",
      subtitle:
        "אני לא מתחיל מפיצ'רים — אני מתחיל מכאב תפעולי. אלה הרגעים שבהם מערכת מותאמת מייצרת ערך אמיתי.",
      items: [
        {
          title: "יותר מדי עבודה ידנית",
          need: "הצוות חי באקסלים, ב-WhatsApp, ובהעתקות בין כלים.",
          value: "הערך: מחזירים שעות בכל שבוע ומקטנים טעויות מיותרות.",
        },
        {
          title: "מערכות שלא מדברות",
          need: "מלאי, לקוחות, מכירות ואירועים יושבים במקומות נפרדים בלי מקור אמת אחד.",
          value: "הערך: זרימה מחוברת אחת — הנתונים זזים פעם אחת, והכול מתעדכן.",
        },
        {
          title: "תוכנה מדף לא מספיקה",
          need: "כלים גנריים כופים תהליך של מישהו אחר (מועדון VIP, כרטיסים, תהליכים מיוחדים).",
          value: "הערך: מערכת שמעוצבת לפי איך שהעסק באמת עובד.",
        },
        {
          title: "צמיחה בלי להגדיל כוח אדם",
          need: "הביקוש עולה, אבל גיוס רק לתפעול חוזר לא משתלם.",
          value: "הערך: מרחיבים תפעול עם אוטומציה במקום עוד עומס ידני.",
        },
      ],
    },
    whyCustom: {
      label: "[ למה בהתאמה אישית ]",
      title: "חיסכון זמן. ערך עסקי ברור.",
      subtitle: "כל מערכת שאני בונה נמדדת במה שהיא מורידה מהצוות — ובמה שהיא פותחת לעסק.",
      items: [
        {
          step: "01",
          title: "שעות חוזרות לצוות",
          description:
            "קודם ממפים את המשימות החוזרות, ואז הופכים אותן לאוטומטיות או דיגיטליות — כדי שהצוות יתמקד בלקוחות ולא באדמין.",
        },
        {
          step: "02",
          title: "בנויה סביב התהליך שלכם",
          description:
            "גילוי → ארכיטקטורה → פיתוח. המוצר הולך אחרי התהליך, התפקידים והמקרים החריגים שלכם — לא אחרי תבנית.",
        },
        {
          step: "03",
          title: "אינטגרציות מהיום הראשון",
          description:
            "API, מסדי נתונים, WhatsApp, יומנים, תשלומים — מחוברים בארכיטקטורה, לא כטלאי שברירי בסוף.",
        },
        {
          step: "04",
          title: "ערך שאפשר להסביר",
          description:
            "פחות טעויות, תגובה מהירה יותר, שליטה טובה יותר במלאי/לקוחות/מכירות — תוצאות שבעל העסק מרגיש בתפעול היומיומי.",
        },
      ],
    },
    techTooltips: {
      react: "React — ספריית JavaScript לבניית ממשקי משתמש אינטראקטיביים.",
      typescript: "TypeScript — JavaScript עם טיפוסים לקוד בטוח ויציב יותר.",
      nodejs: "Node.js — סביבת ריצה ל-JavaScript בצד שרת ו-API.",
      python: "Python — שפת תכנות רב-תכליתית לשרתים, אוטומציה ו-AI.",
      fastapi: "FastAPI — פריימוורק Python מודרני ל-API מהיר וביצועי.",
      mongodb: "MongoDB — מסד נתונים NoSQL גמיש לאחסון מסמכים.",
      mysql: "MySQL — מסד נתונים יחסי פופולרי לאפליקציות web.",
      postgresql: "PostgreSQL — מסד נתונים יחסי מתקדם בקוד פתוח.",
      docker: "Docker — פלטפורמת קונטיינרים לאריזה ופריסה של אפליקציות.",
      linux: "Linux — מערכת הפעלה בקוד פתוח לשרתים וסביבות ענן.",
      openai: "OpenAI — פלטפורמת AI למודלים, API ואוטומציה חכמה.",
      git: "Git — מערכת ניהול גרסאות לקוד ושיתוף פעולה בצוות.",
      aws: "AWS — פלטפורמת הענן של Amazon לאחסון, שרתים ותשתיות.",
      claude: "Claude — עוזר AI של Anthropic לחשיבה, כתיבה ופיתוח.",
      cursor: "Cursor — עורך קוד מבוסס AI שמאיץ פיתוח תוכנה.",
      gpt: "GPT — מודלי שפה של OpenAI לטקסט, קוד ומשימות חכמות.",
      deepseek: "DeepSeek — מודל AI מתקדם המתמחה בקוד וחשיבה.",
      n8n: "n8n — כלי אוטומציה ויזואלי לחיבור מערכות ו-API.",
    },
    services: [
      {
        icon: "Bot",
        category: "מערכות מותאמות",
        title: "מערכות עסקיות בהתאמה אישית",
        description: "מערכות ווב שנבנות סביב התהליך שלכם — לא תוכנה גנרית — כדי שהתפעול ירוץ מהר יותר, עם פחות עבודה ידנית ושליטה ברורה יותר.",
        highlights: ["ממפים את הצורך האמיתי לפני כתיבת קוד", "מדיגיטלים תהליכי משרד חוזרים", "חוסכים שעות בכל שבוע לצוות", "צומחים בלי להגדיל כוח אדם לאדמין"],
        tags: ["פיתוח מותאם", "חיסכון זמן"],
      },
      {
        icon: "Workflow",
        category: "אוטומציה",
        title: "פיתוח אוטומציות ב-n8n",
        description: "יצירת אוטומציות ייעודיות לפי דרישה לייעול העבודה, חיסכון זמן והגברת איכות השירות.",
        highlights: ["תהליכי n8n מותאמים לצרכי העסק", "חיבור אפליקציות, APIs ומסדי נתונים", "חיסכון בשעות עבודה על משימות חוזרות", "שיפור זמני תגובה וחוויית לקוח"],
        tags: ["n8n", "אוטומציית תהליכים"],
      },
      {
        icon: "Globe",
        category: "מידע ונתונים",
        title: "Scraping וכריית מידע",
        description: "שירותי scraping — כריית מידע מהרשת הגלויה לכל מטרה: מחקר שוק, לידים, ניטור ועוד.",
        highlights: ["חילוץ מידע ממקורות ציבוריים", "מחקר שוק ומעקב מתחרים", "צינורות לידים אוטומטיים", "ניטור ודוחות מתוזמנים"],
        tags: ["כריית מידע", "תובנות בזמן אמת"],
      },
      {
        icon: "Plug",
        category: "אינטגרציות",
        title: "אינטגרציות בין מערכות",
        description: "חיבור חלק בין פלטפורמות, כלים ומערכות עסקיות לתפעול מאוחד ויעיל.",
        highlights: ["חיבורי API בין פלטפורמות", "סנכרון נתונים בזמן אמת", "CRM, ERP וכלים חיצוניים", "תהליכים עסקיים מאוחדים"],
        tags: ["חיבור חלק", "מערכות מחוברות"],
      },
      {
        icon: "Database",
        category: "מסדי נתונים",
        title: "בנייה ושיפור ביצועים ב-Databases",
        description: "בנייה, אופטימיזציה ותחזוקה של מסדי נתונים בעלי ביצועים גבוהים — כולל אינדקסים, stored procedures וגיבויים.",
        highlights: ["תכנון אינדקסים ואופטימיזציית שאילתות", "Stored procedures ולוגיקה בבסיס הנתונים", "אסטרטגיות גיבוי והתאוששות מאסון", "התמחות ב-MSSQL ו-MongoDB"],
        tags: ["MSSQL", "MongoDB"],
      },
    ],
    process: [
      { step: "01", title: "גילוי", description: "הבנת מטרות, דרישות ומערכות קיימות." },
      { step: "02", title: "ארכיטקטורה", description: "תכנון פתרונות סקיילביליים עם ה-tech stack הנכון." },
      { step: "03", title: "פיתוח", description: "בנייה עם קוד נקי, בדיקות ו-best practices." },
      { step: "04", title: "אינטגרציה", description: "חיבור APIs, מסדי נתונים ושירותי צד שלישי." },
      { step: "05", title: "אוטומציה", description: "יישום תהליכי עבודה חכמים וטריגרים." },
      { step: "06", title: "פריסה", description: "פריסה production-ready עם CI/CD." },
      { step: "07", title: "תמיכה", description: "תחזוקה, ניטור ואופטימיזציה שוטפים." },
    ],
    contact: {
      name: "שם מלא",
      email: "אימייל",
      company: "חברה",
      mobile: "נייד",
      message: "הודעה",
      send: "שליחה",
      successTitle: "ההודעה נשלחה!",
      successText: "תודה. אבדוק את הבקשה ואחזור אליך בהקדם.",
      error: "שליחה נכשלה. נסה שוב.",
      placeholders: {
        name: "הוסף שם מלא",
        email: "you@company.com",
        company: "שם החברה / שם העסק",
        mobile: "הוסף מספר נייד",
        message: "ספר לי במה אתה צריך עזרה...",
      },
    },
    footer: { rights: "כל הזכויות שמורות.", about: "אודות", linkedin: "LinkedIn", github: "GitHub", email: "אימייל", whatsapp: "WhatsApp" },
    about: {
      label: "אודות",
      backHome: "חזרה לדף הבית",
      experience: " שנים רבות בעולם המידע והפיתוח ",
      bio: [
        "שמי רונן כהן — מפתח Full Stack וארכיטקט AI Automation עם המון ניסיון.",
        "אני בונה מערכות חכמות המייעלות עסקים בהכנסת אוטומציה וסוכני AI ייעודיים לצרכי המשרד.",
        "אני מתמחה בפיתוח SaaS ייעודי, אינטגרציות API, scraping ואוטומציה מבוססת AI שחוסכת לצוותים שעות רבות ומייצרת ROI מדיד.",
        "ליווי עסקי מאיפיון הצורך והבנת תהליכי העבודה ועד למציאת הפתרון המתאים ביותר עבור הלקוח, באמצעות יצירת פתרונות סקיילביליים עם כלים מודרניים כמו React, TypeScript, Node.js, Python, n8n, Claude, Cursor, GPT, DeepSeek ועוד.",
      ],
    },
    notFound: {
      title: "דף זה לא קיים",
      backHome: "חזרה לדף הבית",
    },
    portfolio: {
      loading: "טוען פרויקטים...",
      empty: "תיקי עבודה בקרוב.",
      demo: "דמו חי",
      github: "GitHub",
      challenge: "הצורך",
      solution: "מה בניתי",
      outcome: "התוצאה",
      screenshot: "צילום מסך",
    },
    servicesShowcase: {
      videoSoon: "סרטון דוגמה בקרוב",
      carouselLabel: "כרטיסיות שירות",
    },
    lang: { en: "EN", he: "עב" },
    ui: { openMenu: "פתיחת תפריט", closeMenu: "סגירת תפריט" },
  },
} as const;

export type TranslationKeys = typeof translations.en;

export const navIds = [
  { id: "home", key: "home" as const },
  { id: "portfolio", key: "portfolio" as const },
  { id: "services", key: "services" as const },
  { id: "contact", key: "contact" as const },
];
