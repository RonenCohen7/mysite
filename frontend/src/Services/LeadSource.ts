const KEY = "lead_source";
const UTM = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];
const UNSAFE = /[^\w.\-:/]/g;

/** Where this visit came from — the utm_* tags on the link (a Facebook group post carries its group), else the
 *  referring site — kept for the visit, so the contact form can tell Noa which post brought the lead. */
export function rememberLeadSource(): void {
  try {
    if (sessionStorage.getItem(KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const parts = UTM.map((key) => [key, (params.get(key) || "").replace(UNSAFE, "").slice(0, 80)])
      .filter(([, value]) => value)
      .map(([key, value]) => `${key}=${value}`);
    const referrer = document.referrer ? new URL(document.referrer).hostname : "";
    if (referrer && referrer !== window.location.hostname) parts.push(`ref=${referrer.replace(UNSAFE, "")}`);
    if (!parts.length) parts.push("direct");
    parts.push(`landing=${window.location.pathname.replace(UNSAFE, "").slice(0, 80) || "/"}`);
    sessionStorage.setItem(KEY, parts.join(", "));
  } catch {
    // storage blocked: the lead arrives without its source
  }
}

/** The line added at the end of the contact form's message ("" when unknown). */
export function leadSourceLine(): string {
  try {
    const source = sessionStorage.getItem(KEY);
    return source ? `\n\n[source: ${source}]` : "";
  } catch {
    return "";
  }
}
