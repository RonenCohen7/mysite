import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

export const config = {
  port: parseInt(process.env.PORT || "3001", 10),
  mongoUri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mysite",
  adminPassword: (process.env.ADMIN_PASSWORD || "").trim(),
  /** Set ADMIN_AUTH_ENABLED=true in production before going live. */
  adminAuthEnabled: process.env.ADMIN_AUTH_ENABLED === "true",
  jwtSecret: process.env.JWT_SECRET || "dev-secret-change-in-production",
  clientUrl: process.env.CLIENT_URL || "https://ronencohen.dev",
  nodeEnv: process.env.NODE_ENV || "development",
  isProd: process.env.NODE_ENV === "production",
  n8nContactWebhookUrl: (process.env.N8N_CONTACT_WEBHOOK_URL || "").trim(),
};

/** Allowed browser origins in development (localhost vs 127.0.0.1 must both work). */
export function isAllowedOrigin(origin: string | undefined): boolean {
  if (!origin) return true;
  if (config.isProd) return origin === config.clientUrl;
  return /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
}
