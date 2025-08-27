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

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-headers">
        <FooterSection header={<ContactLink />}>
          <li>
            <EmailTextLink />
          </li>
          <li>
            <LinkedInTextLink />
          </li>
          <li>
            <XTextLink />
          </li>
        </FooterSection>
        
        <FooterSection header={<SiteLink />}>
          <li>
            <GitHubPagesTextLink />
          </li>
          <li>
            <NamecheapTextLink />
          </li>
          <li>
            <ReactTextLink />
          </li>
          <li>
            <ViteTextLink />
          </li>
        </FooterSection>
        
        <FooterSection header={<ProjectsLink />}>
          <li>
            <PipenvTextLink />
          </li>
          <li>
            <TrueorFalseTextLink />
          </li>
          <li>
            <NoMailTextLink />
          </li>
          <li>
            <SeatFinderTextLink />
          </li>
        </FooterSection>
        
        <FooterSection header={<VolunteerLink />}>
          <li>
            <NYCMeshTextLink />
          </li>
          <li>
            <BushwickAyudaMutuaTextLink />
          </li>
          <li>
            <NYCDSATextLink />
          </li>
          <li>
            <DemocracyNowTextLink />
          </li>
        </FooterSection>
      </div>
      
      <div className="footer-bottom">
        <p>
          <GitHubTextLink />
          {" "}&nbsp;{" "}
          <StackOverflowTextLink />
          {" "}&nbsp;{" "}
          <LinkedInTextLink />
          {" "}&nbsp;{" "}
          <EmailTextLink />
          {" "}&nbsp;{" "}
          <ResumeTextLink />
        </p>
        <div className="footer-bottom-right">
          <p>
            © 2025 Aiden Cullo. All rights reserved. This site is hosted on GitHub Pages with a Namecheap domain.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
