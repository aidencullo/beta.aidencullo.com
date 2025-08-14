import React from 'react'
import InternalLink from './InternalLink'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <InternalLink href="#" title="Home" className="header-favicon">
          <img src="/favicon.svg" alt="Favicon" />
        </InternalLink>
        <InternalLink href="#bio" title="About me" className="header-me-link">me</InternalLink>
      </div>
    </header>
  )
}

export default Header
