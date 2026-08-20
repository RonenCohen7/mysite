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
import { Contact } from "@/components/ContactArea/Contact/Contact";
import { siteConfig } from "@models/site";
import { scrollToSection } from "@/Utils/useScrollSpy";

export function PublicSite() {
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace(/^#/, "");
    if (!id) return;
    const timer = window.setTimeout(() => scrollToSection(id), 80);
    return () => window.clearTimeout(timer);
  }, [location.hash, location.pathname]);

  return (
    <div className="site-shell">
      <div className="site-shell__wash" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <ValueNeeds />
        <Portfolio />
        <Services />
        <WhyCustom />
        {siteConfig.showPartnersSection ? <Testimonials /> : null}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
