import React, { createContext, useContext, useMemo, useState, useEffect } from "react"
type Lang = "en" | "nb"

type Dict = Record<string, string>
const en: Dict = {
  "nav.about": "About",
  "nav.projects": "Projects",
  "nav.cv": "CV",
  "nav.contact": "Contact",

  "home.title": "Welcome to my website!",
  "home.h1": "Computational science & machine learning",
  "home.p1": "I'm Oscar Johan Høeg Wohlfahrt. I recently finished a BSc in General Engineering at DTU (Copenhagen, 2025) and I’m starting an MSc in Computational Science & Engineering at EPFL. I’m interested in applied machine learning and numerical methods on real-world data.",
  "home.p2": "Recently I've worked on survival analysis for estimating building lifetimes and explored small-world network models. I enjoy careful validation, reproducible experiments, and clear communication of results.",
  "home.p3": "Based in Scandinavia. Outside of studies: rowing, skiing, and good coffee.",

  "projects.title": "Projects",
  "contact.title": "Contact",
  "contact.email": "Email",
  "contact.github": "GitHub",
  "contact.linkedin": "LinkedIn",

  "cv.title": "Curriculum Vitae",
  "cv.download": "Download PDF",
  "cv.education": "Education",
  "cv.experience": "Experience",
  "cv.extracurricular": "Extracurricular",
  "cv.updated": "Updated",
}

const nb: Dict = {
  "nav.about": "Om meg",
  "nav.projects": "Prosjekter",
  "nav.cv": "CV",
  "nav.contact": "Kontakt",

  "home.title": "Velkommen til nettsiden min!",
  "home.h1": "Beregningsvitenskap og maskinlæring",
  "home.p1": "Jeg heter Oscar Johan Høeg Wohlfahrt. Jeg fullførte nylig en bachelor i Allmenn ingeniørvitenskap ved DTU (København, 2025) og begynner på master i Computational Science & Engineering ved EPFL. Jeg er interessert i anvendt maskinlæring og numeriske metoder på data fra virkeligheten.",
  "home.p2": "Nylig har jeg jobbet med overlevelsesanalyse for å anslå bygningers levetid, og utforsket small-world-nettverksmodeller. Jeg liker grundig validering, reproducerbare eksperimenter og tydelig formidling av resultater.",
  "home.p3": "Basert i Skandinavia. Utenfor studier: roing, ski og god kaffe.",

  "projects.title": "Prosjekter",
  "contact.title": "Kontakt",
  "contact.email": "E-post",
  "contact.github": "GitHub",
  "contact.linkedin": "LinkedIn",

  "cv.title": "Curriculum Vitae",
  "cv.download": "Last ned PDF",
  "cv.education": "Utdanning",
  "cv.experience": "Erfaring",
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
