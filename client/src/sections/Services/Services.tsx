import { useEffect, useState } from "react";
import { Bot, Plug, Layers, Globe, Play, type LucideIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReducedMotion } from "@/hooks/useScrollSpy";
import { cn } from "@/utils/cn";
import { servicesStyles } from "./Services.styles";

const iconMap: Record<string, LucideIcon> = { Bot, Plug, Layers, Globe };

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
    <article className={servicesStyles.card}>
      <div className={servicesStyles.cardInner}>
        <div className={servicesStyles.cardGlow} aria-hidden="true" />

        <div className={servicesStyles.cardHeader}>
          <span className={servicesStyles.category}>{category}</span>
          <div className={servicesStyles.iconWrap}>
            <Icon size={22} strokeWidth={1.75} />
          </div>
        </div>

        <h3 className={servicesStyles.title}>{title}</h3>
        <p className={servicesStyles.desc}>{description}</p>

        <ul className={servicesStyles.highlights}>
          {highlights.map((item) => (
            <li key={item} className={servicesStyles.highlightItem}>
              <span className={servicesStyles.highlightDot} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className={servicesStyles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={servicesStyles.tag}>
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
        <div className={servicesStyles.staticGrid}>
          {t.services.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
      ) : (
        <div
          className={servicesStyles.showcase}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className={cn(
              servicesStyles.videoSlot,
              dir === "rtl" ? servicesStyles.videoSlotRtl : servicesStyles.videoSlotLtr
            )}
            aria-hidden="true"
          >
            <div className={servicesStyles.videoPlaceholder}>
              <div className={servicesStyles.videoIcon}>
                <Play size={28} className="ms-1" />
              </div>
              <p className={servicesStyles.videoLabel}>{t.servicesShowcase.videoSoon}</p>
              <p className={servicesStyles.videoHint}>{service.title}</p>
            </div>
          </div>

          <div
            className={cn(
              servicesStyles.cardStage,
              dir === "rtl" ? servicesStyles.cardStageRtl : servicesStyles.cardStageLtr
            )}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={service.title}
                className={servicesStyles.cardWrap}
                initial={{ opacity: 0, x: enterX, scale: 0.94, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: exitX, scale: 0.94, filter: "blur(6px)" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <ServiceCard {...service} />
              </motion.div>
            </AnimatePresence>

            <div className={servicesStyles.dots} role="tablist" aria-label={t.servicesShowcase.carouselLabel}>
              {t.services.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={item.title}
                  className={cn(servicesStyles.dot, index === active && servicesStyles.dotActive)}
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
