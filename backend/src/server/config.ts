import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

export const config = {
  port: parseInt(process.env.PORT || "3001", 10),
  mongoUri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mysite",
  adminPassword: (process.env.ADMIN_PASSWORD || "").trim(),
  /** Always on in production — cannot be disabled. Dev: set ADMIN_AUTH_ENABLED=true to test login. */
  adminAuthEnabled:
    process.env.NODE_ENV === "production" || process.env.ADMIN_AUTH_ENABLED === "true",
  jwtSecret: process.env.JWT_SECRET || "dev-secret-change-in-production",
  clientUrl: process.env.CLIENT_URL || "https://ronencohen.dev",
  nodeEnv: process.env.NODE_ENV || "development",
  isProd: process.env.NODE_ENV === "production",
  n8nContactWebhookUrl: (process.env.N8N_CONTACT_WEBHOOK_URL || "").trim(),

  /** AI sales agent — auto-replies to new leads via email / WhatsApp. */
  salesAgent: {
    /** Master switch. When false, leads are forwarded as before and no auto-reply is sent. */
    enabled: process.env.SALES_AGENT_ENABLED === "true",
    anthropicApiKey: (process.env.ANTHROPIC_API_KEY || "").trim(),
    /** Reply model. Override only if you know why. */
    model: (process.env.SALES_AGENT_MODEL || "claude-opus-4-8").trim(),
    /** Short business context the agent uses to write replies. */
    businessContext: (
      process.env.SALES_AGENT_CONTEXT ||
      "Ronen Cohen builds custom AI automations for businesses — connecting tools, " +
        "databases and AI agents to remove manual work (lead handling, data entry, " +
        "integrations, chatbots). Friendly, concise, professional."
    ).trim(),
    /** Who signs the replies. */
    senderName: (process.env.SALES_AGENT_SENDER_NAME || "Ronen Cohen").trim(),
    /** Owner address that gets BCC'd on every auto-reply (leave empty to disable). */
    ownerEmail: (process.env.SALES_AGENT_OWNER_EMAIL || "").trim(),
  },

  /** Outbound email (SMTP) used to send the auto-reply to the lead. */
  email: {
    host: (process.env.SMTP_HOST || "smtp.gmail.com").trim(),
    port: parseInt(process.env.SMTP_PORT || "465", 10),
    /** true for 465, false for 587/STARTTLS. */
    secure: (process.env.SMTP_SECURE || "true") === "true",
    user: (process.env.SMTP_USER || "").trim(),
    pass: (process.env.SMTP_PASS || "").trim(),
    /** From address shown to the lead (defaults to SMTP_USER). */
    from: (process.env.SMTP_FROM || process.env.SMTP_USER || "").trim(),
  },

  /** Outbound WhatsApp via Twilio (optional). */
  whatsapp: {
    twilioAccountSid: (process.env.TWILIO_ACCOUNT_SID || "").trim(),
    twilioAuthToken: (process.env.TWILIO_AUTH_TOKEN || "").trim(),
    /** e.g. "whatsapp:+14155238886" (Twilio sandbox or your approved number). */
    twilioWhatsappFrom: (process.env.TWILIO_WHATSAPP_FROM || "").trim(),
  },
};

/** Normalize origin/URL for comparison (no trailing slash). */
function normalizeOrigin(url: string): string {
  return url.replace(/\/$/, "");
}

/** Allowed browser origins in development (localhost vs 127.0.0.1 must both work). */
export function isAllowedOrigin(origin: string | undefined): boolean {
  if (!origin) return true;
  const normalized = normalizeOrigin(origin);
  if (config.isProd) {
    const allowed = normalizeOrigin(config.clientUrl);
    if (normalized === allowed) return true;
    // Allow www ↔ apex mismatch (e.g. ronencohen.dev vs www.ronencohen.dev)
    try {
      const originHost = new URL(normalized).hostname.replace(/^www\./, "");
      const allowedHost = new URL(allowed).hostname.replace(/^www\./, "");
      return originHost === allowedHost;
    } catch {
      return false;
    }
  }
  return /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(normalized);
}
