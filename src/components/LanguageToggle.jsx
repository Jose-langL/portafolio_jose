import { useLang } from '../i18n/LanguageContext'

export default function LanguageToggle() {
  const { lang, toggleLang } = useLang()
  const on = 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
  const off = 'opacity-50 hover:opacity-100'

  return (
    <button
      onClick={toggleLang}
      aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
      className="flex items-center border border-neutral-400 text-[10px] tracking-widest dark:border-neutral-500"
    >
      <span className={`px-2 py-1 transition-colors ${lang === 'es' ? on : off}`}>ES</span>
      <span className={`px-2 py-1 transition-colors ${lang === 'en' ? on : off}`}>EN</span>
    </button>
  )
}
