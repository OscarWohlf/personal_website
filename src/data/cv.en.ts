// src/data/cv.en.ts
import type { CVData } from "./cv"

const data: CVData = {
  CV_URL: "/Oscar_Wohlfahrt_CV.pdf", // put this file in /public
  lastUpdated: "August 2025",
  education: [
    {
      title: "BSc General Engineering (Computer Science)",
      org: "Technical University of Denmark (DTU)",
      where: "Copenhagen, Denmark",
      period: "Aug 2022 – Jun 2025",
      details:
        "Thesis on ML for predicting building service life. Selected courses: Numerical Algorithms, Machine Learning, Algorithms & Data Structures.",
    },
    {
      title: "Exchange Semester",
      org: "New York University (NYU)",
      where: "New York, USA",
      period: "Aug 2024 – Dec 2024",
      details:
        "Advanced Linear Algebra, Probability, Mathematical Modeling, Computer Architecture; project on modified Watts–Strogatz small-world model.",
    },
    {
      title: "BSc Banking & Finance (Year 1)",
      org: "Università Cattolica del Sacro Cuore",
      where: "Milan, Italy",
      period: "Aug 2021 – Jun 2022",
    },
    {
      title: "High School (Natural Sciences)",
      org: "Ullern Videregående",
      where: "Oslo, Norway",
      period: "2017 – 2020",
    },
  ],
  experience: [
    {
      role: "Student Assistant",
      org: "L-Shop-Team",
      where: "Copenhagen, Denmark",
      period: "Oct 2023 – Jul 2024",
      details:
        "Worked across database maintenance, proofreading, and customer comms in a multilingual setting; improved product data consistency and support response times.",
    },
    {
      role: "Event Manager / Waiter",
      org: "Sult",
      where: "Oslo, Norway",
      period: "Feb 2018 – Aug 2023",
      details:
        "Planned and executed events (weddings, confirmations, corporate). Hands-on coordination, team logistics, and client-facing operations.",
    },
    {
      role: "Rowing Coach",
      org: "Norske Studenters Roklubb",
      where: "Oslo, Norway",
      period: "May 2020 – Aug 2023",
      details:
        "Coached ages 12–15 in technique and fitness; ran summer camps and weekly sessions with emphasis on fundamentals and team culture.",
    },
  ],
  extras: [
    "Norwegian National Rowing Team (2018–2021), junior/U23",
    "Tutor for first-year students (2019–2020)",
    "Student bartender (2022– )",
  ],
}

export default data
