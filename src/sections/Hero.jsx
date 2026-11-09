import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import AvatarFrame from '../components/AvatarFrame'
import { useLang } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLang()

  return (
    <section
      id="inicio"
      className="mx-auto flex min-h-screen max-w-6xl flex-col-reverse items-center justify-center gap-10 px-6 pt-24 md:flex-row md:justify-between"
    >
      <div className="max-w-xl">
        <p className="text-[10px] tracking-widest opacity-60">// HELLO, WORLD</p>
        <h1 className="mt-3 text-4xl font-bold md:text-6xl">Jose Luis Tot</h1>
        <h2 className="mt-2 text-sm text-green-700 dark:text-green-400">{t.hero.role}</h2>
        <p className="mt-6 text-sm leading-relaxed opacity-80">{t.hero.bio}</p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/Jose-langL"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jose-luis-3a1300398/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-3xl text-[#0A66C2]"
          >
            <FaLinkedin />
          </a>

          <span className="h-6 w-px bg-current opacity-20" aria-hidden="true" />

          <a
            href={t.hero.cvFile}
            download
            className="group inline-flex items-center gap-2 border border-green-700 px-4 py-2 text-xs tracking-widest text-green-700 transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-green-700 hover:text-white hover:shadow-[3px_3px_0_0] hover:shadow-green-700/40 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-black dark:hover:shadow-green-400/40"
          >
            <FaDownload className="transition-transform group-hover:translate-y-0.5" />
            {t.hero.cvLabel}
          </a>
        </div>
      </div>

      <AvatarFrame src="/Multimedia/imagen.png" alt="Avatar de Jose Luis" />
    </section>
  )
}
