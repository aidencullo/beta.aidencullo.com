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
              <Link href="mailto:aidencullo@gmail.com" title="Email">
                Email
              </Link>
            </li>
            <li>
              <Link 
                href="https://www.linkedin.com/in/aidencullo/" 
                title="LinkedIn"
                isExternal={true}
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link 
                href="https://x.com/CuloEgan" 
                title="X"
                isExternal={true}
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
              >
                GitHub Pages
              </Link>
            </li>
            <li>
              <Link 
                href="https://www.namecheap.com/" 
                title="Namecheap"
                isExternal={true}
              >
                Namecheap
              </Link>
            </li>
            <li>
              <Link 
                href="https://react.dev/" 
                title="React"
                isExternal={true}
              >
                React
              </Link>
            </li>
            <li>
              <Link 
                href="https://vitejs.dev/" 
                title="Vite"
                isExternal={true}
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
              >
                Pipenv
              </Link>
            </li>
            <li>
              <Link 
                href="https://github.com/aidencullo/trueorfalse.online" 
                title="TrueorFalse"
                isExternal={true}
              >
                TrueorFalse
              </Link>
            </li>
            <li>
              <Link 
                href="https://github.com/aidencullo/nomail" 
                title="NoMail"
                isExternal={true}
              >
                NoMail
              </Link>
            </li>
            <li>
              <Link 
                href="https://github.com/aidencullo/seatFinder" 
                title="SeatFinder"
                isExternal={true}
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
              >
                NYC Mesh
              </Link>
            </li>
            <li>
              <Link 
                href="https://bushwickayudamutua.com/" 
                title="Bushwick Ayuda Mutua"
                isExternal={true}
              >
                Bushwick Ayuda Mutua
              </Link>
            </li>
            <li>
              <Link 
                href="https://socialists.nyc/" 
                title="NYC DSA"
                isExternal={true}
              >
                NYC DSA
              </Link>
            </li>
            <li>
              <Link 
                href="https://www.democracynow.org/2025/8/6/headlines/advocates_launch_protest_camp_outside_new_york_city_immigration_offices" 
                title="Democracy Now!"
                isExternal={true}
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
          >
            GitHub
          </Link>
          {" "}&nbsp;{" "}
          <Link 
            href="https://stackoverflow.com/users/1234567/aidencullo" 
            title="Stack Overflow"
            isExternal={true}
          >
            Stack Overflow
          </Link>
          {" "}&nbsp;{" "}
          <Link 
            href="https://www.linkedin.com/in/aidencullo" 
            title="LinkedIn"
            isExternal={true}
          >
            LinkedIn
          </Link>
          {" "}&nbsp;{" "}
          <Link 
            href="mailto:aidencullo@gmail.com" 
            title="Email"
          >
            Email
          </Link>
          {" "}&nbsp;{" "}
          <Link 
            href="/resume.pdf" 
            title="Resume"
            isExternal={true}
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
