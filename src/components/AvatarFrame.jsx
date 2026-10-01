import { motion } from 'framer-motion'
import { FaPython, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa'

const CHIPS = [
  { Icono: FaHtml5, pos: 'top-2 -left-4 md:-left-8', delay: 0 },
  { Icono: FaPython, pos: 'top-10 -right-4 md:-right-8', delay: 0.6 },
  { Icono: FaCss3Alt, pos: 'bottom-10 -left-2 md:-left-6', delay: 1.2 },
  { Icono: FaGitAlt, pos: 'bottom-2 -right-2 md:-right-6', delay: 1.8 },
]

const ESQUINAS = [
  'top-0 left-0 border-t border-l',
  'top-0 right-0 border-t border-r',
  'bottom-0 left-0 border-b border-l',
  'bottom-0 right-0 border-b border-r',
]

export default function AvatarFrame({ src, alt }) {
  return (
    <div className="relative p-8">
      {/* esquinas tipo corchete */}
      {ESQUINAS.map((c) => (
        <span
          key={c}
          className={`absolute h-4 w-4 border-neutral-500 dark:border-neutral-400 ${c}`}
        />
      ))}

      <div className="relative h-60 w-60 md:h-80 md:w-80">
        {/* anillo punteado que gira */}
        <div className="animate-orbit absolute inset-0 rounded-full border border-dashed border-neutral-500 dark:border-neutral-400" />

        {/* imagen circular */}
        <div className="absolute inset-4 overflow-hidden rounded-full border-2 border-neutral-800 bg-neutral-200 dark:border-neutral-100 dark:bg-neutral-800">
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        </div>

        {/* chips flotantes */}
        {CHIPS.map(({ Icono, pos, delay }, i) => (
          <motion.div
            key={i}
            className={`absolute ${pos} flex h-10 w-10 items-center justify-center border border-neutral-400 bg-white text-lg shadow-sm dark:border-neutral-500 dark:bg-neutral-800`}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Icono />
          </motion.div>
        ))}
      </div>

      {/* estado */}
      <p className="mt-4 text-center text-[10px] tracking-widest">
        <span className="text-green-700 dark:text-green-400">●</span> 
      </p>
    </div>
  )
}