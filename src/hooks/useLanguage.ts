import { LanguageContext } from '../contexts/LanguageContext'
import { useContext, useEffect } from 'react'

type Language = "english" | "español" | "français"

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within LanguageProvider")
  const { language, setLanguage } = context

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
      setLanguage(savedLanguage as Language)
    }
  }, [])

  useEffect(() => {
    if (language) {
      localStorage.setItem('language', language)
    }
  }, [language])
  
  return { language, setLanguage }
}
