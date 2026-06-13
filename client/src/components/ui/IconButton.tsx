import { useRef, type ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Tooltip } from "./Tooltip";
import { iconButtonStyles } from "./IconButton.styles";

interface IconButtonProps {
  icon: ReactNode;
  tooltip: string;
  tooltipPlacement?: "top" | "bottom";
  variant?: "primary" | "ghost" | "danger";
  size?: "sm" | "default" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

export function IconButton({
  icon,
  tooltip,
  tooltipPlacement = "top",
  variant = "primary",
  size = "default",
  className,
  type = "button",
  disabled,
  onClick,
}: IconButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = ref.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    const btn = ref.current;
    if (btn) btn.style.transform = "";
  };

  return (
    <Tooltip label={tooltip} placement={tooltipPlacement}>
      <button
        ref={ref}
        type={type}
        aria-label={tooltip}
        disabled={disabled}
        onClick={onClick}
        className={cn(
          iconButtonStyles.base,
          iconButtonStyles[variant],
          size !== "default" && iconButtonStyles[size],
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {icon}
      </button>
    </Tooltip>
  );
}
