import { Link } from "react-router-dom"
import { getLatestUpdates } from "../data/updates"
import type { Update } from "../data/updates"
import { useI18n } from "../i18n/useI18n"

function formatDate(update: Update, lang: "en" | "nb") {
  if (update.dateLabel) return update.dateLabel[lang]

  const locale = lang === "nb" ? "nb-NO" : "en-GB"
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(update.date))
}

export default function LatestUpdates({ limit = 5 }: { limit?: number }) {
  const { lang, t } = useI18n()
  const latest = getLatestUpdates(limit)

  return (
    <section>
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold">{t("updates.latest")}</h2>
        <Link
          to="/updates"
          className="shrink-0 text-sm underline underline-offset-4 hover:opacity-80"
        >
          {t("updates.all")}
        </Link>
      </div>

      <ol className="mt-5 space-y-5 border-l dark:border-zinc-800">
        {latest.map((update) => (
          <li key={update.slug} className="pl-4">
            <time className="text-xs text-zinc-500 dark:text-zinc-400">
              {formatDate(update, lang)}
            </time>
            <h3 className="mt-1 text-sm font-medium leading-snug">
              {update.title[lang]}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {update.summary[lang]}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
