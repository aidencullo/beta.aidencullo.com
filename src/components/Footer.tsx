import React from "react";
import "./Footer.css";
import InternalLink from "./InternalLink";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-headers">
        <div className="footer-section">
          <h3><InternalLink href="#" title="Contact" className="header-me-link">Contact</InternalLink></h3>
          <ul>
            <li><a href="mailto:aidencullo@gmail.com" className="header-me-link">Email</a></li>
            <li><a href="https://facebook.com/aidencullo" target="_blank" rel="noopener noreferrer" className="header-me-link">Facebook</a></li>
            <li><a href="https://instagram.com/aidencullo" target="_blank" rel="noopener noreferrer" className="header-me-link">Instagram</a></li>
            <li><a href="https://twitter.com/aidencullo" target="_blank" rel="noopener noreferrer" className="header-me-link">Twitter</a></li>
            <li><a href="https://tiktok.com/@aidencullo" target="_blank" rel="noopener noreferrer" className="header-me-link">TikTok</a></li>
            <li><a href="https://bsky.app/profile/aidencullo.bsky.social" target="_blank" rel="noopener noreferrer" className="header-me-link">Bluesky</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3><InternalLink href="#" title="Site" className="header-me-link">Site</InternalLink></h3>
          <ul>
            <li><a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer" className="header-me-link">GitHub Pages</a></li>
            <li><a href="https://www.namecheap.com/" target="_blank" rel="noopener noreferrer" className="header-me-link">Namecheap</a></li>
            <li><a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="header-me-link">React</a></li>
            <li><a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer" className="header-me-link">Vite</a></li>
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
            <a href="https://github.com/aidencullo" target="_blank" rel="noopener noreferrer" className="header-me-link">GitHub</a> &nbsp; <a href="https://stackoverflow.com/users/1234567/aidencullo" target="_blank" rel="noopener noreferrer" className="header-me-link">Stack Overflow</a> &nbsp; <a href="https://www.linkedin.com/in/aidencullo" target="_blank" rel="noopener noreferrer" className="header-me-link">LinkedIn</a> &nbsp; <a href="mailto:aidencullo@gmail.com" className="header-me-link">Email</a> &nbsp; <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="header-me-link">Resume</a>
          </p>
        <p>
          © 2025 Aiden Cullo. All rights reserved. This site is hosted on GitHub Pages with a Namecheap domain.
        </p>
      </div>
    </footer>
  );
};

export default Footer
