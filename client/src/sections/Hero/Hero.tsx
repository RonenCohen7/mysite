import { motion } from "framer-motion";
import { Calendar, FolderOpen, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { IconButton } from "@/components/ui/IconButton";
import { scrollToSection } from "@/hooks/useScrollSpy";
import { heroStyles } from "./Hero.styles";

const lines = siteConfig.tagline.split(". ").filter(Boolean);

export function Hero() {
  return (
    <section id="home" className={heroStyles.section}>
      <div className={heroStyles.content}>
        <motion.h1
          className={heroStyles.headline}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {lines.map((line, i) => (
            <motion.span
              key={i}
              className={`${heroStyles.line} ${i === 0 ? heroStyles.highlight : ""}`}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              {line}{i < lines.length - 1 ? "." : ""}
              <br />
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className={heroStyles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {siteConfig.subtitle}
        </motion.p>

        <motion.div
          className={heroStyles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <IconButton
            icon={<Calendar size={22} />}
            tooltip="Schedule a Call"
            size="lg"
            onClick={() => scrollToSection("contact")}
          />
          <IconButton
            icon={<FolderOpen size={22} />}
            tooltip="View Projects"
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
        Scroll
      </motion.div>
    </section>
  );
}
