import { useI18n } from "../i18n/useI18n"

export default function LangToggle() {
  const { lang, setLang } = useI18n()
  const next = lang === "en" ? "nb" : "en"
  return (
    <button
      onClick={() => setLang(next)}
      className="rounded-xl px-3 py-2 text-sm border border-stone-300/80 bg-stone-100/70 text-stone-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 hover:shadow"
      aria-label="Toggle language"
      title={lang === "en" ? "Bytt til norsk" : "Switch to English"}
    >
      {lang.toUpperCase()}
    </button>
  )
}
