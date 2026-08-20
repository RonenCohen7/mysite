import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@mysite/shared";
import { useLanguage } from "@/i18n/LanguageContext";
import { getProjects } from "@/Services/ApiService";
import { pickStoryProjects } from "@/data/caseStudies";
import { Section } from "@/components/LayoutArea/Section/Section";
import { SectionHeading } from "@/components/UiArea/SectionHeading/SectionHeading";
import { staggerContainer, staggerItem } from "@/styles/animations";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./Portfolio.css";

export function Portfolio() {
  const { t } = useLanguage();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then((api) => setProjects(pickStoryProjects(api)))
      .catch(() => setProjects(pickStoryProjects([])))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Section id="portfolio">
      <SectionHeading label={t.sections.portfolio.label} subtitle={t.sections.portfolio.subtitle} />
      {loading ? (
        <p className={"portfolio__loading"}>{t.portfolio.loading}</p>
      ) : projects.length === 0 ? (
        <p className={"portfolio__empty"}>{t.portfolio.empty}</p>
      ) : (
        <motion.div
          className={"portfolio__grid"}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div key={project._id} variants={staggerItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </Section>
  );
}
