import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@mysite/shared";
import { useLanguage } from "@/i18n/LanguageContext";
import { getProjects, getMediaUrl } from "@/Services/ApiService";
import { findStoryProjectBySlug, getProjectGallery } from "@/data/caseStudies";
import { Navbar } from "@/components/LayoutArea/Navbar/Navbar";
import { Footer } from "@/components/LayoutArea/Footer/Footer";
import { Badge } from "@/components/UiArea/Badge/Badge";
import { IconButton } from "@/components/UiArea/IconButton/IconButton";
import { cn } from "@/Utils/cn";
import "./ProjectDetail.css";

function pick(locale: "en" | "he", en?: string, he?: string): string | undefined {
  if (locale === "he") return he || en;
  return en || he;
}

export function ProjectDetail() {
  const { slug = "" } = useParams();
  const { t, locale, dir } = useLanguage();
  const BackIcon = dir === "rtl" ? ArrowRight : ArrowLeft;

  const [project, setProject] = useState<Project | undefined>(() => findStoryProjectBySlug(slug));
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveIndex(0);
    setLoading(true);
    getProjects()
      .then((api) => setProject(findStoryProjectBySlug(slug, api)))
      .catch(() => setProject(findStoryProjectBySlug(slug)))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading && !project) {
    return (
      <>
        <Navbar />
        <main className="project-detail">
          <p className="project-detail__status">{t.portfolio.loading}</p>
        </main>
        <Footer />
      </>
    );
  }

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="project-detail">
          <div className="project-detail__container">
            <Link to="/#portfolio" className="project-detail__back">
              <BackIcon size={16} />
              {t.portfolio.backToProjects}
            </Link>
            <p className="project-detail__status">{t.portfolio.empty}</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const gallery = getProjectGallery(project, getMediaUrl);
  const activeImage = gallery[activeIndex] || gallery[0];
  const title = pick(locale, project.title, project.titleHe) || project.title;
  const description = pick(locale, project.description, project.descriptionHe) || project.description;
  const challenge = pick(locale, project.challenge, project.challengeHe);
  const solution = pick(locale, project.solution, project.solutionHe);
  const outcome = pick(locale, project.outcome, project.outcomeHe);
  const industry = pick(locale, project.industry, project.industryHe);

  return (
    <>
      <Navbar />
      <main className="project-detail">
        <div className="project-detail__container">
          <Link to="/#portfolio" className="project-detail__back">
            <BackIcon size={16} />
            {t.portfolio.backToProjects}
          </Link>

          <header className="project-detail__header">
            {industry && <span className="project-detail__industry">{industry}</span>}
            <h1 className="project-detail__title">{title}</h1>
            <p className="project-detail__desc">{description}</p>
            {(project.demoUrl || project.githubUrl) && (
              <div className="project-detail__actions">
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
            )}
          </header>

          {activeImage && (
            <div className="project-detail__hero">
              <img src={activeImage} alt={`${title} — ${t.portfolio.screenshot} ${activeIndex + 1}`} />
            </div>
          )}

          {gallery.length > 1 && (
            <div className="project-detail__thumbs" role="list">
              {gallery.map((url, i) => (
                <button
                  key={`${url}-${i}`}
                  type="button"
                  className={cn("project-detail__thumb", i === activeIndex && "project-detail__thumb--active")}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`${t.portfolio.screenshot} ${i + 1}`}
                >
                  <img src={url} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}

          {gallery.length > 1 && (
            <section className="project-detail__gallery" aria-label={t.portfolio.gallery}>
              {gallery.map((url, i) => (
                <figure key={`full-${url}-${i}`} className="project-detail__shot">
                  <img src={url} alt={`${title} — ${t.portfolio.screenshot} ${i + 1}`} loading="lazy" />
                </figure>
              ))}
            </section>
          )}

          {(challenge || solution || outcome) && (
            <section className="project-detail__story">
              {challenge && (
                <div className="project-detail__story-block">
                  <span className="project-detail__story-label">{t.portfolio.challenge}</span>
                  <p>{challenge}</p>
                </div>
              )}
              {solution && (
                <div className="project-detail__story-block">
                  <span className="project-detail__story-label">{t.portfolio.solution}</span>
                  <p>{solution}</p>
                </div>
              )}
              {outcome && (
                <div className="project-detail__story-block project-detail__story-block--outcome">
                  <span className="project-detail__story-label">{t.portfolio.outcome}</span>
                  <p>{outcome}</p>
                </div>
              )}
            </section>
          )}

          {project.techStack.length > 0 && (
            <div className="project-detail__tags">
              {project.techStack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
