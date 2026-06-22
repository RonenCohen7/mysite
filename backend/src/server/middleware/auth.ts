import type { Request, Response, NextFunction } from "express";
import { verifyToken, getCookieName } from "../../utils/jwt.js";
import { config } from "../config.js";
import type { AuthUser } from "@mysite/shared";

declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}

const devAdmin: AuthUser = { id: "admin", role: "admin" };

export function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (!config.adminAuthEnabled) {
    req.user = devAdmin;
    next();
    return;
  }

  if (!config.adminPassword) {
    res.status(503).json({ success: false, error: "Admin not configured" });
    return;
  }

  const token = req.cookies?.[getCookieName()];
  if (!token) {
    res.status(401).json({ success: false, error: "Unauthorized" });
    return;
  }
  const user = verifyToken(token);
  if (!user) {
    res.status(401).json({ success: false, error: "Invalid token" });
    return;
  }
  req.user = user;
  next();
}
