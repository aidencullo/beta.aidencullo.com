import React, { ReactNode } from 'react';

interface FooterSectionProps {
  header: ReactNode;
  children: ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ header, children }) => {
  return (
    <div className="footer-section">
      <h3>
        {header}
      </h3>
      <ul>
        {children}
      </ul>
    </div>
  );
};

export default FooterSection;
