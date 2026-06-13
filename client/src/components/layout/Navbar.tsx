import { useState, useEffect } from "react";
import { Calendar, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { useScrollSpy, scrollToSection } from "@/hooks/useScrollSpy";
import { IconButton } from "@/components/ui/IconButton";
import { cn } from "@/utils/cn";
import { navbarStyles } from "./Navbar.styles";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = siteConfig.nav.map((n) => n.id);
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

  return (
    <>
      <nav className={cn(navbarStyles.nav, scrolled ? navbarStyles.scrolled : navbarStyles.transparent)}>
        <div className={navbarStyles.inner}>
          <button
            type="button"
            onClick={() => handleNav("home")}
            className={navbarStyles.logo}
          >
            {siteConfig.name.split(" ")[0]}
            <span className={navbarStyles.logoAccent}>.</span>
          </button>

          <div className={navbarStyles.links}>
            {siteConfig.nav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className={cn(navbarStyles.link, active === item.id && navbarStyles.linkActive)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className={navbarStyles.actions}>
            <IconButton
              icon={<Calendar size={20} />}
              tooltip="Schedule a Call"
              onClick={() => handleNav("contact")}
            />
            <div className={navbarStyles.mobileBtn}>
              <IconButton
                icon={mobileOpen ? <X size={20} /> : <Menu size={20} />}
                tooltip={mobileOpen ? "Close Menu" : "Open Menu"}
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
            {siteConfig.nav.map((item, i) => (
              <motion.button
                key={item.id}
                type="button"
                className={navbarStyles.mobileLink}
                onClick={() => handleNav(item.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
