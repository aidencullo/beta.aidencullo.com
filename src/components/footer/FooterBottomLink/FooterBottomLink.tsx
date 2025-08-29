import React, { ReactNode } from 'react';
import './FooterBottomLink.css';

interface FooterBottomLinkProps {
  children: ReactNode;
}

const FooterBottomLink: React.FC<FooterBottomLinkProps> = ({ children }) => {
  return (
    <span className="footer-bottom-link">
      {children}
    </span>
  );
};

export default FooterBottomLink;
