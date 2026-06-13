import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import discoveryImage from "@/assets/images/process-discovery.jpg";
import architectureImage from "@/assets/images/process-architecture.jpg";
import developmentImage from "@/assets/images/process-development.jpg";
import integrationImage from "@/assets/images/process-integration.jpg";
import automationImage from "@/assets/images/process-automation.jpg";
import deploymentImage from "@/assets/images/process-deployment.jpg";
import supportImage from "@/assets/images/process-support.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/utils/cn";
import { processStyles } from "./Process.styles";

gsap.registerPlugin(ScrollTrigger);

const processBackgrounds: Record<string, string> = {
  "01": discoveryImage,
  "02": architectureImage,
  "03": developmentImage,
  "04": integrationImage,
  "05": automationImage,
  "06": deploymentImage,
  "07": supportImage,
};

export function Process() {
  const { t } = useLanguage();
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current || !sectionRef.current) return;
    gsap.fromTo(lineRef.current, { scaleY: 0 }, {
      scaleY: 1, ease: "none",
      scrollTrigger: { trigger: sectionRef.current, start: "top 60%", end: "bottom 40%", scrub: 0.5 },
    });
  }, []);

  return (
    <Section id="process">
      <SectionHeading label={t.sections.process.label} subtitle={t.sections.process.subtitle} />
      <div ref={sectionRef} className={processStyles.timeline}>
        <div className={processStyles.line} />
        <div ref={lineRef} className={processStyles.lineFill} style={{ height: "100%" }} />
        {t.process.map((item, i) => {
          const backgroundImage = processBackgrounds[item.step];

          return (
            <div key={item.step} className={cn(processStyles.item, i % 2 === 1 && processStyles.itemRight)}>
              <div className={processStyles.dot} />
              <div className={cn(processStyles.content, backgroundImage && processStyles.contentWithBg)}>
                {backgroundImage && (
                  <>
                    <img
                      src={backgroundImage}
                      alt=""
                      className={processStyles.stepBg}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className={processStyles.stepOverlay} aria-hidden="true" />
                  </>
                )}
                <div className={cn(backgroundImage && processStyles.contentInner)}>
                  <p className={processStyles.step}>{item.step}</p>
                  <h3 className={processStyles.title}>{item.title}</h3>
                  <p className={processStyles.desc}>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
