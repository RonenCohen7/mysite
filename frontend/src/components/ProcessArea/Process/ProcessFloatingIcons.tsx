import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { techStackItems } from "@models/techStack";
import { useLanguage } from "@/i18n/LanguageContext";
import { TechIcon } from "@/components/UiArea/TechIcon/TechIcon";
import { Tooltip } from "@/components/UiArea/Tooltip/Tooltip";
import { useTechIconReveal } from "@/Utils/useTechIconReveal";
import { cn } from "@/Utils/cn";
import "./ProcessFloatingIcons.css";

interface Anchor {
  top: string;
  left: string;
}

/** Safe zones between/alongside timeline cards — never over card content */
function buildAnchors(stepCount: number, mobile: boolean): Anchor[] {
  const anchors: Anchor[] = [];

  for (let i = 0; i < stepCount; i++) {
    const top = `${((i + 0.55) / stepCount) * 100}%`;
    if (mobile) {
      anchors.push({ top, left: "10%" });
      anchors.push({ top, left: "22%" });
    } else {
      const onLeft = i % 2 === 0;
      anchors.push({ top, left: onLeft ? "4%" : "82%" });
      anchors.push({ top, left: onLeft ? "18%" : "66%" });
    }
  }

  if (!mobile) {
    for (let i = 0; i < stepCount - 1; i++) {
      const top = `${((i + 1) / stepCount) * 100}%`;
      anchors.push({ top, left: i % 2 === 0 ? "72%" : "10%" });
      anchors.push({ top, left: "46%" });
    }
  }

  return anchors;
}

function pickAnchors(anchors: Anchor[], count: number): Anchor[] {
  return [...anchors].sort(() => Math.random() - 0.5).slice(0, count);
}

export function ProcessFloatingIcons({ stepCount }: { stepCount: number }) {
  const { t } = useLanguage();
  const { visibleIds, flashAll, reduced } = useTechIconReveal();
  const [mobile, setMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const anchors = useMemo(() => buildAnchors(stepCount, mobile), [stepCount, mobile]);

  const placements = useMemo(() => {
    const items = flashAll
      ? techStackItems
      : techStackItems.filter((item) => visibleIds.has(item.id));

    const slots = pickAnchors(anchors, items.length);
    return items.map((tech, i) => ({
      tech,
      anchor: slots[i % slots.length],
    }));
  }, [visibleIds, flashAll, anchors]);

  if (reduced) return null;

  return (
    <div className="process-floating-icons" aria-hidden="true">
      {placements.map(({ tech, anchor }) => (
        <FloatingIcon
          key={tech.id}
          icon={tech.icon}
          name={tech.name}
          label={t.techTooltips[tech.id]}
          anchor={anchor}
          visible={visibleIds.has(tech.id) || flashAll}
          flash={flashAll}
        />
      ))}
    </div>
  );
}

function FloatingIcon({
  icon,
  name,
  label,
  anchor,
  visible,
  flash,
}: {
  icon: (typeof techStackItems)[number]["icon"];
  name: string;
  label: string;
  anchor: Anchor;
  visible: boolean;
  flash: boolean;
}) {
  return (
    <motion.div
      className="process-floating-icons__slot"
      style={{ top: anchor.top, left: anchor.left }}
      animate={
        visible
          ? { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, scale: 0.82, y: 10, filter: "blur(4px)" }
      }
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tooltip label={label} placement="top" wide>
        <div
          className={cn(
            "process-floating-icons__pill glass-card",
            visible && flash && "process-floating-icons__pill--flash"
          )}
        >
          <TechIcon icon={icon} name={name} />
        </div>
      </Tooltip>
      <span className="sr-only">{name}</span>
    </motion.div>
  );
}
