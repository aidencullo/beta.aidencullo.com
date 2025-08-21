import React from "react";
import "./Footer.css";
import InternalLink from "./InternalLink";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-headers">
        <div className="footer-section">
          <h3><InternalLink href="#" title="Stack Overflow" className="header-me-link">Stack Overflow</InternalLink></h3>
          <ul>
            <li><InternalLink href="#" title="Questions" className="header-me-link">Questions</InternalLink></li>
            <li><InternalLink href="#" title="Help" className="header-me-link">Help</InternalLink></li>
            <li><InternalLink href="#" title="Chat" className="header-me-link">Chat</InternalLink></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3><InternalLink href="#" title="Products" className="header-me-link">Products</InternalLink></h3>
          <ul>
            <li><InternalLink href="#" title="Teams" className="header-me-link">Teams</InternalLink></li>
            <li><InternalLink href="#" title="Advertising" className="header-me-link">Advertising</InternalLink></li>
            <li><InternalLink href="#" title="Talent" className="header-me-link">Talent</InternalLink></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3><InternalLink href="#" title="Company" className="header-me-link">Company</InternalLink></h3>
          <ul>
            <li><InternalLink href="#" title="About" className="header-me-link">About</InternalLink></li>
            <li><InternalLink href="#" title="Press" className="header-me-link">Press</InternalLink></li>
            <li><InternalLink href="#" title="Work Here" className="header-me-link">Work Here</InternalLink></li>
            <li><InternalLink href="#" title="Legal" className="header-me-link">Legal</InternalLink></li>
            <li><InternalLink href="#" title="Privacy Policy" className="header-me-link">Privacy Policy</InternalLink></li>
            <li><InternalLink href="#" title="Terms of Service" className="header-me-link">Terms of Service</InternalLink></li>
            <li><InternalLink href="#" title="Contact Us" className="header-me-link">Contact Us</InternalLink></li>
            <li><InternalLink href="#" title="Your Privacy Choices" className="header-me-link">Your Privacy Choices</InternalLink></li>
            <li><InternalLink href="#" title="Cookie Policy" className="header-me-link">Cookie Policy</InternalLink></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3><InternalLink href="#" title="Stack Exchange Network" className="header-me-link">Stack Exchange Network</InternalLink></h3>
          <ul>
            <li><InternalLink href="#" title="Technology" className="header-me-link">Technology</InternalLink></li>
            <li><InternalLink href="#" title="Culture & recreation" className="header-me-link">Culture & recreation</InternalLink></li>
            <li><InternalLink href="#" title="Life & arts" className="header-me-link">Life & arts</InternalLink></li>
            <li><InternalLink href="#" title="Science" className="header-me-link">Science</InternalLink></li>
            <li><InternalLink href="#" title="Professional" className="header-me-link">Professional</InternalLink></li>
            <li><InternalLink href="#" title="Business" className="header-me-link">Business</InternalLink></li>
            <li><InternalLink href="#" title="API" className="header-me-link">API</InternalLink></li>
            <li><InternalLink href="#" title="Data" className="header-me-link">Data</InternalLink></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          <InternalLink href="#" title="Blog" className="header-me-link">Blog</InternalLink> &nbsp; <InternalLink href="#" title="Facebook" className="header-me-link">Facebook</InternalLink> &nbsp; <InternalLink href="#" title="Twitter" className="header-me-link">Twitter</InternalLink> &nbsp; <InternalLink href="#" title="LinkedIn" className="header-me-link">LinkedIn</InternalLink> &nbsp; <InternalLink href="#" title="Instagram" className="header-me-link">Instagram</InternalLink>
        </p>
        <p>
          © 2025 Aiden Cullo. All rights reserved. This site is hosted on GitHub Pages with a Namecheap domain. No content may be used, copied, or processed by any means, including AI, without permission.
        </p>
      </div>
    </footer>
  );
};

export default Footer
