import { useState, type FormEvent } from "react";
import { Lock } from "lucide-react";
import { login } from "@/Services/ApiService";
import "../AdminDashboard/Admin.css";

interface AdminLoginProps {
  onSuccess: () => void;
}

export function AdminLogin({ onSuccess }: AdminLoginProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(password);
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin">
      <div className="admin__container">
        <form className="admin__form admin__login" onSubmit={handleSubmit}>
          <div className="admin__login-header">
            <div className="admin__login-icon" aria-hidden="true">
              <Lock size={22} strokeWidth={1.75} />
            </div>
            <h1 className="admin__title">Admin</h1>
          </div>
          <div className="admin__field">
            <label htmlFor="admin-password" className="admin__label">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              className="admin__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>
          {error && (
            <p className="admin__error" role="alert">
              {error}
            </p>
          )}
          <div className="admin__actions">
            <button type="submit" className="admin__submit" disabled={loading}>
              {loading ? "..." : "Sign in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
