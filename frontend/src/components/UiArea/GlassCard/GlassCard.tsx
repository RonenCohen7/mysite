import type { KeyboardEventHandler, MouseEventHandler, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/Utils/cn";
import "./GlassCard.css";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  role?: string;
  tabIndex?: number;
  "aria-label"?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
}

export function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
  role,
  tabIndex,
  onClick,
  onKeyDown,
  ...aria
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card-component",
        hover && "glass-card-component--hover",
        glow && "glass-card-component--glow",
        className
      )}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      role={role}
      tabIndex={tabIndex}
      onClick={onClick}
      onKeyDown={onKeyDown}
      aria-label={aria["aria-label"]}
    >
      {children}
    </motion.div>
  );
}
