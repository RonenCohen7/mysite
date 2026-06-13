import { useEffect, useState } from "react";
import { mouseGlowStyles } from "./MouseGlow.styles";
import { useReducedMotion } from "@/hooks/useScrollSpy";

export function MouseGlow() {
  const reduced = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const isTouch = "ontouchstart" in window;
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div className={mouseGlowStyles.container} aria-hidden="true">
      <div
        className={mouseGlowStyles.glow}
        style={{
          left: pos.x,
          top: pos.y,
          opacity: visible ? 1 : 0,
          background: "radial-gradient(circle, rgba(13,148,136,0.08) 0%, rgba(249,115,22,0.04) 40%, transparent 70%)",
        }}
      />
    </div>
  );
}
