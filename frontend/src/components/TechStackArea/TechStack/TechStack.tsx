import { motion } from "framer-motion";
import { techStackItems } from "@models/techStack";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/LayoutArea/Section/Section";
import { SectionHeading } from "@/components/UiArea/SectionHeading/SectionHeading";
import { TechIcon } from "@/components/UiArea/TechIcon/TechIcon";
import { Tooltip } from "@/components/UiArea/Tooltip/Tooltip";
import { useTechIconReveal } from "@/Utils/useTechIconReveal";
import { cn } from "@/Utils/cn";
import "./TechStack.css";

export function TechStack() {
  const { t } = useLanguage();
  const { visibleIds, flashAll, reduced } = useTechIconReveal();

  return (
    <Section id="tech-stack">
      <SectionHeading label={t.sections.techStack.label} subtitle={t.sections.techStack.subtitle} />
      <div className={cn("tech-stack__wall", flashAll && "tech-stack__wall--flash")}>
        {techStackItems.map((tech) => {
          const visible = reduced || visibleIds.has(tech.id);

          return (
            <Tooltip
              key={tech.id}
              label={t.techTooltips[tech.id]}
              placement="top"
              wide
            >
              <motion.div
                className={cn(
                  "tech-stack__pill-slot",
                  !visible && "tech-stack__pill-slot--hidden"
                )}
                animate={
                  visible
                    ? { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
                    : { opacity: 0, scale: 0.82, y: 10, filter: "blur(4px)" }
                }
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={cn("tech-stack__pill glass-card", visible && flashAll && "tech-stack__pill--flash")}>
                  <div className={"tech-stack__pill-inner"}>
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
