import { useState, type MouseEvent, type KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@mysite/shared";
import { useLanguage } from "@/i18n/LanguageContext";
import { GlassCard } from "@/components/UiArea/GlassCard/GlassCard";
import { Badge } from "@/components/UiArea/Badge/Badge";
import { IconButton } from "@/components/UiArea/IconButton/IconButton";
import { getMediaUrl } from "@/Services/ApiService";
import { getProjectGallery } from "@/data/caseStudies";
import { cn } from "@/Utils/cn";
import "../Portfolio/Portfolio.css";

function pick(locale: "en" | "he", en?: string, he?: string): string | undefined {
  if (locale === "he") return he || en;
  return en || he;
}

export function ProjectCard({ project }: { project: Project }) {
  const { t, locale } = useLanguage();
  const navigate = useNavigate();
  const gallery = getProjectGallery(project, getMediaUrl);
  const [activeIndex, setActiveIndex] = useState(0);
  const coverUrl = gallery[activeIndex] || gallery[0] || null;

  const title = pick(locale, project.title, project.titleHe) || project.title;
  const description = pick(locale, project.description, project.descriptionHe) || project.description;
  const challenge = pick(locale, project.challenge, project.challengeHe);
  const solution = pick(locale, project.solution, project.solutionHe);
  const outcome = pick(locale, project.outcome, project.outcomeHe);
  const industry = pick(locale, project.industry, project.industryHe);

  function openProject() {
    navigate(`/projects/${project.slug}`);
  }

  function onCardKeyDown(e: KeyboardEvent<HTMLElement>) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openProject();
    }
  }

  function stop(e: MouseEvent) {
    e.stopPropagation();
  }

  return (
    <GlassCard
      className={"portfolio__card portfolio__card--clickable"}
      hover
      role="link"
      tabIndex={0}
      aria-label={title}
      onClick={openProject}
      onKeyDown={onCardKeyDown}
    >
      <div className={"portfolio__image-wrap"}>
        {coverUrl ? (
          <img src={coverUrl} alt={title} className={"portfolio__image"} loading="lazy" />
        ) : (
          <div className={"portfolio__placeholder"}>
            <span className="portfolio__placeholder-letter">{title.charAt(0)}</span>
          </div>
        )}
        {industry && <span className="portfolio__industry">{industry}</span>}
      </div>

      {gallery.length > 1 && (
        <div className="portfolio__thumbs" role="list">
          {gallery.slice(0, 5).map((url, i) => (
            <button
              key={`${url}-${i}`}
              type="button"
              className={cn("portfolio__thumb", i === activeIndex && "portfolio__thumb--active")}
              onClick={(e) => {
                stop(e);
                setActiveIndex(i);
              }}
              aria-label={`${t.portfolio.screenshot} ${i + 1}`}
            >
              <img src={url} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}

      <h3 className={"portfolio__title"}>{title}</h3>
      <p className={"portfolio__desc"}>{description}</p>

      {(challenge || solution || outcome) && (
        <div className="portfolio__story">
          {challenge && (
            <div className="portfolio__story-block">
              <span className="portfolio__story-label">{t.portfolio.challenge}</span>
              <p className="portfolio__story-text">{challenge}</p>
            </div>
          )}
          {solution && (
            <div className="portfolio__story-block">
              <span className="portfolio__story-label">{t.portfolio.solution}</span>
              <p className="portfolio__story-text">{solution}</p>
            </div>
          )}
          {outcome && (
            <div className="portfolio__story-block portfolio__story-block--outcome">
              <span className="portfolio__story-label">{t.portfolio.outcome}</span>
              <p className="portfolio__story-text">{outcome}</p>
            </div>
          )}
        </div>
      )}

      <div className={"portfolio__tags"}>
        {project.techStack.slice(0, 6).map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      {(project.demoUrl || project.githubUrl) && (
        <div className={"portfolio__actions"} onClick={stop}>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" onClick={stop}>
              <IconButton icon={<ExternalLink size={18} />} tooltip={t.portfolio.demo} />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={stop}>
              <IconButton icon={<Github size={18} />} tooltip={t.portfolio.github} variant="ghost" />
            </a>
          )}
        </div>
      )}
    </GlassCard>
  );
}
