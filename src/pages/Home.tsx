// src/pages/Home.tsx
import LatestUpdates from "../components/LatestUpdates"
import PageHeader from "../components/PageHeader"
import { useI18n } from "../i18n/useI18n"

export default function Home() {
  const { t } = useI18n()
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <PageHeader title={t("home.title")} />

        <article className="mt-8 leading-relaxed text-zinc-700 dark:text-zinc-300">
          <img
            src="/images/me_2.jpg"
            alt="Portrait of Oscar Johan Høeg Wohlfahrt"
            loading="lazy"
            className="
              block rounded-2xl border dark:border-zinc-800 object-cover shadow-sm
              w-full h-[380px] mb-4
              md:float-left md:mr-8 md:mb-2 md:w-[320px] md:h-[480px] md:[shape-outside:margin-box]
              lg:w-[360px] lg:h-[540px]
            "
          />

          <p className="mt-4">{t("home.p1")}</p>

          <p className="mt-4">{t("home.p2")}</p>

          <p className="mt-4">{t("home.p3")}</p>

          <p className="mt-4">{t("home.p4")}</p>
          <div className="clear-both" />
        </article>

        <div className="mt-12 border-t pt-8 dark:border-zinc-800">
          <LatestUpdates />
        </div>
      </div>
    </section>
  )
}
