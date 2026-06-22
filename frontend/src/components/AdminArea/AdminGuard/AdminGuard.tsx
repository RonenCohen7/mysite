import { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { checkAuth } from "@/Services/ApiService";
import { AdminLogin } from "@/components/AdminArea/AdminLogin/AdminLogin";
import "../AdminDashboard/Admin.css";

export function AdminGuard() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  const refresh = useCallback(() => {
    setLoading(true);
    checkAuth()
      .then((res) => setAuthenticated(res.authenticated))
      .catch(() => setAuthenticated(false))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  if (loading) {
    return (
      <div className="admin">
        <p className="admin__muted admin__container">Loading...</p>
      </div>
    );
  }

  if (!authenticated) {
    return <AdminLogin onSuccess={refresh} />;
  }

  return <Outlet />;
}
