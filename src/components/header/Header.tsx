import React from 'react'
import InternalLink from '../links/InternalLink'
import ThemeButton from './ThemeButton'
import './Header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div>
          <InternalLink href="#" title="Home" className="header-me-link">home</InternalLink>
          <InternalLink href="#bio" title="About" className="header-me-link">about</InternalLink>
        </div>
        <ThemeButton />
      </div>
    </header>
  )
}

export default Header
