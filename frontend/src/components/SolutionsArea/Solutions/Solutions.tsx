import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/LayoutArea/Section/Section";
import { SectionHeading } from "@/components/UiArea/SectionHeading/SectionHeading";
import "./Solutions.css";

gsap.registerPlugin(ScrollTrigger);

export function Solutions() {
  const { t } = useLanguage();
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(el, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, delay: i * 0.1,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    });
  }, []);

  return (
    <Section id="solutions">
      <SectionHeading label={t.sections.solutions.label} subtitle={t.sections.solutions.subtitle} />
      <div className={"solutions__grid"}>
        {t.solutions.map((solution, si) => (
          <motion.div key={solution.title} ref={(el) => { refs.current[si] = el; }} className={"solutions__card glass-card glow-border"} whileHover={{ y: -4 }}>
            <h3 className={"solutions__title"}>{solution.title}</h3>
            <div className={"solutions__steps"}>
              {solution.steps.map((step, i) => (
                <div key={step} className={"solutions__step"}>
                  <div className={`${"solutions__step-box glass-card"} ${i === 0 ? "solutions__step-box--active" : ""}`}>{step}</div>
                  {i < solution.steps.length - 1 && (
                    <div className={"solutions__arrow"}><div className={"solutions__line"} /><ArrowDown size={16} /></div>
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
