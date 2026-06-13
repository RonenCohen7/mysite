import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedGrid } from "@/components/effects/AnimatedGrid";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { ParticleNetwork } from "@/components/effects/ParticleNetwork";
import { MouseGlow } from "@/components/effects/MouseGlow";
import { Hero } from "@/sections/Hero/Hero";
import { Services } from "@/sections/Services/Services";
import { Solutions } from "@/sections/Solutions/Solutions";
import { Portfolio } from "@/sections/Portfolio/Portfolio";
import { TechStack } from "@/sections/TechStack/TechStack";
import { Process } from "@/sections/Process/Process";
import { Stats } from "@/sections/Stats/Stats";
import { Testimonials } from "@/sections/Testimonials/Testimonials";
import { Contact } from "@/sections/Contact/Contact";

const AdminLogin = lazy(() => import("@/pages/admin/AdminLogin").then((m) => ({ default: m.AdminLogin })));
const AdminDashboard = lazy(() => import("@/pages/admin/AdminDashboard").then((m) => ({ default: m.AdminDashboard })));
const ProjectEditor = lazy(() => import("@/pages/admin/ProjectEditor").then((m) => ({ default: m.ProjectEditor })));

function Loading() {
  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center text-white/40">
      Loading...
    </div>
  );
}

function PublicSite() {
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
        <Solutions />
        <Portfolio />
        <TechStack />
        <Process />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <a href="#home" className="skip-link">Skip to content</a>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<PublicSite />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/projects/:id" element={<ProjectEditor />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
