// src/data/cv.nb.ts
import type { CVData } from "./cv"

const data: CVData = {
  CV_URL: "/Oscar_Wohlfahrt_CV.pdf",
  lastUpdated: "aug 2025",
  education: [
    {
      title: "MSc Computational Science & Engineering",
      org: "École Polytechnique Fédérale de Lausanne (EPFL)",
      where: "Lausanne, Sveits",
      period: "Aug 2025 - Jun 2027",
      details: "Fokus på numerisk analyse, algoritmer, maskinlæring og beregninger. Studieplan og karakterer kan sendes ved forespørsel.",
    },
    {
      title: "BSc General Engineering (Computer Science)",
      org: "Danmarks Tekniske Universitet (DTU)",
      where: "København, Danmark",
      period: "Aug 2022 - Jun 2025",
      details:
        "Bacheloroppgave om å estimere bygningers levetid ved bruk av maskinlæring. Bygget en god base med realfag og spesiliaserte meg i datateknologi. Studieplan og karakterer kan sendes ved forespørsel.",
    },
    {
      title: "Utvekslingssemester",
      org: "New York University (NYU)",
      where: "New York, USA",
      period: "Aug 2024 - Des 2024",
      details:
        "Prosjekt: Modifisert Watts-Strogatz Small-World nettwerk. Fag: Videregående Lineær Algebra, Sannsynlighetsregning, Matematisk Modellering, Datamaskinarkitektur.",
    },
    {
      title: "BSc Finans (1. år)",
      org: "Università Cattolica del Sacro Cuore",
      where: "Milano, Italia",
      period: "Aug 2021 - Jun 2022",
    },
    {
      title: "Videregående — Realfag",
      org: "Ullern Videregående Skole",
      where: "Oslo, Norge",
      period: "2017 - 2020",
    },
  ],
  experience: [
        {
      role: "Sommerstudent",
      org: "Tet Digital",
      where: "Oslo, Norway",
      period: "Jun 2025 - Aug 2025",
      details:
        "Jobbet i AI-Labben til Tet-Digital. Prosjektet vårt var å lage en LLM agent som kunne gjøre analyse med hjelp av data fra en Snowflake database.",
    },
    {
      role: "Studentmedarbeider",
      org: "L-Shop-Team",
      where: "København, Danmark",
      period: "Okt 2023 - Juli 2024",
      details:
        "Diverse oppgaver, inkludert korrekturlesing, kundekommunikasjon, kontorstøtte og databasestyring. Bidro til et flerspråklig miljø, og viste sterke språkferdigheter og oppmerksomhet på detaljer.",
    },
    {
      role: "Event Manager/Servitør",
      org: "Sult",
      where: "Oslo, Norge",
      period: "Feb 2018 - Aug 2023",
      details:
        "Ledet, forberedte og serverte ved bryllup, konfirmasjoner, bedriftsarrangementer og lignende anledninger. Fikk erfaring i ledelse, planlegging, samarbeid og kommunikasjon.",
    },
    {
      role: "Rotrener",
      org: "Norske Studenters Roklubb",
      where: "Oslo, Norge",
      period: "Mai 2020 - Aug 2023",
      details:
        "Coachet barn i alderen 12-15 år. Instruerte på sommerskoler og assisterte ved ukentlige treninger.",
    },
  ],
  extras: [
    "Norges landslag i roing (2018-2021), Junior/U23",
    "Fadder for nye studenter (2019-2020)",
    "Student-bartender (2022- 2025)",
  ],
}

export default data
