import type { ProfileData, Project, TechItem, ExperienceItem } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'José Luis Tot Herrera',
  tagline: 'Técnico en Desarrollo de Software',
  education: 'Técnico en Desarrollo de Software',
  status: 'Buscando oportunidades',
  bio: 'Desarrollador orientado al desarrollo web y backend, responsable, organizado y creativo, con interés constante por aprender y mejorar.',
  experienceStart: 'Desarrollo de software',
  avatarUrl: '/images/jose-avatar.png',
  interests: ['Dibujo y pixel art', 'Videojuegos', 'Motocicletas', 'Música', 'Aprendizaje'],
  contact: {
    email: 'totherrerajoseluis@gmail.com',
    github: 'https://github.com/Jose-langL',
    linkedin: 'https://www.linkedin.com/in/jose-luis-3a1300398/',
    location: ''
  }
};

export const techStackData: TechItem[] = [
  { name: 'Python', category: 'backend', layer: 'backend', iconKey: 'python', color: '#3776AB', roleTag: 'Programming Language', usageContext: 'Python development and academic projects.' },
  { name: 'HTML', category: 'frontend', layer: 'client', iconKey: 'html5', color: '#E34F26', roleTag: 'Web Structure', usageContext: 'Structuring web pages and interfaces.' },
  { name: 'CSS', category: 'frontend', layer: 'client', iconKey: 'css', color: '#1572B6', roleTag: 'Web Styling', usageContext: 'Styling responsive web interfaces.' },
  { name: 'JavaScript', category: 'frontend', layer: 'client', iconKey: 'javascript', color: '#F7DF1E', roleTag: 'Web Interactivity', usageContext: 'Adding behavior and interactivity to web applications.' },
  { name: 'MySQL', category: 'backend', layer: 'database', iconKey: 'mysql', color: '#4479A1', roleTag: 'Relational Database', usageContext: 'Relational database design and data management.' },
  { name: 'GitHub', category: 'tools', layer: 'devops', iconKey: 'github', color: '#181717', roleTag: 'Code Hosting', usageContext: 'Saving and managing software projects.' }
];

export const projectsData: Project[] = [
  {
    id: 'sistema-parqueo', title: 'Sistema de Parqueo', subtitle: 'Aplicación web de administración de parqueo', category: 'fullstack',
    summary: 'Aplicación web para administrar espacios de parqueo, registrar vehículos y calcular pagos.',
    description: 'Sistema web académico para administrar espacios de parqueo, registrar vehículos y calcular los pagos correspondientes.',
    architecture: ['Interfaz web con HTML y CSS', 'Lógica de interacción con JavaScript'], stack: ['HTML', 'CSS', 'JavaScript'],
    highlights: ['Administración de espacios', 'Registro de vehículos', 'Cálculo de pagos'], challenges: 'Desarrollar los flujos principales de administración y cálculo de pagos.', role: 'Desarrollador',
    githubUrl: 'https://github.com/Jose-langL/Campus_parking', imageUrl: '/images/parking.png', featured: true,
    metrics: [{ label: 'Frontend', value: 'HTML · CSS' }, { label: 'Lógica', value: 'JavaScript' }, { label: 'Funciones', value: 'Parqueo' }]
  },
  {
    id: 'gestion-hotel', title: 'Gestión de Hotel', subtitle: 'Aplicación web de administración de habitaciones', category: 'fullstack',
    summary: 'Aplicación web para administrar habitaciones, registrarlas y consultar su estado.',
    description: 'Aplicación web para registrar habitaciones de hotel y revisar su disponibilidad o estado.',
    architecture: ['Interfaz web con HTML y CSS', 'Lógica de interacción con JavaScript'], stack: ['HTML', 'CSS', 'JavaScript'],
    highlights: ['Registro de habitaciones', 'Consulta de estado'], challenges: 'Organizar el registro de habitaciones y la consulta de su estado.', role: 'Desarrollador',
    githubUrl: 'https://github.com/Jose-langL/Gesti-n-del-hotel', imageUrl: '/images/hotel.png', featured: true,
    metrics: [{ label: 'Frontend', value: 'HTML · CSS' }, { label: 'Lógica', value: 'JavaScript' }, { label: 'Funciones', value: 'Habitaciones' }]
  },
  {
    id: 'distribuidora-gaseosas', title: 'Distribuidora de Gaseosas', subtitle: 'Sistema de gestión y base de datos relacional', category: 'fullstack',
    summary: 'Sistema de gestión para una distribuidora con una base de datos MySQL de ocho tablas interconectadas.',
    description: 'Base de datos relacional para administrar clientes, pedidos, productos, sedes y encargados de la distribuidora.',
    architecture: ['Base de datos relacional MySQL', 'Ocho tablas interconectadas'], stack: ['MySQL'],
    highlights: ['Gestión de clientes y pedidos', 'Registro de productos, sedes y encargados'], challenges: 'Modelar los datos de la distribuidora en tablas relacionadas.', role: 'Desarrollador',
    githubUrl: 'https://github.com/Jose-langL/distribuidora-gaseosas-del-valle-sa', imageUrl: '/images/distribuidora.png', featured: true,
    metrics: [{ label: 'Base de datos', value: 'MySQL' }, { label: 'Estructura', value: '8 tablas' }, { label: 'Dominio', value: 'Distribución' }]
  }
];

export const experienceData: ExperienceItem[] = [];
