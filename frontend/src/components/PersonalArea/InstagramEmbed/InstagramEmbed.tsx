import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { normalizeInstagramPermalink } from "@/data/instagramReels";
import { loadInstagramEmbeds, processInstagramEmbeds } from "./instagramEmbedScript";
import "./InstagramEmbed.css";

function buildQuote(permalink: string, label: string): HTMLQuoteElement {
  const quote = document.createElement("blockquote");
  quote.className = "instagram-media";
  quote.setAttribute("data-instgrm-permalink", permalink);
  quote.setAttribute("data-instgrm-version", "14");
  const link = document.createElement("a");
  link.href = permalink;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = label;
  quote.appendChild(link);
  return quote;
}

export function InstagramEmbed({ permalink }: { permalink: string }) {
  const { t } = useLanguage();
  const hostRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [failed, setFailed] = useState(false);
  const normalized = normalizeInstagramPermalink(permalink);
  const label = t.beyondCode.watchReel;

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: "240px" }
    );
    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !visible || !normalized) return;

    let cancelled = false;
    setFailed(false);
    host.replaceChildren(buildQuote(normalized, label));

    const timer = window.setTimeout(() => {
      if (!cancelled && !host.querySelector("iframe")) setFailed(true);
    }, 5000);

    loadInstagramEmbeds()
      .then(() => {
        if (!cancelled) processInstagramEmbeds();
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      host.replaceChildren();
    };
  }, [visible, normalized, label]);

  const href = normalized ?? permalink;

  return (
    <figure className="ig-embed">
      <div ref={hostRef} className="ig-embed__host" />
      {(!normalized || failed) && (
        <a className="ig-embed__fallback" href={href} target="_blank" rel="noopener noreferrer">
          {t.beyondCode.embedFailed}
        </a>
      )}
    </figure>
  );
}
