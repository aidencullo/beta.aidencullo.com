import React from 'react'
import ThemeButton from '../ThemeButton/ThemeButton'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import './HeaderRight.css'

const HeaderRight: React.FC = () => {
  return (
    <div className="header-right">
      <ThemeButton />
      <LanguageSelector />
    </div>
  )
}

export default HeaderRight
