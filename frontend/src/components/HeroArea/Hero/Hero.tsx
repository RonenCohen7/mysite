import { motion } from "framer-motion";
import { BrainCircuit, Bot, Network, Calendar, FolderOpen, ChevronDown, ArrowRight } from "lucide-react";
import { HeroVideoBackground } from "@/components/HeroArea/HeroVideoBackground/HeroVideoBackground";
import { useLanguage } from "@/i18n/LanguageContext";
import { IconButton } from "@/components/UiArea/IconButton/IconButton";
import { scrollToSection } from "@/Utils/useScrollSpy";
import { cn } from "@/Utils/cn";
import "./Hero.css";

const heroIcons = [
  { Icon: BrainCircuit, key: "line1" as const, variant: "turquoise" as const },
  { Icon: Bot, key: "line2" as const, variant: "orange" as const },
  { Icon: Network, key: "line3" as const, variant: "redOrange" as const },
];

export function Hero() {
  const { t, dir } = useLanguage();
  const Arrow = dir === "rtl" ? ArrowRight : ArrowRight;

  return (
    <section id="home" className={"hero"}>
      <HeroVideoBackground />
      <div className={"hero__content"}>
        <motion.div
          className={"hero__icon-row"}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {heroIcons.map(({ Icon, key, variant }, i) => {
            return (
              <motion.div key={key} className="hero__icon-group" variants={{
                hidden: { opacity: 0, y: 40, scale: 0.8 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
              }}>
                {i > 0 && (
                  <Arrow className={cn("hero__connector", dir === "rtl" && "hero__connector--rtl")} size={28} />
                )}
                <div className={cn("hero__icon-card", `hero__icon-card--${variant}`)}>
                  <div className={cn("hero__icon-wrap", `hero__icon-wrap--${variant}`)}>
                    <Icon size={36} strokeWidth={1.5} />
                  </div>
                  <span className={cn("hero__icon-label", `hero__icon-label--${variant}`)}>{t.hero[key]}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className={"hero__subtitle-block"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className={"hero__subtitle"}>{t.hero.subtitle}</p>
          <p className={"hero__subtitle-extra"}>{t.hero.subtitleLine2}</p>
          <p className={"hero__subtitle-extra"}>{t.hero.subtitleLine3}</p>
        </motion.div>

        <motion.div
          className={"hero__actions"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <IconButton
            icon={<Calendar size={22} />}
            tooltip={t.hero.ctaCall}
            size="lg"
            onClick={() => scrollToSection("contact")}
          />
          <IconButton
            icon={<FolderOpen size={22} />}
            tooltip={t.hero.ctaProjects}
            variant="ghost"
            size="lg"
            onClick={() => scrollToSection("portfolio")}
          />
        </motion.div>
      </div>

      <motion.div
        className={"hero__scroll"}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={20} />
        {t.hero.scroll}
      </motion.div>
    </section>
  );
}
