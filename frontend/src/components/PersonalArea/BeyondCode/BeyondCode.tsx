import { Instagram } from "lucide-react";
import { siteConfig } from "@models/site";
import { instagramReels } from "@/data/instagramReels";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/LayoutArea/Section/Section";
import { SectionHeading } from "@/components/UiArea/SectionHeading/SectionHeading";
import { InstagramEmbed } from "@/components/PersonalArea/InstagramEmbed/InstagramEmbed";
import "./BeyondCode.css";

export function BeyondCode() {
  const { t } = useLanguage();

  return (
    <Section id="beyond-code">
      <SectionHeading title={t.beyondCode.title} subtitle={t.beyondCode.subtitle} />
      {instagramReels.length > 0 && (
        <div className="beyond-code__grid">
          {instagramReels.map((reel) => (
            <InstagramEmbed key={reel.id} permalink={reel.permalink} />
          ))}
        </div>
      )}
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
