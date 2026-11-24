import { motion } from 'framer-motion';

export function AntarcticaDecorations() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-64 overflow-hidden select-none" aria-hidden="true">
      <svg className="absolute inset-x-0 bottom-0 h-48 w-full" viewBox="0 0 1440 220" preserveAspectRatio="none" fill="none">
        <path d="M0 132Q190 102 360 132T720 126T1080 136T1440 120V220H0Z" fill="#d7edf5" />
        <path d="M0 170Q230 148 460 172T920 166T1440 160V220H0Z" fill="#c3e2ed" opacity=".9" />
        <path d="M0 132Q190 102 360 132T720 126T1080 136T1440 120" stroke="#fff" strokeWidth="6" opacity=".9" />
      </svg>

      {[0, 1, 2, 3, 4, 5].map((flake) => <motion.span key={flake} animate={{ y: [0, 18, 0], x: [0, flake % 2 ? 8 : -8, 0], opacity: [.45, .9, .45] }} transition={{ duration: 3 + flake * .45, delay: flake * .3, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-32 h-2 w-2 rounded-full bg-white shadow-[0_0_12px_#fff]" style={{ left: `${14 + flake * 13}%` }} />)}
    </div>
  );
}
