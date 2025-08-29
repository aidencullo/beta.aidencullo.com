import React from 'react'
import InternalLink from '@links/InternalLink/InternalLink'
import ThemeButton from './ThemeButton/ThemeButton'
import './Header.css'
import LanguageSelector from './LanguageSelector/LanguageSelector'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-navigation">
          <InternalLink href="#" title="Home" className="header-home-link">home</InternalLink>
          <InternalLink href="#bio" title="About" className="header-about-link">about</InternalLink>
        </div>
        <ThemeButton />
        <LanguageSelector />
      </div>
    </header>
  )
}

export default Header
