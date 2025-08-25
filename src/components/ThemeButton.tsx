import React, { useState } from 'react'

const ThemeButton: React.FC = () => {

  const [theme, setTheme] = useState("light")

  const changeTheme = () => {
    if (document.documentElement.getAttribute('data-theme') === 'light') {
      setTheme("dark")
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setTheme("light")
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  return (
    <button onClick={changeTheme} className="header-me-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      {theme === "light" ? '🌙' : '🌞'}
    </button>
  )
}

export default ThemeButton
