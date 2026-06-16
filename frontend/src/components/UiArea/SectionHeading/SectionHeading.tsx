import { motion } from "framer-motion";
import "./SectionHeading.css";

interface SectionHeadingProps {
  label?: string;
  title?: string;
  subtitle?: string;
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      className={"section-heading"}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {label ? <p className={"section-heading__label"}>{label}</p> : null}
      {title && <h2 className={"section-heading__title"}>{title}</h2>}
      {subtitle && <p className={"section-heading__subtitle"}>{subtitle}</p>}
    </motion.div>
  );
}
