import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { statsStyles } from "./Stats.styles";

export function Stats() {
  return (
    <Section id="stats">
      <div className={statsStyles.grid}>
        {siteConfig.stats.map((stat) => (
          <div key={stat.label} className={statsStyles.item}>
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            <p className={statsStyles.label}>{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
