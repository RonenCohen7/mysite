import type { Request, Response, NextFunction } from "express";
import { verifyToken, getCookieName } from "../utils/jwt.js";
import type { AuthUser } from "@mysite/shared";

declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}

export function requireAuth(req: Request, res: Response, next: NextFunction): void {
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
