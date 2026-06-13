import { motion } from "framer-motion";
import { BrainCircuit, Bot, Network, Calendar, FolderOpen, ChevronDown, ArrowRight } from "lucide-react";
import { HeroVideoBackground } from "@/components/effects/HeroVideoBackground";
import { useLanguage } from "@/i18n/LanguageContext";
import { IconButton } from "@/components/ui/IconButton";
import { scrollToSection } from "@/hooks/useScrollSpy";
import { heroStyles, heroIconVariants } from "./Hero.styles";
import { cn } from "@/utils/cn";

const heroIcons = [
  { Icon: BrainCircuit, key: "line1" as const, variant: "turquoise" as const },
  { Icon: Bot, key: "line2" as const, variant: "orange" as const },
  { Icon: Network, key: "line3" as const, variant: "redOrange" as const },
];

export function Hero() {
  const { t, dir } = useLanguage();
  const Arrow = dir === "rtl" ? ArrowRight : ArrowRight;

  return (
    <section id="home" className={heroStyles.section}>
      <HeroVideoBackground />
      <div className={heroStyles.content}>
        <motion.div
          className={heroStyles.iconRow}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {heroIcons.map(({ Icon, key, variant }, i) => {
            const v = heroIconVariants[variant];
            return (
              <motion.div key={key} className="flex items-center gap-4 md:gap-8" variants={{
                hidden: { opacity: 0, y: 40, scale: 0.8 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
              }}>
                {i > 0 && (
                  <Arrow className={cn(heroStyles.connector, dir === "rtl" && "rotate-180")} size={28} />
                )}
                <div className={cn(heroStyles.iconCard, v.card)}>
                  <div className={cn(heroStyles.iconWrap, v.wrap)}>
                    <Icon size={36} strokeWidth={1.5} />
                  </div>
                  <span className={cn(heroStyles.iconLabel, v.label)}>{t.hero[key]}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          className={heroStyles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          className={heroStyles.actions}
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
        className={heroStyles.scroll}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={20} />
        {t.hero.scroll}
      </motion.div>
    </section>
  );
}
