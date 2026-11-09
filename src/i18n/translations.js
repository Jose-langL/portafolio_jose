export const translations = {
  es: {
    nav: { home: 'INICIO', about: 'SOBRE MÍ', projects: 'PROYECTOS', skills: 'TECNOLOGÍAS', contact: 'CONTACTO' },
    intro: { nombre: 'BIENVENIDOS', sub: 'PORTAFOLIO' },
    themeLabel: 'Cambiar tema',

    hero: {
      role: 'Técnico en Desarrollo de Software',
      bio: 'Soy Técnico en Desarrollo de Software, orientado al desarrollo web y backend. Me caracterizo por ser responsable, organizado y creativo, con un interés constante por aprender y mejorar mis habilidades. He desarrollado proyectos académicos y personales aplicando buenas prácticas y buscando soluciones eficientes. Busco integrarme a un equipo de desarrollo donde pueda aportar mis conocimientos, compartir ideas y seguir creciendo personal y profesionalmente.',
      cvLabel: 'DESCARGAR_CV.PDF',
      cvFile: '/Multimedia/CV_Jose_Luis_Tot_Herrera.pdf',
    },

    about: {
      fileType: 'Tipo de archivo',
      fileTypeValue: 'Documento Markdown',
      role: 'Rol',
      status: 'Estado',
      statusValue: '● Buscando oportunidades',
      files: [
        {
          name: 'bio.md',
          titulo: '¿Quién soy?',
          texto:
            'Soy Técnico en Desarrollo de Software, orientado al desarrollo web y backend. Me caracterizo por ser responsable, organizado y creativo, con un interés constante por aprender y mejorar mis habilidades. He desarrollado proyectos académicos y personales aplicando buenas prácticas y buscando soluciones eficientes. Busco integrarme a un equipo de desarrollo donde pueda aportar mis conocimientos, compartir ideas y seguir creciendo personal y profesionalmente.',
        },
        {
          name: 'hobbies.md',
          titulo: 'Hobbies',
          texto:
            'Me gusta el dibujo, sobre todo el estilo pixel-art, una actividad que fortalece mi atención al detalle, paciencia y creatividad. Disfruto los videojuegos, que inspiran mi forma de diseñar, y las motocicletas, por la sensación de libertad y adrenalina que me transmiten. También escucho música para relajarme, concentrarme y encontrar inspiración, y en mis tiempos libres disfruto aprender cosas nuevas.',
        },
        {
          name: 'objetivos.md',
          titulo: 'Objetivos',
          texto:
            'Mi objetivo es seguir aprendiendo y crecer como programador, creando proyectos que unan tecnología y arte para ofrecer experiencias únicas. También quiero colaborar con otros programadores, compartiendo ideas y construyendo juntos soluciones creativas.',
        },
        {
          name: 'habilidades.md',
          titulo: 'Habilidades',
          texto:
            'Mis habilidades principales incluyen Python, lenguaje con el que he trabajado en varios proyectos como la automatización de un gimnasio y el desarrollo de una calculadora. También tengo experiencia con HTML, que utilizo para estructurar páginas web, y conocimientos básicos de GitHub, plataforma que empleo para guardar y gestionar mis trabajos.',
        },
      ],
    },

    projects: {
      titulo: 'Proyectos',
      intro:
        'Aquí puedes ver algunos de los proyectos que he desarrollado utilizando diferentes tecnologías. Cada proyecto incluye una breve descripción y las herramientas empleadas para crearlos.',
      verApp: 'Ver app',
      repo: 'Repositorio',
      // mismo orden que en projects.js
      descripciones: [
        'Aplicación web para administrar espacios de parqueo, registrar vehículos y calcular pagos.',
        'Aplicación web para administrar las habitaciones de un hotel, registrarlas y ver su estado.',
        'Sistema de gestión para una distribuidora de gaseosas: base de datos relacional en MySQL con 8 tablas interconectadas que modelan clientes, pedidos, productos, sedes y encargados.',
      ],
    },

    skills: {
      titulo: 'Tecnologías',
      categorias: { Todos: 'Todos', Lenguajes: 'Lenguajes', 'Base de datos': 'Base de datos', Herramientas: 'Herramientas' },
    },

    contact: {
      titulo: 'Gracias por visitar mi portafolio',
      sub: 'Si quieres escribirme, encuéntrame aquí:',
      footer: '© 2026 Jose Luis Tot Herrera | Todos los derechos reservados',
    },
  },

  en: {
    nav: { home: 'HOME', about: 'ABOUT', projects: 'PROJECTS', skills: 'SKILLS', contact: 'CONTACT' },
    intro: { nombre: 'WELCOME', sub: 'PORTFOLIO' },
    themeLabel: 'Toggle theme',

    hero: {
      role: 'Software Development Technician',
      bio: "I'm a Software Development Technician focused on web and backend development. I'm responsible, organized and creative, with a constant drive to learn and improve my skills. I've built academic and personal projects applying good practices and seeking efficient solutions. I'm looking to join a development team where I can contribute my knowledge, share ideas and keep growing both personally and professionally.",
      cvLabel: 'DOWNLOAD_CV.PDF',
      cvFile: '/Multimedia/CV_Jose_Luis_Tot_Herrera.pdf', // si haces un CV en inglés: '/CV_Jose_Luis_Tot_EN.pdf'
    },

    about: {
      fileType: 'File type',
      fileTypeValue: 'Markdown Document',
      role: 'Role',
      status: 'Status',
      statusValue: '● Open to opportunities',
      files: [
        {
          name: 'bio.md',
          titulo: 'Who am I?',
          texto:
            "I'm a Software Development Technician focused on web and backend development. I'm responsible, organized and creative, with a constant drive to learn and improve my skills. I've built academic and personal projects applying good practices and seeking efficient solutions. I'm looking to join a development team where I can contribute my knowledge, share ideas and keep growing both personally and professionally.",
        },
        {
          name: 'hobbies.md',
          titulo: 'Hobbies',
          texto:
            'I enjoy drawing, especially pixel art, an activity that sharpens my attention to detail, patience and creativity. I love video games, which inspire the way I design, and motorcycles, for the sense of freedom and adrenaline they give me. I also listen to music to relax, focus and find inspiration, and in my free time I enjoy learning new things.',
        },
        {
          name: 'objetivos.md',
          titulo: 'Goals',
          texto:
            'My goal is to keep learning and grow as a programmer, building projects that combine technology and art to offer unique experiences. I also want to collaborate with other programmers, sharing ideas and building creative solutions together.',
        },
        {
          name: 'habilidades.md',
          titulo: 'Skills',
          texto:
            "My main skills include Python, which I've used in several projects such as automating a gym system and building a calculator. I also have experience with HTML, which I use to structure web pages, and basic knowledge of GitHub, the platform I use to store and manage my work.",
        },
      ],
    },

    projects: {
      titulo: 'Projects',
      intro:
        "Here you can see some of the projects I've built using different technologies. Each project includes a short description and the tools used to create it.",
      verApp: 'View app',
      repo: 'Repository',
      descripciones: [
        'Web application to manage parking spaces, register vehicles and calculate payments.',
        'Web application to manage hotel rooms, register them and track their status.',
        'Management system for a soda distributor: a relational MySQL database with 8 interconnected tables modeling customers, orders, products, branches and managers.',
      ],
    },

    skills: {
      titulo: 'Technologies',
      categorias: { Todos: 'All', Lenguajes: 'Languages', 'Base de datos': 'Databases', Herramientas: 'Tools' },
    },

    contact: {
      titulo: 'Thanks for visiting my portfolio',
      sub: "If you'd like to write to me, find me here:",
      footer: '© 2026 Jose Luis Tot Herrera | All rights reserved',
    },
  },
}
