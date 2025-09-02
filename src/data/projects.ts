export type Project = {
  slug: string
  title: string
  date?: string
  tags?: string[]
  description: string
  image?: string
  content?: string[]
  link?: string
  repo?: string
  paper?: string   
  paperLabel?: string
  paperFilename?: string 
}

export const projects: Project[] = [
  {
    slug: "building-lifetimes",
    title: "Estimating Building Lifetimes with Machine Learning",
    date: "Feb - Jun 2025",
    description: "My bachelor thesis was about estimating the lifetime of danish buildings using various machine learning methods. We also created and implemented our own baseline method. The thesis can be downloaded in the link on this site. A more publishable paper is also on its way. Code is also available on request.",
    image: "/images/thesis_image.jpg",
    content: ["My bachelor thesis at DTU was about estimating the lifetime of Danish buildings using various machine learning methods. We also created and implemented our own baseline method. The thesis can be downloaded in the link on this site. A more publishable paper is also on the way. Our code used for data processing and model training is available on request.",
              "Abstract:",
              "Accurately predicting building lifetime is essential for urban planning and sustainable development, yet modern survival analysis methods have not been thoroughly evaluated on largescale building datasets in Denmark. This proof-of-concept thesis investigates which survival analysis methods show the most predictive potential for Danish building data using the Danish Building and Housing Register (BBR), containing useful information on 4.4 million unique buildings.", 
              "Using nested cross-validation we compare traditional methods (Kaplan-Meier, Nelson-Aalen, Cox Proportional Hazards), ensemble methods (Random Survival Forest, Gradient Boosting, and Component-wise Gradient Boosting), and a deep learning approach (DeepSurv) alongside a Benchmark model that combines feature-specific Kaplan-Meier estimators. Rather than predicting exact lifetimes, we evaluate each method's ability to correctly rank buildings by lifetime using Harrell's concordance index (C-index).",
              "Despite notable data challenges, we achieve reasonable C-index values. Computational limitations necessitate training models on varying sample sizes, therefore subsets ranging from 0.1% to 100% are sampled with stratification from the complete dataset. Across most evaluations, traditional and ensemble methods demonstrate consistent performance without statistically significant differences, while DeepSurv shows highest potential but suffers from training instability. Feature importance analysis generally identifies physical building characteristics as the most significant predictors of demolition risk, whereas geographic location provides minimal predictive value.",
              "This thesis establishes the feasibility of applying survival analysis methods to building lifetime prediction while highlighting the need for improved data quality in future research."],
    paper: "/papers/thesis_full.pdf",
    paperLabel: "Download Thesis",
    paperFilename: "Wohlfahrt_Thesis_Full.pdf",
  },
  {
    slug: "small-world-networks",
    title: "Modified Watts-Strogatz Small-World Networks",
    date: "Dec 2024",
    description:
      "During my exchange at NYU I did a course in Mathematical MOdeling. Our final project in this course was to write a paper where we amde a modification to a model presented in a paper of our choice. I chose to modify the Watts-Strogatz small-world network model. Both my paper and code are available through the links above.",
    image: "/images/small_world_image.jpg",
    content: ["During my exchange at NYU I did a course in Mathematical MOdeling. Our final project in this course was to write a paper where we amde a modification to a model presented in a paper of our choice. I chose to modify the Watts-Strogatz small-world network model. Both my paper and code are available through the links above.",
              "Abstract:",
              "Many real-world networks have small-world properties, with high clustering combined with short path length, but do not have uniform node degree. In this project, we modify the standard Watts-Strogatz model by assigning the number of edges per node from a normal distribution instead of giving all nodes the same degree. We then rewire edges with a probability p and measure the characteristic path length L(p) and clustering coefficient C(p). Our results show that this approach still produces networks with small-world characteristics for a range of p-values. We also apply our method to the neural network of C. Elegans, and find a rewiring probability that minimizes the difference between the actual network and the model."
    ],
    repo: "https://github.com/OscarWohlf/SmallWorldGraphs",
    paper: "/papers/small_world_paper.pdf",
    paperLabel: "Download Paper",
    paperFilename: "Wohlfahrt_Small_World_Networks.pdf",
  },
  {
    slug: 'java-game',
    title: "Lazer Maze Java Game",
    date: "May 2024",
    description: "A game made in Java for the course 'Agile Object Oriented Software Development' at DTU", 
    image: "/images/game_image.png",
    content: ["A game made in Java for the course 'Agile Object Oriented Software Development' at DTU. The game is a simple maze game where the player has to navigate a laser through a maze of mirrors. The game has a 30 level campaign mode, a online mode where you can play against other players and a sand-box mode where you can create your own levels.",
              "The game was developed using Agile methodologies, with a focus on test-driven development and continuous integration. Through the links above you can find our repo, a video demo and a report on the development process and features."],
    repo: "https://github.com/OscarWohlf/lazer_maze",
    link: "https://www.youtube.com/watch?v=afP_-Q_go4M&ab_channel=LinusJuni",
    paper: "/papers/lazer_maze_report.pdf",
    paperLabel: "Download Report",
    paperFilename: "Wohlfahrt_Lazer_Maze_Report.pdf",
  },
  {
    slug: "processor-simulator",
    title: "Processor Simulator in Python with Cache",
    date: "Nov - Dec 2024",
    description: "Anohter project I did during my exchange at NYU in a Computer Architecture class.",
    content: ["Another project I did during my exchange at NYU in a Computer Architecture class.",
              "You can read more about it in the GitHub repository linked above."],
    image: "/images/processor_image.jpg",
    repo: "https://github.com/OscarWohlf/processor"
  }
]
