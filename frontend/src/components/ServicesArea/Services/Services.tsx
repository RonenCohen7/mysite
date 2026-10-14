import { Layers, Workflow, Sparkles, Globe, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/LayoutArea/Section/Section";
import { SectionHeading } from "@/components/UiArea/SectionHeading/SectionHeading";
import { staggerContainer, staggerItem } from "@/styles/animations";
import "./Services.css";

const iconMap: Record<string, LucideIcon> = { Layers, Workflow, Sparkles, Globe };

export function Services() {
  const { t, locale } = useLanguage();

  return (
    <Section id="services">
      <SectionHeading
        label={t.sections.services.label}
        title={t.sections.services.title}
        subtitle={t.sections.services.subtitle}
      />
      <motion.div
        key={locale}
        className="services__grid"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {t.services.map((item) => {
          const Icon = iconMap[item.icon] ?? Layers;
          return (
            <motion.article key={item.title} className="services__card" variants={staggerItem}>
              <div className="services__icon-wrap">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="services__title">{item.title}</h3>
              <p className="services__desc">{item.description}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}
