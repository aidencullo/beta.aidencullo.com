import React from 'react';
import ContactLink from '@links/footersectionheaders/ContactLink/ContactLink';
import SiteLink from '@links/footersectionheaders/SiteLink/SiteLink';
import ProjectsLink from '@links/footersectionheaders/ProjectsLink/ProjectsLink';
import VolunteerLink from '@links/footersectionheaders/VolunteerLink/VolunteerLink';
import ContactLinks from '../ContactLinks/ContactLinks';
import SiteLinks from '../SiteLinks/SiteLinks';
import ProjectLinks from '../ProjectLinks/ProjectLinks';
import VolunteerLinks from '../VolunteerLinks/VolunteerLinks';
import FooterSection from '../FooterSection/FooterSection';
import './FooterSections.css';

const FooterSections: React.FC = () => {
  return (
    <div className="footer-headers">
      <FooterSection header={<ContactLink />}>
        <ContactLinks />
      </FooterSection>
      
      <FooterSection header={<SiteLink />}>
        <SiteLinks />
      </FooterSection>
      
      <FooterSection header={<ProjectsLink />}>
        <ProjectLinks />
      </FooterSection>   
      
      <FooterSection header={<VolunteerLink />}>
        <VolunteerLinks />
      </FooterSection>
    </div>
  );
};

export default FooterSections;
