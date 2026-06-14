import type { ReactElement, ReactNode } from "react";
import TooltipMui from "@mui/material/Tooltip";
import "./Tooltip.css";

interface TooltipProps {
  label: string;
  children: ReactNode;
  placement?: "top" | "bottom";
  wide?: boolean;
}

export function Tooltip({ label, children, placement = "top", wide = false }: TooltipProps) {
  return (
    <TooltipMui
      title={label}
      placement={placement}
      arrow
      enterDelay={200}
      slotProps={{
        tooltip: {
          sx: wide ? { maxWidth: 220, textAlign: "center", lineHeight: 1.4 } : undefined,
        },
      }}
    >
      <span className="tooltip-trigger">{children as ReactElement}</span>
    </TooltipMui>
  );
}
