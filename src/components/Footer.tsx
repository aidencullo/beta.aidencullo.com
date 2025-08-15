import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-section">
          <h4>STACK OVERFLOW</h4>
          <ul>
            <li>Questions</li>
            <li>Help</li>
            <li>Chat</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>PRODUCTS</h4>
          <ul>
            <li>Teams</li>
            <li>Advertising</li>
            <li>Talent</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>COMPANY</h4>
          <ul>
            <li>About</li>
            <li>Press</li>
            <li>Work Here</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
            <li>Your Privacy Choices</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>STACK EXCHANGE NETWORK</h4>
          <ul>
            <li>Technology</li>
            <li>Culture & recreation</li>
            <li>Life & arts</li>
            <li>Science</li>
            <li>Professional</li>
            <li>Business</li>
            <li>API</li>
            <li>Data</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Blog &nbsp; Facebook &nbsp; Twitter &nbsp; LinkedIn &nbsp; Instagram
        </p>
        <p>
          Site design / logo © 2025 Stack Exchange Inc; user contributions
          licensed under <a href="#">CC BY-SA</a>. rev 2025.8.14.32835
        </p>
      </div>
    </footer>
  );
};

export default Footer
