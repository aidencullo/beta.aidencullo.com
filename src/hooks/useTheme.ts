import { useEffect, useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState<string>("light")

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return { theme, setTheme }
}

export { useTheme }