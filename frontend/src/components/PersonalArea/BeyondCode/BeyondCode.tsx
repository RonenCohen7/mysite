import { personalPosts } from "@/data/instagramReels";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/LayoutArea/Section/Section";
import { SectionHeading } from "@/components/UiArea/SectionHeading/SectionHeading";
import "./BeyondCode.css";

export function BeyondCode() {
  const { t, locale } = useLanguage();

  return (
    <Section id="beyond-code">
      <SectionHeading title={t.beyondCode.title} subtitle={t.beyondCode.subtitle} />
      {personalPosts.length > 0 && (
        <div className="beyond-code__grid">
          {personalPosts.map((post) => (
            <a
              key={post.id}
              className="beyond-code__tile"
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={post.alt[locale]}
            >
              <div className="beyond-code__media">
                {post.type === "video" ? (
                  <video
                    src={post.src}
                    poster={post.poster}
                    muted
                    playsInline
                    loop
                    autoPlay
                    preload="metadata"
                  />
                ) : (
                  <img src={post.src} alt="" />
                )}
              </div>
            </a>
          ))}
        </div>
      )}
    </Section>
  );
}
