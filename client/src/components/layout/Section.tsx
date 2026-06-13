import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { sectionStyles } from "./Section.styles";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn(sectionStyles.base, className)}>
      <div className="section-container">{children}</div>
    </section>
  );
}
