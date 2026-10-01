import { FaRegFolder } from 'react-icons/fa'

export default function FileExplorer({ files, active, onSelect }) {
  return (
    <aside className="shrink-0 border-b border-neutral-300 p-4 dark:border-neutral-700 md:w-60 md:border-b-0 md:border-r">
      <p className="mb-3 text-[10px] tracking-widest opacity-60">DIRECTORIES</p>
      <ul className="flex flex-wrap gap-2 md:flex-col">
        {files.map((f) => (
          <li key={f.name}>
            <button
              onClick={() => onSelect(f.name)}
              className={`flex w-full items-center gap-2 border px-3 py-2 text-left text-xs transition-colors ${
                active === f.name
                  ? 'border-neutral-500 bg-neutral-200 dark:bg-neutral-700'
                  : 'border-transparent hover:bg-neutral-200/60 dark:hover:bg-neutral-700/60'
              }`}
            >
              <FaRegFolder className="text-amber-500" />
              {f.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}