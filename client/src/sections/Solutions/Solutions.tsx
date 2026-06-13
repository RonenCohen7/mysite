import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutionsStyles } from "./Solutions.styles";

gsap.registerPlugin(ScrollTrigger);

export function Solutions() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        }
      );
    });
  }, []);

  return (
    <Section id="solutions">
      <SectionHeading
        label="Solutions"
        title="Connected Workflows"
        subtitle="Interactive automation pipelines that transform how your business operates."
      />
      <div className={solutionsStyles.grid}>
        {siteConfig.solutions.map((solution, si) => (
          <motion.div
            key={solution.title}
            ref={(el) => { refs.current[si] = el; }}
            className={solutionsStyles.card}
            whileHover={{ y: -4 }}
          >
            <h3 className={solutionsStyles.title}>{solution.title}</h3>
            <div className={solutionsStyles.steps}>
              {solution.steps.map((step, i) => (
                <div key={step} className={solutionsStyles.step}>
                  <div className={`${solutionsStyles.stepBox} ${i === 0 ? solutionsStyles.stepActive : ""}`}>
                    {step}
                  </div>
                  {i < solution.steps.length - 1 && (
                    <div className={solutionsStyles.arrow}>
                      <div className={solutionsStyles.line} />
                      <ArrowDown size={16} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
