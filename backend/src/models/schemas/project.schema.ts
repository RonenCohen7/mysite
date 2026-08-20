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

const optionalText = z.string().max(5000).optional().or(z.literal(""));

export const createProjectSchema = z.object({
  title: z.string().min(1).max(200),
  titleHe: z.string().max(200).optional().or(z.literal("")),
  slug: z.string().min(1).max(200).optional(),
  description: z.string().min(1).max(10000),
  descriptionHe: optionalText,
  challenge: optionalText,
  challengeHe: optionalText,
  solution: optionalText,
  solutionHe: optionalText,
  outcome: optionalText,
  outcomeHe: optionalText,
  industry: z.string().max(120).optional().or(z.literal("")),
  industryHe: z.string().max(120).optional().or(z.literal("")),
  clientName: z.string().max(120).optional().or(z.literal("")),
  coverUrl: z.string().max(500).optional().or(z.literal("")),
  galleryUrls: z.array(z.string().max(500)).max(12).optional(),
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
