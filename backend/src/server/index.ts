import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import { config, isAllowedOrigin } from "./config.js";
import { connectDb } from "./db.js";
import { applySecurityMiddleware } from "./middleware/security.js";
import { csrfTokenHandler, csrfErrorHandler } from "./middleware/csrf.js";
import authRoutes from "../controller/auth.controller.js";
import projectsRoutes from "../controller/projects.controller.js";
import adminRoutes, { mediaRouter } from "../controller/admin.controller.js";
import contactRoutes from "../controller/contact.routes.js";

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
app.use("/api/contact", contactRoutes);

app.use(csrfErrorHandler);

app.get("/robots.txt", (_req, res) => {
  res.type("text/plain");
  res.send("User-agent: *\nDisallow: /admin\nDisallow: /api/admin\n");
});

if (config.isProd) {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const frontendDist = path.resolve(__dirname, "../../../frontend/dist");
  app.use(express.static(frontendDist));
  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api")) return next();
    res.sendFile(path.join(frontendDist, "index.html"), (err) => {
      if (err) next(err);
    });
  });
}

const PORT = config.port;

async function start() {
  await connectDb();
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[mysite-backend] running on http://localhost:${PORT}`);
    if (config.adminAuthEnabled) {
      console.log(`[mysite-backend] admin auth: ON (password ${config.adminPassword.length} chars)`);
    } else {
      console.log(`[mysite-backend] admin auth: OFF (open admin — enable ADMIN_AUTH_ENABLED=true for production)`);
    }
  });
}

start().catch((err) => {
  console.error("[mysite-backend] failed to start:", err);
  process.exit(1);
});

export default app;
