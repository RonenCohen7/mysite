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
    sameSite: config.isProd ? "strict" : "lax",
    path: "/",
  },
  size: 64,
});

export { generateToken };

/** Skip CSRF when admin auth is disabled (local dev). */
export function optionalCsrfProtection(req: Request, res: Response, next: NextFunction): void {
  if (!config.adminAuthEnabled) {
    next();
    return;
  }
  doubleCsrfProtection(req, res, next);
}

export function csrfTokenHandler(req: Request, res: Response): void {
  if (!config.adminAuthEnabled) {
    res.json({ success: true, data: { csrfToken: "dev-disabled" } });
    return;
  }
  const token = generateToken(req, res);
  res.json({ success: true, data: { csrfToken: token } });
}

export function csrfErrorHandler(err: unknown, _req: Request, res: Response, next: NextFunction): void {
  if (!config.adminAuthEnabled) {
    next(err);
    return;
  }
  if (err && typeof err === "object" && "code" in err && (err as { code: string }).code === "EBADCSRFTOKEN") {
    res.status(403).json({ success: false, error: "Invalid CSRF token" });
    return;
  }
  next(err);
}
