import { Link } from "react-router-dom";
import { Linkedin, Github, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@models/site";
import { useLanguage } from "@/i18n/LanguageContext";
import { IconButton } from "@/components/UiArea/IconButton/IconButton";
import "./Footer.css";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={"footer"}>
      <div className={"footer__inner"}>
        <p className={"footer__copy"}>
          &copy; {year} {t.site.name}. {t.footer.rights}{" "}
          <Link to="/about" className="footer__about-link">{t.footer.about}</Link>
        </p>
        <div className={"footer__socials"}>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
            <IconButton icon={<Linkedin size={18} />} tooltip={t.footer.linkedin} variant="ghost" />
          </a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
            <IconButton icon={<Github size={18} />} tooltip={t.footer.github} variant="ghost" />
          </a>
          <a href={`mailto:${siteConfig.email}`}>
            <IconButton icon={<Mail size={18} />} tooltip={t.footer.email} variant="ghost" />
          </a>
          <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
            <IconButton icon={<MessageCircle size={18} />} tooltip={t.footer.whatsapp} variant="ghost" />
          </a>
        </div>
      </div>
    </footer>
  );
}
