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
  titleHe?: string;
  slug: string;
  description: string;
  descriptionHe?: string;
  /** What the business needed / the requirement */
  challenge?: string;
  challengeHe?: string;
  /** What was built */
  solution?: string;
  solutionHe?: string;
  /** Measurable or qualitative result */
  outcome?: string;
  outcomeHe?: string;
  industry?: string;
  industryHe?: string;
  clientName?: string;
  /** Public static cover path e.g. /projects/foo.jpg */
  coverUrl?: string;
  /** Extra public screenshot paths for the case-study gallery */
  galleryUrls?: string[];
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
  titleHe?: string;
  slug?: string;
  description: string;
  descriptionHe?: string;
  challenge?: string;
  challengeHe?: string;
  solution?: string;
  solutionHe?: string;
  outcome?: string;
  outcomeHe?: string;
  industry?: string;
  industryHe?: string;
  clientName?: string;
  coverUrl?: string;
  galleryUrls?: string[];
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
