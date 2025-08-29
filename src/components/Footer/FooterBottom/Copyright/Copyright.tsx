import React from 'react';
import './Copyright.css';

const Copyright: React.FC = () => {
  const copyrightText = "© 2025 Aiden Cullo. All rights reserved. This site is hosted on GitHub Pages with a Namecheap domain."
  return (
    <div className="footer-bottom-right">
      <p>{copyrightText}</p>
    </div>
  );
};

export default Copyright;
