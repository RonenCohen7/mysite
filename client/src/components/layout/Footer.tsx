import { Linkedin, Github, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/i18n/LanguageContext";
import { IconButton } from "@/components/ui/IconButton";
import { footerStyles } from "./Footer.styles";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.inner}>
        <p className={footerStyles.copy}>
          &copy; {year} {t.site.name}. {t.footer.rights}
        </p>
        <div className={footerStyles.socials}>
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
