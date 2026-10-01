export default function WindowFrame({ title, path, children, className = '' }) {
  return (
    <div
      className={`border border-neutral-400 bg-white/60 dark:border-neutral-600 dark:bg-neutral-800/60 ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-neutral-300 bg-neutral-200/70 px-3 py-2 text-[10px] tracking-widest dark:border-neutral-700 dark:bg-neutral-800">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
        <span className="ml-3">{title}</span>
      </div>
      {path && (
        <div className="border-b border-neutral-300 px-3 py-1.5 text-[10px] opacity-70 dark:border-neutral-700">
          Path: <span className="bg-neutral-800 px-1.5 py-0.5 text-white">{path}</span>
        </div>
      )}
      {children}
    </div>
  )
}