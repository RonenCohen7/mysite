import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { techStackStyles } from "./TechStack.styles";

export function TechStack() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        y: "+=15",
        duration: 2 + (i % 3) * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.1,
      });
    });
  }, []);

  return (
    <Section id="tech-stack">
      <SectionHeading
        label="Tech Stack"
        title="Technologies I Master"
        subtitle="Modern tools and frameworks for building scalable, intelligent systems."
      />
      <div className={techStackStyles.wall}>
        {siteConfig.techStack.map((tech, i) => (
          <div
            key={tech}
            ref={(el) => { refs.current[i] = el; }}
            className={techStackStyles.pill}
          >
            <div className={techStackStyles.pillInner}>
              <span className={techStackStyles.dot} />
              {tech}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
