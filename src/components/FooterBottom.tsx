import React from 'react';
import FooterBottomLinks from './FooterBottomLinks';
import Copyright from './Copyright';

const FooterBottom: React.FC = () => {
  return (
    <div className="footer-bottom">
      <FooterBottomLinks />
      <Copyright />
    </div>
  );
};

export default FooterBottom;
