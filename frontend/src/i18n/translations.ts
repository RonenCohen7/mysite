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
            line1: "Identify the need",
            line2: "Design the solution",
            line3: "Save time, money & headaches",
            headline: "Custom systems for small businesses",
            punchLine1: "Stop working for the business. Let the business work for you.",
            punchLine2: "If it repeats every day — we turn it into a system.",
            subtitle:
                "I design and build tailored web systems and automations around your real workflow — so the business runs with less friction, fewer errors, and hours saved every week.",
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
        faq: {
            label: "[ FAQ ]",
            title: "What businesses ask before we start",
            items: [
                {
                    q: "Who is a custom system for?",
                    a: "Small and mid-sized businesses whose team loses hours to manual work — spreadsheets, WhatsApp, copy-paste between tools — or whose off-the-shelf software forces a process that doesn't fit. The system is built around how the business actually works.",
                },
                {
                    q: "Which areas do you work in?",
                    a: "I work with businesses in Gedera, Rehovot, Ness Ziona, Mazkeret Batya, Ashdod and the surrounding area — and remotely with businesses anywhere in Israel.",
                },
                {
                    q: "What systems and automations do you build?",
                    a: "Web systems for managing customers, stock, orders, staff scheduling and data libraries; n8n automations; AI agents for office work; web scraping and data mining; and building and tuning databases (MSSQL, MongoDB).",
                },
                {
                    q: "Can the system connect to the tools I already use?",
                    a: "Yes. APIs, WhatsApp, calendars, Google Sheets, CRM and payments are planned into the architecture from day one — so data moves once and every system stays updated.",
                },
                {
                    q: "How much does it cost and how long does it take?",
                    a: "It depends on the scope. We start with a short intro call to map the need, and then you get a clear proposal with price and timeline — before a single line of code is written.",
                },
                {
                    q: "How do we get started?",
                    a: "Fill in the form on this site, and within minutes you'll get an email with free times to talk with Ronen — pick one with a single click.",
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
            successTitle: "Thanks for reaching out!",
            successText: "Noa, our sales manager, is sending you an email in the next few minutes with free times to talk with Ronen — pick one with a single click and you're done.",
            spamTitle: "Don't see it?",
            spamText: "Check your Spam or Promotions folder for an email from ",
            spamAction: "and mark it \"Not spam\" — so the next ones land in your inbox too.",
            error: "Failed to send message. Please try again.",
            placeholders: {
                name: "Add full name please",
                email: "you@company.com",
                company: "Company name / Business name",
                mobile: "Add mobile number",
                message: "Tell me what you need help with...",
            },
        },
        footer: { rights: "All rights reserved.", about: "About", privacy: "Privacy Policy", linkedin: "LinkedIn", github: "GitHub", youtube: "YouTube", facebook: "Facebook", email: "Email", whatsapp: "WhatsApp" },
        about: {
            pageTitle: "Nice to meet you | Ronen Cohen",
            backHome: "Back to Home",
            headline: "Nice to meet you, I'm Ronen Cohen",
            lead: "I like understanding how things work, and I like even more finding ways to make them work better.",
            intro: [
                "For as long as I can remember, computers and technology have fascinated me. I always wanted to understand what happens behind the scenes, how systems work, and how technology can be used to solve real problems.",
                "Over the years I worked with information systems, computers, and software development, and I met people, organizations, and the different ways businesses run.",
                "Over time I understood something important: behind every system there are people. People who want to work more comfortably, save time, bring some order, and focus on what actually matters to them.",
            ],
            refrain: "And that understanding stays with me to this day.",
            chapters: [
                {
                    title: "First understand the problem, then build the solution",
                    paragraphs: [
                        "When a business owner comes to me, I don't start by talking about software or technologies.",
                        "I listen first.",
                        "I want to understand how the business works, what eats up time, what makes the work cumbersome, and what could be done differently.",
                        "Sometimes it's a process that repeats itself every day. Sometimes it's information scattered across files, and sometimes it's an idea for a new system that still isn't clear how to bring to life.",
                        "For me, the interesting challenge is to take all of those things, bring order to them, and find a solution that is simple, comfortable, and right for the business.",
                    ],
                    quote: "",
                },
                {
                    title: "From an idea to something that actually works",
                    paragraphs: [
                        "One of the things I love about my work is that I can accompany an idea from the moment it comes up in a conversation until it becomes a real system that people use.",
                        "I combine experience in information systems, an understanding of how work actually flows, and the ability to build digital solutions tailored to the business.",
                        "In recent years I've also been bringing AI tools into the work. They make it possible to do things that used to take much more time and effort.",
                        "But for me, technology is always the means, not the goal.",
                    ],
                    quote: "Not every business needs a big, expensive system. It needs a solution that fits.",
                },
                {
                    title: "And a little about me, outside of work",
                    paragraphs: [
                        "I like learning new things, meeting people, and discovering places I haven't been.",
                        "One of my great loves is riding a motorcycle. Heading out on the road, enjoying the views, stopping in interesting places, and discovering something new every time.",
                        "I think there's something in common between riding and the way I approach projects: curiosity, a wish to keep moving, the ability to change direction when it's needed, and the pleasure of the road itself.",
                    ],
                    quote: "",
                },
            ],
            closeTitle: "So if you have an idea, or something in the business that simply doesn't work the way you'd like...",
            close: [
                "I'd be glad to hear.",
                "You don't need to understand technology, prepare documents, or show up with a solution already figured out.",
            ],
            closeQuote: "We'll start with a simple conversation. We'll understand what's needed, think it through together, and see how to make things easier and better.",
            signature: "Ronen.",
        },
        notFound: {
            title: "This page does not exist",
            backHome: "Back to Home",
        },
        portfolio: {
            loading: "Loading projects...",
            empty: "Case studies coming soon.",
            demo: "Open the live system",
            live: "Working system",
            github: "View on GitHub",
            challenge: "The need",
            solution: "What I built",
            outcome: "The result",
            screenshot: "Screenshot",
            gallery: "Project screenshots",
            screens: "What you see on screen",
            screensSubtitle: "Each image is a real screen from the system.",
            backToProjects: "Back to projects",
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
            title: "מערכות בהתאמה אישית לעסקים  | Full Stack ו-AI",
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
            line1: "מזהים צורך",
            line2: "מאפיינים פתרון",
            line3: "חוסכים זמן, כסף וכאב ראש",
            headline: "מערכות בהתאמה אישית לעסקים",
            punchLine1: "תפסיקו לעבוד בשביל העסק. תנו לעסק לעבוד בשבילכם",
            punchLine2: "אם זה חוזר כל יום - הופכים את זה למערכת",
            subtitle:
                "אני מתכנן ובונה מערכות ווב ואוטומציות סביב תהליך העבודה האמיתי שלכם — פחות חיכוך, פחות טעויות, וחיסכון של שעות בכל שבוע.",
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
                subtitle: "פרויקטים אמיתיים לעסקים  — הדרישה, מה נבנה, והתוצאה.",
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
        faq: {
            label: "[ שאלות נפוצות ]",
            title: "מה עסקים שואלים לפני שמתחילים",
            items: [
                {
                    q: "למי מתאימה מערכת בהתאמה אישית?",
                    a: "לעסקים קטנים ובינוניים שהצוות שלהם מאבד שעות על עבודה ידנית — אקסלים, WhatsApp והעתקות בין כלים — או שתוכנת מדף כופה עליהם תהליך שלא מתאים להם. המערכת נבנית סביב איך שהעסק באמת עובד.",
                },
                {
                    q: "באילו אזורים אתה עובד?",
                    a: "אני עובד עם עסקים בגדרה, רחובות, נס ציונה, מזכרת בתיה, אשדוד והסביבה — וגם מרחוק עם עסקים מכל הארץ.",
                },
                {
                    q: "אילו מערכות ואוטומציות אתה בונה?",
                    a: "מערכות ווב לניהול לקוחות, מלאי, הזמנות, שיבוץ עובדים ומאגרי מידע; אוטומציות ב-n8n; סוכני AI לצרכי המשרד; Scraping וכריית מידע; ובנייה ושיפור ביצועים של מסדי נתונים (MSSQL, MongoDB).",
                },
                {
                    q: "אפשר לחבר את המערכת לכלים שכבר יש לי?",
                    a: "כן. חיבורי API, WhatsApp, יומנים, Google Sheets, CRM ותשלומים מתוכננים כבר בארכיטקטורה — כך שהנתונים זזים פעם אחת וכל המערכות מתעדכנות.",
                },
                {
                    q: "כמה זה עולה וכמה זמן זה לוקח?",
                    a: "זה תלוי בהיקף. מתחילים בשיחת היכרות קצרה שבה ממפים את הצורך, ואחריה מקבלים הצעה מסודרת עם מחיר ולוח זמנים — לפני שנכתבת שורת קוד.",
                },
                {
                    q: "איך מתחילים?",
                    a: "ממלאים את הטופס באתר, ותוך דקות מגיע מייל עם מועדים פנויים לשיחה עם רונן — בוחרים שעה בלחיצה אחת.",
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
            successTitle: "תודה שפנית!",
            successText: "נועה, מנהלת המכירות שלנו, שולחת לך בדקות הקרובות מייל עם מועדים פנויים לשיחה עם רונן — בוחרים שעה בלחיצה אחת, וזהו.",
            spamTitle: "לא רואה את המייל?",
            spamText: "כדאי לבדוק בתיקיית הספאם או ב״קידומי מכירות״ מייל מ־",
            spamAction: "ולסמן ״לא ספאם״ — כך גם המיילים הבאים יגיעו ישר לתיבה.",
            error: "שליחה נכשלה. נסה שוב.",
            placeholders: {
                name: "הוסף שם מלא",
                email: "you@company.com",
                company: "שם החברה / שם העסק",
                mobile: "הוסף מספר נייד",
                message: "ספר לי במה אתה צריך עזרה...",
            },
        },
        footer: { rights: "כל הזכויות שמורות.", about: "אודות", privacy: "מדיניות פרטיות", linkedin: "LinkedIn", github: "GitHub", youtube: "YouTube", facebook: "Facebook", email: "אימייל", whatsapp: "WhatsApp" },
        about: {
            pageTitle: "נעים להכיר | רונן כהן",
            backHome: "חזרה לדף הבית",
            headline: "נעים להכיר, אני רונן כהן",
            lead: "אני אוהב להבין איך דברים עובדים, ועוד יותר אוהב למצוא דרכים לגרום להם לעבוד טוב יותר.",
            intro: [
                "מאז שאני זוכר את עצמי, עולם המחשבים והטכנולוגיה סיקרן אותי. תמיד רציתי להבין מה קורה מאחורי הקלעים, איך מערכות עובדות ואיך אפשר להשתמש בטכנולוגיה כדי לפתור בעיות אמיתיות.",
                "במהלך השנים עסקתי במערכות מידע, מחשבים ופיתוח תוכנה, ונחשפתי לאנשים, לארגונים ולדרכים שונות שבהן עסקים מתנהלים.",
                "עם הזמן הבנתי משהו חשוב: מאחורי כל מערכת יש אנשים. אנשים שרוצים לעבוד בצורה נוחה יותר, לחסוך זמן, לעשות סדר ולהתמקד במה שבאמת חשוב להם.",
            ],
            refrain: "וההבנה הזאת מלווה אותי עד היום.",
            chapters: [
                {
                    title: "קודם מבינים את הבעיה, אחר כך בונים את הפתרון",
                    paragraphs: [
                        "כשבעל עסק פונה אליי, אני לא מתחיל מלדבר על תוכנות או טכנולוגיות.",
                        "אני קודם כול מקשיב.",
                        "אני רוצה להבין איך העסק עובד, מה גוזל זמן, מה מסרבל את העבודה ומה אפשר לעשות אחרת.",
                        "לפעמים מדובר בתהליך שחוזר על עצמו מדי יום. לפעמים במידע שמפוזר בין קבצים, ולפעמים ברעיון למערכת חדשה שעדיין לא ברור איך להוציא לפועל.",
                        "מבחינתי, האתגר המעניין הוא לקחת את כל הדברים האלה, לעשות בהם סדר ולמצוא פתרון פשוט, נוח ונכון לעסק.",
                    ],
                    quote: "",
                },
                {
                    title: "מהרעיון ועד למשהו שעובד באמת",
                    paragraphs: [
                        "אחד הדברים שאני אוהב בעבודה שלי הוא שאני יכול ללוות רעיון מהרגע שהוא עולה בשיחה ועד שהוא הופך למערכת אמיתית שאנשים משתמשים בה.",
                        "אני משלב ניסיון במערכות מידע, הבנה של תהליכי עבודה ויכולת לפתח פתרונות דיגיטליים בהתאמה אישית.",
                        "בשנים האחרונות אני משלב בעבודה גם כלי בינה מלאכותית, שמאפשרים לעשות דברים שבעבר דרשו הרבה יותר זמן ומאמץ.",
                        "אבל מבחינתי, הטכנולוגיה היא תמיד האמצעי ולא המטרה.",
                    ],
                    quote: "לא כל עסק צריך מערכת גדולה ויקרה. הוא צריך פתרון שמתאים לו.",
                },
                {
                    title: "וקצת עליי, מחוץ לעולם העבודה",
                    paragraphs: [
                        "אני אוהב ללמוד דברים חדשים, להכיר אנשים ולגלות מקומות שלא הייתי בהם.",
                        "אחת האהבות הגדולות שלי היא רכיבה על אופנוע. לצאת לדרך, ליהנות מהנופים, לעצור במקומות מעניינים ולגלות משהו חדש בכל פעם.",
                        "אני חושב שיש משהו משותף בין רכיבה לבין הדרך שבה אני ניגש לפרויקטים: סקרנות, רצון להתקדם, היכולת לשנות כיוון כשצריך, וההנאה מהדרך עצמה.",
                    ],
                    quote: "",
                },
            ],
            closeTitle: "אז אם יש לכם רעיון, או משהו בעסק שפשוט לא עובד כמו שהייתם רוצים...",
            close: [
                "אשמח לשמוע.",
                "לא צריך להבין בטכנולוגיה, להכין מסמכים או להגיע עם פתרון מוכן.",
            ],
            closeQuote:
                "נתחיל בשיחה פשוטה. נבין מה צריך, נחשוב יחד ונראה איך אפשר להפוך את הדברים לקלים וטובים יותר.",
            signature: "רונן.",
        },
        notFound: {
            title: "דף זה לא קיים",
            backHome: "חזרה לדף הבית",
        },
        portfolio: {
            loading: "טוען פרויקטים...",
            empty: "תיקי עבודה בקרוב.",
            demo: "למערכת החיה",
            live: "מערכת עובדת",
            github: "GitHub",
            challenge: "הצורך",
            solution: "מה בניתי",
            outcome: "התוצאה",
            screenshot: "צילום מסך",
            gallery: "צילומי מסך מהפרויקט",
            screens: "מה רואים במסכים",
            screensSubtitle: "כל תמונה היא מסך אמיתי מהמערכת, עם הסבר קצר.",
            backToProjects: "חזרה לפרויקטים",
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
