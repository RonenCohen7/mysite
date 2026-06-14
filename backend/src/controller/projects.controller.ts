import { Router } from "express";
import { getPublishedProjects, getProjectById } from "../services/project.service.js";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const projects = await getPublishedProjects();
    res.setHeader("Cache-Control", "public, max-age=300");
    res.json({ success: true, data: projects });
  } catch {
    res.status(500).json({ success: false, error: "Failed to fetch projects" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const project = await getProjectById(String(req.params.id));
    if (!project || !project.published) {
      res.status(404).json({ success: false, error: "Project not found" });
      return;
    }
    res.json({ success: true, data: project });
  } catch {
    res.status(500).json({ success: false, error: "Failed to fetch project" });
  }
});

export default router;
