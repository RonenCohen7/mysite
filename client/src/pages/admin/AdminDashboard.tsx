import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Pencil } from "lucide-react";
import type { Project } from "@mysite/shared";
import { getAdminProjects } from "@/services/api";
import { IconButton } from "@/components/ui/IconButton";
import { adminStyles } from "./Admin.styles";

export function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getAdminProjects()
      .then(setProjects)
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={adminStyles.page}>
      <div className={adminStyles.container}>
        <div className={adminStyles.header}>
          <h1 className={adminStyles.title}>Projects</h1>
          <Link to="/admin/projects/new">
            <IconButton icon={<Plus size={20} />} tooltip="Add Project" />
          </Link>
        </div>

        {loading && <p className="text-white/40">Loading...</p>}
        {error && <p className={adminStyles.error}>{error}</p>}

        {!loading && !error && projects.length === 0 && (
          <p className="text-white/40">No projects yet. Add your first project.</p>
        )}

        {projects.map((p) => (
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
        ))}
      </div>
    </div>
  );
}
