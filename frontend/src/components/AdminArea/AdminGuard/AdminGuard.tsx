import { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { checkAuth, getAdminProjects } from "@/Services/ApiService";
import { AdminLogin } from "@/components/AdminArea/AdminLogin/AdminLogin";
import "../AdminDashboard/Admin.css";

async function verifyAdminAccess(): Promise<boolean> {
  const res = await checkAuth();
  if (!res.authenticated) return false;

  if (!import.meta.env.PROD) return true;

  try {
    await getAdminProjects();
    return true;
  } catch {
    return false;
  }
}

export function AdminGuard() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  const refresh = useCallback(() => {
    setLoading(true);
    verifyAdminAccess()
      .then(setAuthenticated)
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
