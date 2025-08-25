import React, { createContext, useContext, useMemo, useState, useEffect } from "react"
type Lang = "en" | "nb"

type Dict = Record<string, string>
const en: Dict = {
  "nav.about": "About",
  "nav.projects": "Projects",
  "nav.cv": "CV",
  "nav.contact": "Contact",

  "home.title": "Welcome to my website!",
  "home.p1": "Hello! My name is Oscar Johan Høeg Wohlfahrt. I'm a Norwegian student in my first semester of the MSc in Computational Science and Engineering at EPFL in Lausanne, Switzerland. I recently completed a BSc in General Engineering at DTU in Copenhagen. Earlier, I spent a semester at NYU's Courant Institute in New York and a year studying finance in Milan.",
  "home.p2": "My academic interests lie in the intersection of mathematics and computer science. I like learning ideas properly and then putting them into code. I care about applying methods to real problems, but also believe a solid theoretical foundation helps me understand what I'm doing. In my BSc thesis at DTU, I used survival analysis to estimate building lifetimes from Danish registry data. I'm curious about different application areas and currently interested in building experience in many domains.",
  "home.p3": "In my free time I enjoy being outdoors and staying active. I've been a rower for many years, and I also like skiing and running. Beyond training, I spend time on small side projects (like this site), reading, exploring new places to eat, traveling, and seeing friends and family.",
  "home.p4": "For my CV, projects, and contact details, please use the links at the top of the page.",

  "projects.title": "Projects",
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

const nb: Dict = {
  "nav.about": "Om meg",
  "nav.projects": "Prosjekter",
  "nav.cv": "CV",
  "nav.contact": "Kontakt",

  "home.title": "Velkommen til nettsiden min!",
  "home.p1": "Hei! Jeg heter Oscar Johan Høeg Wohlfahrt. Jeg er en norsk student, som foreløpig er på første semester på en MSc i Computational Science and Engineering ved EPFL i Lausanne, Sveits. Jeg fullførte nylig en BSc i General Engineering ved DTU i København. Tidligere har jeg hatt et utvekslingssemester ved NYUs Courant Institute i New York og ett år med finansstudier i Milano.",
  "home.p2": "Mine faglige interesser ligger i skjæringspunktet mellom matematikk og informatikk. Jeg liker å lære ideer skikkelig, for så å omsette dem til kode. Jeg er opptatt av å jobbe med reelle problemstillinger, men synes også det er viktig med et solid teoretisk grunnlag for å forstå hva man jobber med. I bacheloroppgaven min ved DTU brukte jeg overlevelsesanalyse til å estimere levetid av danske bygninger. Jeg er nysgjerrig på ulike anvendelsesområder og ønsker nå å bygge erfaring i ulike sektorer.",
  "home.p3": "På fritiden liker jeg å være ute og holde meg aktiv. Jeg har rodd i mange år, og liker også ski og løping. Utover trening bruker jeg tid på små sideprosjekter (som denne nettsiden), lesing, å utforske nye spisesteder, reising og tid med venner og familie.",
  "home.p4": "For CV, prosjekter og kontaktinformasjon, bruk lenkene øverst på siden.",

  "projects.title": "Prosjekter",
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

const dictionaries: Record<Lang, Dict> = { en, nb }

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string }
const I18nCtx = createContext<Ctx | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem("lang") as Lang) || "en")
  useEffect(() => { localStorage.setItem("lang", lang) }, [lang])

  const t = useMemo(() => {
    const dict = dictionaries[lang] || en
    return (key: string) => dict[key] ?? (dictionaries.en[key] ?? key)
  }, [lang])

  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nCtx)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
