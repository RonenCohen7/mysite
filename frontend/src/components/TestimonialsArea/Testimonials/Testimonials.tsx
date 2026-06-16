import { motion } from "framer-motion";
import { partners } from "@models/partners";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/LayoutArea/Section/Section";
import { SectionHeading } from "@/components/UiArea/SectionHeading/SectionHeading";
import { GlassCard } from "@/components/UiArea/GlassCard/GlassCard";
import { staggerContainer, staggerItem } from "@/styles/animations";
import "./Testimonials.css";

export function Testimonials() {
  const { t, locale } = useLanguage();

  return (
    <Section id="testimonials">
      <SectionHeading label={t.sections.testimonials.label} />
      <motion.div
        className="testimonials__grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {partners.map((partner) => {
          const name = partner.name[locale];
          const content = (
            <GlassCard className="testimonials__card" hover={false}>
              <img src={partner.logo} alt={name} className="testimonials__logo" loading="lazy" />
            </GlassCard>
          );

          return (
            <motion.div key={partner.id} variants={staggerItem} className="testimonials__item">
              {partner.url ? (
                <a href={partner.url} target="_blank" rel="noopener noreferrer" className="testimonials__link">
                  {content}
                </a>
              ) : (
                content
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
