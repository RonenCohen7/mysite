import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import portraitImage from "@/Assets/Images/about-portrait.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { scrollToSection } from "@/Utils/useScrollSpy";
import "./Hero.css";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero__ambient" aria-hidden="true">
        <span className="hero__blob hero__blob--a" />
        <span className="hero__blob hero__blob--b" />
        <span className="hero__blob hero__blob--c" />
      </div>

      <div className="hero__layout">
        <div className="hero__copy">
          <motion.h1
            className="hero__headline"
            initial={{ opacity: 0.2, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.hero.headline}
          </motion.h1>

          <motion.p
            className="hero__secondary"
            initial={{ opacity: 0.2, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.hero.secondary}
          </motion.p>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0.2, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.4 }}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0.2, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <button type="button" className="hero__cta hero__cta--primary" onClick={() => scrollToSection("contact")}>
              {t.hero.ctaTalk}
            </button>
            <button type="button" className="hero__cta hero__cta--secondary" onClick={() => scrollToSection("portfolio")}>
              {t.hero.ctaProjects}
            </button>
          </motion.div>
        </div>

        <motion.figure
          className="hero__portrait"
          initial={{ opacity: 0.2, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={portraitImage} alt={t.site.name} width={1024} height={770} />
        </motion.figure>
      </div>

      <motion.div
        className="hero__scroll"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
      >
        <ChevronDown size={18} />
        {t.hero.scroll}
      </motion.div>
    </section>
  );
}
