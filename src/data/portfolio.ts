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
  items: {
    name: string;
    proficiency:
    | "Advanced"
    | "Intermediate"
    | "Fluent"
    | "Familiar"
    | "Learning";
  }[];
}

export const portfolio = {
  name: "Raj K",
  role: "Java Developer | Full-Stack Developer",
  tagline:
    "B.E. graduate in Artificial Intelligence and Data Science focused on Java and full-stack software development. I build practical applications using Java, Spring Boot, REST APIs, SQL, React, and TypeScript, with hands-on experience across backend, frontend, and database development.",
  typing: [
    "Java Developer",
    "Full-Stack Developer",
    "Spring Boot Developer",
    "React Developer",
    "Software Developer",
  ],
  heroBullets: [
    "Java & Spring Boot",
    "REST APIs & SQL",
    "React & TypeScript",
    "MySQL & PostgreSQL",
    "Open to Software Development Opportunities",
  ],
  contact: {
    email: "rk4790385@gmail.com",
    phone: "9972618146",
    location: "Raichur, Karnataka",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/raj-k-5571372ba",
    github: "https://github.com/rk4790385-png",
  },
  about: {
    summary:
      "I am a B.E. graduate in Artificial Intelligence and Data Science focused on Java and full-stack software development. I enjoy building practical applications, designing relational databases, developing REST APIs, and creating responsive user interfaces. I am currently completing a structured Java Full Stack Development program at KodNest Technologies and applying these concepts through hands-on software projects.",
    highlights: [
      "Building full-stack applications using Java, Spring Boot, React, TypeScript, and SQL",
      "Developing REST APIs and backend application workflows with Spring Boot",
      "Designing relational databases using MySQL and PostgreSQL",
      "Applying object-oriented programming and data structures fundamentals",
      "Building responsive user interfaces using React, TypeScript, HTML5, and CSS3",
      "Using Git and GitHub for version control and project collaboration",
      "Applying manual testing and validation to verify application functionality",
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
      { name: "Spring Boot", desc: "Backend and REST API development" },
      { name: "REST APIs", desc: "Designing and integrating web services" },
      {
        name: "Data Structures & Algorithms",
        desc: "Problem solving and efficient programming",
      },
      { name: "Software Testing", desc: "Functional and manual testing practices" },
      { name: "Database Design", desc: "Relational schema design and SQL" },
    ],
  },

  skills: [
    {
      group: "Programming Languages",
      items: [
        { name: "Java", proficiency: "Intermediate" },
        { name: "Python", proficiency: "Intermediate" },
        { name: "JavaScript", proficiency: "Intermediate" },
        { name: "TypeScript", proficiency: "Intermediate" },
        { name: "SQL", proficiency: "Fluent" },
      ],
    },
    {
      group: "Backend",
      items: [
        { name: "Spring Boot", proficiency: "Intermediate" },
        { name: "REST APIs", proficiency: "Intermediate" },
        { name: "Flask", proficiency: "Familiar" },
      ],
    },
    {
      group: "Frontend",
      items: [
        { name: "React", proficiency: "Intermediate" },
        { name: "HTML5", proficiency: "Advanced" },
        { name: "CSS3", proficiency: "Advanced" },
        { name: "Vite", proficiency: "Familiar" },
        { name: "TanStack Start", proficiency: "Familiar" },
      ],
    },
    {
      group: "Database",
      items: [
        { name: "MySQL", proficiency: "Fluent" },
        { name: "PostgreSQL", proficiency: "Intermediate" },
        { name: "Supabase", proficiency: "Intermediate" },
      ],
    },
    {
      group: "Developer Tools",
      items: [
        { name: "Git", proficiency: "Intermediate" },
        { name: "GitHub", proficiency: "Intermediate" },
        { name: "VS Code", proficiency: "Advanced" },
        { name: "Vercel", proficiency: "Familiar" },
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
        "Completing a structured Java Full Stack Development training program covering Core Java, MySQL, frontend technologies, REST APIs, and manual testing.",
        "Applying concepts from the program directly to independent software projects involving backend development, database design, frontend development, and testing.",
      ],
      stack: [
        "Java",
        "Spring Boot",
        "MySQL",
        "React",
        "REST APIs",
        "Manual Testing",
      ],
    },
    {
      role: "Independent Software Development",
      company: "Independent Projects",
      period: "2026",
      bullets: [
        "Built and deployed practical software projects across Java full-stack development, React and TypeScript applications, machine learning, and desktop application development.",
        "Strengthened skills in REST APIs, SQL, database design, Git, frontend development, and software testing through hands-on project work.",
      ],
      stack: ["React", "TypeScript", "Supabase", "Python", "Data Structures"],
    },
  ],

  projects: [
    {
      slug: "campus-placement-portal",
      title: "Campus Placement Portal",
      subtitle: "Java Full-Stack Web Application",
      desc: "A full-stack campus placement platform connecting student and recruiter workflows through a React frontend and Spring Boot REST API.",
      status: "Completed",
      role: "Full-Stack Developer (Solo Project)",
      duration: "2026",
      stack: [
        "Java 21",
        "Spring Boot",
        "Spring Data JPA",
        "Spring Security",
        "PostgreSQL",
        "React",
        "TypeScript",
        "Vite",
      ],
      features: [
        "Student and recruiter authentication",
        "Job posting management",
        "Student application workflows",
        "REST API backend",
        "Role-based security",
      ],
      problemStatement:
        "Campus placement activities can become fragmented across spreadsheets and email. This project provides a structured platform for student and recruiter workflows.",
      architecture:
        "A React and TypeScript frontend communicates with a Spring Boot REST API. Spring Data JPA handles persistence, Spring Security manages protected application flows, and PostgreSQL stores application data.",
      challenges:
        "Structuring the backend around clear REST endpoints, relational data models, authentication, and role-based access while keeping the frontend and backend responsibilities separated.",
      learnings:
        "Practical experience with Spring Boot, REST API development, JPA-based persistence, Spring Security, PostgreSQL, and full-stack application integration.",
      futureImprovements: [
        "Add richer recruiter dashboards and placement analytics.",
        "Expand application tracking and notification workflows.",
      ],
      github: "https://github.com/rk4790385-png/Campus-placement-portal",
      demo: "https://campus-placement-portal-coral.vercel.app/",
    },
    {
      slug: "employee-management-system",
      title: "Employee Management System",
      subtitle: "Java Full-Stack Employee Management",
      desc: "A full-stack employee management application for managing employee records through a React frontend and Spring Boot REST API.",
      status: "Completed",
      role: "Full-Stack Developer (Solo Project)",
      duration: "2026",
      stack: [
        "Java 21",
        "Spring Boot",
        "REST API",
        "PostgreSQL",
        "Flyway",
        "React",
        "TypeScript",
        "Vite",
      ],
      features: [
        "Employee CRUD operations",
        "REST API endpoints",
        "PostgreSQL persistence",
        "Database migrations with Flyway",
        "Employee data management UI",
      ],
      problemStatement:
        "Employee records are often managed through spreadsheets or disconnected systems. This project provides a structured application for managing employee information.",
      architecture:
        "A React and TypeScript frontend communicates with a Spring Boot REST API. PostgreSQL provides relational persistence and Flyway manages database schema migrations.",
      challenges:
        "Designing a clean relational data model and implementing CRUD operations through a Spring Boot REST API while evolving the database schema with migrations.",
      learnings:
        "Hands-on experience with Spring Boot REST APIs, PostgreSQL, Flyway migrations, CRUD application design, and frontend-backend integration.",
      futureImprovements: [
        "Complete and strengthen full frontend-backend integration.",
        "Add authentication, role-based access, search, and pagination.",
      ],
      github: "https://github.com/rk4790385-png/Employee-Management-System",
      demo: "https://employee-management-system-mocha-six.vercel.app/",
    },
    {
      slug: "hospital-management-system",
      title: "Health Management System",
      subtitle: "Healthcare Administration Platform",
      desc: "A full-stack healthcare management application for organizing patient and hospital administration workflows.",
      status: "Completed",
      role: "Full-Stack Developer (Solo Project)",
      duration: "2026",
      stack: [
        "TanStack Start",
        "React",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
      ],
      features: [
        "Healthcare data management",
        "Structured PostgreSQL schema",
        "Database migrations",
        "Role-specific application workflows",
      ],
      problemStatement:
        "Healthcare information can become difficult to manage when patient and administrative data is spread across disconnected systems. This project provides a structured web application for managing healthcare workflows.",
      architecture:
        "Built with TanStack Start and React for the frontend and routing, with Supabase and PostgreSQL providing backend data persistence and database management through versioned migrations.",
      challenges:
        "Designing and evolving a relational healthcare database schema while keeping application workflows consistent with the database structure.",
      learnings:
        "Practical experience with TanStack Start, React, Supabase, PostgreSQL, database migrations, and full-stack application design.",
      futureImprovements: [
        "Expand authentication and role-based access.",
        "Add more appointment, prescription, and medical-record workflows.",
      ],
      github: "https://github.com/rk4790385-png/Health-Management-System",
      demo: "https://health-care-management-system-ten.vercel.app/",
    },
  ] as Project[],

  certifications: [] as {
    title: string;
    issuer: string;
    date: string;
    tech: string;
    link?: string;
  }[],

  achievements: [
    {
      title: "B.E. in Artificial Intelligence & Data Science",
      desc: "Completed Bachelor of Engineering with a CGPA of 6.97.",
    },
    {
      title: "Full-Stack Project Development",
      desc: "Built practical projects across Java full-stack development, React applications, machine learning, and desktop software.",
    },
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
  ],

  stats: [
    { label: "Featured Projects", value: "3" },
    { label: "Graduate", value: "2026" },
    { label: "Primary Language", value: "Java" },
    { label: "Focus", value: "Full-Stack Development" },
  ],
};

export type Portfolio = typeof portfolio;