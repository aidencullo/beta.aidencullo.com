import React from "react";
import "./Footer.css";
import InternalLink from "./InternalLink";
import Link from "./Link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-headers">
        <div className="footer-section">
          <h3>
            <InternalLink href="#" title="Contact" className="header-me-link">
              Contact
            </InternalLink>
          </h3>
          <ul>
            <li>
              <Link href="mailto:aidencullo@gmail.com" title="Email" className="header-me-link">
                Email
              </Link>
            </li>
            <li>
              <Link 
                href="https://www.linkedin.com/in/aidencullo/" 
                title="LinkedIn"
                isExternal={true}
                className="header-me-link"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link 
                href="https://x.com/CuloEgan" 
                title="X"
                isExternal={true}
                className="header-me-link"
              >
                X
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>
            <InternalLink href="#" title="Site" className="header-me-link">
              Site
            </InternalLink>
          </h3>
          <ul>
            <li>
              <Link 
                href="https://pages.github.com/" 
                title="GitHub Pages"
                isExternal={true}
                className="header-me-link"
              >
                GitHub Pages
              </Link>
            </li>
            <li>
              <Link 
                href="https://www.namecheap.com/" 
                title="Namecheap"
                isExternal={true}
                className="header-me-link"
              >
                Namecheap
              </Link>
            </li>
            <li>
              <Link 
                href="https://react.dev/" 
                title="React"
                isExternal={true}
                className="header-me-link"
              >
                React
              </Link>
            </li>
            <li>
              <Link 
                href="https://vitejs.dev/" 
                title="Vite"
                isExternal={true}
                className="header-me-link"
              >
                Vite
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>
            <InternalLink href="#" title="Projects" className="header-me-link">
              Projects
            </InternalLink>
          </h3>
          <ul>
            <li>
              <Link 
                href="https://github.com/pypa/pipenv" 
                title="Pipenv"
                isExternal={true}
                className="header-me-link"
              >
                Pipenv
              </Link>
            </li>
            <li>
              <Link 
                href="https://github.com/aidencullo/trueorfalse.online" 
                title="TrueorFalse"
                isExternal={true}
                className="header-me-link"
              >
                TrueorFalse
              </Link>
            </li>
            <li>
              <Link 
                href="https://github.com/aidencullo/nomail" 
                title="NoMail"
                isExternal={true}
                className="header-me-link"
              >
                NoMail
              </Link>
            </li>
            <li>
              <Link 
                href="https://github.com/aidencullo/seatFinder" 
                title="SeatFinder"
                isExternal={true}
                className="header-me-link"
              >
                SeatFinder
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>
            <InternalLink href="#" title="Volunteer" className="header-me-link">
              Volunteer
            </InternalLink>
          </h3>
          <ul>
            <li>
              <Link 
                href="https://www.nycmesh.net/" 
                title="NYC Mesh"
                isExternal={true}
                className="header-me-link"
              >
                NYC Mesh
              </Link>
            </li>
            <li>
              <Link 
                href="https://bushwickayudamutua.com/" 
                title="Bushwick Ayuda Mutua"
                isExternal={true}
                className="header-me-link"
              >
                Bushwick Ayuda Mutua
              </Link>
            </li>
            <li>
              <Link 
                href="https://socialists.nyc/" 
                title="NYC DSA"
                isExternal={true}
                className="header-me-link"
              >
                NYC DSA
              </Link>
            </li>
            <li>
              <Link 
                href="https://www.democracynow.org/2025/8/6/headlines/advocates_launch_protest_camp_outside_new_york_city_immigration_offices" 
                title="Democracy Now!"
                isExternal={true}
                className="header-me-link"
              >
                Democracy Now!
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>
          <Link 
            href="https://github.com/aidencullo" 
            title="GitHub"
            isExternal={true}
            className="header-me-link"
          >
            GitHub
          </Link>
          {" "}&nbsp;{" "}
          <Link 
            href="https://stackoverflow.com/users/1234567/aidencullo" 
            title="Stack Overflow"
            isExternal={true}
            className="header-me-link"
          >
            Stack Overflow
          </Link>
          {" "}&nbsp;{" "}
          <Link 
            href="https://www.linkedin.com/in/aidencullo" 
            title="LinkedIn"
            isExternal={true}
            className="header-me-link"
          >
            LinkedIn
          </Link>
          {" "}&nbsp;{" "}
          <Link 
            href="mailto:aidencullo@gmail.com" 
            title="Email"
            className="header-me-link"
          >
            Email
          </Link>
          {" "}&nbsp;{" "}
          <Link 
            href="/resume.pdf" 
            title="Resume"
            isExternal={true}
            className="header-me-link"
          >
            Resume
          </Link>
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
