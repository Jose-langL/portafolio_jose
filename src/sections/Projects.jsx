import WindowFrame from '../components/WindowFrame'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-12 pt-24"
    >
      <p className="mb-2 text-[10px] tracking-widest opacity-60">// 03 PROJECTS</p>
      <h2 className="text-3xl font-bold">Proyectos</h2>
      <p className="mt-3 max-w-2xl text-sm opacity-80">
        Aquí puedes ver algunos de los proyectos que he desarrollado utilizando diferentes
        tecnologías. Cada proyecto incluye una breve descripción y las herramientas empleadas
        para crearlos.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.titulo} delay={i * 0.12} className="flex">
            <WindowFrame title={`PROJECT_0${i + 1}.EXE`} className="flex w-full flex-col">
              <img
                src={p.imagen}
                alt={p.titulo}
                loading="lazy"
                className="h-44 w-full border-b border-neutral-300 object-cover dark:border-neutral-700"
              />
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-lg font-bold">{p.titulo}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed opacity-80">{p.descripcion}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tecnologias.map((t) => (
                    <span
                      key={t}
                      className="border border-neutral-400 px-2 py-0.5 text-[10px] dark:border-neutral-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {(p.demo || p.repo) && (
                  <div className="mt-4 flex gap-4 text-xs">
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="underline">
                        Ver app
                      </a>
                    )}
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noreferrer" className="underline">
                        Código
                      </a>
                    )}
                  </div>
                )}
              </div>
            </WindowFrame>
          </Reveal>
        ))}
      </div>
    </section>
  )
}