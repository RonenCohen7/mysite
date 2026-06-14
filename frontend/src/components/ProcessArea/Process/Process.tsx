import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import discoveryImage from "@/Assets/Images/process-discovery.jpg";
import architectureImage from "@/Assets/Images/process-architecture.jpg";
import developmentImage from "@/Assets/Images/process-development.jpg";
import integrationImage from "@/Assets/Images/process-integration.jpg";
import automationImage from "@/Assets/Images/process-automation.jpg";
import deploymentImage from "@/Assets/Images/process-deployment.jpg";
import supportImage from "@/Assets/Images/process-support.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/LayoutArea/Section/Section";
import { SectionHeading } from "@/components/UiArea/SectionHeading/SectionHeading";
import { cn } from "@/Utils/cn";
import { ProcessFloatingIcons } from "./ProcessFloatingIcons";
import "./Process.css";

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
      <div ref={sectionRef} className={"process__timeline"}>
        <ProcessFloatingIcons stepCount={t.process.length} />
        <div className={"process__line"} />
        <div ref={lineRef} className={"process__line-fill"} style={{ height: "100%" }} />
        {t.process.map((item, i) => {
          const backgroundImage = processBackgrounds[item.step];

          return (
            <div key={item.step} className={cn("process__item", i % 2 === 1 && "process__item--right")}>
              <div className={"process__dot"} />
              <div className={cn("process__content", backgroundImage && "process__content-bg")}>
                {backgroundImage && (
                  <>
                    <img
                      src={backgroundImage}
                      alt=""
                      className={"process__step-bg"}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className={"process__step-overlay"} aria-hidden="true" />
                  </>
                )}
                <div className={cn(backgroundImage && "process__content-inner")}>
                  <p className={"process__step"}>{item.step}</p>
                  <h3 className={"process__title"}>{item.title}</h3>
                  <p className={"process__desc"}>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
