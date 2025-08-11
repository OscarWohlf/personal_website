import type { Project } from '../data/projects'

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group rounded-2xl border dark:border-zinc-800 overflow-hidden hover:shadow-lg transition bg-white dark:bg-zinc-800">
      {p.image && <img src={p.image} alt="" className="w-full h-40 object-cover" />}
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold">{p.title}</h3>
          {p.date && <span className="text-xs text-zinc-500">{p.date}</span>}
        </div>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{p.description}</p>
        {p.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map(t => (
              <span key={t} className="text-xs px-2 py-1 rounded-full border dark:border-zinc-700">{t}</span>
            ))}
          </div>
        ) : null}
        <div className="mt-4 flex gap-3 text-sm">
          {p.link && <a className="underline" href={p.link} target="_blank">Live</a>}
          {p.repo && <a className="underline" href={p.repo} target="_blank">Code</a>}
        </div>
      </div>
    </article>
  )
}
