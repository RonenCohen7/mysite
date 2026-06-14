import { ObjectId } from "mongodb";
import { Readable } from "stream";
import { fileTypeFromBuffer } from "file-type";
import { getGridFS } from "../server/db.js";
import { randomUUID } from "crypto";

const ALLOWED_IMAGE = ["image/jpeg", "image/png", "image/webp"];
const ALLOWED_VIDEO = ["video/mp4", "video/webm"];
const MAX_IMAGE = 10 * 1024 * 1024;
const MAX_VIDEO = 50 * 1024 * 1024;

export async function uploadMedia(
  buffer: Buffer,
  originalName: string,
  kind: "image" | "video"
): Promise<{ fileId: string; filename: string; contentType: string; size: number }> {
  const maxSize = kind === "video" ? MAX_VIDEO : MAX_IMAGE;
  if (buffer.length > maxSize) {
    throw new Error(`File too large. Max ${kind === "video" ? "50MB" : "10MB"}`);
  }

  const detected = await fileTypeFromBuffer(buffer);
  const allowed = kind === "video" ? ALLOWED_VIDEO : ALLOWED_IMAGE;
  if (!detected || !allowed.includes(detected.mime)) {
    throw new Error("Invalid file type");
  }

  const ext = detected.ext;
  const filename = `${randomUUID()}.${ext}`;
  const bucket = getGridFS();

  return new Promise((resolve, reject) => {
    const uploadStream = bucket.openUploadStream(filename, {
      metadata: { originalName, contentType: detected.mime },
    });
    Readable.from(buffer)
      .pipe(uploadStream)
      .on("error", reject)
      .on("finish", () => {
        resolve({
          fileId: uploadStream.id.toString(),
          filename,
          contentType: detected.mime,
          size: buffer.length,
        });
      });
  });
}

export function getMediaStream(fileId: string) {
  if (!ObjectId.isValid(fileId)) return null;
  const bucket = getGridFS();
  return bucket.openDownloadStream(new ObjectId(fileId));
}

export async function deleteMedia(fileId: string): Promise<void> {
  if (!ObjectId.isValid(fileId)) return;
  const bucket = getGridFS();
  try {
    await bucket.delete(new ObjectId(fileId));
  } catch {
    /* ignore */
  }
}
