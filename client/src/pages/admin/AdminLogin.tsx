import { Navigate } from "react-router-dom";

/** Admin auth disabled in dev — go straight to dashboard. */
export function AdminLogin() {
  return <Navigate to="/admin" replace />;
}
