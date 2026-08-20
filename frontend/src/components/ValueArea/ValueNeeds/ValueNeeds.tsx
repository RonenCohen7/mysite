import { Clock3, Link2, Puzzle, TrendingUp, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/LayoutArea/Section/Section";
import { SectionHeading } from "@/components/UiArea/SectionHeading/SectionHeading";
import { staggerContainer, staggerItem } from "@/styles/animations";
import "./ValueNeeds.css";

const needIcons: LucideIcon[] = [Clock3, Link2, Puzzle, TrendingUp];

export function ValueNeeds() {
  const { t } = useLanguage();
  const items = t.valueNeeds.items;

  return (
    <Section id="value" className="value-needs-section">
      <div className="value-needs">
        <SectionHeading
          label={t.valueNeeds.label}
          title={t.valueNeeds.title}
          subtitle={t.valueNeeds.subtitle}
        />

        <motion.div
          className="value-needs__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {items.map((item, i) => {
            const Icon = needIcons[i] ?? Clock3;
            return (
              <motion.article key={item.title} className="value-needs__card" variants={staggerItem}>
                <div className="value-needs__icon">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="value-needs__card-title">{item.title}</h3>
                <p className="value-needs__need">{item.need}</p>
                <p className="value-needs__value">{item.value}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
