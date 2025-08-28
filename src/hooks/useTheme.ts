import { useEffect, useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState<string>(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      setTheme(theme)
    }
  }, [])

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  return { theme, setTheme }
}

export { useTheme }