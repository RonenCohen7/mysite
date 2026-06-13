import { motion } from "framer-motion";
import { sectionHeadingStyles } from "./SectionHeading.styles";

interface SectionHeadingProps {
  label: string;
  title?: string;
  subtitle?: string;
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      className={sectionHeadingStyles.wrapper}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className={sectionHeadingStyles.label}>{label}</p>
      {title && <h2 className={sectionHeadingStyles.title}>{title}</h2>}
      {subtitle && <p className={sectionHeadingStyles.subtitle}>{subtitle}</p>}
    </motion.div>
  );
}
