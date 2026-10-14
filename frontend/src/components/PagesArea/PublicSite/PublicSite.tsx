import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/LayoutArea/Navbar/Navbar";
import { Footer } from "@/components/LayoutArea/Footer/Footer";
import { Hero } from "@/components/HeroArea/Hero/Hero";
import { ValueNeeds } from "@/components/ValueArea/ValueNeeds/ValueNeeds";
import { Services } from "@/components/ServicesArea/Services/Services";
import { Portfolio } from "@/components/PortfolioArea/Portfolio/Portfolio";
import { WhyCustom } from "@/components/ValueArea/WhyCustom/WhyCustom";
import { Testimonials } from "@/components/TestimonialsArea/Testimonials/Testimonials";
import { Faq } from "@/components/FaqArea/Faq/Faq";
import { Contact } from "@/components/ContactArea/Contact/Contact";
import { siteConfig } from "@models/site";
import { useLanguage } from "@/i18n/LanguageContext";
import { scrollToSection } from "@/Utils/useScrollSpy";

export function PublicSite() {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.site.title;
  }, [t.site.title]);

  useEffect(() => {
    const id = location.hash.replace(/^#/, "");
    if (!id) return;
    // Sections above (e.g. portfolio) load async and shift the layout, so re-align a few times.
    const timers = [80, 400, 1000].map((ms) => window.setTimeout(() => scrollToSection(id), ms));
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [location.hash, location.pathname, location.key]);

  return (
    <div className="site-shell">
      <div className="site-shell__wash" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <ValueNeeds />
        <Services />
        <WhyCustom />
        {siteConfig.showPartnersSection ? <Testimonials /> : null}
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
