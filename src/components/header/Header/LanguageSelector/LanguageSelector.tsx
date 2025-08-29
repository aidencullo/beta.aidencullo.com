import React from 'react'
import './LanguageSelector.css'
import { useLanguageCustom } from '../../../hooks/useLanguage'

const LanguageSelector: React.FC = () => {
  const { language, setLanguageCustom } = useLanguageCustom()
  const englishCode = "en"
  const spanishCode = "es"

  const changeLanguage = () => {
    setLanguageCustom(language === englishCode ? spanishCode : englishCode)
  }

  return (
    <div onClick={changeLanguage} >
      {language === englishCode ? spanishCode : englishCode}
    </div>
  )
}

export default LanguageSelector
