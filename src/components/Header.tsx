import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <a href="/" className="header-favicon">
          <img src="/favicon.svg" alt="Favicon" />
        </a>
      </div>
    </header>
  )
}

export default Header
