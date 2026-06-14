export type TechIconSource =
  | { type: "simple"; slug: string; color?: string }
  | { type: "custom"; id: "cursor" | "deepseek" | "gpt" };

export type TechStackId =
  | "react"
  | "typescript"
  | "nodejs"
  | "python"
  | "fastapi"
  | "mongodb"
  | "mysql"
  | "postgresql"
  | "docker"
  | "linux"
  | "openai"
  | "git"
  | "aws"
  | "claude"
  | "cursor"
  | "gpt"
  | "deepseek"
  | "n8n";

export interface TechStackItem {
  id: TechStackId;
  name: string;
  icon: TechIconSource;
}

export const techStackItems: TechStackItem[] = [
  { id: "react", name: "React", icon: { type: "simple", slug: "react", color: "61DAFB" } },
  { id: "typescript", name: "TypeScript", icon: { type: "simple", slug: "typescript", color: "3178C6" } },
  { id: "nodejs", name: "Node.js", icon: { type: "simple", slug: "nodedotjs", color: "339933" } },
  { id: "python", name: "Python", icon: { type: "simple", slug: "python", color: "3776AB" } },
  { id: "fastapi", name: "FastAPI", icon: { type: "simple", slug: "fastapi", color: "009688" } },
  { id: "mongodb", name: "MongoDB", icon: { type: "simple", slug: "mongodb", color: "47A248" } },
  { id: "mysql", name: "MySQL", icon: { type: "simple", slug: "mysql", color: "4479A1" } },
  { id: "postgresql", name: "PostgreSQL", icon: { type: "simple", slug: "postgresql", color: "4169E1" } },
  { id: "docker", name: "Docker", icon: { type: "simple", slug: "docker", color: "2496ED" } },
  { id: "linux", name: "Linux", icon: { type: "simple", slug: "linux", color: "FCC624" } },
  { id: "openai", name: "OpenAI", icon: { type: "simple", slug: "openai", color: "412991" } },
  { id: "git", name: "Git", icon: { type: "simple", slug: "git", color: "F05032" } },
  { id: "aws", name: "AWS", icon: { type: "simple", slug: "amazonaws", color: "FF9900" } },
  { id: "claude", name: "Claude", icon: { type: "simple", slug: "anthropic", color: "191919" } },
  { id: "cursor", name: "Cursor", icon: { type: "custom", id: "cursor" } },
  { id: "gpt", name: "GPT", icon: { type: "custom", id: "gpt" } },
  { id: "deepseek", name: "DeepSeek", icon: { type: "custom", id: "deepseek" } },
  { id: "n8n", name: "n8n", icon: { type: "simple", slug: "n8n", color: "EA4B71" } },
];
