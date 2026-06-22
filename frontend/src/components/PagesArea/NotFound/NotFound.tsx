import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Navbar } from "@/components/LayoutArea/Navbar/Navbar";
import { Footer } from "@/components/LayoutArea/Footer/Footer";
import "./NotFound.css";

export function NotFound() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <div className="not-found-page">
        <main className="not-found-page__main">
          <div className="not-found-page__container">
            <p className="not-found-page__code" aria-hidden="true">
              404
            </p>
            <h1 className="not-found-page__title">{t.notFound.title}</h1>
            <Link to="/" className="not-found-page__home-btn" aria-label={t.notFound.backHome}>
              <Home size={28} strokeWidth={1.75} />
            </Link>
            <span className="not-found-page__home-label">{t.notFound.backHome}</span>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
