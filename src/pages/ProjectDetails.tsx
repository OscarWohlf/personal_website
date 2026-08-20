import { useParams, Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { projects } from '../data/projects'
import { getFileNameFromUrl } from '../utils/download'

export default function ProjectDetails() {
  const { slug } = useParams()
  const p = projects.find(x => x.slug === slug)

  if (!p) {
    return (
      <section className="py-12">
        <PageHeader title="Project not found" />
        <p className="mt-6">
          <Link to="/projects" className="underline underline-offset-4">Back to projects</Link>
        </p>
      </section>
    )
  }

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

  return (
    <section className="py-12">
        <PageHeader
        title={p.title}
        actions={
            <div className="flex gap-2">
            {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                className="px-3 py-2 text-sm rounded-xl border border-stone-300/80 bg-stone-50/70 dark:border-zinc-700 dark:bg-transparent hover:shadow">
                Open
                </a>
            )}
            {p.repo && (
                <a href={p.repo} target="_blank" rel="noopener noreferrer"
                className="px-3 py-2 text-sm rounded-xl border border-stone-300/80 bg-stone-50/70 dark:border-zinc-700 dark:bg-transparent hover:shadow">
                Code
                </a>
            )}
            {downloads.map((download) => (
                <a
                    key={download.href}
                    href={download.href}
                    download={download.filename}
                    className="px-3 py-2 text-sm rounded-xl border border-stone-300/80 bg-stone-50/70 dark:border-zinc-700 dark:bg-transparent hover:shadow"
                >
                    {download.label}
                </a>
            ))}
            </div>
        }
        />


      <div className="mt-2 text-sm text-stone-500 dark:text-zinc-400">
        {p.date && <span>{p.date}</span>}
        {p.tags?.length ? (
          <span> · {p.tags.join(' · ')}</span>
        ) : null}
      </div>

      {p.image && (
        <img
          src={p.image}
          alt=""
          className="mt-6 w-full max-w-3xl rounded-2xl border border-stone-200/80 dark:border-zinc-800 object-cover"
        />
      )}

      <article className="mt-6 max-w-3xl leading-relaxed text-stone-700 dark:text-zinc-300 space-y-4">
        {p.content?.length
          ? p.content.map((para, i) => <p key={i}>{para}</p>)
          : <p>{p.description}</p>}
      </article>

      <p className="mt-8">
        <Link to="/projects" className="underline underline-offset-4">← Back to projects</Link>
      </p>
    </section>
  )
}
