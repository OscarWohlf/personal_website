import { useI18n } from "../i18n/i18n"

export default function LangToggle() {
  const { lang, setLang } = useI18n()
  const next = lang === "en" ? "nb" : "en"
  return (
    <button
      onClick={() => setLang(next)}
      className="rounded-xl px-3 py-2 text-sm border dark:border-zinc-700 hover:shadow"
      aria-label="Toggle language"
      title={lang === "en" ? "Bytt til norsk" : "Switch to English"}
    >
      {lang.toUpperCase()}
    </button>
  )
}