import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <a href="/" className="header-favicon">
          <img src="/favicon.svg" alt="Favicon" />
        </a>
        <a href="#bio" className="header-me-link">me</a>
      </div>
    </header>
  )
}

export default Header
