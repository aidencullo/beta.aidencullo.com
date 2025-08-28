import { useLanguage } from '../contexts/LanguageContext'

export function useLanguageCustom() {
  const { language, setLanguage } = useLanguage()

  const setLanguageCustom = (language: "en" | "es") => {
    setLanguage(language)
  }

  return { language, setLanguageCustom }
}
