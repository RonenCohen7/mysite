import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Pencil } from "lucide-react";
import type { Project } from "@mysite/shared";
import { getAdminProjects } from "@/Services/ApiService";
import { IconButton } from "@/components/UiArea/IconButton/IconButton";
import "./Admin.css";

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
    <div className={"admin"}>
      <div className={"admin__container"}>
        <div className={"admin__header"}>
          <h1 className={"admin__title"}>Projects</h1>
          <Link to="/ronen/projects/new">
            <IconButton icon={<Plus size={20} />} tooltip="Add Project" />
          </Link>
        </div>

        {loading && <p className="admin__muted">Loading...</p>}
        {error && <p className={"admin__error"}>{error}</p>}

        {!loading && !error && projects.length === 0 && (
          <p className="admin__muted">No projects yet. Add your first project.</p>
        )}

        {projects.map((p) => (
          <div key={p._id} className={"admin__card glass-card"}>
            <div>
              <h2 className={"admin__card-title"}>{p.title}</h2>
              <p className={"admin__card-meta"}>
                {p.techStack.join(", ")} &middot;{" "}
                <span className={p.published ? "admin__published" : "admin__draft"}>
                  {p.published ? "Published" : "Draft"}
                </span>
              </p>
            </div>
            <Link to={`/ronen/projects/${p._id}`}>
              <IconButton icon={<Pencil size={18} />} tooltip="Edit Project" variant="ghost" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
