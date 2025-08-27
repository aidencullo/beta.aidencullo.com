import React from 'react';
import ContactLink from './ContactLink';
import SiteLink from './SiteLink';
import ProjectsLink from './ProjectsLink';
import VolunteerLink from './VolunteerLink';
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
