export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  desc: string;
  status: "Completed" | "In Progress";
  role: string;
  duration: string;
  stack: string[];
  features: string[];
  problemStatement: string;
  architecture: string;
  challenges: string;
  learnings: string;
  futureImprovements?: string[];
  github: string;
  demo: string | null;
}

export interface SkillGroup {
  group: string;
  items: { name: string; proficiency: "Advanced" | "Intermediate" | "Fluent" | "Familiar" | "Learning" }[];
}

export const portfolio = {
  name: "K Raj",
  role: "Full-Stack Developer",
  tagline:
    "Artificial Intelligence and Data Science graduate focused on full-stack web development with React, TypeScript, and Supabase, with a growing foundation in Java backend development through an active Java Full Stack Development training program. I build real, working applications and am looking for software development or QA opportunities to keep growing as an engineer.",
  typing: [
    "Full-Stack Developer",
    "React & TypeScript Developer",
    "Java Learner",
    "Problem Solver",
    "Software Engineering Enthusiast",
  ],
  heroBullets: [
    "Full-Stack Developer",
    "React & TypeScript",
    "Supabase & PostgreSQL",
    "SQL & MySQL",
    "Open to Opportunities",
  ],
  contact: {
    email: "rk4790385@gmail.com",
    phone: "9972618146",
    location: "Raichur, Karnataka",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/raj-k-5571372ba",
    github: "https://github.com/rk4790385-png",
    // TODO: replace with your real LeetCode/HackerRank profile URLs, or remove
    // these two from codingProfiles below if you don't have active accounts —
    // a link to the bare homepage instead of your profile reads as fake.
    leetcode: "https://leetcode.com/",
    hackerrank: "https://www.hackerrank.com/",
  },
  about: {
    summary:
      "I am an Artificial Intelligence and Data Science graduate with a strong interest in full-stack software engineering. I've built and deployed four independent projects using React, TypeScript, and Supabase, along with a Python-based machine learning project and a desktop application. I'm currently completing a structured Java Full Stack Development training program to build practical Java and Spring Boot skills, and my goal is to contribute to a software development or QA team where I can keep learning from real engineering practice.",
    highlights: [
      "Building full-stack web applications using React, TypeScript, and Supabase (PostgreSQL)",
      "Proficient in Core Java and object-oriented design principles; currently building practical Spring Boot experience through a structured training program",
      "Applying data structures and algorithms fundamentals to problem solving",
      "Designing relational schemas and writing SQL with MySQL and PostgreSQL",
      "Creating responsive user interfaces using HTML5, CSS3, JavaScript, React, and TanStack Start",
      "Adhering to Git workflows for structured version control",
      "Applying manual testing methods to verify application functionality",
    ],
    quick: [
      { label: "Location", value: "Raichur, Karnataka" },
      { label: "Degree", value: "Bachelor of Engineering" },
      { label: "College", value: "Government Engineering College, Bidar" },
      { label: "Email", value: "rk4790385@gmail.com" },
      { label: "Phone", value: "9972618146" },
      { label: "Graduated", value: "2026" },
      { label: "Branch", value: "Artificial Intelligence and Data Science" },
    ],
    currentlyLearning: [
      { name: "Spring Boot", desc: "Enterprise backend development" },
      { name: "REST APIs", desc: "Designing scalable API endpoints" },
      { name: "Data Structures & Algorithms", desc: "Optimizing program efficiency" },
      { name: "Software Testing", desc: "Quality assurance & test automation" },
      { name: "Database Design", desc: "Schema normalization & indexing" },
    ],
  },
  skills: [
    {
      group: "Programming Languages",
      items: [
        { name: "Java", proficiency: "Intermediate" },
        { name: "Python", proficiency: "Intermediate" },
        { name: "SQL", proficiency: "Fluent" },
      ],
    },
    {
      group: "Frontend",
      items: [
        { name: "React", proficiency: "Intermediate" },
        { name: "HTML5", proficiency: "Advanced" },
        { name: "CSS3", proficiency: "Advanced" },
        { name: "JavaScript", proficiency: "Intermediate" },
        { name: "Vite", proficiency: "Familiar" },
      ],
    },
    {
      group: "Backend",
      items: [
        { name: "Spring Boot", proficiency: "Learning" },
        { name: "REST APIs", proficiency: "Familiar" },
      ],
    },
    {
      group: "Database",
      items: [
        { name: "MySQL", proficiency: "Fluent" },
      ],
    },
    {
      group: "Developer Tools",
      items: [
        { name: "Git", proficiency: "Intermediate" },
        { name: "GitHub", proficiency: "Fluent" },
        { name: "VS Code", proficiency: "Advanced" },
      ],
    },
  ] as SkillGroup[],
  education: [
    {
      degree: "Bachelor of Engineering",
      institution: "Government Engineering College, Bidar",
      detail: "Artificial Intelligence and Data Science · CGPA: 6.97",
      period: "2022 — 2026",
    },
    {
      degree: "Pre-University (PUC)",
      institution: "Justice Shivaraj Patil PU College",
      detail: "Percentage: 66.5%",
      period: "2020 — 2022",
    },
    {
      degree: "SSLC (Class X)",
      institution: "Vidhya Bharathi CBSE School, Raichur",
      detail: "Percentage: 64.4%",
      period: "2019 — 2020",
    },
  ],
  experience: [
    {
      role: "Java Full Stack Development Training",
      company: "KodNest Technologies",
      period: "Feb 2026 — Present",
      bullets: [
        "Completing a paid, curriculum-based Java Full Stack Development training program covering Core Java, MySQL, frontend technologies, and manual testing, with a certificate on completion.",
        "Applying concepts from the program directly to independent projects to build practical, verifiable skills.",
      ],
      stack: ["Java", "MySQL", "React", "Manual Testing"],
    },
    {
      role: "Full-Stack Project Development & Self-Study",
      company: "Independent Learning",
      period: "2026",
      bullets: [
        "Built and deployed four independent projects using React, TypeScript, Supabase, and Python, while strengthening Java fundamentals and Data Structures & Algorithms.",
      ],
      stack: ["React", "TypeScript", "Supabase", "Python", "Data Structures"],
    },
  ],
  projects: [
    {
      slug: "portfolio-website",
      title: "Portfolio Website",
      subtitle: "Personal Portfolio Showcase",
      desc: "A responsive personal portfolio website to display projects, skills, education, and credentials.",
      status: "Completed",
      role: "Frontend Developer (Solo Project)",
      duration: "2026",
      stack: ["React", "Vite", "TypeScript", "Tailwind CSS"],
      features: [
        "Responsive, mobile-first design",
        "Filterable project section with dedicated case study pages",
        "Contact section with direct email and social links",
      ],
      problemStatement:
        "A plain-text resume makes it hard to show frontend styling ability or let a reviewer explore individual projects in depth, so I wanted a single place to present my work interactively.",
      architecture:
        "Built as a single-page React application using Vite and TypeScript, styled with Tailwind CSS, with each project rendered from a shared data file so new projects can be added without touching layout code.",
      challenges:
        "Keeping the layout responsive and readable across mobile and desktop without a design background to draw on.",
      learnings:
        "Practical experience with component-based frontend architecture, responsive layout techniques, and structuring a small TypeScript codebase around a single data source.",
      futureImprovements: [
        "Add accessibility improvements (keyboard navigation, screen reader support).",
        "Add a light/dark theme toggle.",
      ],
      github: "https://github.com/rk4790385-png/portfolio-website",
      demo: "https://github.com/rk4790385-png/portfolio-website",
    },
    {
      slug: "campus-placement-portal",
      title: "Campus Placement Portal",
      subtitle: "Recruitment Workflow Concept",
      desc: "A frontend concept application exploring how a campus recruitment workflow could work for students and coordinators.",
      status: "In Progress",
      role: "Frontend Developer (Solo Project)",
      duration: "2026",
      stack: ["React", "TypeScript", "Vite", "Bun"],
      features: [
        "Student profile and application UI",
        "Coordinator-facing views for browsing candidate data",
      ],
      problemStatement:
        "Campus placement workflows are often fragmented across spreadsheets and email; I wanted to explore what a unified interface for this process could look like.",
      architecture:
        "A React and TypeScript single-page application built with Vite and Bun. This is currently a frontend-only build using local state — it does not yet have a connected backend or database.",
      challenges:
        "Structuring the UI to support multiple user perspectives (student vs. coordinator) cleanly within a frontend-only application.",
      learnings:
        "Component structuring in React/TypeScript and planning an application's data model before wiring up a real backend.",
      futureImprovements: [
        "Connect a real backend (e.g. Supabase) for persistent data and authentication.",
        "Add role-based views backed by real accounts.",
      ],
      github: "https://github.com/rk4790385-png/campus-placement-portal",
      demo: "https://campus-placement-portal-coral.vercel.app/",
    },
    {
      slug: "employee-management-system",
      title: "Employee Management System",
      subtitle: "Full-Stack Employee Directory",
      desc: "A full-stack application to organize employee and department records.",
      status: "Completed",
      role: "Full-Stack Developer (Solo Project)",
      duration: "2026",
      stack: ["React", "TypeScript", "Vite", "Supabase (PostgreSQL)"],
      features: [
        "Employee record storage and retrieval",
        "Structured department and role data",
      ],
      problemStatement:
        "Small teams often manage employee data in spreadsheets with no structure or access control, so I wanted to build a proper database-backed alternative.",
      architecture:
        "A React and TypeScript frontend with Supabase providing the backend: PostgreSQL database, auto-generated APIs, and authentication, removing the need to hand-write a separate backend server.",
      challenges:
        "Designing a PostgreSQL schema in Supabase that cleanly modeled employee and department relationships, and correctly securing data access with Supabase's row-level security.",
      learnings:
        "Practical experience with backend-as-a-service architecture, PostgreSQL schema design, and connecting a React frontend to a managed database and auth provider.",
      futureImprovements: [
        "Add employee self-service profile updates.",
        "Add paginated search and reporting views.",
      ],
      github: "https://github.com/rk4790385-png/employee-management-system",
      demo: "https://employee-management-system-mocha-six.vercel.app/",
    },
    {
      slug: "hospital-management-system",
      title: "Health-care Management System",
      subtitle: "Healthcare Administration Platform",
      desc: "A full-stack application to coordinate patient records and hospital administration workflows.",
      status: "Completed",
      role: "Full-Stack Developer (Solo Project)",
      duration: "2026",
      stack: ["TanStack Start", "React", "Supabase (PostgreSQL)"],
      features: [
        "Patient record storage",
        "Structured hospital administration data via database migrations",
      ],
      problemStatement:
        "Hospitals often coordinate patient and administrative data through disconnected spreadsheets, so I wanted to build a structured, database-backed alternative.",
      architecture:
        "Built with TanStack Start and React for routing and UI, with Supabase (PostgreSQL) handling data persistence via versioned database migrations.",
      challenges:
        "Structuring database migrations in Supabase to model patient and hospital data cleanly as the schema evolved.",
      learnings:
        "Hands-on experience with TanStack Start's routing model and managing a PostgreSQL schema through migrations rather than manual changes.",
      futureImprovements: [
        "Add authentication and role-based access for staff.",
        "Add appointment scheduling.",
      ],
      github: "https://github.com/rk4790385-png/hospital-management-system",
      demo: "https://health-care-management-system-ten.vercel.app/",
    },
  ] as Project[],
  certifications: [] as { title: string; issuer: string; date: string; tech: string; link?: string }[],
  achievements: [
    { title: "Academic Excellence", desc: "Completed B.E. in Artificial Intelligence and Data Science with a CGPA of 6.97." },
    { title: "Project Milestones", desc: "Built and deployed four independent projects: three full-stack web apps (React, TypeScript, Supabase) and a Python-based machine learning application." },
  ],
  codingProfiles: [
    {
      name: "GitHub",
      handle: "@rk4790385-png",
      stat: "Open source contributions & repositories",
      url: "https://github.com/rk4790385-png",
    },
    {
      name: "LinkedIn",
      handle: "in/raj-k-5571372ba",
      stat: "Professional network & endorsements",
      url: "https://www.linkedin.com/in/raj-k-5571372ba",
    },
    // LeetCode/HackerRank entries removed — the URLs on file pointed to the
    // bare homepage, not a real profile. Add them back with your actual
    // profile links once you have them; a link that doesn't lead anywhere
    // specific is worse than no link at all.
  ],
  stats: [
    { label: "Major Projects", value: "4" },
    { label: "Graduate", value: "2026" },
    { label: "Primary Language", value: "TypeScript" },
    { label: "Specialization", value: "AI & DS" },
  ],
};

export type Portfolio = typeof portfolio;