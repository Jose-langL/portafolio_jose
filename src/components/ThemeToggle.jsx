import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'

export default function ThemeToggle() {
  const { t } = useLang()
  const [dark, setDark] = useState(
    () => localStorage.getItem('theme') === 'dark'
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label={t.themeLabel}
      className="relative h-5 w-10 rounded-full border border-neutral-400 dark:border-neutral-500"
    >
      <span
        className={`absolute top-0.5 h-3.5 w-3.5 rounded-full bg-neutral-900 transition-all dark:bg-white ${
          dark ? 'left-5' : 'left-0.5'
        }`}
      />
    </button>
  )
}