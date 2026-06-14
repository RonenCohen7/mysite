import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/Utils/cn";
import "./GlassCard.css";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({ children, className, hover = true, glow = false }: GlassCardProps) {
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
    >
      {children}
    </motion.div>
  );
}
