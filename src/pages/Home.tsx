// src/pages/Home.tsx
import LatestUpdates from "../components/LatestUpdates"
import PageHeader from "../components/PageHeader"
import { useI18n } from "../i18n/useI18n"

export default function Home() {
  const { t } = useI18n()
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
        <div>
          <PageHeader title={t("home.title")} />

          <div className="mt-8 grid gap-6 md:grid-cols-[260px_minmax(0,1fr)] lg:grid-cols-[220px_minmax(0,1fr)]">
            <img
              src="/images/me_2.jpg"
              alt="Portrait of Oscar Johan Høeg Wohlfahrt"
              loading="lazy"
              className="
                block w-full rounded-2xl border object-cover shadow-sm dark:border-zinc-800
                h-[380px]
                md:h-[390px]
                lg:h-[420px]
              "
            />

            <article className="max-w-2xl leading-relaxed text-zinc-700 dark:text-zinc-300">
              <p>{t("home.p1")}</p>

              <p className="mt-4">{t("home.p2")}</p>

              <p className="mt-4">{t("home.p3")}</p>

              <p className="mt-4">{t("home.p4")}</p>
            </article>
          </div>
        </div>

        <LatestUpdates />
      </div>
    </section>
  )
}
