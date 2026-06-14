import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/LayoutArea/Section/Section";
import { AnimatedCounter } from "@/components/UiArea/AnimatedCounter/AnimatedCounter";
import "./Stats.css";

export function Stats() {
  const { t } = useLanguage();

  return (
    <Section id="stats">
      <div className={"stats__grid"}>
        {t.stats.map((stat) => (
          <div key={stat.label} className={"stats__item glass-card glow-border"}>
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            <p className={"stats__label"}>{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
