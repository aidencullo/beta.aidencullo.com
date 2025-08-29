import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'english' | 'español' | 'français';
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('english');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageCustom = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguageCustom must be used within LanguageProvider');
  return context;
};
