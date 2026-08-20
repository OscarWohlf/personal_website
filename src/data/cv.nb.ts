// src/data/cv.nb.ts
import type { CVData } from "./cv"

const data: CVData = {
  CV_URL: "/papers/Oscar_Wohlfahrt_CV.pdf",
  lastUpdated: "august 2026",
  education: [
    {
      title: "MSc Computational Science & Engineering",
      org: "École Polytechnique Fédérale de Lausanne (EPFL)",
      where: "Lausanne, Sveits",
      period: "Sep 2025 - Jun 2027",
      details: [
        "Under masteren fokuserer jeg på beregningsmetoder, maskinlæring, optimering, scientific computing, algoritmer og AI for vitenskapelige anvendelser.",
        "Utvalgte fag: Algorithms II, High Performance Computing, Reinforcement Learning, Mathematics of Data, Distributed Algorithms, Scientific Computing, Stochastic Simulation, Computational Neuroscience.",
        "Studieplan og karakterutskrift kan sendes ved forespørsel.",
      ],
    },
    {
      title: "BSc General Engineering (Computer Science)",
      org: "Danmarks Tekniske Universitet (DTU)",
      where: "København, Danmark",
      period: "Aug 2022 - Jun 2025",
      details: [
        "Bygget et solid grunnlag i matematikk, ingeniørfag og realfag før jeg spesialiserte meg i datateknologi.",
        "Utvalgte fag: Machine Learning & Data Mining, Algorithms & Data Structures, Numerical Algorithms, Function Spaces & Mathematical Analysis, Statistics, Database Systems.",
        "Bacheloroppgave om maskinlæring og overlevelsesanalyse for å estimere bygningers levetid.",
      ],
    },
    {
      title: "Utvekslingssemester",
      org: "New York University (NYU)",
      where: "New York, USA",
      period: "Aug 2024 - Des 2024",
      details:
        "Utvalgte fag: Applied Probability, Advanced Linear Algebra, Mathematical Modeling, Computer Architecture. Prosjektet mitt om modifiserte Watts-Strogatz-nettverk ligger i prosjektseksjonen.",
    },
    {
      title: "BSc Finans (1. år)",
      org: "Università Cattolica del Sacro Cuore",
      where: "Milano, Italia",
      period: "Aug 2021 - Jun 2022",
      details:
        "Fullførte førsteåret før jeg byttet faglig retning mot ingeniørfag og datateknologi.",
    },
    {
      title: "Videregående (Realfag)",
      org: "Ullern Videregående Skole",
      where: "Oslo, Norge",
      period: "2017 - 2020",
    },
  ],
  experience: [
    {
      role: "Software Engineering Intern",
      org: "Accenture / Telenor AI Factory",
      where: "Oslo, Norge",
      period: "Jun 2026 - Aug 2026",
      details: [
        "Jobbet på Telenor AI Factorys Model-as-a-Service-portal, med fullstack-funksjonalitet for model access, API-nøkkeladministrasjon, usage- og billing-analyse og organisasjon/team-administrasjon.",
        "Brukte Kotlin/Spring Boot, PostgreSQL og LiteLLM på backend, sammen med React/TypeScript på frontend. Internshipet ga meg praktisk erfaring med produksjonsnær programvare rundt AI-infrastruktur, inkludert autentisering, autorisering, feilhåndtering og automatiserte tester.",
      ],
    },
    {
      role: "AI / ML Intern",
      org: "Tet Digital / Ruter AI Lab",
      where: "Oslo, Norge",
      period: "Jun 2025 - Aug 2025",
      details: [
        "Jobbet i Ruter AI Lab hos Tet Digital, med en LLM-basert dataagent for RuterGPT.",
        "Agenten gjorde det mulig å bruke naturlig språk mot interne Snowflake-data og kunne generere SQL, analyser og visualiseringer. Vi jobbet også med å gjøre en kompleks RAG/text-to-SQL-flyt mer modulær og verktøybasert.",
      ],
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
    "Norges landslag i roing (2018-2021), Junior/U23-utøver, konkurrerte nasjonalt og internasjonalt",
    "Fadder for nye studenter (2019-2020)",
    "Student-bartender (2022-2025)",
  ],
}

export default data
