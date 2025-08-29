import React from 'react'
import { useLanguageCustom } from '@hooks/useLanguage'
import './BioText.css'

const BioText: React.FC = () => {
  const englishBioText = "Hello! My name is Aiden. I'm a software engineer based out of New York City. I'm a full stack engineer at JP Morgan where I'm developing a firm-wide LLM tracking system."
  const spanishBioText = "¡Hola! Mi nombre es Aiden. Soy un ingeniero de software basado en la ciudad de Nueva York. Soy un ingeniero full stack en JP Morgan donde estoy desarrollando un sistema de seguimiento de LLM para toda la empresa."
  const frenchBioText = "Bonjour ! Je m'appelle Aiden. Je suis un ingénieur logiciel basé à New York. Je suis un ingénieur full stack chez JP Morgan où je développe un système de suivi LLM à l'échelle de l'entreprise."
  const { language } = useLanguageCustom()

  const getBioText = () => {
    if (language === "english") return englishBioText
    if (language === "español") return spanishBioText
    return frenchBioText
  }

  return (
    <div className="bio-text">
      <p>{getBioText()}</p>
    </div>
  )
}

export default BioText
