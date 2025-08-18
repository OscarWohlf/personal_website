// src/pages/Contact.tsx
import PageHeader from "../components/PageHeader"
import { useI18n } from "../i18n/i18n"


export default function Contact() {
  const label = "text-[15px] font-medium text-zinc-700 dark:text-zinc-200"
  const value = "text-zinc-700 dark:text-zinc-300"
  const { t } = useI18n()

  return (
    <section className="py-12">
      <PageHeader title={t("contact.title")} />

      <dl className="mt-8 border rounded-xl divide-y divide-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
        <div className="grid grid-cols-1 sm:grid-cols-[120px,1fr] gap-2 p-4">
          <dt className={label}>{t("contact.email")}</dt>
          <dd className={value}>
            <a href="mailto:oscarjhw@gmail.com" className="underline underline-offset-4 font-mono hover:text-zinc-900 dark:hover:text-white">
              oscarjhw@gmail.com
            </a>
          </dd>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[120px,1fr] gap-2 p-4">
          <dt className={label}>GitHub</dt>
          <dd className={value}>
            <a href="https://github.com/OscarWohlf" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-white">
              github.com/OscarWohlf
            </a>
          </dd>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[120px,1fr] gap-2 p-4">
          <dt className={label}>LinkedIn</dt>
          <dd className={value}>
            <a href="https://linkedin.com/in/oscar-wohlfahrt-11bb51224" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-white">
              linkedin.com/in/oscar-wohlfahrt-11bb51224
            </a>
          </dd>
        </div>
      </dl>
    </section>
  )
}
