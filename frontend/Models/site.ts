/** Static config — links, brand & tech list. All UI text lives in i18n/translations.ts */
export const siteConfig = {
  /** Logo brand — always LTR, never translated (avoids RTL distortion) */
  brand: "Ronen",
  url: "https://ronencohen.dev",
  email: "hello@example.com",
  /** Where Ronen meets clients — used in search/AI structured data (the FAQ answer names the same towns). */
  serviceAreas: [
    { he: "גדרה", en: "Gedera" },
    { he: "רחובות", en: "Rehovot" },
    { he: "נס ציונה", en: "Ness Ziona" },
    { he: "מזכרת בתיה", en: "Mazkeret Batya" },
    { he: "אשדוד", en: "Ashdod" },
  ],
  /** The address Noa (sales) answers contact-form leads from — shown after the form is sent. */
  salesEmail: "noa@ronencohen.dev",
  linkedin: "https://www.linkedin.com/in/ronen-cohen7/",
  github: "https://github.com/RonenCohen7",
  youtube: "https://www.youtube.com/@ronencohen-dev",
  facebook: "https://www.facebook.com/profile.php?id=61594823104470",
  whatsapp: "https://wa.me/972000000000",
  /** Set true to show the "Collaboration with" partners section on the homepage. */
  showPartnersSection: false,
  techStack: [
    "React", "TypeScript", "Node.js", "Python", "FastAPI",
    "MongoDB", "MySQL", "PostgreSQL", "Docker", "Linux", "OpenAI", "Git", "AWS",
    "Claude", "Cursor", "GPT", "DeepSeek", "n8n",
  ],
};
