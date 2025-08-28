import React, { useState } from 'react'
import { useTheme } from '../../../hooks/useTheme'
import { FaSun, FaMoon } from 'react-icons/fa'
import './ThemeButton.css'

const ThemeButton: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button onClick={changeTheme} className="header-me-link theme-button" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      {theme && (theme === "light" ? <FaMoon /> : <FaSun />)}
    </button>
  )
}

export default ThemeButton
