import React from 'react';
import ContactLink from '../links/header/ContactLink';
import SiteLink from '../links/header/SiteLink';
import ProjectsLink from '../links/header/ProjectsLink';
import VolunteerLink from '../links/header/VolunteerLink';
import ContactLinks from './ContactLinks';
import SiteLinks from './SiteLinks';
import ProjectLinks from './ProjectLinks';
import VolunteerLinks from './VolunteerLinks';
import FooterSection from './FooterSection';

const FooterHeaders: React.FC = () => {
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

export default FooterHeaders;
