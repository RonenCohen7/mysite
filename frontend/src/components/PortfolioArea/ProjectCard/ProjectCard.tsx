import type { MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@mysite/shared";
import { useLanguage } from "@/i18n/LanguageContext";
import { GlassCard } from "@/components/UiArea/GlassCard/GlassCard";
import { getMediaUrl } from "@/Services/ApiService";
import { getProjectGallery } from "@/data/caseStudies";
import "../Portfolio/Portfolio.css";

function pick(locale: "en" | "he", en?: string, he?: string): string | undefined {
  if (locale === "he") return he || en;
  return en || he;
}

const SITE_CTA_SLUGS = new Set(["tmore-talent-pool", "vacation-abroad"]);

export function ProjectCard({ project }: { project: Project }) {
  const { t, locale } = useLanguage();
  const gallery = getProjectGallery(project, getMediaUrl);
  const coverUrl = project.coverUrl || gallery[0] || null;
  const title = pick(locale, project.title, project.titleHe) || project.title;
  const liveHref = project.demoUrl;
  const cta = SITE_CTA_SLUGS.has(project.slug) ? t.portfolio.visitSite : t.portfolio.enterSystem;

  function stop(e: MouseEvent) {
    e.stopPropagation();
  }

  return (
    <GlassCard className="portfolio__card">
      <div className="portfolio__image-wrap">
        {coverUrl ? (
          <img src={coverUrl} alt={title} className="portfolio__image" loading="lazy" />
        ) : (
          <div className="portfolio__placeholder">
            <span className="portfolio__placeholder-letter">{title.charAt(0)}</span>
          </div>
        )}
      </div>

      <h3 className="portfolio__title">{title}</h3>

      {liveHref ? (
        <a
          className="portfolio__live-cta"
          href={liveHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={stop}
        >
          <span>{cta}</span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      ) : null}
    </GlassCard>
  );
}
