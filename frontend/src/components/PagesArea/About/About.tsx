import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import profileImage from "@/Assets/Images/profile.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { Navbar } from "@/components/LayoutArea/Navbar/Navbar";
import { Footer } from "@/components/LayoutArea/Footer/Footer";
import { GlassCard } from "@/components/UiArea/GlassCard/GlassCard";
import "./About.css";

export function About() {
  const { t, dir } = useLanguage();
  const BackIcon = dir === "rtl" ? ArrowRight : ArrowLeft;

  return (
    <>
      <Navbar />
      <main className="about-page">
        <div className="about-page__container">
          <Link to="/" className="about-page__back">
            <BackIcon size={16} />
            {t.about.backHome}
          </Link>

          <div className="about-page__hero">
            <div className="about-page__avatar-wrap">
              <img
                src={profileImage}
                alt={t.site.name}
                className="about-page__avatar"
                width={144}
                height={144}
              />
            </div>
            <div>
              <p className="about-page__label">{t.about.label}</p>
              <h1 className="about-page__title">{t.site.name}</h1>
              <p className="about-page__role">{t.site.title}</p>
              <p className="about-page__experience">{t.about.experience}</p>
            </div>
          </div>

          <GlassCard className="about-page__card glass-card glow-border" hover={false}>
            {t.about.bio.map((paragraph) => (
              <p key={paragraph} className="about-page__bio">
                {paragraph}
              </p>
            ))}
          </GlassCard>
        </div>
      </main>
      <Footer />
    </>
  );
}
