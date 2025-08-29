import React from 'react'
import './LanguageSelector.css'
import { useLanguageCustom } from '@hooks/useLanguage'

const LanguageSelector: React.FC = () => {
  const { language, setLanguageCustom } = useLanguageCustom()
  const englishCode = "english"
  const spanishCode = "español"
  const frenchCode = "français"

  const changeLanguage = () => {
    if (language === englishCode) {
      setLanguageCustom(spanishCode)
    } else if (language === spanishCode) {
      setLanguageCustom(frenchCode)
    } else {
      setLanguageCustom(englishCode)
    }
  }

  return (
    <div onClick={changeLanguage} className="language-selector">
      {language === englishCode ? spanishCode : language === spanishCode ? frenchCode : englishCode}
    </div>
  )
}

export default LanguageSelector
