import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/utils/cn";
import { processStyles } from "./Process.styles";

gsap.registerPlugin(ScrollTrigger);

export function Process() {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current || !sectionRef.current) return;
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 40%",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <Section id="process">
      <SectionHeading
        label="Process"
        title="How I Work"
        subtitle="A proven methodology delivering results from discovery to deployment."
      />
      <div ref={sectionRef} className={processStyles.timeline}>
        <div className={processStyles.line} />
        <div ref={lineRef} className={processStyles.lineFill} style={{ height: "100%" }} />
        {siteConfig.process.map((item, i) => (
          <div
            key={item.step}
            className={cn(processStyles.item, i % 2 === 1 && processStyles.itemRight)}
          >
            <div className={processStyles.dot} />
            <div className={processStyles.content}>
              <p className={processStyles.step}>{item.step}</p>
              <h3 className={processStyles.title}>{item.title}</h3>
              <p className={processStyles.desc}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
