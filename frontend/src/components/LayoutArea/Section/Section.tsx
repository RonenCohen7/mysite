import type { ReactNode } from "react";
import { cn } from "@/Utils/cn";
import "./Section.css";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("section", className)}>
      <div className="section-container">{children}</div>
    </section>
  );
}
