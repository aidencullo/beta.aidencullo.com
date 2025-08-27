import React from "react";
import "./Footer.css";
import ContactLink from "./ContactLink";
import ContactLinks from "./ContactLinks";
import SiteLinks from "./SiteLinks";
import ProjectLinks from "./ProjectLinks";
import VolunteerLinks from "./VolunteerLinks";
import SiteLink from "./SiteLink";
import ProjectsLink from "./ProjectsLink";
import VolunteerLink from "./VolunteerLink";
import GitHubTextLink from "./GitHubTextLink";
import StackOverflowTextLink from "./StackOverflowTextLink";
import ResumeTextLink from "./ResumeTextLink";
import LinkedInTextLink from "./LinkedInTextLink";
import EmailTextLink from "./EmailTextLink";
import FooterSection from "./FooterSection";
import Copyright from "./Copyright";

const Footer = () => {

  return (
    <footer className="footer">
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
      
      <div className="footer-bottom">
        <p>
          <GitHubTextLink />
          <StackOverflowTextLink />
          <LinkedInTextLink />
          <EmailTextLink />
          <ResumeTextLink />
        </p>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
