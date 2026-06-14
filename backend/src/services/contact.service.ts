import { config } from "../server/config.js";
import { buildN8nContactFormData, contactSchema } from "@mysite/shared";
import type { z } from "zod";

type ContactInput = z.infer<typeof contactSchema>;

export async function forwardContactToN8n(data: ContactInput): Promise<{ ok: boolean; error?: string }> {
  if (!config.n8nContactWebhookUrl) {
    console.warn("[contact] N8N_CONTACT_WEBHOOK_URL not set — message accepted but not forwarded");
    return { ok: true };
  }

  const webhookRes = await fetch(config.n8nContactWebhookUrl, {
    method: "POST",
    body: buildN8nContactFormData({
      name: data.name,
      email: data.email,
      company: data.company,
      message: data.message,
      mobile: data.mobile,
    }),
  });

  if (!webhookRes.ok) {
    console.error("[contact] n8n webhook failed:", webhookRes.status, await webhookRes.text());
    return { ok: false, error: "Failed to send message" };
  }

  return { ok: true };
}
