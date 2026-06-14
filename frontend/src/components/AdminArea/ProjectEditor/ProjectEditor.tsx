import { useEffect, useState, type FormEvent, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Save, Trash2, Upload, ArrowLeft } from "lucide-react";
import {
  getAdminProject,
  createProject,
  updateProject,
  deleteProject,
  uploadFile,
  getMediaUrl,
} from "@/Services/ApiService";
import { IconButton } from "@/components/UiArea/IconButton/IconButton";
import "../AdminDashboard/Admin.css";

export function ProjectEditor() {
  const { id } = useParams();
  const isNew = id === "new";
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");
  const [demoUrl, setDemoUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [featured, setFeatured] = useState(false);
  const [published, setPublished] = useState(false);
  const [images, setImages] = useState<{ fileId: string; filename: string; order: number }[]>([]);
  const [video, setVideo] = useState<{ fileId: string; filename: string } | undefined>();
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (!isNew && id) {
      getAdminProject(id)
        .then((p) => {
          if (!p) return navigate("/admin");
          setTitle(p.title);
          setDescription(p.description);
          setTechStack(p.techStack.join(", "));
          setDemoUrl(p.demoUrl || "");
          setGithubUrl(p.githubUrl || "");
          setFeatured(p.featured);
          setPublished(p.published);
          setImages(p.images || []);
          setVideo(p.video);
        })
        .catch(() => navigate("/admin"))
        .finally(() => setLoading(false));
    }
  }, [id, isNew, navigate]);

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const result = await uploadFile(file, "image");
      setImages((prev) => [...prev, { fileId: result.fileId, filename: result.filename, order: prev.length }]);
    } catch {
      alert("Upload failed");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const handleVideoUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const result = await uploadFile(file, "video");
      setVideo({ fileId: result.fileId, filename: result.filename });
    } catch {
      alert("Upload failed");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const data = {
      title,
      description,
      techStack: techStack.split(",").map((s) => s.trim()).filter(Boolean),
      demoUrl: demoUrl || undefined,
      githubUrl: githubUrl || undefined,
      featured,
      published,
      images,
      video,
    };
    try {
      if (isNew) {
        await createProject(data);
      } else if (id) {
        await updateProject(id, data);
      }
      navigate("/admin");
    } catch {
      alert("Save failed");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!id || isNew || !confirm("Delete this project?")) return;
    try {
      await deleteProject(id);
      navigate("/admin");
    } catch {
      alert("Delete failed");
    }
  };

  if (loading) return <div className={"admin"}><p className="admin__muted admin__container">Loading...</p></div>;

  return (
    <div className={"admin"}>
      <div className={"admin__container"}>
        <div className={"admin__header"}>
          <IconButton icon={<ArrowLeft size={20} />} tooltip="Back" variant="ghost" onClick={() => navigate("/admin")} />
          <h1 className={"admin__title"}>{isNew ? "New Project" : "Edit Project"}</h1>
          <div />
        </div>

        <form className={"admin__form glass-card"} onSubmit={handleSubmit}>
          <div className={"admin__field"}>
            <label className={"admin__label"}>Title</label>
            <input className={"admin__input"} value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className={"admin__field"}>
            <label className={"admin__label"}>Description</label>
            <textarea className="admin__input admin__textarea" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div className={"admin__field"}>
            <label className={"admin__label"}>Tech Stack (comma separated)</label>
            <input className={"admin__input"} value={techStack} onChange={(e) => setTechStack(e.target.value)} placeholder="React, TypeScript, Node.js" />
          </div>
          <div className={"admin__field"}>
            <label className={"admin__label"}>Demo URL</label>
            <input className={"admin__input"} value={demoUrl} onChange={(e) => setDemoUrl(e.target.value)} type="url" />
          </div>
          <div className={"admin__field"}>
            <label className={"admin__label"}>GitHub URL</label>
            <input className={"admin__input"} value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)} type="url" />
          </div>

          <div className={"admin__row"}>
            <label className={"admin__checkbox"}>
              <input type="checkbox" checked={featured} onChange={(e) => setFeatured(e.target.checked)} />
              Featured
            </label>
            <label className={"admin__checkbox"}>
              <input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} />
              Published
            </label>
          </div>

          <div className={"admin__field"}>
            <label className={"admin__label"}>Images</label>
            <label>
              <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploading} />
              <span className="inline-block">
                <IconButton icon={<Upload size={18} />} tooltip="Upload Image" variant="ghost" type="button" />
              </span>
            </label>
            <div className={"admin__previews"}>
              {images.map((img) => (
                <img key={img.fileId} src={getMediaUrl(img.fileId)} alt="" className={"admin__preview"} />
              ))}
            </div>
          </div>

          <div className={"admin__field"}>
            <label className={"admin__label"}>Video</label>
            <label>
              <input type="file" accept="video/*" className="hidden" onChange={handleVideoUpload} disabled={uploading} />
              <span className="inline-block">
                <IconButton icon={<Upload size={18} />} tooltip="Upload Video" variant="ghost" type="button" />
              </span>
            </label>
            {video && <p className="admin__muted">{video.filename}</p>}
          </div>

          <div className={"admin__actions"}>
            {!isNew && (
              <IconButton icon={<Trash2 size={20} />} tooltip="Delete Project" variant="danger" type="button" onClick={handleDelete} />
            )}
            <IconButton icon={<Save size={20} />} tooltip="Save Project" type="submit" disabled={saving} />
          </div>
        </form>
      </div>
    </div>
  );
}
