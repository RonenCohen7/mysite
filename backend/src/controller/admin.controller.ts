import { Router } from "express";
import multer from "multer";
import { createProjectSchema, updateProjectSchema } from "@mysite/shared";
import { requireAuth } from "../server/middleware/auth.js";
import { adminRobotsHeader } from "../server/middleware/security.js";
import { optionalCsrfProtection } from "../server/middleware/csrf.js";
import {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
  getProjectById,
} from "../services/project.service.js";
import { uploadMedia, getMediaStream } from "../services/upload.service.js";
import { sanitizeObject } from "../utils/sanitize.js";

const router = Router();
router.use(adminRobotsHeader);
router.use(requireAuth);

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 50 * 1024 * 1024, files: 1 },
});

router.get("/projects", async (_req, res) => {
  try {
    const projects = await getAllProjects();
    res.json({ success: true, data: projects });
  } catch {
    res.status(500).json({ success: false, error: "Failed to fetch projects" });
  }
});

router.get("/projects/:id", async (req, res) => {
  const project = await getProjectById(String(req.params.id));
  if (!project) {
    res.status(404).json({ success: false, error: "Not found" });
    return;
  }
  res.json({ success: true, data: project });
});

router.post("/projects", optionalCsrfProtection, async (req, res) => {
  try {
    const parsed = createProjectSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ success: false, error: parsed.error.errors[0]?.message || "Invalid data" });
      return;
    }
    const project = await createProject(sanitizeObject(parsed.data as Record<string, unknown>) as typeof parsed.data);
    res.status(201).json({ success: true, data: project });
  } catch (err) {
    res.status(500).json({ success: false, error: err instanceof Error ? err.message : "Create failed" });
  }
});

router.put("/projects/:id", optionalCsrfProtection, async (req, res) => {
  try {
    const parsed = updateProjectSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ success: false, error: "Invalid data" });
      return;
    }
    const project = await updateProject(String(req.params.id), parsed.data);
    if (!project) {
      res.status(404).json({ success: false, error: "Not found" });
      return;
    }
    res.json({ success: true, data: project });
  } catch {
    res.status(500).json({ success: false, error: "Update failed" });
  }
});

router.delete("/projects/:id", optionalCsrfProtection, async (req, res) => {
  try {
    const deleted = await deleteProject(String(req.params.id));
    if (!deleted) {
      res.status(404).json({ success: false, error: "Not found" });
      return;
    }
    res.json({ success: true });
  } catch {
    res.status(500).json({ success: false, error: "Delete failed" });
  }
});

router.post("/upload", optionalCsrfProtection, upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      res.status(400).json({ success: false, error: "No file uploaded" });
      return;
    }
    const kind = (req.body.kind as string) === "video" ? "video" : "image";
    const result = await uploadMedia(req.file.buffer, req.file.originalname, kind);
    res.json({ success: true, data: result });
  } catch (err) {
    res.status(400).json({ success: false, error: err instanceof Error ? err.message : "Upload failed" });
  }
});

export default router;

// Media route separate
export const mediaRouter = Router();

mediaRouter.get("/:fileId", async (req, res) => {
  try {
    const stream = getMediaStream(req.params.fileId);
    if (!stream) {
      res.status(404).json({ success: false, error: "File not found" });
      return;
    }
    stream.on("error", () => res.status(404).end());
    stream.pipe(res);
  } catch {
    res.status(404).json({ success: false, error: "File not found" });
  }
});
