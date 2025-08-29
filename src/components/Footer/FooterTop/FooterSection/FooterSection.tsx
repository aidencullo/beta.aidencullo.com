import React, { ReactNode } from 'react';
import { useLanguageCustom } from '@hooks/useLanguage';
import './FooterSection.css';

interface FooterSectionProps {
  header: string;
  children: ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ header, children }) => {
  const { language } = useLanguageCustom()

  const getTranslatedHeader = (header: string) => {
    const translations: { [key: string]: { english: string; spanish: string } } = {
      "Contact": { english: "CONTACT", spanish: "CONTACTO" },
      "Site": { english: "SITE", spanish: "SITIO" },
      "Projects": { english: "PROJECTS", spanish: "PROYECTOS" },
      "Volunteer": { english: "VOLUNTEER", spanish: "VOLUNTARIADO" }
    }

    const translation = translations[header]
    if (translation) {
      return language === "english" ? translation.english : translation.spanish
    }
    
    return header.toUpperCase()
  }

  const headerStylized = getTranslatedHeader(header)

  return (
    <div className="footer-section">
      <p className="footer-section-header">
        {headerStylized}
      </p>
      <ul>
        {children}
      </ul>
    </div>
  );
};

export default FooterSection;
