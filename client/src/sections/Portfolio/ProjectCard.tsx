import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@mysite/shared";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { IconButton } from "@/components/ui/IconButton";
import { getMediaUrl } from "@/services/api";
import { portfolioStyles } from "./Portfolio.styles";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cover = project.images?.[0];
  const coverUrl = cover ? getMediaUrl(cover.fileId) : null;

  return (
    <GlassCard className={portfolioStyles.card} hover>
      <div className={portfolioStyles.imageWrap}>
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={project.title}
            className={portfolioStyles.image}
            loading="lazy"
          />
        ) : (
          <div className={portfolioStyles.placeholder}>
            <span className="text-4xl font-bold">{project.title.charAt(0)}</span>
          </div>
        )}
      </div>
      <h3 className={portfolioStyles.title}>{project.title}</h3>
      <p className={portfolioStyles.desc}>{project.description}</p>
      <div className={portfolioStyles.tags}>
        {project.techStack.slice(0, 4).map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
      <div className={portfolioStyles.actions}>
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <IconButton icon={<ExternalLink size={18} />} tooltip="Live Demo" />
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <IconButton icon={<Github size={18} />} tooltip="View on GitHub" variant="ghost" />
          </a>
        )}
      </div>
    </GlassCard>
  );
}
