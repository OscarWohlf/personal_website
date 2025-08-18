// src/data/cv.ts
export type EduItem = {
  title: string
  org: string
  where?: string
  period?: string
  details?: string | string[]
}
export type ExpItem = {
  role: string
  org: string
  where?: string
  period?: string
  details?: string | string[]
}
export type CVData = {
  CV_URL: string
  lastUpdated?: string
  education: EduItem[]
  experience: ExpItem[]
  extras?: (string | string[])[]
}

import en from "./cv.en"
import nb from "./cv.nb"

export function getCvData(lang: "en" | "nb"): CVData {
  return lang === "nb" ? nb : en
}
