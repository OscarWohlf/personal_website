import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCards'

export default function Projects() {
  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map(p => <ProjectCard key={p.title} p={p} />)}
    </div>
  )
}
