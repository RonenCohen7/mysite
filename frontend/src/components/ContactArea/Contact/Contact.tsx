import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/LayoutArea/Section/Section";
import { SectionHeading } from "@/components/UiArea/SectionHeading/SectionHeading";
import { sendContact } from "@/Services/ApiService";
import "./Contact.css";

export function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const form = new FormData(e.currentTarget);
    try {
      await sendContact({
        name: form.get("name") as string,
        email: form.get("email") as string,
        company: (form.get("company") as string) || "",
        mobile: form.get("mobile") as string,
        message: form.get("message") as string,
        website: (form.get("website") as string) || "",
      });
      setSent(true);
    } catch {
      setError(t.contact.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact">
      <SectionHeading label={t.sections.contact.label} subtitle={t.sections.contact.subtitle} />
      <div className={"contact__wrapper"}>
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div key="success" className={"contact__success"} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
              <div className={"contact__success-icon"}><CheckCircle size={32} /></div>
              <h3 className={"contact__success-title"}>{t.contact.successTitle}</h3>
              <p className={"contact__success-text"}>{t.contact.successText}</p>
            </motion.div>
          ) : (
            <motion.form key="form" className={"contact__form glass-card glow-border"} onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className={"contact__honeypot"} aria-hidden="true"><input type="text" name="website" tabIndex={-1} autoComplete="off" /></div>
              <div className={"contact__field"}>
                <label htmlFor="name" className={"contact__label"}>{t.contact.name}</label>
                <input id="name" name="name" required className={"contact__input"} placeholder={t.contact.placeholders.name} />
              </div>
              <div className={"contact__field"}>
                <label htmlFor="email" className={"contact__label"}>{t.contact.email}</label>
                <input id="email" name="email" type="email" required className={"contact__input"} placeholder={t.contact.placeholders.email} />
              </div>
              <div className={"contact__field"}>
                <label htmlFor="company" className={"contact__label"}>{t.contact.company}</label>
                <input id="company" name="company" className={"contact__input"} placeholder={t.contact.placeholders.company} />
              </div>
              <div className={"contact__field"}>
                <label htmlFor="mobile" className={"contact__label"}>{t.contact.mobile}</label>
                <input id="mobile" name="mobile" type="tel" required className={"contact__input"} placeholder={t.contact.placeholders.mobile} />
              </div>
              <div className={"contact__field"}>
                <label htmlFor="message" className={"contact__label"}>{t.contact.message}</label>
                <textarea id="message" name="message" required className="contact__input contact__textarea" placeholder={t.contact.placeholders.message} />
              </div>
              {error && <p className={"contact__error"} role="alert">{error}</p>}
              <div className={"contact__actions"}>
                <button type="submit" disabled={loading} className={"contact__submit"}>
                  {loading ? "..." : t.contact.send}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
