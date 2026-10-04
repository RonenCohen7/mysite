import { useEffect, useState, type FormEvent } from "react";
import { Link, useParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { translations, type Locale } from "@/i18n/translations";
import { sendContact } from "@/Services/ApiService";
import { getPubLanding, pubLandings } from "@/data/pubLandings";
import { NotFound } from "@/components/PagesArea/NotFound/NotFound";
import "./PubLanding.css";

function pick(locale: Locale, text: { en: string; he: string }) {
  return locale === "he" ? text.he : text.en;
}

export function PubLanding() {
  const { pageId } = useParams();
  const page = getPubLanding(pageId);
  const [locale, setLocale] = useState<Locale>("he");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const t = translations[locale];

  useEffect(() => {
    window.scrollTo(0, 0);
    setSent(false);
    setError("");
  }, [pageId]);

  useEffect(() => {
    if (!page) return;
    const title = `${pick(locale, page.headline)} | Ronen Cohen`;
    document.title = title;
    const desc = pick(locale, page.punch);
    let meta = document.querySelector('meta[name="description"]');
    const previous = meta?.getAttribute("content") ?? "";
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
    return () => {
      document.title = t.site.title;
      meta?.setAttribute("content", previous);
    };
  }, [page, locale, t.site.title]);

  if (!page) return <NotFound />;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!page) return;
    setError("");
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const typed = ((form.get("message") as string) || "").trim();
    try {
      await sendContact({
        name: form.get("name") as string,
        email: form.get("email") as string,
        company: (form.get("company") as string) || "",
        mobile: form.get("mobile") as string,
        message: `${page.leadTag}\n${typed || pick(locale, page.cta)}`,
        website: (form.get("website") as string) || "",
      });
      setSent(true);
    } catch {
      setError(t.contact.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={`pub-lp pub-lp--${page.id}`} dir={locale === "he" ? "rtl" : "ltr"}>
      <header className="pub-lp__top">
        <Link to="/" className="pub-lp__brand" dir="ltr">
          Ronen.
        </Link>
        <div className="pub-lp__top-actions">
          <div className="pub-lp__lang" role="group" aria-label="Language">
            <button type="button" className={locale === "he" ? "is-on" : ""} onClick={() => setLocale("he")}>
              עב
            </button>
            <button type="button" className={locale === "en" ? "is-on" : ""} onClick={() => setLocale("en")}>
              EN
            </button>
          </div>
          <a href="#lead" className="pub-lp__top-cta">
            {pick(locale, page.cta)}
          </a>
        </div>
      </header>

      <main>
        <div className="pub-lp__mood" aria-hidden="true">
          <img src="/projects/hamasgeria/pub-drinks.jpg" alt="" />
        </div>
        <section className="pub-lp__hero">
          <p className="pub-lp__eyebrow">{pick(locale, page.eyebrow)}</p>
          <h1>{pick(locale, page.headline)}</h1>
          <p className="pub-lp__punch">{pick(locale, page.punch)}</p>
          <a href="#lead" className="pub-lp__btn">
            {pick(locale, page.cta)}
          </a>
        </section>

        <section className="pub-lp__shot">
          <figure>
            <img src={page.image} alt={pick(locale, page.imageCaption)} />
            <figcaption>{pick(locale, page.imageCaption)}</figcaption>
          </figure>
        </section>

        <section className="pub-lp__split">
          <div>
            <h2>{pick(locale, page.painTitle)}</h2>
            <ol className="pub-lp__pain">
              {page.pain.map((item) => (
                <li key={item.he}>{pick(locale, item)}</li>
              ))}
            </ol>
          </div>
          <div>
            <h2>{pick(locale, page.offerTitle)}</h2>
            <ul className="pub-lp__offer">
              {page.offer.map((item) => (
                <li key={item.he}>{pick(locale, item)}</li>
              ))}
            </ul>
          </div>
        </section>

        <p className="pub-lp__proof">{pick(locale, page.proof)}</p>

        <section id="lead" className="pub-lp__lead">
          <h2>{pick(locale, page.cta)}</h2>
          <p>{pick(locale, page.formNote)}</p>
          {sent ? (
            <div className="pub-lp__thanks">
              <CheckCircle size={28} />
              <strong>{t.contact.successTitle}</strong>
              <span>{t.contact.successText}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="pub-lp__honey" aria-hidden="true">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </div>
              <label>
                {t.contact.name}
                <input name="name" required autoComplete="name" />
              </label>
              <label>
                {locale === "he" ? "שם העסק" : "Business name"}
                <input name="company" autoComplete="organization" />
              </label>
              <label>
                {t.contact.mobile}
                <input name="mobile" type="tel" required autoComplete="tel" />
              </label>
              <label>
                {t.contact.email}
                <input name="email" type="email" required autoComplete="email" />
              </label>
              <label>
                {t.contact.message}
                <textarea name="message" rows={3} placeholder={pick(locale, page.formNote)} />
              </label>
              {error && (
                <p className="pub-lp__error" role="alert">
                  {error}
                </p>
              )}
              <button type="submit" disabled={loading}>
                {loading ? "..." : pick(locale, page.cta)}
              </button>
            </form>
          )}
        </section>
      </main>
      <footer className="pub-lp__foot">
        <Link to="/">{locale === "he" ? "רונן כהן · מערכות לעסקים קטנים" : "Ronen Cohen · systems for small businesses"}</Link>
      </footer>
    </div>
  );
}

export function PubLandingHub() {
  const [locale, setLocale] = useState<Locale>("he");

  useEffect(() => {
    document.title =
      locale === "he" ? "דפי נחיתה — מערכת לפאב | Ronen Cohen" : "Pub landing pages | Ronen Cohen";
  }, [locale]);

  return (
    <div className="pub-lp pub-lp--hub" dir={locale === "he" ? "rtl" : "ltr"}>
      <header className="pub-lp__top">
        <Link to="/" className="pub-lp__brand" dir="ltr">
          Ronen.
        </Link>
        <div className="pub-lp__lang" role="group" aria-label="Language">
          <button type="button" className={locale === "he" ? "is-on" : ""} onClick={() => setLocale("he")}>
            עב
          </button>
          <button type="button" className={locale === "en" ? "is-on" : ""} onClick={() => setLocale("en")}>
            EN
          </button>
        </div>
      </header>
      <main className="pub-lp__hub">
        <p className="pub-lp__eyebrow">{locale === "he" ? "קמפיין מערכת לפאב" : "Pub system campaign"}</p>
        <h1>{locale === "he" ? "שלושה דפים. שלושה יתרונות. אותו מוצר." : "Three pages. Three advantages. One product."}</h1>
        <p className="pub-lp__punch">
          {locale === "he"
            ? "כל קישור מתאים למודעה אחרת. בחרו זווית, פרסמו, והלידים נוחתים בטופס שבסוף הדף."
            : "Each link fits a different ad. Pick an angle, publish, and leads land in the form at the bottom of the page."}
        </p>
        <ul className="pub-lp__hub-list">
          {pubLandings.map((page) => (
            <li key={page.id}>
              <Link to={page.path}>
                <span>{page.adAngle}</span>
                <strong>{pick(locale, page.headline)}</strong>
                <em>ronencohen.dev{page.path}</em>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <footer className="pub-lp__foot">
        <Link to="/">{locale === "he" ? "רונן כהן · מערכות לעסקים קטנים" : "Ronen Cohen · systems for small businesses"}</Link>
      </footer>
    </div>
  );
}
