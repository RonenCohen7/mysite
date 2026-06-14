export interface AuthUser {
  id: string;
  role: "admin";
}

export interface LoginResponse {
  success: boolean;
  user: AuthUser;
}

export interface AuthMeResponse {
  authenticated: boolean;
  user?: AuthUser;
}
