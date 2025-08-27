import React from 'react';
import ContactLink from './links/ContactLink';
import SiteLink from './links/SiteLink';
import ProjectsLink from './links/ProjectsLink';
import VolunteerLink from './links/VolunteerLink';
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
