import { Navbar } from "@/components/LayoutArea/Navbar/Navbar";
import { Footer } from "@/components/LayoutArea/Footer/Footer";
import { AnimatedGrid } from "@/components/LayoutArea/Effects/AnimatedGrid";
import { AuroraBackground } from "@/components/LayoutArea/Effects/AuroraBackground";
import { ParticleNetwork } from "@/components/LayoutArea/Effects/ParticleNetwork";
import { MouseGlow } from "@/components/LayoutArea/Effects/MouseGlow";
import { Hero } from "@/components/HeroArea/Hero/Hero";
import { Process } from "@/components/ProcessArea/Process/Process";
import { Services } from "@/components/ServicesArea/Services/Services";
import { Solutions } from "@/components/SolutionsArea/Solutions/Solutions";
import { Portfolio } from "@/components/PortfolioArea/Portfolio/Portfolio";
import { TechStack } from "@/components/TechStackArea/TechStack/TechStack";
import { Stats } from "@/components/StatsArea/Stats/Stats";
import { Testimonials } from "@/components/TestimonialsArea/Testimonials/Testimonials";
import { Contact } from "@/components/ContactArea/Contact/Contact";

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
        <Process />
        <Services />
        <Solutions />
        <Portfolio />
        <TechStack />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
