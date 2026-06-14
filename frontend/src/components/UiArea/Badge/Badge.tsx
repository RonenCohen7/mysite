import { cn } from "@/Utils/cn";
import "./Badge.css";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("badge", className)}>{children}</span>;
}
