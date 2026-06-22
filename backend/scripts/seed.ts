import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mysite";

const seedProjects = [
  {
    title: "AI Automation Platform",
    slug: "ai-automation-platform",
    description: "Enterprise-grade AI workflow automation with intelligent task routing, OpenAI integration, and real-time monitoring dashboards.",
    techStack: ["React", "Python", "FastAPI", "OpenAI", "MongoDB"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/RonenCohen7",
    featured: true,
    published: true,
    order: 0,
    images: [],
  },
  {
    title: "CRM Integration System",
    slug: "crm-integration-system",
    description: "Multi-platform CRM sync engine connecting Salesforce, HubSpot, and custom APIs with automated data pipelines.",
    techStack: ["Node.js", "TypeScript", "PostgreSQL", "Docker"],
    featured: true,
    published: true,
    order: 1,
    images: [],
  },
  {
    title: "Business Process Automation",
    slug: "business-process-automation",
    description: "End-to-end workflow automation reducing manual tasks by 80% with intelligent triggers and approval chains.",
    techStack: ["Python", "FastAPI", "MongoDB", "AWS"],
    published: true,
    order: 2,
    images: [],
  },
  {
    title: "Analytics Dashboard",
    slug: "analytics-dashboard",
    description: "Real-time business intelligence dashboard with custom KPI tracking, data visualization, and export capabilities.",
    techStack: ["React", "TypeScript", "Node.js", "MySQL"],
    published: true,
    order: 3,
    images: [],
  },
  {
    title: "React Enterprise Application",
    slug: "react-enterprise-application",
    description: "Scalable enterprise SPA with micro-frontend architecture, role-based access, and comprehensive testing.",
    techStack: ["React", "TypeScript", "Redux", "Docker"],
    published: true,
    order: 4,
    images: [],
  },
  {
    title: "Python Backend System",
    slug: "python-backend-system",
    description: "High-performance async API backend with caching, queue processing, and comprehensive API documentation.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Linux"],
    published: true,
    order: 5,
    images: [],
  },
];

async function seed() {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  const db = client.db();

  const existing = await db.collection("projects").countDocuments();
  if (existing > 0) {
    console.log(`[seed] ${existing} projects already exist, skipping.`);
    await client.close();
    return;
  }

  const now = new Date();
  const docs = seedProjects.map((p) => ({ ...p, createdAt: now, updatedAt: now }));
  await db.collection("projects").insertMany(docs);
  console.log(`[seed] Inserted ${docs.length} demo projects.`);

  const password = process.env.ADMIN_PASSWORD || "change-me-secure-password";
  console.log(`[seed] Admin password: ${password}`);
  console.log("[seed] Login at /ronen");

  await client.close();
}

seed().catch((err) => {
  console.error("[seed] failed:", err);
  process.exit(1);
});
