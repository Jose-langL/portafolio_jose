import { useState } from 'react'
import { motion } from 'framer-motion'
import WindowFrame from '../components/WindowFrame'
import FileExplorer from '../components/FileExplorer'
import { files } from '../data/about'

export default function About() {
  const [activo, setActivo] = useState(files[0].name)
  const archivo = files.find((f) => f.name === activo)

  return (
    <section
      id="about"
      className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-12 pt-24"
    >
      <p className="mb-4 text-[10px] tracking-widest opacity-60"></p>

      <WindowFrame title="ABOUT_ME.EXE" path={`C:/portfolio/about_me/${archivo.name}`}>
        <div className="flex flex-col md:flex-row">
          <FileExplorer files={files} active={activo} onSelect={setActivo} />

          <motion.div
            key={archivo.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 p-6 md:p-8"
          >
            <p className="text-[10px] tracking-widest opacity-60">
              // ACTIVE FILE: {archivo.name.toUpperCase()}
            </p>
            <h3 className="mt-2 text-2xl font-bold">{archivo.titulo}</h3>
            <p className="mt-4 text-sm leading-relaxed opacity-80">{archivo.texto}</p>

            <dl className="mt-6 grid grid-cols-[90px_1fr] gap-y-2 text-xs">
              <dt className="opacity-60">File type</dt>
              <dd>Markdown Document</dd>
              <dt className="opacity-60">Role</dt>
              <dd>Estudiante de programación</dd>
              <dt className="opacity-60">Status</dt>
              <dd className="text-green-700 dark:text-green-400">● Buscando oportunidades</dd>
            </dl>
          </motion.div>
        </div>
      </WindowFrame>
    </section>
  )
}