import React from 'react'
import './LanguageSelector.css'
import { useLanguage } from '@hooks/useLanguage'

const LanguageSelector: React.FC = () => {
  const { language, setLanguageCustom } = useLanguage()
  const englishCode = "english"
  const spanishCode = "español"
  const frenchCode = "français"

  const changeLanguage = () => {
    const nextLanguage = getNextLanguage()
    setLanguageCustom(nextLanguage)
  }

  const getNextLanguage = () => {
    if (language === englishCode) return spanishCode
    if (language === spanishCode) return frenchCode
    return englishCode
  }

  return (
    <div onClick={changeLanguage} className="language-selector">
      {getNextLanguage()}
    </div>
  )
}

export default LanguageSelector
