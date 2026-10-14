import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import portraitImage from "@/Assets/Images/about-portrait.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { Navbar } from "@/components/LayoutArea/Navbar/Navbar";
import { Footer } from "@/components/LayoutArea/Footer/Footer";
import "./About.css";

function paragraphClass(paragraph: string) {
  return paragraph.length < 48 ? "about-page__p about-page__p--beat" : "about-page__p";
}

export function About() {
  const { t, dir } = useLanguage();
  const BackIcon = dir === "rtl" ? ArrowRight : ArrowLeft;

  useEffect(() => {
    const previous = document.title;
    document.title = t.about.pageTitle;
    return () => {
      document.title = previous;
    };
  }, [t.about.pageTitle]);

  return (
    <>
      <Navbar />
      <main className="about-page">
        <div className="about-page__container">
          <Link to="/" className="about-page__back">
            <BackIcon size={16} />
            {t.about.backHome}
          </Link>

          <header className="about-page__hero">
            <div className="about-page__portrait">
              <img
                src={portraitImage}
                alt={t.site.name}
                width={1024}
                height={770}
              />
            </div>
            <div className="about-page__intro">
              <h1 className="about-page__title">{t.about.headline}</h1>
              <p className="about-page__lead">{t.about.lead}</p>
            </div>
          </header>

          <article className="about-page__story">
            {t.about.intro.map((paragraph) => (
              <p key={paragraph} className={paragraphClass(paragraph)}>
                {paragraph}
              </p>
            ))}
            <p className="about-page__refrain">{t.about.refrain}</p>

            {t.about.chapters.map((chapter) => (
              <section key={chapter.title} className="about-page__chapter">
                <h2>{chapter.title}</h2>
                {chapter.paragraphs.map((paragraph) => (
                  <p key={paragraph} className={paragraphClass(paragraph)}>
                    {paragraph}
                  </p>
                ))}
                {chapter.quote ? <blockquote className="about-page__quote">{chapter.quote}</blockquote> : null}
              </section>
            ))}

            <section className="about-page__close">
              <h2>{t.about.closeTitle}</h2>
              {t.about.close.map((paragraph) => (
                <p key={paragraph} className={paragraphClass(paragraph)}>
                  {paragraph}
                </p>
              ))}
              <blockquote className="about-page__quote">{t.about.closeQuote}</blockquote>
              <p className="about-page__signature">{t.about.signature}</p>
              <Link to="/#contact" className="about-page__cta">
                {t.hero.ctaCall}
              </Link>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
