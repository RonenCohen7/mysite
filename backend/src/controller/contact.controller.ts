import type { Request, Response } from "express";
import { contactSchema } from "@mysite/shared";
import { forwardContactToN8n } from "../services/contact.service.js";

export async function submitContact(req: Request, res: Response) {
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

    const result = await forwardContactToN8n(parsed.data);
    if (!result.ok) {
      res.status(502).json({ success: false, error: result.error ?? "Failed to send message" });
      return;
    }

    res.json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    console.error("[contact] error:", err);
    res.status(500).json({ success: false, error: "Failed to send message" });
  }
}
