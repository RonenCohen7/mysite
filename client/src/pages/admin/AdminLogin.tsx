import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import { login } from "@/services/api";
import { IconButton } from "@/components/ui/IconButton";
import { adminStyles } from "./Admin.styles";

export function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(password);
      navigate("/admin");
    } catch {
      setError("Invalid password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={adminStyles.loginWrap}>
      <form className={adminStyles.loginForm} onSubmit={handleSubmit}>
        <h1 className={adminStyles.loginTitle}>Admin Login</h1>
        <div className={adminStyles.field}>
          <label htmlFor="password" className={adminStyles.label}>Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={adminStyles.input}
            required
            autoFocus
          />
        </div>
        {error && <p className={adminStyles.error}>{error}</p>}
        <div className={adminStyles.actions}>
          <IconButton icon={<LogIn size={20} />} tooltip="Login" type="submit" disabled={loading} />
        </div>
      </form>
    </div>
  );
}
