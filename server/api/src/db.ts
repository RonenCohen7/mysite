import { MongoClient, Db, GridFSBucket } from "mongodb";
import { config } from "./config.js";

let client: MongoClient | null = null;
let db: Db | null = null;
let gridFS: GridFSBucket | null = null;

export async function connectDb(): Promise<Db> {
  if (db) return db;
  client = new MongoClient(config.mongoUri);
  await client.connect();
  db = client.db();
  gridFS = new GridFSBucket(db, { bucketName: "media" });
  await db.collection("projects").createIndex({ slug: 1 }, { unique: true });
  await db.collection("projects").createIndex({ published: 1, order: 1 });
  return db;
}

export function getDb(): Db {
  if (!db) throw new Error("Database not connected");
  return db;
}

export function getGridFS(): GridFSBucket {
  if (!gridFS) throw new Error("GridFS not initialized");
  return gridFS;
}

export async function closeDb(): Promise<void> {
  if (client) {
    await client.close();
    client = null;
    db = null;
    gridFS = null;
  }
}
