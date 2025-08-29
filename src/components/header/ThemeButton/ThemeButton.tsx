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
    <button onClick={changeTheme} className="theme-button">
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  )
}

export default ThemeButton
