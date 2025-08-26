import { useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState<string>("light")

  const setThemeWrapper = (theme: string) => {
    setTheme(theme)
    document.documentElement.setAttribute('data-theme', theme)
  }

  return { theme, setTheme: setThemeWrapper };
}

export { useTheme }