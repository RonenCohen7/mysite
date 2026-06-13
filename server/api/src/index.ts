import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import { config } from "./config.js";
import { connectDb } from "./db.js";
import { applySecurityMiddleware } from "./middleware/security.js";
import { csrfTokenHandler, csrfErrorHandler } from "./middleware/csrf.js";
import authRoutes from "./routes/auth.routes.js";
import projectsRoutes from "./routes/projects.routes.js";
import adminRoutes, { mediaRouter } from "./routes/admin.routes.js";
import { contactSchema } from "@mysite/shared";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

applySecurityMiddleware(app);

app.use(
  cors({
    origin: config.clientUrl,
    credentials: true,
  })
);

app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

app.get("/api/health", (_req, res) => {
  res.json({ success: true, status: "ok" });
});

app.get("/api/csrf-token", csrfTokenHandler);
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/media", mediaRouter);

app.post("/api/contact", async (req, res) => {
  try {
    const parsed = contactSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ success: false, error: "Invalid form data" });
      return;
    }
    if (parsed.data.website) {
      res.json({ success: true, message: "Message sent" });
      return;
    }
    res.json({ success: true, message: "Message sent successfully" });
  } catch {
    res.status(500).json({ success: false, error: "Failed to send message" });
  }
});

app.use(csrfErrorHandler);

app.get("/robots.txt", (_req, res) => {
  res.type("text/plain");
  res.send("User-agent: *\nDisallow: /admin\nDisallow: /api/admin\n");
});

const PORT = config.port;

async function start() {
  await connectDb();
  app.listen(PORT, () => {
    console.log(`[mysite-api] running on http://localhost:${PORT}`);
  });
}

start().catch((err) => {
  console.error("[mysite-api] failed to start:", err);
  process.exit(1);
});

export default app;
