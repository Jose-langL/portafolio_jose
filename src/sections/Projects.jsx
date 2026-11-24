import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import WindowFrame from '../components/WindowFrame'
import { projects } from '../data/projects'
import { useLang } from '../i18n/LanguageContext'

function ProjectDetails({ project, index, t }) {
  return (
    <>
      <p className="text-[10px] tracking-[0.18em] opacity-60">PROJECT_0{index + 1} / 0{projects.length}</p>
      <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">{project.titulo}</h3>
      <p className="mt-4 max-w-md text-sm leading-7 opacity-80">{t.projects.descripciones[index]}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tecnologias.map((technology) => (
          <span key={technology} className="border border-neutral-400 px-2 py-1 text-[10px] tracking-wide dark:border-neutral-500">
            {technology}
          </span>
        ))}
      </div>

      {(project.demo || project.repo) && (
        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="project-link underline">
              {t.projects.verApp}
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="project-link underline">
              {t.projects.repo}
            </a>
          )}
        </div>
      )}
    </>
  )
}

function ProjectPreview({ project, index }) {
  return (
    <WindowFrame title={`PROJECT_0${index + 1}.EXE`} className="project-window w-full overflow-hidden">
      <img src={project.imagen} alt={project.titulo} loading={index === 0 ? 'eager' : 'lazy'} className="aspect-[16/10] w-full object-cover" />
    </WindowFrame>
  )
}

export default function Projects() {
  const { t } = useLang()
  const reduceMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const stepRefs = useRef([])

  useEffect(() => {
    if (reduceMotion) return undefined

    const observer = new IntersectionObserver((entries) => {
      const visibleStep = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (visibleStep) setActiveIndex(Number(visibleStep.target.dataset.projectIndex))
    }, { threshold: [0.45, 0.6, 0.75] })

    const steps = stepRefs.current.filter(Boolean)
    steps.forEach((step) => observer.observe(step))
    return () => observer.disconnect()
  }, [reduceMotion])

  const goToProject = (index) => {
    setActiveIndex(index)
    stepRefs.current[index]?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' })
  }

  return (
    <section id="proyectos" className="section-shell projects-section mx-auto max-w-6xl px-6 pb-12 pt-24">
      <div className="max-w-2xl">
        <p className="mb-3 text-[10px] tracking-widest opacity-60">// 03 PROJECTS</p>
        <h2 className="text-3xl font-bold sm:text-4xl">{t.projects.titulo}</h2>
        <p className="mt-4 text-sm leading-7 opacity-80">{t.projects.intro}</p>
      </div>

      <div className="projects-desktop mt-12">
        <div className="projects-sticky">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] lg:gap-16">
            <div className="relative min-h-[19rem] py-2 sm:min-h-[17rem]">
              {projects.map((project, index) => (
                <article key={project.titulo} aria-hidden={activeIndex !== index} inert={activeIndex !== index || undefined} className={`project-copy ${activeIndex === index ? 'is-active' : ''}`}>
                  <ProjectDetails project={project} index={index} t={t} />
                </article>
              ))}
            </div>

            <div className="relative min-h-[16rem] sm:min-h-[24rem]">
              {projects.map((project, index) => (
                <div key={project.titulo} aria-hidden={activeIndex !== index} className={`project-preview ${activeIndex === index ? 'is-active' : ''}`}>
                  <ProjectPreview project={project} index={index} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-9 flex items-center gap-3" aria-label="Navegación de proyectos">
            {projects.map((project, index) => (
              <button
                key={project.titulo}
                type="button"
                onClick={() => goToProject(index)}
                aria-label={`${project.titulo} (${index + 1} de ${projects.length})`}
                aria-current={activeIndex === index ? 'true' : undefined}
                className={`project-dot ${activeIndex === index ? 'is-active' : ''}`}
              >
                <span className="sr-only">{project.titulo}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="projects-scroll-steps" aria-hidden="true">
          {projects.map((project, index) => (
            <div key={project.titulo} ref={(element) => { stepRefs.current[index] = element }} data-project-index={index} className="project-scroll-step" />
          ))}
        </div>
      </div>

      <div className="projects-static mt-10 space-y-8">
        {projects.map((project, index) => (
          <article key={project.titulo} className="border border-neutral-400 bg-white/60 p-4 dark:border-neutral-600 dark:bg-neutral-800/60 sm:p-5">
            <ProjectPreview project={project} index={index} />
            <div className="pt-6"><ProjectDetails project={project} index={index} t={t} /></div>
          </article>
        ))}
      </div>
    </section>
  )
}
