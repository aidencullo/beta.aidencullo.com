import React from 'react'
import HeaderLeft from './HeaderLeft/HeaderLeft'
import HeaderRight from './HeaderRight/HeaderRight'
import './Header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
        <HeaderLeft />
        <HeaderRight />
    </header>
  )
}

export default Header
