import { Navbar } from "@/components/LayoutArea/Navbar/Navbar";
import { Footer } from "@/components/LayoutArea/Footer/Footer";
import { AnimatedGrid } from "@/components/LayoutArea/Effects/AnimatedGrid";
import { AuroraBackground } from "@/components/LayoutArea/Effects/AuroraBackground";
import { ParticleNetwork } from "@/components/LayoutArea/Effects/ParticleNetwork";
import { MouseGlow } from "@/components/LayoutArea/Effects/MouseGlow";
import { Hero } from "@/components/HeroArea/Hero/Hero";
import { Services } from "@/components/ServicesArea/Services/Services";
import { Portfolio } from "@/components/PortfolioArea/Portfolio/Portfolio";
import { TechStack } from "@/components/TechStackArea/TechStack/TechStack";
import { Testimonials } from "@/components/TestimonialsArea/Testimonials/Testimonials";
import { Contact } from "@/components/ContactArea/Contact/Contact";
import { siteConfig } from "@models/site";

export function PublicSite() {
  return (
    <>
      <AnimatedGrid />
      <AuroraBackground />
      <ParticleNetwork />
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <TechStack />
        {siteConfig.showPartnersSection ? <Testimonials /> : null}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
