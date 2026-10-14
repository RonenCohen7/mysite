import { Instagram } from "lucide-react";
import { siteConfig } from "@models/site";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/LayoutArea/Section/Section";
import { SectionHeading } from "@/components/UiArea/SectionHeading/SectionHeading";
import "./BeyondCode.css";

export function BeyondCode() {
  const { t } = useLanguage();

  return (
    <Section id="beyond-code">
      <SectionHeading title={t.beyondCode.title} subtitle={t.beyondCode.subtitle} />
      <div className="beyond-code__actions">
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="beyond-code__cta"
        >
          <Instagram size={20} />
          {t.beyondCode.cta}
        </a>
      </div>
    </Section>
  );
}
