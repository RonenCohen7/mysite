import { doubleCsrf } from "csrf-csrf";
import type { Request, Response, NextFunction } from "express";
import { config } from "../config.js";

const { generateToken, doubleCsrfProtection } = doubleCsrf({
  getSecret: () => config.jwtSecret,
  getSessionIdentifier: (req) => req.cookies?.["mysite_token"] || req.ip || "anonymous",
  cookieName: "mysite_csrf",
  cookieOptions: {
    httpOnly: true,
    secure: config.isProd,
    sameSite: "strict",
    path: "/",
  },
  size: 64,
});

export { generateToken, doubleCsrfProtection };

export function csrfTokenHandler(req: Request, res: Response): void {
  const token = generateToken(req, res);
  res.json({ success: true, data: { csrfToken: token } });
}

export function csrfErrorHandler(err: unknown, _req: Request, res: Response, next: NextFunction): void {
  if (err && typeof err === "object" && "code" in err && (err as { code: string }).code === "EBADCSRFTOKEN") {
    res.status(403).json({ success: false, error: "Invalid CSRF token" });
    return;
  }
  next(err);
}
