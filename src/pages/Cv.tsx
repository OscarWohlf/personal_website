import { CV_URL, lastUpdated, education, experience, extras } from "../data/cv";
import PageHeader from "../components/PageHeader"

// helper to render string|string[] uniformly
function Details({ value }: { value?: string | string[] }) {
  if (!value) return null
  if (Array.isArray(value)) {
    return (
      <div className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
        {value.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    )
  }
  return <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{value}</p>
}

export default function Cv() {
  return (
    <section className="py-12">
      <PageHeader
        title="Curriculum Vitae"
        actions={
            <a href={CV_URL} download className="px-3 py-2 text-sm rounded-xl border dark:border-zinc-700 hover:shadow">
            Download PDF
            </a>
        }
        />
      <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
        <span>Updated: {lastUpdated}</span>
      </div>

      {/* Education */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Education</h2>
        <ul className="mt-4 space-y-5">
          {education.map((e) => (
            <li key={e.title} className="rounded-xl border dark:border-zinc-800 p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="font-medium">{e.title}</div>
                {e.period && <div className="text-sm text-zinc-500">{e.period}</div>}
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                {e.org}{e.where ? ` — ${e.where}` : ""}
              </div>
              <Details value={e.details} />
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Experience</h2>
        <ul className="mt-4 space-y-5">
          {experience.map((x) => (
            <li key={`${x.role}-${x.org}`} className="rounded-xl border dark:border-zinc-800 p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="font-medium">{x.role}</div>
                {x.period && <div className="text-sm text-zinc-500">{x.period}</div>}
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                {x.org}{x.where ? ` — ${x.where}` : ""}
              </div>
              <Details value={x.details} />
            </li>
          ))}
        </ul>
      </section>

      {/* Extras */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Extracurricular</h2>
        <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
          {extras.map((e, i) => (
            <li key={i}>
              {Array.isArray(e) ? e.join(" — ") : e}
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}
