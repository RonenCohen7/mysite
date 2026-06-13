import {
  Bot, Plug, Code2, Workflow, Users, Layers,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { staggerContainer, staggerItem } from "@/styles/animations";
import { servicesStyles } from "./Services.styles";

const iconMap: Record<string, LucideIcon> = {
  Bot, Plug, Code2, Workflow, Users, Layers,
};

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        label="Services"
        title="What I Build"
        subtitle="Comprehensive solutions for modern businesses seeking automation and integration."
      />
      <motion.div
        className={servicesStyles.grid}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {siteConfig.services.map((service) => {
          const Icon = iconMap[service.icon] || Bot;
          return (
            <motion.div key={service.title} variants={staggerItem} className={servicesStyles.card}>
              <GlassCard className="h-full">
                <div className={servicesStyles.icon}>
                  <Icon size={24} />
                </div>
                <h3 className={servicesStyles.title}>{service.title}</h3>
                <p className={servicesStyles.desc}>{service.description}</p>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
