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

export function PublicSite() {
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
