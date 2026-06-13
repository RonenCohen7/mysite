import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { staggerContainer, staggerItem } from "@/styles/animations";
import { testimonialsStyles } from "./Testimonials.styles";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading
        label="Testimonials"
        title="Client Feedback"
        subtitle="Trusted by teams who demand excellence."
      />
      <motion.div
        className={testimonialsStyles.grid}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {siteConfig.testimonials.map((t) => (
          <motion.div key={t.name} variants={staggerItem}>
            <GlassCard className="h-full">
              <p className={testimonialsStyles.mark}>&ldquo;</p>
              <p className={testimonialsStyles.quote}>{t.quote}</p>
              <p className={testimonialsStyles.name}>{t.name}</p>
              <p className={testimonialsStyles.role}>{t.role}</p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
