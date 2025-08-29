import React from 'react'
import { useScrollAnimation } from '@hooks/useScrollAnimation'
import './Welcome.css'
import { useLanguage } from '@hooks/useLanguage'

const Welcome: React.FC = () => {
  const welcomeRef = useScrollAnimation()
  const welcomeText = "Welcome"
  const spanishWelcomeText = "Bienvenido"
  const frenchWelcomeText = "Bienvenue"
  const { language } = useLanguage()

  const getWelcomeText = () => {
    if (language === "english") return welcomeText
    if (language === "español") return spanishWelcomeText
    return frenchWelcomeText
  }

  return (
    <div ref={welcomeRef} className="welcome-container" id="welcome">
      <h1 className="name">{getWelcomeText()}</h1>
    </div>
  )
}

export default Welcome
