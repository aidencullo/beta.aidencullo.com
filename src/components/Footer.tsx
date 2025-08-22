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
            <li><a href="https://www.linkedin.com/in/aidencullo/" target="_blank" rel="noopener noreferrer" className="header-me-link">LinkedIn</a></li>
            <li><a href="https://x.com/CuloEgan" target="_blank" rel="noopener noreferrer" className="header-me-link">X</a></li>
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
          <h3><InternalLink href="#" title="Projects" className="header-me-link">Projects</InternalLink></h3>
          <ul>
            <li><a href="https://github.com/pypa/pipenv" target="_blank" rel="noopener noreferrer" className="header-me-link">Pipenv</a></li>
            <li><a href="https://github.com/aidencullo/trueorfalse.online" target="_blank" rel="noopener noreferrer" className="header-me-link">TrueorFalse</a></li>
            <li><a href="https://github.com/aidencullo/nomail" target="_blank" rel="noopener noreferrer" className="header-me-link">NoMail</a></li>
            <li><a href="https://github.com/aidencullo/seatFinder" target="_blank" rel="noopener noreferrer" className="header-me-link">SeatFinder</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3><InternalLink href="#" title="Volunteer" className="header-me-link">Volunteer</InternalLink></h3>
          <ul>
            <li><a href="https://www.nycmesh.net/" target="_blank" rel="noopener noreferrer" className="header-me-link">NYC Mesh</a></li>
            <li><a href="https://bushwickayudamutua.com/" target="_blank" rel="noopener noreferrer" className="header-me-link">Bushwick Ayuda Mutua</a></li>
            <li><a href="https://socialists.nyc/" target="_blank" rel="noopener noreferrer" className="header-me-link">NYC DSA</a></li>
            <li><a href="https://www.democracynow.org/2025/8/6/headlines/advocates_launch_protest_camp_outside_new_york_city_immigration_offices" target="_blank" rel="noopener noreferrer" className="header-me-link">Democracy Now!</a></li>
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
