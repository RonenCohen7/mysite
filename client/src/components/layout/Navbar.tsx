import { useState, useEffect } from "react";
import {
  Home,
  Layers,
  Workflow,
  FolderOpen,
  Cpu,
  Route,
  Mail,
  Calendar,
  Menu,
  X,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { navIds } from "@/i18n/translations";
import profileImage from "@/assets/images/profile.png";
import { siteConfig } from "@/config/site";
import { useScrollSpy, scrollToSection } from "@/hooks/useScrollSpy";
import { IconButton } from "@/components/ui/IconButton";
import { cn } from "@/utils/cn";
import { navbarStyles } from "./Navbar.styles";
import type { Locale } from "@/i18n/translations";

const navIcons: Record<(typeof navIds)[number]["key"], LucideIcon> = {
  home: Home,
  services: Layers,
  solutions: Workflow,
  portfolio: FolderOpen,
  techStack: Cpu,
  process: Route,
  contact: Mail,
};

export function Navbar() {
  const { t, locale, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = navIds.map((n) => n.id);
  const active = useScrollSpy(sectionIds);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  const LangBtn = ({ lang }: { lang: Locale }) => (
    <button
      type="button"
      onClick={() => setLocale(lang)}
      className={cn(
        navbarStyles.langBtn,
        locale === lang ? navbarStyles.langBtnActive : navbarStyles.langBtnInactive
      )}
    >
      {t.lang[lang]}
    </button>
  );

  const NavIcon = ({ item, size = 20 }: { item: (typeof navIds)[number]; size?: number }) => {
    const Icon = navIcons[item.key];
    return (
      <IconButton
        icon={<Icon size={size} />}
        tooltip={t.nav[item.key]}
        tooltipPlacement="bottom"
        variant={active === item.id ? "primary" : "ghost"}
        className={active === item.id ? navbarStyles.navIconActive : undefined}
        onClick={() => handleNav(item.id)}
      />
    );
  };

  return (
    <>
      <nav className={cn(navbarStyles.nav, scrolled ? navbarStyles.scrolled : navbarStyles.transparent)}>
        <div className={navbarStyles.inner}>
          <button type="button" onClick={() => handleNav("home")} className={navbarStyles.logo}>
            <span
              className={cn(
                navbarStyles.logoAvatarWrap,
                scrolled ? navbarStyles.logoAvatarWrapDark : navbarStyles.logoAvatarWrapLight
              )}
            >
              <img
                src={profileImage}
                alt={siteConfig.brand}
                className={navbarStyles.logoAvatar}
                width={40}
                height={40}
                loading="eager"
                decoding="async"
              />
            </span>
            <span
              dir="ltr"
              className={cn(
                navbarStyles.logoText,
                navbarStyles.logoBrand,
                scrolled ? navbarStyles.logoTextDark : navbarStyles.logoTextLight
              )}
            >
              {siteConfig.brand}
              <span className={scrolled ? navbarStyles.logoAccentDark : navbarStyles.logoAccentLight}>.</span>
            </span>
          </button>

          <div className={navbarStyles.links}>
            {navIds.map((item) => (
              <NavIcon key={item.id} item={item} />
            ))}
          </div>

          <div className={navbarStyles.actions}>
            <div className={navbarStyles.langToggle}>
              <LangBtn lang="en" />
              <LangBtn lang="he" />
            </div>
            <IconButton
              icon={<Calendar size={20} />}
              tooltip={t.hero.ctaCall}
              tooltipPlacement="bottom"
              onClick={() => handleNav("contact")}
            />
            <div className={navbarStyles.mobileBtn}>
              <IconButton
                icon={mobileOpen ? <X size={20} /> : <Menu size={20} />}
                tooltip={mobileOpen ? t.ui.closeMenu : t.ui.openMenu}
                tooltipPlacement="bottom"
                variant="ghost"
                onClick={() => setMobileOpen(!mobileOpen)}
              />
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={navbarStyles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={navbarStyles.langToggle}>
              <LangBtn lang="en" />
              <LangBtn lang="he" />
            </div>
            <div className={navbarStyles.mobileNavGrid}>
              {navIds.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavIcon item={item} size={24} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
