import { FaGithub, FaLinkedin } from 'react-icons/fa'
import AvatarFrame from '../components/AvatarFrame'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto flex min-h-screen max-w-6xl flex-col-reverse items-center justify-center gap-10 px-6 pt-24 md:flex-row md:justify-between"
    >
      <div className="max-w-xl">
        <p className="text-[10px] tracking-widest opacity-60">// HELLO, WORLD</p>
        <h1 className="mt-3 text-4xl font-bold md:text-6xl">Jose Luis Tot</h1>
        <h2 className="mt-2 text-sm text-green-700 dark:text-green-400">
          Técnico en Desarrollo de Software
        </h2>
        <p className="mt-6 text-sm leading-relaxed opacity-80">
        Soy Técnico en Desarrollo de Software, orientado al desarrollo web y backend. Me caracterizo por ser responsable, organizado y creativo, con un interés constante por aprender y mejorar mis habilidades. He desarrollado proyectos académicos y personales aplicando buenas prácticas y buscando soluciones eficientes. Busco integrarme a un equipo de desarrollo donde pueda aportar mis conocimientos, compartir ideas y seguir creciendo personal y profesionalmente.
        </p>
        <div className="mt-6 flex gap-4 text-3xl">
          <a href="https://github.com/Jose-langL" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jose-luis-3a1300398/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-[#0A66C2]"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <AvatarFrame src="/Multimedia/imagen.png" alt="Avatar de Jose Luis" />
    </section>
  )
}