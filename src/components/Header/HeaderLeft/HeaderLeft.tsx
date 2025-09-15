import React from 'react'
import InternalLink from '@links/InternalLink/InternalLink'
import { useLanguage } from '@hooks/useLanguage'
import './HeaderLeft.css'

const HeaderLeft: React.FC = () => {
  const { language } = useLanguage()
  
  const getHomeText = () => {
    if (language === "english") return "home"
    if (language === "español") return "inicio"
    return "accueil"
  }
  
  const getAboutText = () => {
    if (language === "english") return "about me"
    if (language === "español") return "acerca de mí"
    return "à propos de moi"
  }

  const homeText = getHomeText()
  const aboutText = getAboutText()

  return (
    <div className="header-left">
        <InternalLink href="#" title="Home" className="header-home-link">{homeText}</InternalLink>
        <InternalLink href="#bio" title="About" className="header-about-link">{aboutText}</InternalLink>
    </div>
  )
}

export default HeaderLeft
