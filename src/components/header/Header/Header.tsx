import React from 'react'
import InternalLink from '../../links/InternalLink'
import ThemeButton from '../ThemeButton'
import './Header.css'
import { useLanguageCustom } from '../../../hooks/useLanguage'

const Header: React.FC = () => {
  const { language, setLanguageCustom } = useLanguageCustom()
  return (
    <header className="header">
      <div className="header-content">
        <div>
          <InternalLink href="#" title="Home" className="header-me-link">home</InternalLink>
          <InternalLink href="#bio" title="About" className="header-me-link">about</InternalLink>
        </div>
        <ThemeButton />
        <button onClick={() => setLanguageCustom("es")}>es</button>
        <button onClick={() => setLanguageCustom("en")}>en</button>
        {language}
      </div>
    </header>
  )
}

export default Header
