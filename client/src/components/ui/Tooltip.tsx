import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { tooltipStyles } from "./Tooltip.styles";

interface TooltipProps {
  label: string;
  children: ReactNode;
  placement?: "top" | "bottom";
  wide?: boolean;
}

export function Tooltip({ label, children, placement = "top", wide = false }: TooltipProps) {
  const isBottom = placement === "bottom";

  return (
    <span className={tooltipStyles.wrapper}>
      {children}
      <span
        className={cn(
          tooltipStyles.tooltipBase,
          wide && tooltipStyles.tooltipWide,
          isBottom ? tooltipStyles.tooltipBottom : tooltipStyles.tooltipTop
        )}
        role="tooltip"
      >
        {label}
        <span
          className={cn(
            tooltipStyles.arrowBase,
            isBottom ? tooltipStyles.arrowBottom : tooltipStyles.arrowTop
          )}
        />
      </span>
    </span>
  );
}
