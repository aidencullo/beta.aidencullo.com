import React from 'react'
import InternalLink from '@links/InternalLink/InternalLink'
import { useLanguageCustom } from '@hooks/useLanguage'
import './HeaderLeft.css'

const HeaderLeft: React.FC = () => {
  const { language } = useLanguageCustom()
  const homeText = language === "english" ? "home" : "inicio"
  const aboutText = language === "english" ? "about" : "acerca de"

  return (
    <div className="header-left">
        <InternalLink href="#" title="Home" className="header-home-link">{homeText}</InternalLink>
        <InternalLink href="#bio" title="About" className="header-about-link">{aboutText}</InternalLink>
    </div>
  )
}

export default HeaderLeft
