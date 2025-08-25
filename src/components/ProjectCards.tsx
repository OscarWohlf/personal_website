// src/components/ProjectCard.tsx
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

export function getFileNameFromUrl(urlStr: string) {
  try {
    const url = new URL(urlStr, window.location.origin)
    const last = url.pathname.split('/').pop() || 'download.pdf'
    // strip any query/hash and decode
    return decodeURIComponent(last.split('?')[0].split('#')[0]) || 'download.pdf'
  } catch {
    // relative path without origin fallback
    const last = urlStr.split('/').pop() || 'download.pdf'
    return decodeURIComponent(last.split('?')[0].split('#')[0]) || 'download.pdf'
  }
}

export default function ProjectCard({ p }: { p: Project }) {
  function downloadPaper(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    if (!p.paper) return
    const a = document.createElement('a')
    a.href = p.paper
    // use explicit filename if provided, else derive from URL
    a.download = p.paperFilename ?? getFileNameFromUrl(p.paper)
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  return (
    <Link
      to={`/projects/${p.slug}`}
      className="group block rounded-2xl border dark:border-zinc-800 overflow-hidden hover:shadow-lg transition bg-white dark:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/30"
      aria-label={`Open project: ${p.title}`}
    >
      {p.image && <img src={p.image} alt="" className="w-full h-40 object-cover" />}
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold group-hover:opacity-90">{p.title}</h3>
          {p.date && <span className="text-xs text-zinc-500">{p.date}</span>}
        </div>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 line-clamp-3">{p.description}</p>
        {p.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map(t => (
              <span key={t} className="text-xs px-2 py-1 rounded-full border dark:border-zinc-700">{t}</span>
            ))}
          </div>
        ) : null}

        {p.paper && (
          <div className="mt-4">
            <button
              onClick={downloadPaper}
              className="px-3 py-1.5 text-xs rounded-xl border dark:border-zinc-700 hover:shadow"
              aria-label={`Download paper for ${p.title}`}
            >
              {p.paperLabel ?? "PDF"}
            </button>
          </div>
        )}
      </div>
    </Link>
  )
}
