import type { Lang } from "../i18n/context"

type LocalizedText = Record<Lang, string>

export type UpdateLink = {
  label: LocalizedText
  href: string
  external?: boolean
}

export type Update = {
  slug: string
  date: string
  dateLabel?: LocalizedText
  title: LocalizedText
  summary: LocalizedText
  body?: Record<Lang, string[]>
  tags?: string[]
  links?: UpdateLink[]
}

export const updates: Update[] = [
  {
    slug: "telenor-ai-factory-presentation",
    date: "2026-08-05",
    title: {
      en: "Presented my summer internship work at Telenor AI Factory",
      nb: "Presenterte sommerarbeidet mitt ved Telenor AI Factory",
    },
    summary: {
      en: "Wrapped up the internship period by presenting the AI infrastructure work I had contributed to for the Telenor team.",
      nb: "Avsluttet internship-perioden med å presentere AI-infrastrukturarbeidet jeg hadde bidratt til for Telenor-teamet.",
    },
    body: {
      en: [
        "At the end of the summer internship, I presented the work I had done at Telenor AI Factory. The project focused on AI infrastructure and gave me useful experience with how machine learning systems are supported in a larger organization.",
      ],
      nb: [
        "På slutten av sommerinternshipet presenterte jeg arbeidet jeg hadde gjort ved Telenor AI Factory. Prosjektet handlet om AI-infrastruktur og ga meg nyttig erfaring med hvordan maskinlæringssystemer støttes i en større organisasjon.",
      ],
    },
    tags: ["Internship", "AI Infrastructure", "Telenor"],
  },
  {
    slug: "lean-proof-generation-defense",
    date: "2026-06-15",
    title: {
      en: "Defended my EPFL semester project on Lean proof generation",
      nb: "Forsvarte semesterprosjektet mitt om Lean proof generation ved EPFL",
    },
    summary: {
      en: "Presented the final results from my semester project on adaptive inference-time compute allocation for Lean proof generation.",
      nb: "Presenterte sluttresultatene fra semesterprosjektet mitt om adaptiv fordeling av inference-time compute for Lean proof generation.",
    },
    body: {
      en: [
        "The project studied whether language models can use inference-time compute more efficiently when generating formal Lean proofs. I compared fixed sampling baselines with several adaptive approaches, including simple phase-based controllers and a lightweight learned controller.",
      ],
      nb: [
        "Prosjektet undersøkte om språkmodeller kan bruke inference-time compute mer effektivt når de genererer formelle Lean-bevis. Jeg sammenlignet faste sampling-baselines med flere adaptive tilnærminger, inkludert enkle fasebaserte kontrollere og en lettvekts lært kontroller.",
      ],
    },
    tags: ["EPFL", "LLMs", "Lean"],
    links: [
      {
        label: { en: "Project", nb: "Prosjekt" },
        href: "/projects/lean-proof-generation",
      },
    ],
  },
  {
    slug: "lauzhack-2025",
    date: "2025-11-22",
    dateLabel: {
      en: "22-23 Nov 2025",
      nb: "22.-23. nov. 2025",
    },
    title: {
      en: "Participated in LauzHack 2025",
      nb: "Deltok på LauzHack 2025",
    },
    summary: {
      en: "Joined the student-run hackathon at EPFL for a weekend of building, prototyping, and meeting other students.",
      nb: "Deltok på den studentdrevne hackathonen ved EPFL for en helg med bygging, prototyping og nye studentbekjentskaper.",
    },
    body: {
      en: [
        "LauzHack is EPFL's student-run hackathon. It was a good chance to spend a weekend building quickly in a team, testing ideas, and seeing what other students were working on.",
      ],
      nb: [
        "LauzHack er EPFLs studentdrevne hackathon. Det var en fin mulighet til å bruke en helg på å bygge raskt i team, teste ideer og se hva andre studenter jobbet med.",
      ],
    },
    tags: ["Hackathon", "EPFL", "Prototype"],
    links: [
      {
        label: { en: "Event page", nb: "Arrangementside" },
        href: "https://2025.lauzhack.com/",
        external: true,
      },
    ],
  },
  {
    slug: "edth-munich-2025",
    date: "2025-10-24",
    dateLabel: {
      en: "24-26 Oct 2025",
      nb: "24.-26. okt. 2025",
    },
    title: {
      en: "Participated in the European Defense Tech Hackathon in Munich",
      nb: "Deltok på European Defense Tech Hackathon i München",
    },
    summary: {
      en: "Spent three days in Munich/Garching working on defense technology ideas at the EDTH hackathon co-hosted with TUM Venture Labs.",
      nb: "Brukte tre dager i München/Garching på forsvarsteknologiske ideer under EDTH-hackathonen arrangert sammen med TUM Venture Labs.",
    },
    body: {
      en: [
        "The hackathon brought together students, builders, and mentors around dual-use and defense technology. It was an intense weekend with a practical focus on prototyping and presenting ideas under time pressure.",
      ],
      nb: [
        "Hackathonen samlet studenter, byggere og mentorer rundt dual-use- og forsvarsteknologi. Det var en intens helg med praktisk fokus på prototyping og presentasjon av ideer under tidspress.",
      ],
    },
    tags: ["Hackathon", "Defense Tech", "Munich"],
    links: [
      {
        label: { en: "Event page", nb: "Arrangementside" },
        href: "https://luma.com/edth-2025-munich",
        external: true,
      },
    ],
  },
]

export function getLatestUpdates(limit?: number) {
  const sorted = [...updates].sort((a, b) => b.date.localeCompare(a.date))
  return typeof limit === "number" ? sorted.slice(0, limit) : sorted
}
