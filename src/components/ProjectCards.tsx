// src/components/ProjectCard.tsx
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { getFileNameFromUrl } from '../utils/download'

type CardAction = {
  href: string
  label: string
  filename?: string
  external?: boolean
}

export default function ProjectCard({ p }: { p: Project }) {
  const downloads = [
    ...(p.paper
      ? [{
          href: p.paper,
          label: p.paperLabel ?? "PDF",
          filename: p.paperFilename ?? getFileNameFromUrl(p.paper),
        }]
      : []),
    ...(p.attachments ?? []).map((attachment) => ({
      href: attachment.href,
      label: attachment.label,
      filename: attachment.filename ?? getFileNameFromUrl(attachment.href),
    })),
  ]

  const primaryDownload = downloads[0]
  const actions: CardAction[] = [
    ...(p.repo ? [{ href: p.repo, label: "See Code", external: true }] : []),
    ...(p.link ? [{ href: p.link, label: "View Demo", external: true }] : []),
    ...(primaryDownload
      ? [{
          href: primaryDownload.href,
          label: primaryDownload.label,
          filename: primaryDownload.filename,
        }]
      : []),
  ]

  return (
    <article className="group flex h-full flex-col rounded-2xl border dark:border-zinc-800 overflow-hidden hover:shadow-lg transition bg-white dark:bg-zinc-800">
      <Link
        to={`/projects/${p.slug}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/30"
        aria-label={`Open project: ${p.title}`}
      >
        {p.image && <img src={p.image} alt="" className="w-full h-40 object-cover" />}
        <div className="p-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-semibold group-hover:opacity-90">{p.title}</h3>
            {p.date && <span className="shrink-0 text-xs text-zinc-500">{p.date}</span>}
          </div>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 line-clamp-3">{p.description}</p>
          {p.tags?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map(t => (
                <span key={t} className="text-xs px-2 py-1 rounded-full border dark:border-zinc-700">{t}</span>
              ))}
            </div>
          ) : null}
        </div>
      </Link>

      {actions.length ? (
        <div className="mt-auto flex flex-wrap gap-2 px-4 pb-4">
          {actions.map((action) => (
            <a
              key={`${action.label}-${action.href}`}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
              download={action.filename}
              className="px-3 py-1.5 text-xs rounded-xl border dark:border-zinc-700 hover:shadow"
              aria-label={`${action.label} for ${p.title}`}
            >
              {action.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  )
}
