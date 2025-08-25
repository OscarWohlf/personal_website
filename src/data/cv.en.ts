// src/data/cv.en.ts
import type { CVData } from "./cv"

const data: CVData = {
  CV_URL: "/Oscar_Wohlfahrt_CV.pdf",
  lastUpdated: "August 2025",
  education: [
    {
      title: "MSc Computational Science & Engineering",
      org: "École Polytechnique Fédérale de Lausanne (EPFL)",
      where: "Lausanne, Switzerland",
      period: "Aug 2025 - Jun 2027",
      details: "Focus on numerical analysis, algorithms, machine learning and computational methods. Study plan and transcripts available on request.",
    },
    {
      title: "BSc General Engineering (Computer Science)",
      org: "Technical University of Denmark (DTU)",
      where: "Copenhagen, Denmark",
      period: "Aug 2022 - Jun 2025",
      details:
        "Thesis on ML for predicting building service life. Built a solid oundation on the natural sciences, and specialized in computer science. Study plan and transcripts available on request.",
    },
    {
      title: "Exchange Semester",
      org: "New York University (NYU)",
      where: "New York, USA",
      period: "Aug 2024 - Dec 2024",
      details:
        "Project: Modified Watts-Strogatz Small-World networks, see paper in projects section. Courses: Advanced Linear Algebra, Probability Theory, Mathematical Modeling, Computer Architecture.",
    },
    {
      title: "BSc Banking & Finance (Year 1)",
      org: "Università Cattolica del Sacro Cuore",
      where: "Milan, Italy",
      period: "Aug 2021 - Jun 2022",
    },
    {
      title: "High School (Natural Sciences)",
      org: "Ullern Videregående",
      where: "Oslo, Norway",
      period: "2017 - 2020",
    },
  ],
  experience: [
    {
      role: "Summer Intern",
      org: "Tet Digital",
      where: "Oslo, Norway",
      period: "Jun 2025 - Aug 2025",
      details:
        "Spent the summer in the AI-Lab at Tet Digital. Our project was to great a LLM agent which could do analysis using data from a Snowflake database.",
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
    "Norwegian National Rowing Team (2018-2021), Junior/U23",
    "Tutor for first-year students (2019-2020)",
    "Student bartender (2022-2025)",
  ],
}

export default data
