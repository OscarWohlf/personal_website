import { createContext } from "react"

export type Lang = "en" | "nb"

type Dict = Record<string, string>
export const en: Dict = {
  "nav.about": "About",
  "nav.projects": "Projects",
  "nav.cv": "CV",
  "nav.contact": "Contact",

  "home.title": "Welcome to my website!",
  "home.p1": "Hello! My name is Oscar Johan Høeg Wohlfahrt. I'm a Norwegian student currently on my third semester of the MSc in Computational Science and Engineering at EPFL in Lausanne, Switzerland. I previously completed a BSc in General Engineering at DTU in Copenhagen, spent a semester at NYU's Courant Institute in New York, and studied finance for a year in Milan.",
  "home.p2": "My academic interests lie somewhere between mathematics and computer science. I like learning ideas properly and then putting them into code. I care about applying methods to real problems, but also believe a solid theoretical foundation helps me understand what I'm doing. Recently, I have worked on AI infrastructure during an internship with Telenor AI Factory, and on EPFL research projects around adaptive inference-time compute allocation for Lean proof generation and document-grounded multi-hop QA generation for LLM post-training. This semester, I am working on test-time adaptation for pretrained RNA language models. I am especially interested in machine learning, optimization, scientific computing, and AI for scientific discovery, and I am curious about getting experience in different application areas.",
  "home.p3": "In my free time I enjoy being outdoors and staying active. I've been a rower for many years, and I also like skiing and running. Beyond training, I spend time on small side projects (like this site), reading, exploring new places to eat, traveling, and seeing friends and family.",
  "home.p4": "For my CV, projects, and contact details, please use the links at the top of the page.",

  "projects.title": "Projects",
  "projects.desc": "Work in Progress... Some smaller projects are also available only on GitHub.",
  "contact.title": "Contact",
  "contact.email": "Email",
  "contact.github": "GitHub",
  "contact.linkedin": "LinkedIn",

  "cv.title": "Curriculum Vitae",
  "cv.download": "Download PDF",
  "cv.education": "Education",
  "cv.experience": "Work Experience",
  "cv.extracurricular": "Extracurricular",
  "cv.updated": "Updated",
}

export const nb: Dict = {
  "nav.about": "Om meg",
  "nav.projects": "Prosjekter",
  "nav.cv": "CV",
  "nav.contact": "Kontakt",

  "home.title": "Velkommen til nettsiden min!",
  "home.p1": "Hei! Jeg heter Oscar Johan Høeg Wohlfahrt. Jeg er en norsk student, som foreløpig er på tredje semester på en MSc i Computational Science and Engineering ved EPFL i Lausanne, Sveits. Jeg har tidligere fullført en BSc i General Engineering ved DTU i København, hatt et utvekslingssemester ved NYUs Courant Institute i New York og studert finans i ett år i Milano.",
  "home.p2": "Mine faglige interesser ligger et sted mellom matematikk og informatikk. Jeg liker å lære ideer skikkelig, for så å omsette dem til kode. Jeg er opptatt av å bruke metoder på reelle problemer, men synes også et solid teoretisk grunnlag hjelper meg å forstå hva jeg gjør. I det siste har jeg jobbet med AI-infrastruktur gjennom et internship hos Telenor AI Factory, og med forskningsprosjekter ved EPFL rundt adaptiv fordeling av inference-time compute for Lean proof generation og dokumentbasert multi-hop QA-generering for LLM post-training. Dette semesteret jobber jeg med test-time adaptation for forhåndstrente RNA-språkmodeller. Jeg er spesielt interessert i maskinlæring, optimering, scientific computing og AI for vitenskapelige anvendelser, og er nysgjerrig på å få erfaring i ulike anvendelsesområder.",
  "home.p3": "På fritiden liker jeg å være ute og holde meg aktiv. Jeg har rodd i mange år, og liker også ski og løping. Utover trening bruker jeg tid på små sideprosjekter (som denne nettsiden), lesing, å utforske nye spisesteder, reising og tid med venner og familie.",
  "home.p4": "For CV, prosjekter og kontaktinformasjon, bruk lenkene øverst på siden.",

  "projects.title": "Prosjekter",
  "projects.desc": "Work in Progress... Noen mindre prosjekter er også kun tilgjengelig på GitHub.",
  "contact.title": "Kontakt",
  "contact.email": "E-post",
  "contact.github": "GitHub",
  "contact.linkedin": "LinkedIn",

  "cv.title": "Curriculum Vitae",
  "cv.download": "Last ned PDF",
  "cv.education": "Utdanning",
  "cv.experience": "Arbeidserfaring",
  "cv.extracurricular": "Annet",
  "cv.updated": "Oppdatert",
}

export const dictionaries: Record<Lang, Dict> = { en, nb }

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string }
export const I18nCtx = createContext<Ctx | null>(null)
