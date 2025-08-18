// src/data/cv.nb.ts
import type { CVData } from "./cv"

const data: CVData = {
  CV_URL: "/Oscar_Wohlfahrt_CV.pdf", // put this file in /public
  lastUpdated: "aug 2025",
  education: [
    {
      title: "BSc Allmenn ingeniørvitenskap (informatikk/CS)",
      org: "Danmarks Tekniske Universitet (DTU)",
      where: "København, Danmark",
      period: "aug 2022 – jun 2025",
      details:
        "Bacheloroppgave om maskinlæring for å anslå bygningers levetid. Utvalgte emner: Numeriske algoritmer, Maskinlæring, Algoritmer og datastrukturer.",
    },
    {
      title: "Utvekslingssemester",
      org: "New York University (NYU)",
      where: "New York, USA",
      period: "aug 2024 – des 2024",
      details:
        "Videregående lineær algebra, Sannsynlighet, Matematisk modellering, Datamaskinarkitektur; prosjekt på modifisert Watts–Strogatz small-world-modell.",
    },
    {
      title: "BSc Økonomi og administrasjon (1. år)",
      org: "Università Cattolica del Sacro Cuore",
      where: "Milano, Italia",
      period: "aug 2021 – jun 2022",
    },
    {
      title: "Videregående — realfag",
      org: "Ullern videregående skole",
      where: "Oslo, Norge",
      period: "2017 – 2020",
    },
  ],
  experience: [
    {
      role: "Studentmedarbeider",
      org: "L-Shop-Team",
      where: "København, Danmark",
      period: "okt 2023 – jul 2024",
      details:
        "Databasearbeid, korrekturlesing og kundedialog i et flerspråklig miljø.",
    },
    {
      role: "Eventansvarlig / servitør",
      org: "Sult",
      where: "Oslo, Norge",
      period: "feb 2018 – aug 2023",
      details:
        "Planla og gjennomførte arrangementer (bryllup, konfirmasjoner, bedriftsarr.). Koordinering og kundekontakt.",
    },
    {
      role: "Ro-trener",
      org: "Norske Studenters Roklubb",
      where: "Oslo, Norge",
      period: "mai 2020 – aug 2023",
      details:
        "Trente 12–15-åringer; sommercamper og ukentlige økter.",
    },
  ],
  extras: [
    "Norges rolandslag (2018–2021), junior/U23",
    "Fadder/mentor for nye studenter (2019–2020)",
    "Student-bartender (2022– )",
  ],
}

export default data
