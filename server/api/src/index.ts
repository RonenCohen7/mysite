import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import { config, isAllowedOrigin } from "./config.js";
import { connectDb } from "./db.js";
import { applySecurityMiddleware } from "./middleware/security.js";
import { csrfTokenHandler, csrfErrorHandler } from "./middleware/csrf.js";
import authRoutes from "./routes/auth.routes.js";
import projectsRoutes from "./routes/projects.routes.js";
import adminRoutes, { mediaRouter } from "./routes/admin.routes.js";
import { contactSchema, buildN8nContactFormData } from "@mysite/shared";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

applySecurityMiddleware(app);

app.use(
  cors({
    origin(origin, callback) {
      if (isAllowedOrigin(origin)) {
        callback(null, origin ?? config.clientUrl);
      } else {
        callback(new Error(`CORS blocked origin: ${origin}`));
      }
    },
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

    if (config.n8nContactWebhookUrl) {
      const webhookRes = await fetch(config.n8nContactWebhookUrl, {
        method: "POST",
        body: buildN8nContactFormData({
          name: parsed.data.name,
          email: parsed.data.email,
          company: parsed.data.company,
          message: parsed.data.message,
          mobile: parsed.data.mobile,
        }),
      });

      if (!webhookRes.ok) {
        console.error("[contact] n8n webhook failed:", webhookRes.status, await webhookRes.text());
        res.status(502).json({ success: false, error: "Failed to send message" });
        return;
      }
    } else {
      console.warn("[contact] N8N_CONTACT_WEBHOOK_URL not set — message accepted but not forwarded");
    }

    res.json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    console.error("[contact] error:", err);
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
    if (config.adminAuthEnabled) {
      console.log(`[mysite-api] admin auth: ON (password ${config.adminPassword.length} chars)`);
    } else {
      console.log(`[mysite-api] admin auth: OFF (open admin — enable ADMIN_AUTH_ENABLED=true for production)`);
    }
  });
}

start().catch((err) => {
  console.error("[mysite-api] failed to start:", err);
  process.exit(1);
});

export default app;
