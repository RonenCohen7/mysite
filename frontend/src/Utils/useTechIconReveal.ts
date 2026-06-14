import { useEffect, useRef, useState } from "react";
import { techStackItems } from "@models/techStack";
import type { TechStackId } from "@models/techStack";
import { useReducedMotion } from "@/Utils/useScrollSpy";

const ALL_IDS = techStackItems.map((item) => item.id);
export const FLASH_EVERY_SECONDS = 10;

export function pickRandomIds(): Set<TechStackId> {
  const count = Math.random() < 0.5 ? 2 : 3;
  const shuffled = [...techStackItems].sort(() => Math.random() - 0.5);
  return new Set(shuffled.slice(0, count).map((item) => item.id));
}

export function useTechIconReveal() {
  const reduced = useReducedMotion();
  const [visibleIds, setVisibleIds] = useState<Set<TechStackId>>(() => pickRandomIds());
  const [flashAll, setFlashAll] = useState(false);
  const secondsRef = useRef(0);

  useEffect(() => {
    if (reduced) {
      setVisibleIds(new Set(ALL_IDS));
      setFlashAll(false);
      return;
    }

    const id = window.setInterval(() => {
      secondsRef.current += 1;

      if (secondsRef.current % FLASH_EVERY_SECONDS === 0) {
        setFlashAll(true);
        setVisibleIds(new Set(ALL_IDS));
      } else {
        setFlashAll(false);
        setVisibleIds(pickRandomIds());
      }
    }, 1000);

    return () => window.clearInterval(id);
  }, [reduced]);

  return { visibleIds, flashAll, reduced };
}
