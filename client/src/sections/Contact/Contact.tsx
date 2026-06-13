import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sendContact } from "@/services/api";
import { contactStyles } from "./Contact.styles";

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
      <div className={contactStyles.wrapper}>
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div key="success" className={contactStyles.success} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
              <div className={contactStyles.successIcon}><CheckCircle size={32} /></div>
              <h3 className={contactStyles.successTitle}>{t.contact.successTitle}</h3>
              <p className={contactStyles.successText}>{t.contact.successText}</p>
            </motion.div>
          ) : (
            <motion.form key="form" className={contactStyles.form} onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className={contactStyles.honeypot} aria-hidden="true"><input type="text" name="website" tabIndex={-1} autoComplete="off" /></div>
              <div className={contactStyles.field}>
                <label htmlFor="name" className={contactStyles.label}>{t.contact.name}</label>
                <input id="name" name="name" required className={contactStyles.input} placeholder={t.contact.placeholders.name} />
              </div>
              <div className={contactStyles.field}>
                <label htmlFor="email" className={contactStyles.label}>{t.contact.email}</label>
                <input id="email" name="email" type="email" required className={contactStyles.input} placeholder={t.contact.placeholders.email} />
              </div>
              <div className={contactStyles.field}>
                <label htmlFor="company" className={contactStyles.label}>{t.contact.company}</label>
                <input id="company" name="company" className={contactStyles.input} placeholder={t.contact.placeholders.company} />
              </div>
              <div className={contactStyles.field}>
                <label htmlFor="mobile" className={contactStyles.label}>{t.contact.mobile}</label>
                <input id="mobile" name="mobile" type="tel" required className={contactStyles.input} placeholder={t.contact.placeholders.mobile} />
              </div>
              <div className={contactStyles.field}>
                <label htmlFor="message" className={contactStyles.label}>{t.contact.message}</label>
                <textarea id="message" name="message" required className={`${contactStyles.input} ${contactStyles.textarea}`} placeholder={t.contact.placeholders.message} />
              </div>
              {error && <p className={contactStyles.error} role="alert">{error}</p>}
              <div className={contactStyles.actions}>
                <button type="submit" disabled={loading} className={contactStyles.submitBtn}>
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
