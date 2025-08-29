import React from 'react';
import FooterBottomLinks from '../FooterBottomLinks/FooterBottomLinks';
import Copyright from '../Copyright/Copyright';
import './FooterBottom.css';

const FooterBottom: React.FC = () => {
  return (
    <div className="footer-bottom">
      <FooterBottomLinks />
      <Copyright />
    </div>
  );
};

export default FooterBottom;
