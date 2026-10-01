import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaRegFolder } from 'react-icons/fa'
import WindowFrame from '../components/WindowFrame'
import { CATEGORIAS, skills, contar } from '../data/skills'

export default function Skills() {
  const [categoria, setCategoria] = useState('Todos')
  const visibles = skills.filter((s) => categoria === 'Todos' || s.categoria === categoria)

  return (
    <section
      id="skills"
      className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-12 pt-24"
    >
      <p className="mb-2 text-[10px] tracking-widest opacity-60">// 04 TECH STACK & TOOLS</p>
      <h2 className="mb-6 text-3xl font-bold">Tecnologías</h2>

      <WindowFrame title="SKILLS.EXE" path={`C:/portfolio/skills/${categoria.toLowerCase().replace(' ', '_')}`}>
        <div className="flex flex-col md:flex-row">
          {/* Carpetas */}
          <aside className="shrink-0 border-b border-neutral-300 p-4 dark:border-neutral-700 md:w-60 md:border-b-0 md:border-r">
            <p className="mb-3 text-[10px] tracking-widest opacity-60">TECH STACK & TOOLS</p>
            <ul className="flex flex-wrap gap-2 md:flex-col">
              {CATEGORIAS.map((c) => (
                <li key={c}>
                  <button
                    onClick={() => setCategoria(c)}
                    className={`flex w-full items-center gap-2 border px-3 py-2 text-left text-xs transition-colors ${
                      categoria === c
                        ? 'border-neutral-500 bg-neutral-200 dark:bg-neutral-700'
                        : 'border-transparent hover:bg-neutral-200/60 dark:hover:bg-neutral-700/60'
                    }`}
                  >
                    <FaRegFolder className="text-amber-500" />
                    <span className="flex-1">{c}</span>
                    <span className="rounded-full bg-neutral-300 px-1.5 text-[10px] dark:bg-neutral-600">
                      {contar(c)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Tarjetas */}
          <div className="grid flex-1 grid-cols-2 content-start gap-3 p-4 sm:grid-cols-3 md:p-6">
            {visibles.map(({ nombre, icono: Icono, color}, i) => (
              <motion.div
                key={`${categoria}-${nombre}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex flex-col items-center gap-3 border border-neutral-300 bg-white/60 py-8 transition-transform hover:-translate-y-1 dark:border-neutral-700 dark:bg-neutral-800/60"
              >
                <Icono className="text-4xl" style={color ? { color } : undefined} />
                <span className="text-xs">{nombre}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </WindowFrame>
    </section>
  )
}