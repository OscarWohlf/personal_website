export type Project = {
  title: string
  date?: string
  tags?: string[]
  description: string
  link?: string
  repo?: string
  image?: string
}

export const projects: Project[] = [
  {
    title: "DeepSurv for Building Lifetimes",
    date: "2025",
    tags: ["ML","Survival Analysis","Python"],
    description: "Predicting service life of buildings with Cox/DeepSurv and Danish BBR data.",
    link: "https://your-demo",
    repo: "https://github.com/you/building-lifetime",
    image: "/images/buildings.png"
  }
]
