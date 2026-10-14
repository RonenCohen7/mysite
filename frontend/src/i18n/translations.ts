export type Locale = "en" | "he";

export const translations = {
    en: {
        site: {
            name: "Ronen Cohen",
            title: "Your business can work smarter | Ronen Cohen",
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
            headline: "Your business can work smarter.",
            secondary: "I'm here to help make that happen.",
            punchLine1: "I'm here to help make that happen.",
            punchLine2: "From the first idea to a solution that actually works.",
            subtitle:
                "I'm Ronen Cohen. I help business owners see what can be improved, save time, and build digital solutions that fit their needs. From the first idea to a solution that actually works.",
            ctaCall: "Schedule a Call",
            ctaTalk: "Let's talk about your business",
            ctaProjects: "See my projects",
            scroll: "Scroll",
        },
        sections: {
            services: {
                label: "What I can help with",
                title: "Solutions that fit your business",
                subtitle: "Practical solutions, built around how the business actually works.",
            },
            portfolio: {
                label: "",
                title: "Featured projects",
                subtitle: "A selection of systems and websites I built — you're welcome to go in and take a look.",
            },
            techStack: { label: "Tech Stack", subtitle: "Industry-leading tools and platforms for system development, AI-driven automation, and business integrations." },
            process: { label: "Process", subtitle: "A proven methodology delivering results from discovery to deployment." },
            testimonials: { label: "Collaboration with" },
            contact: { label: "Let's talk", subtitle: "Tell me about the business — we'll start with a simple conversation." },
        },
        valueNeeds: {
            label: "",
            title: "Feel like some things in the business could be simpler?",
            subtitle: "",
            items: [
                {
                    title: "Too much manual work",
                    need: "Tasks that repeat and eat up precious time?",
                },
                {
                    title: "Scattered information",
                    need: "Is your information spread across files and different systems?",
                },
                {
                    title: "Hard to manage the business",
                    need: "Hard to follow customers, orders, or work processes?",
                },
                {
                    title: "New business ideas",
                    need: "Have an idea for a new system and don't know where to start?",
                },
            ],
        },
        whyCustom: {
            label: "",
            title: "Time saved. Clear business value.",
            subtitle: "Every system I build is measured by what it takes off the team — and what it opens up for the business.",
            items: [
                {
                    step: "01",
                    title: "Hours back every week",
                    description:
                        "We start with the tasks that repeat, then turn them into a simple flow so the team can focus on customers — not paperwork.",
                },
                {
                    step: "02",
                    title: "Built around how you work",
                    description:
                        "I listen first, then shape the solution around your real process — not a ready-made template.",
                },
                {
                    step: "03",
                    title: "Everything stays connected",
                    description:
                        "The tools you already use — WhatsApp, calendars, payments — can sit in one flow, so information doesn't get lost between systems.",
                },
                {
                    step: "04",
                    title: "Value you can feel",
                    description:
                        "Fewer mistakes, faster answers, and a clearer picture of customers, orders, and stock — in the day-to-day work.",
                },
            ],
        },
        faq: {
            label: "FAQ",
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
                    a: "Systems for managing customers, stock, orders and staff; automations that save time on repeating work; and smart tools that help with everyday office tasks.",
                },
                {
                    q: "Can the system connect to the tools I already use?",
                    a: "Yes. WhatsApp, calendars, spreadsheets, customer tools and payments can be planned in from the start — so information moves once and stays updated.",
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
                icon: "Layers",
                title: "Custom business systems",
                description: "Systems that help manage information, customers, and processes in a simple, organized way.",
            },
            {
                icon: "Workflow",
                title: "Automation and smoother processes",
                description: "Less manual work, fewer repeating tasks, and more time for what actually matters.",
            },
            {
                icon: "Sparkles",
                title: "Artificial intelligence for businesses",
                description: "Smart tools that help with customer service, handling information, and everyday tasks.",
            },
            {
                icon: "Globe",
                title: "Websites and digital solutions",
                description: "Websites, stores, and digital systems built around what the business actually needs.",
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
            enterSystem: "Enter the system",
            visitSite: "Visit the site",
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
            title: "העסק שלך יכול לעבוד חכם יותר | רונן כהן",
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
            headline: "העסק שלך יכול לעבוד חכם יותר.",
            secondary: "אני כאן כדי לעזור לזה לקרות.",
            punchLine1: "אני כאן כדי לעזור לזה לקרות.",
            punchLine2: "מהרעיון הראשון ועד לפתרון שעובד באמת.",
            subtitle:
                "אני רונן כהן. אני עוזר לבעלי עסקים לזהות מה אפשר לשפר, לחסוך זמן ולבנות פתרונות דיגיטליים שמתאימים לצרכים שלהם. מהרעיון הראשון ועד לפתרון שעובד באמת.",
            ctaCall: "קביעת שיחה",
            ctaTalk: "בואו נדבר על העסק שלכם",
            ctaProjects: "לצפייה בפרויקטים שלי",
            scroll: "גלילה",
        },
        sections: {
            services: {
                label: "איך אפשר לעזור",
                title: "פתרונות שמתאימים לעסק שלך",
                subtitle: "פתרונות פרקטיים, סביב הדרך שבה העסק באמת עובד.",
            },
            portfolio: {
                label: "",
                title: "פרויקטים נבחרים",
                subtitle: "מבחר מערכות ואתרים שפיתחתי — מוזמנים להיכנס ולהתרשם.",
            },
            techStack: { label: "טכנולוגיות", subtitle: "כלים ופלטפורמות מובילות לפיתוח מערכות, אוטומציה מבוססת AI ואינטגרציות עסקיות." },
            process: { label: "תהליך", subtitle: "מתודולוגיה מוכחת שמספקת תוצאות מגילוי ועד פריסה." },
            testimonials: { label: "שיתוף פעולה עם" },
            contact: { label: "בואו נדבר", subtitle: "ספרו לי על העסק — נתחיל בשיחה פשוטה." },
        },
        valueNeeds: {
            label: "",
            title: "מרגישים שיש דברים בעסק שאפשר לעשות פשוט יותר?",
            subtitle: "",
            items: [
                {
                    title: "יותר מדי עבודה ידנית",
                    need: "משימות שחוזרות על עצמן וגוזלות זמן יקר?",
                },
                {
                    title: "מידע מפוזר",
                    need: "המידע שלכם מפוזר בין קבצים ומערכות שונות?",
                },
                {
                    title: "ניהול העסק מסתבך",
                    need: "קשה לעקוב אחרי לקוחות, הזמנות או תהליכי עבודה?",
                },
                {
                    title: "רעיונות למערכת חדשה",
                    need: "יש לכם רעיון למערכת חדשה ולא יודעים מאיפה להתחיל?",
                },
            ],
        },
        whyCustom: {
            label: "",
            title: "חיסכון בזמן. ערך עסקי ברור.",
            subtitle: "כל מערכת שאני בונה נמדדת במה שהיא מורידה מהצוות — ובמה שהיא פותחת לעסק.",
            items: [
                {
                    step: "01",
                    title: "שעות שחוזרות לצוות",
                    description:
                        "מתחילים מהמשימות שחוזרות על עצמן, והופכים אותן לתהליך פשוט — כדי שהצוות יתמקד בלקוחות, לא בניירת.",
                },
                {
                    step: "02",
                    title: "נבנה סביב איך שאתם עובדים",
                    description:
                        "קודם מקשיבים, ואז בונים פתרון לפי התהליך האמיתי שלכם — לא לפי תבנית מוכנה.",
                },
                {
                    step: "03",
                    title: "הכול נשאר מחובר",
                    description:
                        "הכלים שכבר משתמשים בהם — WhatsApp, יומנים, תשלומים — יכולים לשבת בזרימה אחת, כדי שהמידע לא ילך לאיבוד בין מערכות.",
                },
                {
                    step: "04",
                    title: "ערך שמרגישים ביום־יום",
                    description:
                        "פחות טעויות, תשובות מהירות יותר, ותמונה ברורה יותר של לקוחות, הזמנות ומלאי — בעבודה השוטפת.",
                },
            ],
        },
        faq: {
            label: "שאלות נפוצות",
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
                    a: "מערכות לניהול לקוחות, מלאי, הזמנות ועובדים; אוטומציות שחוסכות זמן על עבודה שחוזרת על עצמה; וכלים חכמים שעוזרים במשימות יומיומיות במשרד.",
                },
                {
                    q: "אפשר לחבר את המערכת לכלים שכבר יש לי?",
                    a: "כן. WhatsApp, יומנים, גיליונות, כלי לקוחות ותשלומים אפשר לתכנן כבר מההתחלה — כדי שהמידע יזוז פעם אחת ויישאר מעודכן.",
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
                icon: "Layers",
                title: "מערכות ניהול בהתאמה אישית",
                description: "מערכות שעוזרות לנהל מידע, לקוחות ותהליכים בצורה פשוטה ומסודרת.",
            },
            {
                icon: "Workflow",
                title: "אוטומציה וייעול תהליכים",
                description: "פחות עבודה ידנית, פחות משימות שחוזרות על עצמן ויותר זמן לדברים החשובים.",
            },
            {
                icon: "Sparkles",
                title: "בינה מלאכותית לעסקים",
                description: "כלים חכמים שמסייעים בשירות לקוחות, טיפול במידע וביצוע משימות יומיומיות.",
            },
            {
                icon: "Globe",
                title: "אתרים ופתרונות דיגיטליים",
                description: "אתרים, חנויות ומערכות דיגיטליות שנבנות בהתאם לצרכים של העסק.",
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
            enterSystem: "כניסה למערכת",
            visitSite: "ביקור באתר",
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
