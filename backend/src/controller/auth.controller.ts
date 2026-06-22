import { Router } from "express";
import bcrypt from "bcryptjs";
import { loginSchema } from "@mysite/shared";
import { config } from "../server/config.js";
import { signToken, getCookieName, getCookieOptions, verifyToken } from "../utils/jwt.js";

const router = Router();

router.post("/login", async (req, res) => {
  if (!config.adminAuthEnabled) {
    res.json({ success: true, data: { user: { id: "admin", role: "admin" } } });
    return;
  }

  try {
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ success: false, error: "Invalid credentials" });
      return;
    }
    const password = parsed.data.password.trim();
    if (!config.adminPassword) {
      res.status(503).json({ success: false, error: "Admin password not configured" });
      return;
    }
    const valid = password === config.adminPassword ||
      (config.adminPassword.startsWith("$2") && await bcrypt.compare(password, config.adminPassword));
    if (!valid) {
      res.status(401).json({ success: false, error: "Invalid credentials" });
      return;
    }
    const user = { id: "admin", role: "admin" as const };
    const token = signToken(user);
    res.cookie(getCookieName(), token, getCookieOptions());
    res.json({ success: true, data: { user } });
  } catch {
    res.status(500).json({ success: false, error: "Login failed" });
  }
});

router.post("/logout", (_req, res) => {
  res.clearCookie(getCookieName(), { path: "/" });
  res.json({ success: true });
});

router.get("/me", (req, res) => {
  if (!config.adminAuthEnabled) {
    res.json({ success: true, data: { authenticated: true, user: { id: "admin", role: "admin" } } });
    return;
  }

  if (!config.adminPassword) {
    res.json({ success: true, data: { authenticated: false } });
    return;
  }

  const token = req.cookies?.[getCookieName()];
  if (!token) {
    res.json({ success: true, data: { authenticated: false } });
    return;
  }
  const user = verifyToken(token);
  res.json({ success: true, data: { authenticated: !!user, user: user || undefined } });
});

export default router;
