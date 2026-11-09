import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  // Por defecto español; solo cambia si el visitante ya eligió inglés
  const [lang, setLang] = useState(() =>
    localStorage.getItem('lang') === 'en' ? 'en' : 'es'
  )

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => setLang((l) => (l === 'es' ? 'en' : 'es'))

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
