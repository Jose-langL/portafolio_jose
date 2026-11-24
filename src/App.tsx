import { useEffect, useState } from 'react';
import { ArrowUp, ArrowUpRight, Mail, UserRound, Heart, Target, Layers, Globe, Server, Terminal, Lock, Database } from 'lucide-react';
import { SiGithub, SiPython, SiHtml5, SiCss, SiJavascript, SiNodedotjs, SiMysql, SiPostgresql, SiGit, SiObsidian, SiPostman, SiLinux, SiDocker } from '@icons-pack/react-simple-icons';
import { motion, type Variants } from 'framer-motion';
import { useGithubContributions } from './hooks/useGithubContributions';
import { GithubHeatmapGrid } from './components/activity/GithubHeatmapGrid';
import { WelcomeAnimation } from './components/hero/WelcomeAnimation';
import { HeroSection } from './components/hero/HeroSection';
import { ProjectShowcase } from './components/projects/ProjectShowcase';

type Language = 'es' | 'en';

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const content = {
  es: {
    nav: ['Inicio', 'Sobre mí', 'Proyectos', 'Tecnologías', 'Actividad', 'Contacto'],
    role: 'Técnico en Desarrollo de Software',
    intro: 'Soy Técnico en Desarrollo de Software, orientado al desarrollo web y backend. Me caracterizo por ser responsable, organizado y creativo, con interés constante por aprender y mejorar mis habilidades.',
    cv: 'Descargar CV', viewProjects: 'Ver proyectos',
    about: 'Sobre mí', aboutLabel: 'PERFIL',
    bioTitle: '¿Quién soy?', bio: 'He desarrollado proyectos académicos y personales aplicando buenas prácticas y buscando soluciones eficientes. Busco integrarme a un equipo de desarrollo donde pueda aportar mis conocimientos, compartir ideas y seguir creciendo personal y profesionalmente.',
    hobbies: 'Hobbies', hobbiesText: 'Me gusta dibujar, sobre todo pixel art. Disfruto los videojuegos, las motocicletas y escuchar música para relajarme, concentrarme y encontrar inspiración. En mi tiempo libre también disfruto aprender cosas nuevas.',
    goals: 'Objetivos', goalsText: 'Seguir aprendiendo y crecer como programador, creando proyectos que unan tecnología y arte para ofrecer experiencias únicas. También quiero colaborar con otros programadores y construir soluciones creativas en equipo.',
    projects: 'Proyectos', projectsIntro: 'Algunos proyectos académicos y personales que he desarrollado.', repo: 'Ver repositorio',
    tech: 'Tecnologías & herramientas', techIntro: 'Herramientas que utilizo en mis proyectos de desarrollo.',
    activity: 'Actividad en GitHub', activityIntro: 'Explora mis proyectos, código y actividad en GitHub.', openGithub: 'Visitar perfil de GitHub',
    contact: 'Contacto', contactIntro: 'Gracias por visitar mi portafolio. Si quieres escribirme, encuéntrame aquí:', email: 'Escríbeme',
    footer: 'Todos los derechos reservados',
    projectsData: [
      { title: 'Sistema de Parqueo', description: 'Aplicación web para administrar espacios de parqueo, registrar vehículos y calcular pagos.', image: '/images/parking.png', stack: ['HTML', 'CSS', 'JavaScript'], url: 'https://github.com/Jose-langL/Campus_parking' },
      { title: 'Gestión de Hotel', description: 'Aplicación web para administrar habitaciones, registrarlas y consultar su estado.', image: '/images/hotel.png', stack: ['HTML', 'CSS', 'JavaScript'], url: 'https://github.com/Jose-langL/Gesti-n-del-hotel' },
      { title: 'Distribuidora de Gaseosas', description: 'Sistema de gestión con una base de datos relacional MySQL de ocho tablas para clientes, pedidos, productos, sedes y encargados.', image: '/images/distribuidora.png', stack: ['MySQL'], url: 'https://github.com/Jose-langL/distribuidora-gaseosas-del-valle-sa' }
    ]
  },
  en: {
    nav: ['Home', 'About', 'Projects', 'Technologies', 'Activity', 'Contact'],
    role: 'Software Development Technician',
    intro: "I'm a Software Development Technician focused on web and backend development. I'm responsible, organized, and creative, with a constant interest in learning and improving my skills.",
    cv: 'Download CV', viewProjects: 'View projects',
    about: 'About me', aboutLabel: 'PROFILE',
    bioTitle: 'Who am I?', bio: "I've built academic and personal projects using good practices and seeking efficient solutions. I'm looking to join a development team where I can contribute my knowledge, share ideas, and keep growing personally and professionally.",
    hobbies: 'Hobbies', hobbiesText: 'I enjoy drawing, especially pixel art. I love video games, motorcycles, and listening to music to relax, focus, and find inspiration. In my free time, I also enjoy learning new things.',
    goals: 'Goals', goalsText: 'Keep learning and grow as a programmer by creating projects that combine technology and art to offer unique experiences. I also want to collaborate with other programmers and build creative solutions as a team.',
    projects: 'Projects', projectsIntro: 'Some academic and personal projects I have developed.', repo: 'View repository',
    tech: 'Technologies & tools', techIntro: 'Tools I use in my development projects.',
    activity: 'GitHub activity', activityIntro: 'Explore my projects, code, and activity on GitHub.', openGithub: 'Visit GitHub profile',
    contact: 'Contact', contactIntro: 'Thanks for visiting my portfolio. You can reach me here:', email: 'Send me an email',
    footer: 'All rights reserved',
    projectsData: [
      { title: 'Parking System', description: 'Web app to manage parking spaces, register vehicles, and calculate payments.', image: '/images/parking.png', stack: ['HTML', 'CSS', 'JavaScript'], url: 'https://github.com/Jose-langL/Campus_parking' },
      { title: 'Hotel Management', description: 'Web app to manage hotel rooms, register them, and check their status.', image: '/images/hotel.png', stack: ['HTML', 'CSS', 'JavaScript'], url: 'https://github.com/Jose-langL/Gesti-n-del-hotel' },
      { title: 'Soda Distributor', description: 'Management system with an eight-table MySQL relational database for customers, orders, products, branches, and staff.', image: '/images/distribuidora.png', stack: ['MySQL'], url: 'https://github.com/Jose-langL/distribuidora-gaseosas-del-valle-sa' }
    ]
  }
};

const stackTools = [
  { name: 'Python', icon: SiPython, category: 'backend' },
  { name: 'HTML', icon: SiHtml5, category: 'frontend' },
  { name: 'CSS', icon: SiCss, category: 'frontend' },
  { name: 'JavaScript', icon: SiJavascript, category: 'frontend' },
  { name: 'Node.js', icon: SiNodedotjs, category: 'backend' },
  { name: 'MySQL', icon: SiMysql, category: 'database' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'database' },
  { name: 'Git', icon: SiGit, category: 'devops' },
  { name: 'GitHub', icon: SiGithub, category: 'devops' },
  { name: 'Obsidian', icon: SiObsidian, category: 'devops' },
  { name: 'Postman', icon: SiPostman, category: 'devops' },
  { name: 'Linux', icon: SiLinux, category: 'devops' },
  { name: 'Docker', icon: SiDocker, category: 'devops' }
];

function GithubActivity({ language }: { language: Language }) {
  const { data, loading, error, selectedYear, setSelectedYear, stats } = useGithubContributions('Jose-langL');
  const formatDate = (date: string | undefined) => date
    ? new Intl.DateTimeFormat(language === 'es' ? 'es' : 'en', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(`${date}T12:00:00`))
    : '—';
  return (
    <div className="mt-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#c6dce5] pb-5">
        <div className="flex flex-wrap items-center gap-2">
          <a href="https://github.com/Jose-langL" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border-2 border-[#0f172a] bg-[#e6f5fa] px-4 py-2 font-mono text-xs font-bold shadow-[2px_2px_0_#0f172a]"><SiGithub size={16} />@Jose-langL<ArrowUpRight size={14} /></a>
          <span className="rounded-xl border-2 border-[#0f172a] bg-[#f8fcff] px-4 py-2 font-mono text-xs font-bold text-[#456879] shadow-[2px_2px_0_#0f172a]">{loading ? '…' : stats.totalContributions.toLocaleString()} {language === 'es' ? 'contribuciones' : 'contributions'}</span>
        </div>
        <label className="flex items-center gap-2 rounded-xl border-2 border-[#0f172a] bg-[#0284c7] px-3 py-1.5 font-mono text-xs font-bold text-white shadow-[2px_2px_0_#0f172a]"><span className="sr-only">{language === 'es' ? 'Periodo de actividad' : 'Activity period'}</span><select value={selectedYear} onChange={(event) => setSelectedYear(event.target.value)} className="cursor-pointer bg-transparent outline-none"><option className="text-[#0f172a]" value="lastYear">{language === 'es' ? '1 año' : '1 year'}</option>{stats.availableYears.filter((year) => year !== 'lastYear').map((year) => <option className="text-[#0f172a]" key={year} value={year}>{year}</option>)}</select></label>
      </div>
      <div className="py-5">
        {error ? <p className="rounded-xl border border-dashed border-[#cbbd9e] bg-[#eaf8fc] py-10 text-center text-sm text-[#64748b]">{language === 'es' ? 'No se pudo cargar la actividad de GitHub.' : 'GitHub activity could not be loaded.'}</p> : <GithubHeatmapGrid contributions={data?.contributions || []} loading={loading} language={language} />}
      </div>
      <div className="grid gap-3 border-t border-[#c6dce5] pt-5 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border-2 border-[#0f172a] bg-[#e6f5fa] p-4 shadow-[2px_2px_0_#0f172a]"><p className="font-mono text-[10px] font-bold tracking-wide text-[#456879]">{language === 'es' ? 'CONTRIBUCIONES' : 'CONTRIBUTIONS'}</p><p className="mt-2 text-2xl font-black">{loading ? '—' : stats.totalContributions.toLocaleString()}</p><p className="mt-1 font-mono text-[10px] text-[#64748b]">{selectedYear === 'lastYear' ? (language === 'es' ? 'periodo: último año' : 'period: last year') : `${language === 'es' ? 'periodo:' : 'period:'} ${selectedYear}`}</p></div>
        <div className="rounded-2xl border-2 border-[#0f172a] bg-[#e6f5fa] p-4 shadow-[2px_2px_0_#0f172a]"><p className="font-mono text-[10px] font-bold tracking-wide text-[#456879]">{language === 'es' ? 'DÍA MÁS ACTIVO' : 'MOST ACTIVE DAY'}</p><p className="mt-2 text-2xl font-black">{loading ? '—' : (stats.maxDay?.count ?? 0)}</p><p className="mt-1 font-mono text-[10px] text-[#64748b]">{formatDate(stats.maxDay?.date)}</p></div>
        <div className="rounded-2xl border-2 border-[#0f172a] bg-[#e6f5fa] p-4 shadow-[2px_2px_0_#0f172a]"><p className="font-mono text-[10px] font-bold tracking-wide text-[#456879]">{language === 'es' ? 'DÍAS PRODUCTIVOS' : 'PRODUCTIVE DAYS'}</p><p className="mt-2 text-2xl font-black">{loading ? '—' : stats.activeDaysCount} {language === 'es' ? 'días' : 'days'}</p><p className="mt-1 font-mono text-[10px] text-[#64748b]">{language === 'es' ? 'promedio' : 'average'} {loading ? '—' : stats.averagePerActiveDay} / {language === 'es' ? 'día activo' : 'active day'}</p></div>
        <a href="https://github.com/Jose-langL" target="_blank" rel="noreferrer" className="flex flex-col justify-between rounded-2xl border-2 border-[#0f172a] bg-[#0f172a] p-4 text-white shadow-[2px_2px_0_#0f172a] transition hover:bg-[#172b49]"><span className="flex items-center justify-between font-mono text-[10px] font-bold tracking-wide text-[#38bdf8]">GITHUB <ArrowUpRight size={15} /></span><span className="mt-4 text-sm font-black">@Jose-langL</span><span className="mt-1 font-mono text-[10px] text-[#94a3b8]">{language === 'es' ? 'Ver perfil y repositorios →' : 'View profile and repositories →'}</span></a>
      </div>
    </div>
  );
}

export function App() {
  const [language, setLanguage] = useState<Language>('es');
  const [showWelcome, setShowWelcome] = useState(true);
  const [aboutTab, setAboutTab] = useState(0);
  const [stackCategory, setStackCategory] = useState('all');
  const t = content[language];
  const sections = ['hero', 'about', 'projects', 'stack', 'activity', 'contact'];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="min-h-screen bg-[#eef8fc] text-[#0f172a] selection:bg-[#0284c7] selection:text-white">
      {showWelcome && <WelcomeAnimation language={language} onComplete={() => setShowWelcome(false)} />}
      <header className="sticky top-0 z-50 border-b border-[#0f172a]/15 bg-[#eef8fc]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <a href="#hero" className="shrink-0 text-sm font-black sm:text-base">José Luis Tot</a>
          <nav className="hidden items-center gap-1 rounded-full border border-[#0f172a]/20 bg-white/40 p-1 md:flex">
            {t.nav.map((label, index) => <a key={label} href={`#${sections[index]}`} className="rounded-full px-3 py-2 text-xs font-semibold text-[#475569] transition hover:bg-[#67d4f2] hover:text-[#0f172a]">{label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href="mailto:totherrerajoseluis@gmail.com" className="hidden text-xs font-mono sm:block">totherrerajoseluis@gmail.com</a>
            <div className="flex rounded-full border-2 border-[#0f172a] bg-white p-0.5 text-xs font-bold shadow-[2px_2px_0_#0f172a]" aria-label="Select language">
              {(['es', 'en'] as const).map((lang) => <button key={lang} onClick={() => setLanguage(lang)} className={`rounded-full px-2.5 py-1 ${language === lang ? 'bg-[#67d4f2]' : 'text-[#64748b]'}`} aria-pressed={language === lang}>{lang.toUpperCase()}</button>)}
            </div>
          </div>
        </div>
        <nav className="flex gap-1 overflow-x-auto px-4 pb-2 md:hidden">
          {t.nav.map((label, index) => <a key={label} href={`#${sections[index]}`} className="shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold text-[#475569]">{label}</a>)}
        </nav>
      </header>

      <main>
        <HeroSection language={language} />

        <motion.section id="about" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="relative scroll-mt-28 overflow-hidden bg-gradient-to-b from-[#eef8fc] via-[#e8f5fa] to-[#deeff5] px-6 py-20 sm:py-24">
          <div className="pointer-events-none absolute inset-x-0 top-10 h-px bg-[#b8d2dd]" />
          <div className="pointer-events-none absolute -right-24 top-28 h-80 w-80 rounded-full border border-dashed border-[#b8d2dd]/80" />
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.35fr] lg:items-start lg:gap-14">
            <motion.aside variants={reveal} className="mx-auto w-full max-w-md lg:mx-0">
              <div className="rounded-[32px] border border-[#c6dce5] bg-[#f8fcff] p-3.5 shadow-xl shadow-[#456879]/10">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-[#b8d2dd] bg-[#e4f3f8]">
                  <img src="/images/jose-avatar.png" alt="José Luis Tot Herrera" className="h-full w-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/60 bg-[#f8fcff]/95 p-4 shadow-lg backdrop-blur">
                    <h3 className="font-bold">José Luis Tot Herrera</h3><p className="mt-1 text-sm text-[#64748b]">{t.role}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between px-2 font-mono text-[11px] text-[#456879]"><span>{language === 'es' ? 'PERFIL' : 'PROFILE'}</span><span>DEV // JOSE LUIS</span></div>
              </div>
              <div className="mt-5 flex items-center justify-between rounded-2xl border border-[#c6dce5] bg-[#f8fcff] px-5 py-4 text-sm shadow-sm">
                <span className="text-[#475569]">{language === 'es' ? 'Disponible para aprender y colaborar' : 'Open to learning and collaboration'}</span><span className="ml-3 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
              </div>
            </motion.aside>

            <div className="min-w-0">
              <p className="font-mono text-xs font-bold tracking-[.2em] text-[#456879]">{t.aboutLabel}</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">{t.about}</h2>
              <div className="mt-7 grid grid-cols-3 gap-2 rounded-2xl border border-[#c6dce5] bg-[#f8fcff] p-1.5 shadow-sm" role="tablist" aria-label={language === 'es' ? 'Áreas de interés' : 'Areas of interest'}>
                {(language === 'es' ? ['01  SOBRE MÍ', '02  HOBBIES', '03  OBJETIVOS'] : ['01  ABOUT ME', '02  HOBBIES', '03  GOALS']).map((label, index) => <button key={label} role="tab" aria-selected={aboutTab === index} onClick={() => setAboutTab(index)} className={`min-h-14 rounded-xl px-2 py-2 font-mono text-[10px] font-bold transition sm:text-xs ${aboutTab === index ? 'bg-[#0284c7] text-white shadow-md' : 'text-[#475569] hover:bg-[#f8edcf]'}`}>{label}</button>)}
              </div>
              {[
                { icon: UserRound, eyebrow: language === 'es' ? '01 // PERFIL PERSONAL' : '01 // PERSONAL PROFILE', title: t.bioTitle, body: t.bio, tags: [t.role] },
                { icon: Heart, eyebrow: language === 'es' ? '02 // INTERESES PERSONALES' : '02 // PERSONAL INTERESTS', title: t.hobbies, body: t.hobbiesText, tags: language === 'es' ? ['Dibujo / pixel art', 'Videojuegos', 'Motocicletas', 'Música'] : ['Drawing / pixel art', 'Video games', 'Motorcycles', 'Music'] },
                { icon: Target, eyebrow: language === 'es' ? '03 // HACIA DÓNDE VOY' : '03 // WHAT I AM WORKING TOWARD', title: t.goals, body: t.goalsText, tags: language === 'es' ? ['Aprendizaje', 'Colaboración'] : ['Learning', 'Collaboration'] }
              ].map((item, index) => {
                const Icon = item.icon;
                return aboutTab === index ? <motion.article key={item.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="mt-6 rounded-[30px] border border-[#c6dce5] bg-[#f8fcff] p-6 shadow-lg sm:p-8">
                  <div className="flex items-start gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[#b8d2dd] bg-[#e6f5fa] text-[#0284c7] shadow-sm"><Icon size={22} /></span><div><p className="font-mono text-xs font-bold text-[#456879]">{item.eyebrow}</p><h3 className="mt-1 text-2xl font-black">{item.title}</h3></div></div>
                  <p className="mt-5 text-base leading-relaxed text-[#475569]">{item.body}</p>
                  <div className="mt-6 border-t border-[#c6dce5] pt-5"><p className="font-mono text-xs font-bold text-[#456879]">{language === 'es' ? 'EN POCAS PALABRAS:' : 'IN A FEW WORDS:'}</p><div className="mt-3 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="rounded-full border border-[#b8d2dd] bg-[#e6f5fa] px-4 py-2 font-mono text-xs font-bold">{tag}</span>)}</div></div>
                </motion.article> : null;
              })}
            </div>
          </div>
        </motion.section>

        <ProjectShowcase />

        <motion.section id="stack" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="scroll-mt-28 bg-gradient-to-b from-[#eef8fc] to-[#deeff5] px-6 py-20"><div className="mx-auto max-w-6xl"><div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#b8d2dd] pb-6"><div><p className="font-mono text-xs font-bold tracking-[.2em] text-[#456879]">// 03</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">{t.tech}</h2><p className="mt-3 text-[#475569]">{t.techIntro}</p></div><span className="rounded-full border-2 border-[#0f172a] bg-[#f8fcff] px-4 py-2 font-mono text-xs font-bold shadow-[2px_2px_0_#0f172a]">{stackTools.length} {language === 'es' ? 'herramientas' : 'tools'}</span></div>
          {(() => {
            const categories = [
              { id: 'all', title: language === 'es' ? 'Todas las tecnologías' : 'All technologies', label: language === 'es' ? 'TODAS' : 'ALL', icon: Layers, count: stackTools.length },
              { id: 'frontend', title: 'Frontend / Web', label: 'WEB', icon: Globe, count: stackTools.filter((tool) => tool.category === 'frontend').length },
              { id: 'backenddb', title: 'Backend & DB', label: 'BACKEND', icon: Server, count: stackTools.filter((tool) => tool.category === 'backend' || tool.category === 'database').length },
              { id: 'devops', title: 'DevOps & Linux', label: 'DEVOPS', icon: Terminal, count: stackTools.filter((tool) => tool.category === 'devops').length }
            ];
            const groups = [
              { id: 'frontend', number: '01', eyebrow: 'CLIENT UI', title: 'Frontend & Web', description: language === 'es' ? 'Estructura, estilos e interactividad para páginas y aplicaciones web.' : 'Structure, styling, and interactivity for websites and web applications.', icon: Globe },
              { id: 'backend', number: '02', eyebrow: 'SERVER & PROGRAMMING', title: 'Backend', description: language === 'es' ? 'Programación y desarrollo del lado del servidor.' : 'Programming and server-side development.', icon: Server },
              { id: 'database', number: '03', eyebrow: 'DATA & STORAGE', title: language === 'es' ? 'Base de datos' : 'Database', description: language === 'es' ? 'Bases de datos relacionales para organizar y consultar información.' : 'Relational databases to organize and query information.', icon: Database },
              { id: 'devops', number: '04', eyebrow: 'ENVIRONMENT & TOOLS', title: 'DevOps & Tools', description: language === 'es' ? 'Control de versiones, herramientas de desarrollo y entorno Linux.' : 'Version control, development tools, and Linux environment.', icon: Terminal }
            ];
            const shownGroups = stackCategory === 'all' ? groups : groups.filter((group) => stackCategory === 'backenddb' ? group.id === 'backend' || group.id === 'database' : group.id === stackCategory);
            return <>
              <div className="mt-7 flex items-center justify-between"><p className="font-mono text-xs font-bold tracking-[.15em] text-[#0284c7]">{language === 'es' ? 'CATEGORÍAS' : 'CATEGORIES'}</p><p className="font-mono text-[10px] text-[#64748b]">{language === 'es' ? 'Elige una categoría' : 'Choose a category'}</p></div>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{categories.map((category) => { const Icon = category.icon; const selected = stackCategory === category.id; return <button key={category.id} type="button" onClick={() => setStackCategory(category.id)} aria-pressed={selected} className={`group flex min-h-24 flex-col justify-between rounded-2xl border-2 border-[#0f172a] p-3 text-left shadow-[3px_3px_0_#0f172a] transition duration-200 hover:-translate-y-0.5 ${selected ? 'bg-[#67d4f2] opacity-100' : 'bg-[#f8fcff]/80 opacity-50 hover:opacity-80'}`}><span className="flex items-center justify-between"><span className={`grid h-8 w-8 place-items-center rounded-lg border border-[#0f172a] ${selected ? 'bg-[#0f172a] text-[#67d4f2]' : 'bg-[#e6f5fa] text-[#0f172a]'}`}><Icon size={16} /></span><span className="rounded border border-[#b7a98c] bg-white/70 px-1.5 py-0.5 font-mono text-[8px] font-bold">{category.label}</span></span><span className="mt-2 text-[11px] font-black leading-tight">{category.title}</span><span className="font-mono text-[9px] text-[#475569]">{category.count} {language === 'es' ? (category.count === 1 ? 'elemento' : 'elementos') : (category.count === 1 ? 'item' : 'items')}</span></button>; })}
                <div aria-disabled="true" className="flex min-h-24 flex-col justify-between rounded-2xl border-2 border-dashed border-[#9ca3af] bg-white/20 p-3 text-[#64748b]/50"><span className="flex items-center justify-between"><span className="grid h-8 w-8 place-items-center rounded-lg border border-dashed border-[#9ca3af]"><Lock size={15} /></span><span className="rounded border border-[#9ca3af]/50 px-1.5 py-0.5 font-mono text-[8px] font-bold">COMING SOON</span></span><span className="mt-2 text-[11px] font-black">Cyber Security</span></div>
              </div>
              <div className="mt-8 flex items-center justify-between"><p className="font-mono text-xs font-bold tracking-[.15em] text-[#456879]">{language === 'es' ? 'CATEGORÍAS Y TECNOLOGÍAS' : 'CATEGORIES & TECHNOLOGIES'}</p><p className="font-mono text-[10px] text-[#64748b]">{shownGroups.length} {language === 'es' ? (shownGroups.length === 1 ? 'categoría' : 'categorías') : (shownGroups.length === 1 ? 'category' : 'categories')}</p></div>
              <motion.div layout className="mt-4 grid gap-5 lg:grid-cols-2">{shownGroups.map((group) => { const CategoryIcon = group.icon; const tools = stackTools.filter((tool) => tool.category === group.id); return <motion.article layout key={group.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex min-h-[300px] flex-col rounded-[28px] border-2 border-[#0f172a] bg-[#f8fcff] p-5 shadow-[6px_6px_0_#0f172a] sm:p-6"><div className="flex items-center justify-between border-b border-[#c6dce5] pb-4"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#0f172a] bg-[#67d4f2] font-mono text-xs font-black">{group.number}</span><span className="font-mono text-[10px] font-bold tracking-wider text-[#0284c7]">{group.eyebrow}</span></div><span className="rounded-md border border-[#9ed5ae] bg-[#e9fff0] px-2 py-1 font-mono text-[9px] font-bold text-[#08753b]">{language === 'es' ? 'ACTIVO' : 'ACTIVE'}</span></div><div className="mt-4 flex items-center gap-2"><CategoryIcon className="text-[#0284c7]" size={19} /><h3 className="text-xl font-black">{group.title}</h3></div><p className="mt-2 text-sm leading-relaxed text-[#475569]">{group.description}</p><div className="mt-5 flex flex-wrap gap-2">{tools.map((tool) => { const Icon = tool.icon; return <span key={tool.name} className="inline-flex items-center gap-2 rounded-xl border-2 border-[#0f172a] bg-[#e6f5fa] px-3 py-2 shadow-[2px_2px_0_#0f172a]"><Icon size={20} title={tool.name} aria-hidden="true" /><span className="font-mono text-xs font-bold">{tool.name}</span></span>; })}</div><div className="mt-auto flex items-center justify-between border-t border-[#c6dce5] pt-4"><span className="font-mono text-[10px] text-[#64748b]">{tools.length} {language === 'es' ? (tools.length === 1 ? 'tecnología' : 'tecnologías') : (tools.length === 1 ? 'tool' : 'tools')}</span></div></motion.article>; })}</motion.div>
            </>;
          })()}
        </div></motion.section>

        <motion.section id="activity" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="scroll-mt-28 bg-[#d3e9f2] px-6 py-20"><div className="mx-auto max-w-6xl rounded-[30px] border-2 border-[#0f172a] bg-[#f8fcff] p-5 shadow-[7px_7px_0_#0f172a] sm:p-8"><p className="font-mono text-xs font-bold tracking-[.2em] text-[#456879]">// 04</p><h2 className="mt-2 text-3xl font-black">{t.activity}</h2><p className="mt-3 text-[#475569]">{t.activityIntro}</p><GithubActivity language={language} /></div></motion.section>

        <motion.section id="contact" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="scroll-mt-28 bg-[#02587a] px-6 py-20 text-[#0f172a]"><motion.div whileHover={{ y: -4 }} className="mx-auto max-w-5xl rounded-3xl border-2 border-[#0f172a] bg-[#f8fcff] p-7 shadow-[6px_6px_0_#0f172a] sm:p-10"><p className="font-mono text-xs font-bold tracking-[.2em] text-[#456879]">// 05</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">{t.contact}</h2><p className="mt-3 text-[#475569]">{t.contactIntro}</p><div className="mt-7 flex flex-wrap gap-3"><motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} href="mailto:totherrerajoseluis@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-[#67d4f2] px-5 py-3 text-sm font-bold"><Mail size={17} />totherrerajoseluis@gmail.com</motion.a><motion.a whileHover={{ y: -3 }} href="https://github.com/Jose-langL" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border-2 border-[#0f172a] px-5 py-3 text-sm font-bold"><SiGithub size={16} />GitHub <ArrowUpRight className="inline" size={15} /></motion.a><motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/in/jose-luis-3a1300398/" target="_blank" rel="noreferrer" className="rounded-xl border-2 border-[#0f172a] px-5 py-3 text-sm font-bold">LinkedIn <ArrowUpRight className="inline" size={15} /></motion.a><motion.a whileHover={{ y: -3 }} href="https://www.facebook.com/jose.luis.650439?mibextid=ZbWKwL" target="_blank" rel="noreferrer" className="rounded-xl border-2 border-[#0f172a] px-5 py-3 text-sm font-bold">Facebook <ArrowUpRight className="inline" size={15} /></motion.a></div><p className="mt-10 border-t border-[#c6dce5] pt-5 text-xs text-[#64748b]">© 2026 Jose Luis Tot Herrera · {t.footer}</p></motion.div></motion.section>
      </main>
      <motion.a whileHover={{ y: -4, scale: 1.08 }} whileTap={{ scale: 0.92 }} href="#hero" className="fixed bottom-5 right-5 rounded-full border-2 border-[#0f172a] bg-[#67d4f2] p-3 shadow-[2px_2px_0_#0f172a]" aria-label="Back to top"><ArrowUp size={18} /></motion.a>
    </div>
  );
}

export default App;
