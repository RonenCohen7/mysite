import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/LayoutArea/Section/Section";
import { SectionHeading } from "@/components/UiArea/SectionHeading/SectionHeading";
import { staggerContainer, staggerItem } from "@/styles/animations";
import "./WhyCustom.css";

export function WhyCustom() {
  const { t, locale } = useLanguage();
  const items = t.whyCustom.items;

  return (
    <Section id="why">
      <SectionHeading
        label={t.whyCustom.label}
        title={t.whyCustom.title}
        subtitle={t.whyCustom.subtitle}
      />

      <motion.div
        key={locale}
        className="why-custom__grid"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {items.map((item) => (
          <motion.article key={item.step} className="why-custom__card" variants={staggerItem}>
            <span className="why-custom__step">{item.step}</span>
            <h3 className="why-custom__title">{item.title}</h3>
            <p className="why-custom__text">{item.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
