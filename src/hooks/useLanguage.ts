import { useLanguage } from '../contexts/LanguageContext'

export function useLanguageCustom() {
  const { language, setLanguage } = useLanguage()

  const setLanguageCustom = (language: "english" | "español") => {
    setLanguage(language)
  }

  return { language, setLanguageCustom }
}
