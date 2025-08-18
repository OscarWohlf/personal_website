// src/pages/Cv.tsx
import PageHeader from "../components/PageHeader"
import { useI18n } from "../i18n/i18n"
import { getCvData, type EduItem, type ExpItem } from "../data/cv"

// helper to render string|string[] uniformly
function Details({ value }: { value?: string | string[] }) {
  if (!value) return null
  return Array.isArray(value) ? (
    <div className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
      {value.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  ) : (
    <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{value}</p>
  )
}

function EduList({ items }: { items: EduItem[] }) {
  return (
    <ul className="mt-4 space-y-5">
      {items.map((e) => (
        <li key={`${e.title}-${e.org}`} className="rounded-xl border dark:border-zinc-800 p-4">
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
  )
}

function ExpList({ items }: { items: ExpItem[] }) {
  return (
    <ul className="mt-4 space-y-5">
      {items.map((x) => (
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
  )
}

export default function Cv() {
  const { lang, t } = useI18n()
  const cv = getCvData(lang) // pulls EN/NO data + correct PDF path

  return (
    <section className="py-12">
      <PageHeader
        title={t("cv.title")}
        actions={
          <a
            href={cv.CV_URL}
            download
            className="px-3 py-2 text-sm rounded-xl border dark:border-zinc-700 hover:shadow"
          >
            {t("cv.download")}
          </a>
        }
      />

      <div className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
        {cv.lastUpdated && <span>{t("cv.updated")}: {cv.lastUpdated}</span>}
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">{t("cv.education")}</h2>
        <EduList items={cv.education} />
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">{t("cv.experience")}</h2>
        <ExpList items={cv.experience} />
      </section>

      {!!cv.extras?.length && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">{t("cv.extracurricular")}</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            {cv.extras.map((e, i) => (
              <li key={i}>{Array.isArray(e) ? e.join(" — ") : e}</li>
            ))}
          </ul>
        </section>
      )}
    </section>
  )
}
