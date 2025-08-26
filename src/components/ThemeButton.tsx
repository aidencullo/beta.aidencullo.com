import React, { useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeButton: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button onClick={changeTheme} className="header-me-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  )
}

export default ThemeButton
