// src/data/cv.en.ts
import type { CVData } from "./cv"

const data: CVData = {
  CV_URL: "/papers/Oscar_Wohlfahrt_CV.pdf",
  lastUpdated: "August 2026",
  education: [
    {
      title: "MSc Computational Science & Engineering",
      org: "École Polytechnique Fédérale de Lausanne (EPFL)",
      where: "Lausanne, Switzerland",
      period: "Sep 2025 - Jun 2027",
      details: [
        "During my master's I am focusing on computational methods, machine learning, optimization, scientific computing, algorithms and AI for scientific discovery.",
        "Selected coursework: Algorithms II, High Performance Computing, Reinforcement Learning, Mathematics of Data, Distributed Algorithms, Scientific Computing, Stochastic Simulation, Computational Neuroscience.",
        "Study plan and transcripts available on request.",
      ],
    },
    {
      title: "BSc General Engineering (Computer Science)",
      org: "Technical University of Denmark (DTU)",
      where: "Copenhagen, Denmark",
      period: "Aug 2022 - Jun 2025",
      details: [
        "Built a solid foundation in mathematics, engineering and the natural sciences before specializing in computer science.",
        "Selected coursework: Machine Learning & Data Mining, Algorithms & Data Structures, Numerical Algorithms, Function Spaces & Mathematical Analysis, Statistics, Database Systems.",
        "Bachelor's thesis on machine learning and survival analysis for predicting building service life.",
      ],
    },
    {
      title: "Exchange Semester",
      org: "New York University (NYU)",
      where: "New York, USA",
      period: "Aug 2024 - Dec 2024",
      details:
        "Selected coursework: Applied Probability, Advanced Linear Algebra, Mathematical Modeling, Computer Architecture. My final Mathematical Modeling project on modified Watts-Strogatz networks is included in the projects section.",
    },
    {
      title: "BSc Banking & Finance (Year 1)",
      org: "Università Cattolica del Sacro Cuore",
      where: "Milan, Italy",
      period: "Aug 2021 - Jun 2022",
      details:
        "Completed the first year before changing academic direction toward engineering and computer science.",
    },
    {
      title: "High School (Natural Sciences)",
      org: "Ullern Videregående Skole",
      where: "Oslo, Norway",
      period: "2017 - 2020",
    },
  ],
  experience: [
    {
      role: "Software Engineering Intern",
      org: "Accenture / Telenor AI Factory",
      where: "Oslo, Norway",
      period: "Jun 2026 - Aug 2026",
      details: [
        "Worked on Telenor AI Factory's Model-as-a-Service portal, building full-stack features for model access, API-key management, usage and billing analytics, and organization/team administration.",
        "Used Kotlin/Spring Boot, PostgreSQL and LiteLLM on the backend, alongside a React/TypeScript frontend. The internship gave me hands-on experience with production software around AI infrastructure, including authentication, authorization, error handling and automated tests.",
      ],
    },
    {
      role: "AI / ML Intern",
      org: "Tet Digital / Ruter AI Lab",
      where: "Oslo, Norway",
      period: "Jun 2025 - Aug 2025",
      details: [
        "Spent the summer in the Ruter AI Lab at Tet Digital, working on an LLM-based data agent for RuterGPT.",
        "The agent enabled natural-language access to internal Snowflake data and could generate SQL, analyses and visualizations. We also redesigned a complex RAG/text-to-SQL workflow into a more modular tool-based agent.",
      ],
    },
    {
      role: "Student Assistant",
      org: "L-Shop-Team",
      where: "Copenhagen, Denmark",
      period: "Oct 2023 - Jul 2024",
      details:
        "My tasks included database management, proofreading and customer communication. Worked in a multilingual environment, showcasing strong language skills and attention to detail.",
    },
    {
      role: "Event Manager/Waiter",
      org: "Sult",
      where: "Oslo, Norway",
      period: "Feb 2018 - Aug 2023",
      details:
        "Managed, prepared, and served at weddings, confirmations, company events, and similar occasions. Gained experience in management, planning, teamwork, and communication.",
    },
    {
      role: "Rowing Coach",
      org: "Norske Studenters Roklubb",
      where: "Oslo, Norway",
      period: "May 2020 - Aug 2023",
      details:
        "Coached children aged 12-15. Instructed at summer camps and assisted with weekly training sessions.",
    },
  ],
  extras: [
    "Norwegian National Rowing Team (2018-2021), Junior/U23 athlete, competed nationally and internationally",
    "Tutor for first-year students (2019-2020)",
    "Student bartender (2022-2025)",
  ],
}

export default data
