export type ProjectContent =
  | string
  | {
      type: "heading"
      text: string
    }
  | {
      type: "paragraph"
      text: string
    }
  | {
      type: "list"
      items: string[]
    }

export type Project = {
  slug: string
  title: string
  date?: string
  tags?: string[]
  description: string
  image?: string
  content?: ProjectContent[]
  link?: string
  repo?: string
  paper?: string
  paperLabel?: string
  paperFilename?: string
  attachments?: {
    href: string
    label: string
    filename?: string
  }[]
}

export const projects: Project[] = [
  {
    slug: "lean-proof-generation",
    title: "Adaptive Compute Allocation for Lean Proof Generation",
    date: "Feb - June 2026",
    tags: ["LLMs", "Lean", "Formal Methods", "Inference-Time Compute"],
    description:
      "An EPFL semester project on whether inference-time compute can be allocated more effectively when generating formal Lean proofs with language models.",
    image: "/images/lean_proof_generation.png",
    content: [
      "This was my semester project at EPFL, supervised by Etienne Bamas at the Chair of Mathematical Data Science. The project studies Lean proof generation with language models, where generated proofs can be automatically accepted or rejected by the Lean verifier.",
      {
        type: "heading",
        text: "Introduction",
      },
      {
        type: "paragraph",
        text: "Large language models have recently had a significant improvement in mathematical reasoning abilities, in both formal and informal theorem proving. In formal theorem proving, the goal is not only to produce a correct mathematical argument, but also to generate a proof that can be checked by a proof assistant like Lean. This makes the setting especially interesting for evaluating reasoning systems, since the generated proof can be accepted or rejected automatically by the verifier.",
      },
      {
        type: "paragraph",
        text: "Generating correct formal proofs is however still challenging, even with the clean verification signal. For a proof to be accepted, the model must generate Lean code that is syntactically correct, compatible with the verifier environment, and closes all proof goals. A small local mistake can cause the entire proof to fail, and the search space of possible proofs is very large. The success rate can depend heavily on how inference-time compute is used. There are many possible ways to allocate this compute, for instance one can sample more proofs, use more expensive search procedures, or apply methods that sharpen the model distribution toward more likely reasoning trajectories.",
      },
      {
        type: "paragraph",
        text: "Recent work has suggested that part of the benefit of reinforcement learning post-training may come from sharpening a model's existing output distribution rather than teaching it entirely new capabilities. This has motivated training-free alternatives to RL, such as power sampling, where the goal is to sample from a sharpened distribution over full generated sequences. Exact sampling from this sequence-level distribution is challenging in the autoregressive setting, as the probability of the next token under the sharpened distribution does not only depend on its local probability, but on the total probability mass of all possible future continuations after that token. Computing this exactly would require summing over an exponentially large space of continuations, so practical methods must approximate the distribution using additional inference-time compute. Newer scalable variants attempt to make this more efficient by approximating the effect of trajectory-level sharpening during autoregressive generation.",
      },
      {
        type: "paragraph",
        text: "In this project, we study these ideas in the setting of Lean proof generation. Our main question is whether inference-time compute can be allocated more effectively when generating formal proofs. Standard fixed-budget methods spend the same amount of compute throughout generation, even though different parts of a proof may have different levels of difficulty or importance. We therefore investigate both fixed-budget sampling methods and adaptive budget controllers that choose how much compute to spend at different stages of the generation.",
      },
      {
        type: "paragraph",
        text: "Throughout the project we evaluate several approaches. First, we compare standard sampling baselines with power-sampling methods under different compute budgets. Second, we study simple adaptive controllers based on proof position. Third, we train a lightweight learned controller on generated proof trajectories, using proof-position and uncertainty features to choose between sampling modes. The goal is to improve the trade-off between proof success and compute cost. Throughout the report, generated proofs are checked using Lean, and performance is measured by proof success rate and inference-time compute usage.",
      },
      {
        type: "paragraph",
        text: "Our experiments show that additional inference-time compute can improve single-attempt proof generation, but that the accuracy gains come at a highly increased token cost. The advantage does however become less clear when compared with baselines using multiple independent samples. The adaptive controllers explored in this project do not consistently improve over the best fixed-budget configurations. The methods highlight some of the practical difficulties of adaptive compute allocation, for instance, that the available sampling modes must differ meaningfully in their accuracy-cost behaviour, and that learned controllers require informative features, training trajectories, and verification labels.",
      },
      {
        type: "heading",
        text: "Project overview",
      },
      {
        type: "list",
        items: [
          "We evaluate standard sampling baselines and power-sampling methods for Lean proof generation under different compute budgets.",
          "We compare the accuracy-cost trade-off of single-attempt rollout-based sampling with independent pass@k sampling.",
          "We investigate simple phase-based controllers and a lightweight learned controller for adaptive inference-time compute allocation.",
          "We perform exploratory uncertainty diagnostics to study whether model likelihoods provide a useful signal for proof failure and adaptive control.",
        ],
      },
    ],
    attachments: [
      {
        href: "/papers/OscarWohlfahrt_SemesterProject1_Report.pdf",
        label: "Download Report",
        filename: "Wohlfahrt_Lean_Proof_Generation_Report.pdf",
      },
    ],
  },
  {
    slug: "multi-hop-qa-generation",
    title: "Automated Multi-Hop QA Generation for LLM Post-Training",
    date: "Feb - June 2026",
    tags: ["LLMs", "Reinforcement Learning", "NLP", "Data Generation"],
    description:
      "A group project building an automated pipeline for generating document-grounded multi-hop question-answer datasets for LLM post-training.",
    image: "/images/qa_pipeline.png",
    content: [
      "This project was connected to the Swiss AI Initiative at EPFL and the EE-568 Reinforcement Learning course. The goal was to generate question-answer datasets that force models to reason over long documents rather than rely on memorized facts or shallow lexical matching.",
      "We built an end-to-end pipeline that extracts relational triples from raw documents, verifies them with natural language inference, chains them into multi-hop reasoning paths, filters invalid chains, and then generates natural-language questions. We used the generated datasets to run initial post-training experiments with Qwen2.5-7B-Instruct under several reinforcement learning policies.",
      "Abstract:",
      "Large Language Models frequently bypass reasoning from context in favor of memorized knowledge or lexical matching, undermining their reliability in long-context tasks. Reinforcement learning post-training on question-answer datasets is a promising way to encourage more faithful reasoning, but existing datasets are often too small, too easy, or not automatically verifiable.",
      "We proposed an automated pipeline for generating large-scale, multi-hop QA datasets from raw documents without human annotation. The pipeline extracts structured relational triples, verifies textual support with NLI, chains verified triples into multi-hop reasoning paths, and synthesizes questions that require integrating evidence across multiple text passages.",
      "Initial experiments showed improvements in long-context document-grounded reasoning, and confirmed that even strong models struggle with the generated multi-hop questions before post-training.",
    ],
    attachments: [
      {
        href: "/papers/Apertus_QA_report_OscarWohlfahrt.pdf",
        label: "Download Report",
        filename: "Wohlfahrt_Apertus_QA_Report.pdf",
      },
      {
        href: "/papers/Apertus_QA_poster_OscarWohlfahrt.pdf",
        label: "Download Poster",
        filename: "Wohlfahrt_Apertus_QA_Poster.pdf",
      },
    ],
  },
  {
    slug: "building-lifetimes",
    title: "Estimating Building Lifetimes with Machine Learning",
    date: "Feb - Jun 2025",
    tags: ["Machine Learning", "Survival Analysis", "Data Science", "BSc Thesis"],
    description: "My bachelor thesis was about estimating the lifetime of danish buildings using various machine learning methods. We also created and implemented our own baseline method. The thesis can be downloaded in the link on this site. A more publishable paper is also on its way. Code is also available on request.",
    image: "/images/thesis_image.jpg",
    content: ["My bachelor thesis at DTU was about estimating the lifetime of Danish buildings using various machine learning methods. We also created and implemented our own baseline method. The thesis can be downloaded in the link on this site. A more publishable paper is also on the way. Our code used for data processing and model training is available on request.",
              "Abstract:",
              "Accurately predicting building lifetime is essential for urban planning and sustainable development, yet modern survival analysis methods have not been thoroughly evaluated on large-scale building datasets in Denmark. This proof-of-concept thesis investigates which survival analysis methods show the most predictive potential for Danish building data using the Danish Building and Housing Register (BBR), containing useful information on 4.4 million unique buildings.", 
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
    tags: ["Network Science", "Mathematical Modeling", "Graph Theory", "Python"],
    description:
      "During my exchange at NYU I did a course in Mathematical Modeling. Our final project in this course was to write a paper where we made a modification to a model presented in a paper of our choice. I chose to modify the Watts-Strogatz small-world network model. Both my paper and code are available through the links above.",
    image: "/images/small_world_image.jpg",
    content: ["During my exchange at NYU I did a course in Mathematical Modeling. Our final project in this course was to write a paper where we made a modification to a model presented in a paper of our choice. I chose to modify the Watts-Strogatz small-world network model. Both my paper and code are available through the links above.",
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
    tags: ["Java", "Game Development", "Agile", "TDD"],
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
    slug: "gcl-project",
    title: "Parser, Compiler and Interpreter for GCL",
    date: "Feb-May 2024",
    tags: ["F#", "Compiler Design", "Parsing", "Formal Methods"],
    description: "A project for the course 'Computer Science Modelling' at DTU where we implemented a parser, compiler and interpreter for the GCL programming language using F#.",
    image: "/images/gcl_image.png",
    content: ["A project for the course 'Computer Science Modelling' at DTU where we implemented a parser, compiler and interpreter for the Guarded Commands Language (GCL) programming language using F#. GCL is a compact programming language defined by Edsger Dijkstra, which is made to make it easy to write proofs for a program.",
              "The GitHub repo, as well as instructions on how to run the project locally can be found through the link above."],
    repo: "https://github.com/OscarWohlf/gcl_project"
  },
  {
    slug: "processor-simulator",
    title: "Processor Simulator in Python with Cache",
    date: "Nov - Dec 2024",
    tags: ["Python", "Computer Architecture", "Caching", "Simulation"],
    description: "Another project I did during my exchange at NYU in a Computer Architecture class.",
    content: ["Another project I did during my exchange at NYU in a Computer Architecture class.",
              "You can read more about it in the GitHub repository linked above."],
    image: "/images/processor_image.jpg",
    repo: "https://github.com/OscarWohlf/processor"
  }
]
