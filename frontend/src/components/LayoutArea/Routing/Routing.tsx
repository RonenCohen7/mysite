import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicSite } from "@/components/PagesArea/PublicSite/PublicSite";
import { About } from "@/components/PagesArea/About/About";
import { NotFound } from "@/components/PagesArea/NotFound/NotFound";
import { AdminGuard } from "@/components/AdminArea/AdminGuard/AdminGuard";

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
        <Route path="/ronen" element={<AdminGuard />}>
          <Route index element={<AdminDashboard />} />
          <Route path="projects/:id" element={<ProjectEditor />} />
        </Route>
        <Route path="/admin/*" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
