import React, { ReactNode } from 'react';
import { useLanguage } from '@hooks/useLanguage';
import './FooterSection.css';

interface FooterSectionProps {
  header: string;
  children: ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ header, children }) => {
  const { language } = useLanguage()

  const getTranslatedHeader = (header: string) => {
    const translations: { [key: string]: { english: string; spanish: string; french: string } } = {
      "Contact": { english: "CONTACT", spanish: "CONTACTO", french: "CONTACT" },
      "Site": { english: "SITE", spanish: "SITIO", french: "SITE" },
      "Projects": { english: "PROJECTS", spanish: "PROYECTOS", french: "PROJETS" }
    }

    const translation = translations[header]
    if (translation) {
      if (language === "english") return translation.english
      if (language === "español") return translation.spanish
      return translation.french
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
