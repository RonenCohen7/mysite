import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@mysite/shared";
import { getProjects } from "@/services/api";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/styles/animations";
import { ProjectCard } from "./ProjectCard";
import { portfolioStyles } from "./Portfolio.styles";

export function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch(() => setProjects([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Section id="portfolio">
      <SectionHeading
        label="Portfolio"
        title="Featured Projects"
        subtitle="Real-world solutions delivering measurable business impact."
      />
      {loading ? (
        <p className={portfolioStyles.loading}>Loading projects...</p>
      ) : (
        <motion.div
          className={portfolioStyles.grid}
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
