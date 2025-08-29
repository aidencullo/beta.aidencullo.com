import React from 'react'
import './LanguageSelector.css'
import { useLanguageCustom } from '../../../hooks/useLanguage'

const LanguageSelector: React.FC = () => {
  const { language, setLanguageCustom } = useLanguageCustom()

  const changeLanguage = () => {
    setLanguageCustom(language === "en" ? "es" : "en")
  }

  return (
    <div onClick={changeLanguage} className="header-me-link theme-button" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      {language === "en" ? "es" : "en"}
    </div>
  )
}

export default LanguageSelector
