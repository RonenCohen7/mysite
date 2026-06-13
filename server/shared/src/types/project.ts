export interface ProjectImage {
  fileId: string;
  filename: string;
  order: number;
}

export interface ProjectVideo {
  fileId: string;
  filename: string;
}

export interface Project {
  _id: string;
  title: string;
  slug: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  images: ProjectImage[];
  video?: ProjectVideo;
  featured: boolean;
  published: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProjectInput {
  title: string;
  slug?: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  images?: ProjectImage[];
  video?: ProjectVideo;
  featured?: boolean;
  published?: boolean;
  order?: number;
}

export interface UpdateProjectInput extends Partial<CreateProjectInput> {}
