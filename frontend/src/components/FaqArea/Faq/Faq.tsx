import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/LayoutArea/Section/Section";
import { SectionHeading } from "@/components/UiArea/SectionHeading/SectionHeading";
import "./Faq.css";

export function Faq() {
  const { t } = useLanguage();

  return (
    <Section id="faq">
      <SectionHeading label={t.faq.label} title={t.faq.title} />
      <div className="faq__list">
        {t.faq.items.map((item) => (
          <details key={item.q} className="faq__item">
            <summary className="faq__question">{item.q}</summary>
            <p className="faq__answer">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
