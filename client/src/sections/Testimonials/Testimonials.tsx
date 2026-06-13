import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { staggerContainer, staggerItem } from "@/styles/animations";
import { testimonialsStyles } from "./Testimonials.styles";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <Section id="testimonials">
      <SectionHeading label={t.sections.testimonials.label} subtitle={t.sections.testimonials.subtitle} />
      <motion.div className={testimonialsStyles.grid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {t.testimonials.map((item) => (
          <motion.div key={item.name} variants={staggerItem}>
            <GlassCard className="h-full">
              <p className={testimonialsStyles.mark}>&ldquo;</p>
              <p className={testimonialsStyles.quote}>{item.quote}</p>
              <p className={testimonialsStyles.name}>{item.name}</p>
              <p className={testimonialsStyles.role}>{item.role}</p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
