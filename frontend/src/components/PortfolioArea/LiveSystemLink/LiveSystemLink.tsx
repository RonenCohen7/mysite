import type { MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import "./LiveSystemLink.css";

function hostLabel(url: string): string {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function LiveSystemLink({
  href,
  onClick,
}: {
  href: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}) {
  const { t } = useLanguage();
  const host = hostLabel(href);

  return (
    <a
      className="live-system"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-label={`${t.portfolio.live}: ${host}`}
    >
      <span className="live-system__dot" aria-hidden="true" />
      <span className="live-system__label">{t.portfolio.live}</span>
      <span className="live-system__host" dir="ltr">
        {host}
      </span>
      <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  );
}
