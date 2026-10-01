import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'

const ENLACES = [
  { label: 'Email', href: 'mailto:totherrerajoseluis@gmail.com', icono: FaEnvelope },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jose-luis-3a1300398/', icono: FaLinkedin },
  { label: 'GitHub', href: 'https://github.com/Jose-langL', icono: FaGithub },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/jose.luis.650439?mibextid=ZbWKwL',
    icono: FaFacebook,
  },
]

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pt-24">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <p className="mb-3 text-[10px] tracking-widest opacity-60"></p>
        <h2 className="text-3xl font-bold md:text-5xl">Gracias por visitar mi portafolio</h2>
        <p className="mt-4 text-sm opacity-80">Si quieres escribirme, encuéntrame aquí:</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {ENLACES.map(({ label, href, icono: Icono }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-neutral-400 px-4 py-2 text-xs transition-colors hover:bg-neutral-200 dark:border-neutral-500 dark:hover:bg-neutral-700"
            >
              <Icono /> {label}
            </a>
          ))}
        </div>
      </div>

      <footer className="border-t border-neutral-300 py-6 text-center text-[10px] opacity-60 dark:border-neutral-700">
        © 2026 Jose Luis Tot Herrera | Todos los derechos reservados
      </footer>
    </section>
  )
}