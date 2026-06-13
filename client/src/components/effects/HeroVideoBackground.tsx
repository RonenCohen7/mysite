import { useEffect, useRef } from "react";
import cinematicVideo from "@/assets/video/Cinematic_futuristic_technolog.mp4";
import { useReducedMotion } from "@/hooks/useScrollSpy";
import { heroVideoStyles } from "./HeroVideoBackground.styles";

export function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, [reduced]);

  return (
    <div className={heroVideoStyles.container} aria-hidden="true">
      {reduced ? (
        <div className={heroVideoStyles.fallback} />
      ) : (
        <>
          <video
            ref={videoRef}
            className={heroVideoStyles.video}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={cinematicVideo} type="video/mp4" />
          </video>
          <div className={heroVideoStyles.overlay} />
        </>
      )}
    </div>
  );
}
