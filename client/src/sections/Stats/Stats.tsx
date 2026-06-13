import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/layout/Section";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { statsStyles } from "./Stats.styles";

export function Stats() {
  const { t } = useLanguage();

  return (
    <Section id="stats">
      <div className={statsStyles.grid}>
        {t.stats.map((stat) => (
          <div key={stat.label} className={statsStyles.item}>
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            <p className={statsStyles.label}>{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
