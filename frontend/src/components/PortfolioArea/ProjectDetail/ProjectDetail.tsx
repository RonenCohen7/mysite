import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import type { Project } from "@mysite/shared";
import { useLanguage } from "@/i18n/LanguageContext";
import { getProjects, getMediaUrl } from "@/Services/ApiService";
import { findStoryProjectBySlug, getProjectGallery } from "@/data/caseStudies";
import { getExplainedScreens } from "@/data/galleryCaptions";
import { getProjectIcon } from "@/data/projectIcons";
import { Navbar } from "@/components/LayoutArea/Navbar/Navbar";
import { Footer } from "@/components/LayoutArea/Footer/Footer";
import { Badge } from "@/components/UiArea/Badge/Badge";
import { IconButton } from "@/components/UiArea/IconButton/IconButton";
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

  useEffect(() => {
    window.scrollTo(0, 0);
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
  const screens = getExplainedScreens(project.slug, gallery, locale);
  const title = pick(locale, project.title, project.titleHe) || project.title;
  const description = pick(locale, project.description, project.descriptionHe) || project.description;
  const challenge = pick(locale, project.challenge, project.challengeHe);
  const solution = pick(locale, project.solution, project.solutionHe);
  const outcome = pick(locale, project.outcome, project.outcomeHe);
  const industry = pick(locale, project.industry, project.industryHe);
  const ProjectIcon = getProjectIcon(project.slug);

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
            <div className="project-detail__kicker">
              <span className="project-detail__type-icon" aria-hidden="true">
                <ProjectIcon size={18} strokeWidth={1.75} />
              </span>
              {industry && <span className="project-detail__industry">{industry}</span>}
            </div>
            <h1 className="project-detail__title">{title}</h1>
            <p className="project-detail__desc">{description}</p>
            <div className="project-detail__actions">
              <Link to="/#contact">
                <IconButton icon={<Mail size={18} />} tooltip={t.nav.contact} variant="ghost" />
              </Link>
            </div>
          </header>

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

          {screens.length > 0 && (
            <section className="project-detail__screens" aria-label={t.portfolio.gallery}>
              <div className="project-detail__screens-head">
                <h2 className="project-detail__screens-title">{t.portfolio.screens}</h2>
                <p className="project-detail__screens-sub">{t.portfolio.screensSubtitle}</p>
              </div>
              {screens.map((screen, i) => (
                <figure key={`${screen.url}-${i}`} className="project-detail__pair">
                  <div className="project-detail__pair-media">
                    <img
                      src={screen.url}
                      alt={`${title} — ${screen.caption}`}
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </div>
                  <figcaption className="project-detail__pair-copy">
                    <span className="project-detail__pair-index">{String(i + 1).padStart(2, "0")}</span>
                    <p>{screen.caption}</p>
                  </figcaption>
                </figure>
              ))}
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
