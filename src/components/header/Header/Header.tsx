import React from 'react'
import HeaderLeft from './HeaderLeft/HeaderLeft'
import HeaderRight from './HeaderRight/HeaderRight'
import './Header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <HeaderLeft />
        <HeaderRight />
      </div>
    </header>
  )
}

export default Header
