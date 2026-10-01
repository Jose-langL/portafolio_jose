import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const LINKS = [
  { id: 'inicio', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'proyectos', label: 'PROJECTS' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'contacto', label: 'CONTACT' },
]

export default function Navbar() {
  const [activa, setActiva] = useState('inicio')

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
    <header className="fixed inset-x-0 top-0 z-40 border-b border-neutral-300 bg-neutral-100/80 backdrop-blur dark:border-neutral-700 dark:bg-neutral-900/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 font-mono text-xs tracking-widest">
        <a href="#inicio" className="text-sm font-bold">
          &lt;Jose Luis Herrera&gt;
        </a>

        <ul className="hidden gap-8 md:flex">
          {LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`transition-opacity ${
                  activa === id ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                }`}
              >
                {activa === id ? `[ ${label} ]` : label}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  )
}