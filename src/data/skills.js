import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaGithub, FaLinux, FaDocker,} from 'react-icons/fa'
import { SiMysql, SiPostgresql, SiObsidian, SiPostman } from 'react-icons/si'

export const skills = [
  { nombre: 'Python', icono: FaPython, categoria: 'Lenguajes', color: '#4B8BBE' },
  { nombre: 'HTML', icono: FaHtml5, categoria: 'Lenguajes', color: '#E34F26' },
  { nombre: 'CSS', icono: FaCss3Alt, categoria: 'Lenguajes', color: '#2D8CEB' },
  { nombre: 'JavaScript', icono: FaJs, categoria: 'Lenguajes', color: '#F7DF1E' },
  { nombre: 'Node.js', icono: FaNodeJs, categoria: 'Lenguajes', color: '#68A063' },

  { nombre: 'MySQL', icono: SiMysql, categoria: 'Base de datos', color: '#4A90B8' },
  { nombre: 'PostgreSQL', icono: SiPostgresql, categoria: 'Base de datos', color: '#5B9BD5' },

  { nombre: 'Git', icono: FaGitAlt, categoria: 'Herramientas', color: '#F05032' },
  { nombre: 'GitHub', icono: FaGithub, categoria: 'Herramientas' }, 
  { nombre: 'Obsidian', icono: SiObsidian, categoria: 'Herramientas', color: '#8B5CF6' },
  { nombre: 'Postman', icono: SiPostman, categoria: 'Herramientas', color: '#FF6C37' },
  { nombre: 'Linux', icono: FaLinux, categoria: 'Herramientas' }, 
  { nombre: 'Docker', icono: FaDocker, categoria: 'Herramientas', color: '#2496ED' },
]

export const CATEGORIAS = ['Todos', 'Lenguajes', 'Base de datos', 'Herramientas']

export const contar = (categoria) =>
  categoria === 'Todos'
    ? skills.length
    : skills.filter((s) => s.categoria === categoria).length