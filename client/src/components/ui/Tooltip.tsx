import type { ReactNode } from "react";
import { tooltipStyles } from "./Tooltip.styles";

interface TooltipProps {
  label: string;
  children: ReactNode;
}

export function Tooltip({ label, children }: TooltipProps) {
  return (
    <span className={tooltipStyles.wrapper}>
      {children}
      <span className={tooltipStyles.tooltip} role="tooltip">
        {label}
        <span className={tooltipStyles.arrow} />
      </span>
    </span>
  );
}
