import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/LayoutArea/Section/Section";
import { SectionHeading } from "@/components/UiArea/SectionHeading/SectionHeading";
import { GlassCard } from "@/components/UiArea/GlassCard/GlassCard";
import { staggerContainer, staggerItem } from "@/styles/animations";
import "./Testimonials.css";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <Section id="testimonials">
      <SectionHeading label={t.sections.testimonials.label} subtitle={t.sections.testimonials.subtitle} />
      <motion.div className={"testimonials__grid"} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {t.testimonials.map((item) => (
          <motion.div key={item.name} variants={staggerItem}>
            <GlassCard className="h-full">
              <p className={"testimonials__mark"}>&ldquo;</p>
              <p className={"testimonials__quote"}>{item.quote}</p>
              <p className={"testimonials__name"}>{item.name}</p>
              <p className={"testimonials__role"}>{item.role}</p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
