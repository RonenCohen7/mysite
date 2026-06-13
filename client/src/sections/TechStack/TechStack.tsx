import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { techStackItems } from "@/config/techStack";
import type { TechStackId } from "@/config/techStack";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechIcon } from "@/components/ui/TechIcon";
import { Tooltip } from "@/components/ui/Tooltip";
import { useReducedMotion } from "@/hooks/useScrollSpy";
import { cn } from "@/utils/cn";
import { techStackStyles } from "./TechStack.styles";

const ALL_IDS = techStackItems.map((item) => item.id);
const FLASH_EVERY_SECONDS = 10;

function pickRandomIds(): Set<TechStackId> {
  const count = Math.random() < 0.5 ? 2 : 3;
  const shuffled = [...techStackItems].sort(() => Math.random() - 0.5);
  return new Set(shuffled.slice(0, count).map((item) => item.id));
}

export function TechStack() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const [visibleIds, setVisibleIds] = useState<Set<TechStackId>>(() => pickRandomIds());
  const [flashAll, setFlashAll] = useState(false);
  const secondsRef = useRef(0);

  useEffect(() => {
    if (reduced) {
      setVisibleIds(new Set(ALL_IDS));
      setFlashAll(false);
      return;
    }

    const id = window.setInterval(() => {
      secondsRef.current += 1;

      if (secondsRef.current % FLASH_EVERY_SECONDS === 0) {
        setFlashAll(true);
        setVisibleIds(new Set(ALL_IDS));
      } else {
        setFlashAll(false);
        setVisibleIds(pickRandomIds());
      }
    }, 1000);

    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <Section id="tech-stack">
      <SectionHeading label={t.sections.techStack.label} subtitle={t.sections.techStack.subtitle} />
      <div className={cn(techStackStyles.wall, flashAll && techStackStyles.wallFlash)}>
        {techStackItems.map((tech) => {
          const visible = visibleIds.has(tech.id);

          return (
            <Tooltip
              key={tech.id}
              label={t.techTooltips[tech.id]}
              placement="top"
              wide
            >
              <motion.div
                className={cn(
                  techStackStyles.pillSlot,
                  !visible && techStackStyles.pillSlotHidden
                )}
                animate={
                  visible
                    ? { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
                    : { opacity: 0, scale: 0.82, y: 10, filter: "blur(4px)" }
                }
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={cn(techStackStyles.pill, visible && flashAll && techStackStyles.pillFlash)}>
                  <div className={techStackStyles.pillInner}>
                    <TechIcon icon={tech.icon} name={tech.name} />
                  </div>
                </div>
              </motion.div>
            </Tooltip>
          );
        })}
      </div>
    </Section>
  );
}
