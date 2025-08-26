import { useEffect, useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState<string>()
  console.log('theme after state', theme)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    console.log('initial useEffect theme', theme)
    if (theme) {
      setTheme(theme)
    }
  }, [])

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
      console.log('dependency useEffect theme', theme)
    }
  }, [theme])

  return { theme, setTheme }
}

export { useTheme }