import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconButton } from "@/components/ui/IconButton";
import { sendContact } from "@/services/api";
import { contactStyles } from "./Contact.styles";

export function Contact() {
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
        message: form.get("message") as string,
        website: (form.get("website") as string) || "",
      });
      setSent(true);
    } catch {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact">
      <SectionHeading
        label="Contact"
        title="Let's Build Together"
        subtitle="Ready to automate, integrate, and transform your business?"
      />
      <div className={contactStyles.wrapper}>
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="success"
              className={contactStyles.success}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className={contactStyles.successIcon}>
                <CheckCircle size={32} />
              </div>
              <h3 className={contactStyles.successTitle}>Message Sent!</h3>
              <p className={contactStyles.successText}>Thank you. I&apos;ll get back to you soon.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              className={contactStyles.form}
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className={contactStyles.honeypot} aria-hidden="true">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </div>
              <div className={contactStyles.field}>
                <label htmlFor="name" className={contactStyles.label}>Name</label>
                <input id="name" name="name" required className={contactStyles.input} placeholder="Your name" />
              </div>
              <div className={contactStyles.field}>
                <label htmlFor="email" className={contactStyles.label}>Email</label>
                <input id="email" name="email" type="email" required className={contactStyles.input} placeholder="you@company.com" />
              </div>
              <div className={contactStyles.field}>
                <label htmlFor="company" className={contactStyles.label}>Company</label>
                <input id="company" name="company" className={contactStyles.input} placeholder="Company name" />
              </div>
              <div className={contactStyles.field}>
                <label htmlFor="message" className={contactStyles.label}>Message</label>
                <textarea id="message" name="message" required className={`${contactStyles.input} ${contactStyles.textarea}`} placeholder="Tell me about your project..." />
              </div>
              {error && <p className={contactStyles.error} role="alert">{error}</p>}
              <div className={contactStyles.actions}>
                <IconButton
                  icon={<Send size={20} />}
                  tooltip="Send Message"
                  type="submit"
                  disabled={loading}
                />
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
