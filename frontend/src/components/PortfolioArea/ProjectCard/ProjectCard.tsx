import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@mysite/shared";
import { useLanguage } from "@/i18n/LanguageContext";
import { GlassCard } from "@/components/UiArea/GlassCard/GlassCard";
import { Badge } from "@/components/UiArea/Badge/Badge";
import { IconButton } from "@/components/UiArea/IconButton/IconButton";
import { getMediaUrl } from "@/Services/ApiService";
import "../Portfolio/Portfolio.css";

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();
  const cover = project.images?.[0];
  const coverUrl = cover ? getMediaUrl(cover.fileId) : null;

  return (
    <GlassCard className={"portfolio__card"} hover>
      <div className={"portfolio__image-wrap"}>
        {coverUrl ? (
          <img src={coverUrl} alt={project.title} className={"portfolio__image"} loading="lazy" />
        ) : (
          <div className={"portfolio__placeholder"}>
            <span className="portfolio__placeholder-letter">{project.title.charAt(0)}</span>
          </div>
        )}
      </div>
      <h3 className={"portfolio__title"}>{project.title}</h3>
      <p className={"portfolio__desc"}>{project.description}</p>
      <div className={"portfolio__tags"}>
        {project.techStack.slice(0, 4).map((tech) => <Badge key={tech}>{tech}</Badge>)}
      </div>
      <div className={"portfolio__actions"}>
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <IconButton icon={<ExternalLink size={18} />} tooltip={t.portfolio.demo} />
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <IconButton icon={<Github size={18} />} tooltip={t.portfolio.github} variant="ghost" />
          </a>
        )}
      </div>
    </GlassCard>
  );
}
