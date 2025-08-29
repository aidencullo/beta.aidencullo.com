import React from 'react'
import { useScrollAnimation } from '@hooks/useScrollAnimation'
import './Welcome.css'
import { useLanguageCustom } from '@hooks/useLanguage'

const Welcome: React.FC = () => {
  const welcomeRef = useScrollAnimation()
  const welcomeText = "Welcome"
  const spanishWelcomeText = "Bienvenido"
  const { language } = useLanguageCustom()

  return (
    <div ref={welcomeRef} className="welcome-container" id="welcome">
      <h1 className="name">{language === "english" ? welcomeText : spanishWelcomeText}</h1>
    </div>
  )
}

export default Welcome
