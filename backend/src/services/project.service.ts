import { ObjectId } from "mongodb";
import { getDb, getGridFS } from "../server/db.js";
import { sanitizeText, slugify } from "../utils/sanitize.js";
import type { Project, CreateProjectInput, UpdateProjectInput } from "@mysite/shared";

function opt(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed || undefined;
}

function mapProject(doc: Record<string, unknown>): Project {
  return {
    _id: String(doc._id),
    title: doc.title as string,
    titleHe: opt(doc.titleHe),
    slug: doc.slug as string,
    description: doc.description as string,
    descriptionHe: opt(doc.descriptionHe),
    challenge: opt(doc.challenge),
    challengeHe: opt(doc.challengeHe),
    solution: opt(doc.solution),
    solutionHe: opt(doc.solutionHe),
    outcome: opt(doc.outcome),
    outcomeHe: opt(doc.outcomeHe),
    industry: opt(doc.industry),
    industryHe: opt(doc.industryHe),
    clientName: opt(doc.clientName),
    coverUrl: opt(doc.coverUrl),
    galleryUrls: Array.isArray(doc.galleryUrls)
      ? (doc.galleryUrls as string[]).map((u) => String(u).trim()).filter(Boolean)
      : undefined,
    techStack: (doc.techStack as string[]) || [],
    demoUrl: doc.demoUrl as string | undefined,
    githubUrl: doc.githubUrl as string | undefined,
    images: (doc.images as Project["images"]) || [],
    video: doc.video as Project["video"],
    featured: Boolean(doc.featured),
    published: Boolean(doc.published),
    order: (doc.order as number) ?? 0,
    createdAt: (doc.createdAt as Date)?.toISOString?.() || String(doc.createdAt),
    updatedAt: (doc.updatedAt as Date)?.toISOString?.() || String(doc.updatedAt),
  };
}

function sanitizeOptional(value?: string): string | undefined {
  if (!value) return undefined;
  const cleaned = sanitizeText(value).trim();
  return cleaned || undefined;
}

export async function getPublishedProjects(): Promise<Project[]> {
  const db = getDb();
  const docs = await db
    .collection("projects")
    .find({ published: true })
    .sort({ order: 1, createdAt: -1 })
    .toArray();
  return docs.map(mapProject);
}

export async function getAllProjects(): Promise<Project[]> {
  const db = getDb();
  const docs = await db.collection("projects").find({}).sort({ order: 1, createdAt: -1 }).toArray();
  return docs.map(mapProject);
}

export async function getProjectById(id: string): Promise<Project | null> {
  if (!ObjectId.isValid(id)) return null;
  const db = getDb();
  const doc = await db.collection("projects").findOne({ _id: new ObjectId(id) });
  return doc ? mapProject(doc) : null;
}

export async function createProject(input: CreateProjectInput): Promise<Project> {
  const db = getDb();
  const now = new Date();
  const slug = input.slug || slugify(input.title);
  const doc = {
    title: sanitizeText(input.title),
    titleHe: sanitizeOptional(input.titleHe),
    slug,
    description: sanitizeText(input.description),
    descriptionHe: sanitizeOptional(input.descriptionHe),
    challenge: sanitizeOptional(input.challenge),
    challengeHe: sanitizeOptional(input.challengeHe),
    solution: sanitizeOptional(input.solution),
    solutionHe: sanitizeOptional(input.solutionHe),
    outcome: sanitizeOptional(input.outcome),
    outcomeHe: sanitizeOptional(input.outcomeHe),
    industry: sanitizeOptional(input.industry),
    industryHe: sanitizeOptional(input.industryHe),
    clientName: sanitizeOptional(input.clientName),
    coverUrl: sanitizeOptional(input.coverUrl),
    galleryUrls: input.galleryUrls?.map((u) => sanitizeText(u).trim()).filter(Boolean),
    techStack: input.techStack.map(sanitizeText),
    demoUrl: input.demoUrl || undefined,
    githubUrl: input.githubUrl || undefined,
    images: input.images || [],
    video: input.video,
    featured: input.featured ?? false,
    published: input.published ?? false,
    order: input.order ?? 0,
    createdAt: now,
    updatedAt: now,
  };
  const result = await db.collection("projects").insertOne(doc);
  return mapProject({ ...doc, _id: result.insertedId });
}

export async function updateProject(id: string, input: UpdateProjectInput): Promise<Project | null> {
  if (!ObjectId.isValid(id)) return null;
  const db = getDb();
  const update: Record<string, unknown> = { updatedAt: new Date() };
  if (input.title) update.title = sanitizeText(input.title);
  if (input.titleHe !== undefined) update.titleHe = sanitizeOptional(input.titleHe);
  if (input.slug) update.slug = input.slug;
  if (input.description) update.description = sanitizeText(input.description);
  if (input.descriptionHe !== undefined) update.descriptionHe = sanitizeOptional(input.descriptionHe);
  if (input.challenge !== undefined) update.challenge = sanitizeOptional(input.challenge);
  if (input.challengeHe !== undefined) update.challengeHe = sanitizeOptional(input.challengeHe);
  if (input.solution !== undefined) update.solution = sanitizeOptional(input.solution);
  if (input.solutionHe !== undefined) update.solutionHe = sanitizeOptional(input.solutionHe);
  if (input.outcome !== undefined) update.outcome = sanitizeOptional(input.outcome);
  if (input.outcomeHe !== undefined) update.outcomeHe = sanitizeOptional(input.outcomeHe);
  if (input.industry !== undefined) update.industry = sanitizeOptional(input.industry);
  if (input.industryHe !== undefined) update.industryHe = sanitizeOptional(input.industryHe);
  if (input.clientName !== undefined) update.clientName = sanitizeOptional(input.clientName);
  if (input.coverUrl !== undefined) update.coverUrl = sanitizeOptional(input.coverUrl);
  if (input.galleryUrls !== undefined) {
    update.galleryUrls = input.galleryUrls.map((u) => sanitizeText(u).trim()).filter(Boolean);
  }
  if (input.techStack) update.techStack = input.techStack.map(sanitizeText);
  if (input.demoUrl !== undefined) update.demoUrl = input.demoUrl || undefined;
  if (input.githubUrl !== undefined) update.githubUrl = input.githubUrl || undefined;
  if (input.images) update.images = input.images;
  if (input.video !== undefined) update.video = input.video;
  if (input.featured !== undefined) update.featured = input.featured;
  if (input.published !== undefined) update.published = input.published;
  if (input.order !== undefined) update.order = input.order;

  const result = await db.collection("projects").findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: update },
    { returnDocument: "after" }
  );
  return result ? mapProject(result) : null;
}

export async function deleteProject(id: string): Promise<boolean> {
  if (!ObjectId.isValid(id)) return false;
  const db = getDb();
  const bucket = getGridFS();
  const project = await db.collection("projects").findOne({ _id: new ObjectId(id) });
  if (!project) return false;

  const fileIds: ObjectId[] = [];
  for (const img of (project.images as Project["images"]) || []) {
    if (ObjectId.isValid(img.fileId)) fileIds.push(new ObjectId(img.fileId));
  }
  if (project.video && ObjectId.isValid((project.video as Project["video"])!.fileId)) {
    fileIds.push(new ObjectId((project.video as Project["video"])!.fileId));
  }
  for (const fid of fileIds) {
    try {
      await bucket.delete(fid);
    } catch {
      /* ignore missing files */
    }
  }
  const result = await db.collection("projects").deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount === 1;
}
