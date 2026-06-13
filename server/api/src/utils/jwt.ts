import jwt from "jsonwebtoken";
import { config } from "../config.js";
import type { AuthUser } from "@mysite/shared";

const COOKIE_NAME = "mysite_token";

export function signToken(user: AuthUser): string {
  return jwt.sign(user, config.jwtSecret, { expiresIn: "8h" });
}

export function verifyToken(token: string): AuthUser | null {
  try {
    return jwt.verify(token, config.jwtSecret) as AuthUser;
  } catch {
    return null;
  }
}

export function getCookieName(): string {
  return COOKIE_NAME;
}

export function getCookieOptions() {
  return {
    httpOnly: true,
    secure: config.isProd,
    sameSite: "strict" as const,
    maxAge: 8 * 60 * 60 * 1000,
    path: "/",
  };
}
