import React from 'react';
import ContactLinks from '../ContactLinks/ContactLinks';
import SiteLinks from '../SiteLinks/SiteLinks';
import ProjectLinks from '../ProjectLinks/ProjectLinks';
import VolunteerLinks from '../VolunteerLinks/VolunteerLinks';
import FooterSection from '../FooterSection/FooterSection';
import './FooterSections.css';

const FooterSections: React.FC = () => {
  const sections = [
    { header: "Contact", component: ContactLinks },
    { header: "Site", component: SiteLinks },
    { header: "Projects", component: ProjectLinks },
    { header: "Volunteer", component: VolunteerLinks }
  ];

  return (
    <div className="footer-headers">
      {sections.map((section, index) => (
        <FooterSection key={index} header={section.header}>
          <section.component />
        </FooterSection>
      ))}
    </div>
  );
};

export default FooterSections;
