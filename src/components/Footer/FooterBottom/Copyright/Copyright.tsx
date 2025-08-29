import React from 'react';
import { useLanguageCustom } from '@hooks/useLanguage';
import './Copyright.css';

const Copyright: React.FC = () => {
  const { language } = useLanguageCustom()
  const englishCopyrightText = "© 2025 Aiden Cullo. All rights reserved. This site is hosted on GitHub Pages with a Namecheap domain."
  const spanishCopyrightText = "© 2025 Aiden Cullo. Todos los derechos reservados. Este sitio está alojado en GitHub Pages con un dominio de Namecheap."
  
  return (
    <div className="footer-bottom-right">
      <p>{language === "english" ? englishCopyrightText : spanishCopyrightText}</p>
    </div>
  );
};

export default Copyright;
