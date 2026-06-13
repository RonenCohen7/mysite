import { ObjectId } from "mongodb";
import { getDb, getGridFS } from "../db.js";
import { sanitizeText, slugify } from "../utils/sanitize.js";
import type { Project, CreateProjectInput, UpdateProjectInput } from "@mysite/shared";

function mapProject(doc: Record<string, unknown>): Project {
  return {
    _id: String(doc._id),
    title: doc.title as string,
    slug: doc.slug as string,
    description: doc.description as string,
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
    slug,
    description: sanitizeText(input.description),
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
  if (input.slug) update.slug = input.slug;
  if (input.description) update.description = sanitizeText(input.description);
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
