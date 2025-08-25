import React from 'react'

const ThemeButton: React.FC = () => {
  const changeTheme = () => {
    if (document.documentElement.getAttribute('data-theme') === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  return (
    <button onClick={changeTheme} className="header-me-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      change theme
    </button>
  )
}

export default ThemeButton
