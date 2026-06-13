import { Linkedin, Github, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { IconButton } from "@/components/ui/IconButton";
import { footerStyles } from "./Footer.styles";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.inner}>
        <p className={footerStyles.copy}>
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
        <div className={footerStyles.socials}>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
            <IconButton icon={<Linkedin size={18} />} tooltip="LinkedIn" variant="ghost" />
          </a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
            <IconButton icon={<Github size={18} />} tooltip="GitHub" variant="ghost" />
          </a>
          <a href={`mailto:${siteConfig.email}`}>
            <IconButton icon={<Mail size={18} />} tooltip="Email" variant="ghost" />
          </a>
          <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
            <IconButton icon={<MessageCircle size={18} />} tooltip="WhatsApp" variant="ghost" />
          </a>
        </div>
      </div>
    </footer>
  );
}
