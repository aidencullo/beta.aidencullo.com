import React from 'react';
import ContactSection from '../ContactSection/ContactSection';
import SiteSection from '../SiteSection/SiteSection';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import FooterSection from '../FooterSection/FooterSection';
import './FooterSections.css';

const FooterSections: React.FC = () => {
  const sections = [
    { header: "Contact", component: ContactSection },
    { header: "Site", component: SiteSection },
    { header: "Projects", component: ProjectsSection }
  ];

  return (
    <div className="footer-sections">
      {sections.map((section, index) => (
        <FooterSection key={index} header={section.header}>
          <section.component />
        </FooterSection>
      ))}
    </div>
  );
};

export default FooterSections;
