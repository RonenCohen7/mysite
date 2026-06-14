import { useEffect, useState } from "react";
import { Bot, Plug, Layers, Globe, Database, Workflow, Play, type LucideIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/LayoutArea/Section/Section";
import { SectionHeading } from "@/components/UiArea/SectionHeading/SectionHeading";
import { useReducedMotion } from "@/Utils/useScrollSpy";
import { cn } from "@/Utils/cn";
import "./Services.css";

const iconMap: Record<string, LucideIcon> = { Bot, Plug, Layers, Globe, Database, Workflow };

const CARD_INTERVAL_MS = 2000;

interface ServiceCardProps {
  category: string;
  title: string;
  description: string;
  highlights: readonly string[];
  tags: readonly string[];
  icon: string;
}

function ServiceCard({ category, title, description, highlights, tags, icon }: ServiceCardProps) {
  const Icon = iconMap[icon] || Bot;

  return (
    <article className={"services__card"}>
      <div className={"services__card-inner"}>
        <div className={"services__card-glow"} aria-hidden="true" />

        <div className={"services__card-header"}>
          <span className={"services__category"}>{category}</span>
          <div className={"services__icon-wrap"}>
            <Icon size={22} strokeWidth={1.75} />
          </div>
        </div>

        <h3 className={"services__title"}>{title}</h3>
        <p className={"services__desc"}>{description}</p>

        <ul className={"services__highlights"}>
          {highlights.map((item) => (
            <li key={item} className={"services__highlight-item"}>
              <span className={"services__highlight-dot"} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className={"services__tags"}>
          {tags.map((tag) => (
            <span key={tag} className={"services__tag"}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Services() {
  const { t, dir } = useLanguage();
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const service = t.services[active];
  const enterX = dir === "rtl" ? -48 : 48;
  const exitX = dir === "rtl" ? 48 : -48;

  useEffect(() => {
    if (reduced || paused) return;
    const id = window.setInterval(() => {
      setActive((index) => (index + 1) % t.services.length);
    }, CARD_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduced, paused, t.services.length]);

  return (
    <Section id="services">
      <SectionHeading label={t.sections.services.label} subtitle={t.sections.services.subtitle} />

      {reduced ? (
        <div className={"services__static-grid"}>
          {t.services.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
      ) : (
        <div
          className={"services__showcase"}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className={cn(
              "services__video-slot",
              dir === "rtl" ? "services__video-slot services__video-slot--rtl" : "services__video-slot services__video-slot--ltr"
            )}
            aria-hidden="true"
          >
            <div className={"services__video-placeholder"}>
              <div className={"services__video-icon"}>
                <Play size={28} className="ms-1" />
              </div>
              <p className={"services__video-label"}>{t.servicesShowcase.videoSoon}</p>
              <p className={"services__video-hint"}>{service.title}</p>
            </div>
          </div>

          <div
            className={cn(
              "services__card-stage",
              dir === "rtl" ? "services__card-stage services__card-stage--rtl" : "services__card-stage services__card-stage--ltr"
            )}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={service.title}
                className={"services__card-wrap"}
                initial={{ opacity: 0, x: enterX, scale: 0.94, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: exitX, scale: 0.94, filter: "blur(6px)" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <ServiceCard {...service} />
              </motion.div>
            </AnimatePresence>

            <div className={"services__dots"} role="tablist" aria-label={t.servicesShowcase.carouselLabel}>
              {t.services.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={item.title}
                  className={cn("services__dot", index === active && "services__dot--active")}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
