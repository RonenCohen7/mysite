import { techStackItems } from "@models/techStack";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/LayoutArea/Section/Section";
import { SectionHeading } from "@/components/UiArea/SectionHeading/SectionHeading";
import { TechIcon } from "@/components/UiArea/TechIcon/TechIcon";
import { Tooltip } from "@/components/UiArea/Tooltip/Tooltip";
import "./TechStack.css";

export function TechStack() {
  const { t } = useLanguage();

  return (
    <Section id="tech-stack">
      <SectionHeading label={t.sections.techStack.label} subtitle={t.sections.techStack.subtitle} />
      <div className="tech-stack__wall">
        {techStackItems.map((tech) => (
          <Tooltip key={tech.id} label={t.techTooltips[tech.id]} placement="top" wide>
            <div className="tech-stack__pill-slot">
              <div className="tech-stack__pill glass-card">
                <div className="tech-stack__pill-inner">
                  <TechIcon icon={tech.icon} name={tech.name} />
                </div>
              </div>
            </div>
          </Tooltip>
        ))}
      </div>
    </Section>
  );
}
