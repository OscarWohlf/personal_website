import PageHeader from '../components/PageHeader'
import ProjectsGrid from '../sections/Projects'
import { useI18n } from "../i18n/i18n"


export default function Projects() {
  const { t } = useI18n()
  return (
    <section className="py-12">
      <PageHeader title={t("projects.title")} />
      <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
              <span>{t("projects.desc")}</span>
            </div>
      <div className="mt-8">
        <ProjectsGrid />
      </div>
    </section>
  )
}
