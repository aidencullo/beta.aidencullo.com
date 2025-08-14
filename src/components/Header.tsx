import React from 'react'
import Link from './Link'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link href="#" title="Home" className="header-favicon">
          <img src="/favicon.svg" alt="Favicon" />
        </Link>
        <Link href="#bio" title="About me" className="header-me-link">me</Link>
      </div>
    </header>
  )
}

export default Header
