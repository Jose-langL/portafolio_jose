import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import { useLang } from '../i18n/LanguageContext'

const LINKS = [
  { id: 'inicio', key: 'home' },
  { id: 'about', key: 'about' },
  { id: 'proyectos', key: 'projects' },
  { id: 'skills', key: 'skills' },
  { id: 'contacto', key: 'contact' },
]

export default function Navbar() {
  const [activa, setActiva] = useState('inicio')
  const { t } = useLang()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActiva(e.target.id))
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="site-header fixed inset-x-0 top-0 z-40 border-b border-neutral-300 bg-neutral-100/80 dark:border-neutral-700 dark:bg-neutral-900/80">
      <nav className="site-nav mx-auto flex max-w-6xl items-center justify-between px-6 py-4 font-mono text-xs tracking-widest">
        <a href="#inicio" className="site-mark text-sm font-bold">
          &lt;Jose Luis Herrera&gt;
        </a>

        <ul className="hidden gap-7 md:flex">
          {LINKS.map(({ id, key }) => {
            const label = t.nav[key]
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`nav-link transition-opacity ${
                    activa === id ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  {activa === id ? `[ ${label} ]` : label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-4">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
