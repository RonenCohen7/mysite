import { useEffect, useRef } from "react";
import cinematicVideo from "@/Assets/Video/Cinematic_futuristic_technolog.mp4";
import { useReducedMotion } from "@/Utils/useScrollSpy";
import "./HeroVideoBackground.css";

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
    <div className={"hero-video"} aria-hidden="true">
      {reduced ? (
        <div className={"hero-video__fallback"} />
      ) : (
        <>
          <video
            ref={videoRef}
            className={"hero-video__video"}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={cinematicVideo} type="video/mp4" />
          </video>
          <div className={"hero-video__overlay"} />
        </>
      )}
    </div>
  );
}
