import { cn } from "@/utils/cn";
import { badgeStyles } from "./Badge.styles";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn(badgeStyles.base, className)}>{children}</span>;
}
