import type { TechIconSource } from "@/config/techStack";
import { techIconStyles } from "./TechIcon.styles";

interface TechIconProps {
  icon: TechIconSource;
  name: string;
}

function CustomTechIcon({ id }: { id: "cursor" | "deepseek" | "gpt" }) {
  if (id === "cursor") {
    return (
      <svg viewBox="0 0 24 24" className={techIconStyles.svg} aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" rx="1.5" fill="#1a1a1a" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" fill="#1a1a1a" opacity="0.75" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" fill="#1a1a1a" opacity="0.55" />
        <path d="M13 17h8v4h-8z" fill="#1a1a1a" opacity="0.35" />
      </svg>
    );
  }

  if (id === "gpt") {
    return (
      <svg viewBox="0 0 24 24" className={techIconStyles.svg} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#10A37F" />
        <path
          d="M12 6.5c-2.2 0-4 1.4-4 3.2 0 1.1.6 2.1 1.6 2.7-.9.5-1.5 1.4-1.5 2.4 0 1.8 1.8 3.2 4 3.2s4-1.4 4-3.2c0-1-.6-1.9-1.5-2.4 1-.6 1.6-1.6 1.6-2.7 0-1.8-1.8-3.2-4-3.2zm0 1.4c1.3 0 2.3.7 2.3 1.8s-1 1.8-2.3 1.8-2.3-.7-2.3-1.8 1-1.8 2.3-1.8zm0 5.8c1.3 0 2.3.7 2.3 1.8s-1 1.8-2.3 1.8-2.3-.7-2.3-1.8 1-1.8 2.3-1.8z"
          fill="white"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={techIconStyles.svg} aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#4D6BFE" />
      <path
        d="M8.5 14.5c1.2 1.8 3.5 2.8 5.8 2.3 1.4-.3 2.6-1.2 3.3-2.4.4-.7.5-1.5.3-2.3-.2-.8-.7-1.5-1.4-2 1.1-.3 2-1.1 2.5-2.2.6-1.3.4-2.8-.5-3.9-1.5-1.8-4.4-2.2-6.5-.9-1 .7-1.7 1.8-1.9 3-.3 1.5.1 3 1.2 4.1-.9.4-1.6 1.1-1.8 2.3z"
        fill="white"
      />
    </svg>
  );
}

export function TechIcon({ icon, name }: TechIconProps) {
  if (icon.type === "custom") {
    return <CustomTechIcon id={icon.id} />;
  }

  const color = icon.color ? `/${icon.color}` : "";
  const src = `https://cdn.simpleicons.org/${icon.slug}${color}`;

  return (
    <span className={techIconStyles.fallbackWrap}>
      <img
        src={src}
        alt=""
        className={techIconStyles.img}
        loading="lazy"
        decoding="async"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          const fallback = e.currentTarget.parentElement?.querySelector("[data-fallback]");
          if (fallback instanceof HTMLElement) fallback.style.display = "flex";
        }}
      />
      <span data-fallback className={techIconStyles.fallback} style={{ display: "none" }}>
        {name.slice(0, 2)}
      </span>
    </span>
  );
}
