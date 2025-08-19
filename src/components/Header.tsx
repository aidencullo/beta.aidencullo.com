import React from 'react'
import InternalLink from './InternalLink'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <InternalLink href="#bio" title="About me" className="header-me-link">aiden</InternalLink>
      </div>
    </header>
  )
}

export default Header
