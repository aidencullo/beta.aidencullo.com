import React from 'react'
import BaseLink from './BaseLink'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <BaseLink href="#" title="Home" className="header-favicon">
          <img src="/favicon.svg" alt="Favicon" />
        </BaseLink>
        <BaseLink href="#bio" title="About me" className="header-me-link">me</BaseLink>
      </div>
    </header>
  )
}

export default Header
