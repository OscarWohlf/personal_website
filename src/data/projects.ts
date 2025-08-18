export type Project = {
  slug: string
  title: string
  date?: string
  tags?: string[]
  description: string
  image?: string
  // long-form content for the details page (rendered as paragraphs)
  content?: string[]
  link?: string   // live demo / paper / site
  repo?: string   // GitHub
}

// Example data — edit to your real projects
export const projects: Project[] = [
  {
    slug: "building-lifetimes",
    title: "Estimating Building Lifetimes with Survival Analysis",
    date: "2025",
    tags: ["ML", "Survival Analysis", "Python"],
    description:
      "Cox/DeepSurv-style models on Danish building data to estimate service life and hazard over time.",
    image: "/images/buildings.jpg",
    content: [
      "I trained Cox and neural survival models on Danish building registry (BBR) data to estimate service life distributions.",
      "The focus was on careful feature handling, proportional hazards assumptions, and calibration against baseline lifetimes.",
      "Results: competitive concordance and well-behaved hazard curves on held-out municipalities."
    ],
    repo: "https://github.com/YOU/building-lifetimes",
    link: "https://your-demo-or-writeup"
  },
  {
    slug: "small-world-networks",
    title: "Small-World Networks: Modified Watts–Strogatz",
    date: "2024",
    tags: ["Networks", "Modeling"],
    description:
      "Exploration of small-world structure with rewiring variants; measuring clustering and path length tradeoffs.",
    image: "/images/small-world.jpg",
    content: [
      "I implemented a modified Watts–Strogatz generator and profiled how rewiring probability affects clustering and path lengths.",
      "Findings: modest rewiring yields small-world behavior with high clustering and short paths; excessive rewiring trends toward ER-like graphs."
    ]
  },
  {
    slug: "notebook-tooling",
    title: "Reproducible ML Notebooks",
    date: "2023",
    tags: ["Python", "Tooling"],
    description:
      "A lightweight cookiecutter for reproducible experiments (env, data versioning, deterministic runs).",
    image: "/images/notebooks.jpg",
    content: [
      "A small template emphasizing deterministic seeds, environment capture, and simple data versioning.",
      "Avoids heavy frameworks; focuses on clarity and reproducibility."
    ],
    repo: "https://github.com/YOU/ml-notebook-template"
  }
]
