import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicSite } from "@/components/PagesArea/PublicSite/PublicSite";
import { About } from "@/components/PagesArea/About/About";
import { NotFound } from "@/components/PagesArea/NotFound/NotFound";

const AdminLogin = lazy(() =>
  import("@/components/AdminArea/AdminLogin/AdminLogin").then((m) => ({ default: m.AdminLogin }))
);
const AdminDashboard = lazy(() =>
  import("@/components/AdminArea/AdminDashboard/AdminDashboard").then((m) => ({ default: m.AdminDashboard }))
);
const ProjectEditor = lazy(() =>
  import("@/components/AdminArea/ProjectEditor/ProjectEditor").then((m) => ({ default: m.ProjectEditor }))
);

function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center text-slate-400">
      Loading...
    </div>
  );
}

export function Routing() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<PublicSite />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/projects/:id" element={<ProjectEditor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
