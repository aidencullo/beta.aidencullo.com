import React from "react";
import "./Footer.css";
import ContactLink from "./ContactLink";
import EmailTextLink from "./EmailTextLink";
import LinkedInTextLink from "./LinkedInTextLink";
import XTextLink from "./XTextLink";
import SiteLink from "./SiteLink";
import GitHubPagesTextLink from "./GitHubPagesTextLink";
import NamecheapTextLink from "./NamecheapTextLink";
import ReactTextLink from "./ReactTextLink";
import ViteTextLink from "./ViteTextLink";
import ProjectsLink from "./ProjectsLink";
import PipenvTextLink from "./PipenvTextLink";
import TrueorFalseTextLink from "./TrueorFalseTextLink";
import NoMailTextLink from "./NoMailTextLink";
import SeatFinderTextLink from "./SeatFinderTextLink";
import VolunteerLink from "./VolunteerLink";
import NYCMeshTextLink from "./NYCMeshTextLink";
import BushwickAyudaMutuaTextLink from "./BushwickAyudaMutuaTextLink";
import NYCDSATextLink from "./NYCDSATextLink";
import DemocracyNowTextLink from "./DemocracyNowTextLink";
import GitHubTextLink from "./GitHubTextLink";
import StackOverflowTextLink from "./StackOverflowTextLink";
import ResumeTextLink from "./ResumeTextLink";
import FooterSection from "./FooterSection";
import Copyright from "./Copyright";

const Footer = () => {

  const contactLinks = [
    <EmailTextLink />,
    <LinkedInTextLink />,
    <XTextLink />
  ];

  const siteLinks = [

    <GitHubPagesTextLink />,
    <NamecheapTextLink />,
    <ReactTextLink />,
    <ViteTextLink />
  ];

  const projectsLinks = [

    <PipenvTextLink />,
    <TrueorFalseTextLink />,
    <NoMailTextLink />,
    <SeatFinderTextLink />
  ];

  const volunteerLinks = [

    <NYCMeshTextLink />,
    <BushwickAyudaMutuaTextLink />,
    <NYCDSATextLink />,
    <DemocracyNowTextLink />
  ];

  return (
    <footer className="footer">
      <div className="footer-headers">
        <FooterSection header={<ContactLink />}>
        {contactLinks.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
        </FooterSection>
        
        <FooterSection header={<SiteLink />}>
          {siteLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </FooterSection>
        
        
        <FooterSection header={<ProjectsLink />}>
          {projectsLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </FooterSection>   
        
        <FooterSection header={<VolunteerLink />}>
          {volunteerLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
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
