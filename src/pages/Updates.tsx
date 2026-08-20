import { Link } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import { getLatestUpdates } from "../data/updates"
import type { Update, UpdateLink } from "../data/updates"
import { useI18n } from "../i18n/useI18n"

function formatDate(update: Update, lang: "en" | "nb") {
  if (update.dateLabel) return update.dateLabel[lang]

  const locale = lang === "nb" ? "nb-NO" : "en-GB"
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(update.date))
}

function UpdateLinkButton({ link, lang }: { link: UpdateLink; lang: "en" | "nb" }) {
  const external = link.external ?? link.href.startsWith("http")
  const className = "px-3 py-1.5 text-xs rounded-xl border border-stone-300/80 bg-stone-50/70 dark:border-zinc-700 dark:bg-transparent hover:shadow"

  if (!external) {
    return (
      <Link to={link.href} className={className}>
        {link.label[lang]}
      </Link>
    )
  }

  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
      {link.label[lang]}
    </a>
  )
}

export default function Updates() {
  const { lang, t } = useI18n()
  const allUpdates = getLatestUpdates()

  return (
    <section className="py-12">
      <PageHeader title={t("updates.title")} />
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600 dark:text-zinc-300">
        {t("updates.desc")}
      </p>

      <ol className="mt-8 max-w-3xl space-y-8">
        {allUpdates.map((update) => (
          <li
            key={update.slug}
            id={update.slug}
            className="border-l border-stone-200/80 pl-5 dark:border-zinc-800 scroll-mt-24"
          >
            <time className="text-sm text-stone-500 dark:text-zinc-400">
              {formatDate(update, lang)}
            </time>
            <h2 className="mt-1 text-xl font-semibold">{update.title[lang]}</h2>
            <p className="mt-3 leading-relaxed text-stone-700 dark:text-zinc-300">
              {update.summary[lang]}
            </p>

            {update.body?.[lang]?.map((paragraph) => (
              <p key={paragraph} className="mt-3 leading-relaxed text-stone-700 dark:text-zinc-300">
                {paragraph}
              </p>
            ))}

            {update.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {update.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-full border border-stone-200/80 bg-stone-50/70 dark:border-zinc-700 dark:bg-transparent">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            {update.links?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {update.links.map((link) => (
                  <UpdateLinkButton key={link.href} link={link} lang={lang} />
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  )
}
