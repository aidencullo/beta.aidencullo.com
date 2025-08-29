import React from 'react'
import { useLanguageCustom } from '@hooks/useLanguage'
import './BioText.css'

const BioText: React.FC = () => {
  const englishBioText = "Hello! My name is Aiden. I'm a software engineer based out of New York City. I'm a full stack engineer at JP Morgan where I'm developing a firm-wide LLM tracking system."
  const spanishBioText = "¡Hola! Mi nombre es Aiden. Soy un ingeniero de software basado en la ciudad de Nueva York. Soy un ingeniero full stack en JP Morgan donde estoy desarrollando un sistema de seguimiento de LLM para toda la empresa."
  const { language } = useLanguageCustom()

  return (
    <div className="bio-text">
      <p>{language === "en" ? englishBioText : spanishBioText}</p>
    </div>
  )
}

export default BioText
