import { useState } from 'react'
import { MotionConfig } from 'framer-motion'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Reveal from './components/Reveal'
import Starfield from './components/Starfield'
import StarCursor from './components/StarCursor'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

export default function App() {
  const [cargando, setCargando] = useState(true)

  return (
    <MotionConfig reducedMotion="user">
      <StarCursor forzarClaro={cargando} />
      {cargando && <Intro onFinish={() => setCargando(false)} />}

      <div className="grid-bg relative bg-neutral-100 font-mono text-neutral-900 transition-colors dark:bg-neutral-950 dark:text-neutral-100">
        <Starfield />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Reveal><About /></Reveal>
          <Reveal><Projects /></Reveal>
          <Reveal><Skills /></Reveal>
          <Reveal><Contact /></Reveal>
        </main>
      </div>
    </MotionConfig>
  )
}