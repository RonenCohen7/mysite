import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Layers,
  FolderOpen,
  Cpu,
  Route,
  Mail,
  Calendar,
  Menu,
  X,
  User,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { navIds } from "@/i18n/translations";
import { siteConfig } from "@models/site";
import { useScrollSpy, scrollToSection } from "@/Utils/useScrollSpy";
import { IconButton } from "@/components/UiArea/IconButton/IconButton";
import { cn } from "@/Utils/cn";
import "./Navbar.css";
import type { Locale } from "@/i18n/translations";

const navIcons: Record<(typeof navIds)[number]["key"], LucideIcon> = {
  home: Home,
  services: Layers,
  portfolio: FolderOpen,
  techStack: Cpu,
  process: Route,
  contact: Mail,
};

export function Navbar() {
  const { t, locale, setLocale } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = navIds.map((n) => n.id);
  const active = useScrollSpy(sectionIds);
  const navScrolled = !isHome || scrolled;

  useEffect(() => {
    if (!isHome) return;
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [isHome]);

  const handleNav = (id: string) => {
    if (!isHome) {
      navigate(`/#${id}`);
      setMobileOpen(false);
      return;
    }
    scrollToSection(id);
    setMobileOpen(false);
  };

  const LangBtn = ({ lang }: { lang: Locale }) => (
    <button
      type="button"
      onClick={() => setLocale(lang)}
      className={cn(
        "navbar__lang-btn",
        locale === lang ? "navbar__lang-btn--active" : "navbar__lang-btn--inactive"
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
        className={active === item.id ? "navbar__nav-icon--active" : undefined}
        onClick={() => handleNav(item.id)}
      />
    );
  };

  return (
    <>
      <nav className={cn("navbar", navScrolled ? "navbar--scrolled" : "navbar--transparent")}>
        <div className={"navbar__inner"}>
          {isHome ? (
            <button type="button" onClick={() => handleNav("home")} className={"navbar__logo"}>
              <span
                dir="ltr"
                className={cn(
                  "navbar__logo-text",
                  "navbar__logo-brand",
                  navScrolled ? "navbar__logo-text--dark" : "navbar__logo-text--light"
                )}
              >
                {siteConfig.brand}
                <span className={navScrolled ? "navbar__logo-accent--dark" : "navbar__logo-accent--light"}>.</span>
              </span>
            </button>
          ) : (
            <Link to="/" className={"navbar__logo"}>
              <span dir="ltr" className={cn("navbar__logo-text", "navbar__logo-brand", "navbar__logo-text--dark")}>
                {siteConfig.brand}
                <span className="navbar__logo-accent--dark">.</span>
              </span>
            </Link>
          )}

          <div className={"navbar__links"}>
            {navIds.map((item) => (
              <span key={item.id} className="navbar__link-group">
                <NavIcon item={item} />
                {item.key === "contact" && (
                  <Link to="/about">
                    <IconButton
                      icon={<User size={20} />}
                      tooltip={t.nav.about}
                      tooltipPlacement="bottom"
                      variant={location.pathname === "/about" ? "primary" : "ghost"}
                    />
                  </Link>
                )}
              </span>
            ))}
          </div>

          <div className={"navbar__actions"}>
            <div className={"navbar__lang-toggle"}>
              <LangBtn lang="en" />
              <LangBtn lang="he" />
            </div>
            <IconButton
              icon={<Calendar size={20} />}
              tooltip={t.hero.ctaCall}
              tooltipPlacement="bottom"
              onClick={() => handleNav("contact")}
            />
            <div className={"navbar__mobile-btn"}>
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
            className={"navbar__mobile-menu"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={"navbar__lang-toggle"}>
              <LangBtn lang="en" />
              <LangBtn lang="he" />
            </div>
            <div className={"navbar__mobile-grid"}>
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
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: navIds.length * 0.05 }}
              >
                <Link to="/about">
                  <IconButton
                    icon={<User size={24} />}
                    tooltip={t.nav.about}
                    tooltipPlacement="bottom"
                    variant={location.pathname === "/about" ? "primary" : "ghost"}
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
