import React from 'react'
import InternalLink from './InternalLink'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <InternalLink href="#" title="Home" className="header-me-link">home</InternalLink>
        <InternalLink href="#bio" title="Contact" className="header-me-link">contact</InternalLink>
      </div>
    </header>
  )
}

export default Header
