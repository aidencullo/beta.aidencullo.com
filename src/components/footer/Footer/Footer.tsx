import React from "react";
import "./Footer.css";
import FooterHeaders from "../FooterHeaders/FooterHeaders";
import FooterBottom from "../FooterBottom/FooterBottom";

const Footer = () => {

  return (
    <footer className="footer">
      <FooterHeaders />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
