import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Plus, Pencil, LogOut } from "lucide-react";
import type { Project } from "@mysite/shared";
import { getAdminProjects, logout, checkAuth } from "@/services/api";
import { IconButton } from "@/components/ui/IconButton";
import { adminStyles } from "./Admin.styles";

export function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth().then((auth) => {
      if (!auth.authenticated) navigate("/admin/login");
    });
    getAdminProjects()
      .then(setProjects)
      .catch(() => navigate("/admin/login"))
      .finally(() => setLoading(false));
  }, [navigate]);

  const handleLogout = async () => {
    await logout();
    navigate("/admin/login");
  };

  return (
    <div className={adminStyles.page}>
      <div className={adminStyles.container}>
        <div className={adminStyles.header}>
          <h1 className={adminStyles.title}>Projects</h1>
          <div className="flex gap-2">
            <Link to="/admin/projects/new">
              <IconButton icon={<Plus size={20} />} tooltip="Add Project" />
            </Link>
            <IconButton icon={<LogOut size={20} />} tooltip="Logout" variant="ghost" onClick={handleLogout} />
          </div>
        </div>

        {loading ? (
          <p className="text-white/40">Loading...</p>
        ) : projects.length === 0 ? (
          <p className="text-white/40">No projects yet. Add your first project.</p>
        ) : (
          projects.map((p) => (
            <div key={p._id} className={adminStyles.card}>
              <div>
                <h2 className={adminStyles.cardTitle}>{p.title}</h2>
                <p className={adminStyles.cardMeta}>
                  {p.techStack.join(", ")} &middot;{" "}
                  <span className={p.published ? adminStyles.published : adminStyles.draft}>
                    {p.published ? "Published" : "Draft"}
                  </span>
                </p>
              </div>
              <Link to={`/admin/projects/${p._id}`}>
                <IconButton icon={<Pencil size={18} />} tooltip="Edit Project" variant="ghost" />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
