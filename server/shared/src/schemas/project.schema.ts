import { z } from "zod";

export const projectImageSchema = z.object({
  fileId: z.string().min(1),
  filename: z.string().min(1),
  order: z.number().int().min(0),
});

export const projectVideoSchema = z.object({
  fileId: z.string().min(1),
  filename: z.string().min(1),
});

export const createProjectSchema = z.object({
  title: z.string().min(1).max(200),
  slug: z.string().min(1).max(200).optional(),
  description: z.string().min(1).max(10000),
  techStack: z.array(z.string().min(1).max(50)).max(20),
  demoUrl: z.string().url().optional().or(z.literal("")),
  githubUrl: z.string().url().optional().or(z.literal("")),
  images: z.array(projectImageSchema).max(10).optional(),
  video: projectVideoSchema.optional(),
  featured: z.boolean().optional(),
  published: z.boolean().optional(),
  order: z.number().int().min(0).optional(),
});

export const updateProjectSchema = createProjectSchema.partial();

export type CreateProjectSchema = z.infer<typeof createProjectSchema>;
export type UpdateProjectSchema = z.infer<typeof updateProjectSchema>;
