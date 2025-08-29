import React from "react";
import "./Footer.css";
import FooterTop from "../FooterTop/FooterTop";
import FooterBottom from "../FooterBottom/FooterBottom";

const Footer = () => {

  return (
    <footer className="footer">
      <FooterTop />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
