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
  role: "Artificial Intelligence & Data Science Student",
  tagline:
    "Passionate Artificial Intelligence and Data Science student with a strong foundation in Java, SQL, Spring Boot, and Web Development. I enjoy designing scalable applications, solving real-world problems, and continuously improving my software engineering skills through practical projects and modern technologies. Currently seeking Software Development and QA Internship opportunities.",
  typing: [
    "Java Developer",
    "Aspiring Software Engineer",
    "Web Developer",
    "Problem Solver",
    "Software Engineering Enthusiast",
  ],
  heroBullets: [
    "Java Developer",
    "AI & DS Student",
    "Open to Internships",
    "2026 Graduate",
    "Problem Solver",
  ],
  contact: {
    email: "rk4790385@gmail.com",
    phone: "9972618146",
    location: "Raichur, Karnataka",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/raj-k-5571372ba",
    github: "https://github.com/rk4790385-png",
    leetcode: "https://leetcode.com/",
    hackerrank: "https://www.hackerrank.com/",
  },
  about: {
    summary:
      "I am an enthusiastic Artificial Intelligence and Data Science student with a deep-seated passion for software engineering. My interest lies in building robust, scalable applications with a focus on Java, backend services, and interactive web development. I believe in learning by doing; therefore, I choose to build real-world applications that solve actual problems rather than focusing purely on academic theory. I approach software engineering with a learning mindset, constantly updating my skills in modern frameworks and principles. My career objective is to secure a software development or QA internship where I can apply my problem-solving capabilities, collaborate with teams, and contribute to high-quality codebases.",
    highlights: [
      "Proficient in Java programming and object-oriented design principles",
      "Building robust, structured backends using Spring Boot and REST APIs",
      "Designing clean relational schemas and writing optimized SQL with MySQL",
      "Creating modern, responsive user interfaces using HTML5, CSS3, JavaScript, and React",
      "Adhering to Git workflows for structured version control and collaboration",
      "Applying systematic testing methods (Manual testing, Selenium learning) to ensure product quality",
    ],
    quick: [
      { label: "Location", value: "Raichur, Karnataka" },
      { label: "Degree", value: "Bachelor of Engineering" },
      { label: "College", value: "Government Engineering College, Bidar" },
      { label: "Email", value: "rk4790385@gmail.com" },
      { label: "Phone", value: "9972618146" },
      { label: "Expected Graduation", value: "2026" },
      { label: "Branch", value: "Artificial Intelligence and Data Science" },
    ],
    currentlyLearning: [
      { name: "Spring Boot", desc: "Enterprise backend development" },
      { name: "REST APIs", desc: "Designing scalable API endpoints" },
      { name: "Data Structures & Algorithms", desc: "Optimizing program efficiency" },
      { name: "React", desc: "Building interactive user interfaces" },
      { name: "Software Testing", desc: "Quality assurance & test automation" },
      { name: "Database Design", desc: "Schema normalization & indexing" },
    ],
  },
  skills: [
    {
      group: "Programming Languages",
      items: [
        { name: "Java", proficiency: "Advanced" },
        { name: "Python", proficiency: "Intermediate" },
        { name: "SQL", proficiency: "Fluent" },
      ],
    },
    {
      group: "Frontend",
      items: [
        { name: "HTML5", proficiency: "Advanced" },
        { name: "CSS3", proficiency: "Advanced" },
        { name: "JavaScript", proficiency: "Intermediate" },
        { name: "React", proficiency: "Familiar" },
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
        { name: "Eclipse", proficiency: "Intermediate" },
      ],
    },
    {
      group: "Testing",
      items: [
        { name: "Manual Testing", proficiency: "Intermediate" },
        { name: "Selenium", proficiency: "Learning" },
      ],
    },
    {
      group: "Soft Skills",
      items: [
        { name: "Problem Solving", proficiency: "Advanced" },
        { name: "Communication", proficiency: "Advanced" },
        { name: "Leadership", proficiency: "Intermediate" },
        { name: "Teamwork", proficiency: "Advanced" },
        { name: "Quick Learning", proficiency: "Advanced" },
        { name: "Time Management", proficiency: "Advanced" },
      ],
    },
  ] as SkillGroup[],
  education: [
    {
      degree: "Bachelor of Engineering",
      institution: "Government Engineering College, Bidar",
      detail: "Artificial Intelligence and Data Science · CGPA: 6.97 · Expected Graduation: 2026",
      period: "2022 — 2026 (Expected)",
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
      role: "Full-Stack Project Development & Self-Study",
      company: "Independent Learning",
      period: "Ongoing",
      bullets: [
        "Currently enhancing my software development skills by building full-stack projects, strengthening Java fundamentals, learning Spring Boot, practicing Data Structures & Algorithms, and exploring modern web development technologies.",
      ],
      stack: ["Java", "Spring Boot", "MySQL", "REST APIs", "React", "Data Structures"],
    },
  ],
  projects: [
    {
      slug: "portfolio-website",
      title: "Portfolio Website",
      subtitle: "Personal Portfolio Showcase",
      desc: "A responsive, high-performance portfolio website to display professional projects, skills, education, and credentials.",
      status: "Completed",
      role: "Lead Frontend Developer",
      duration: "Jan 2024 — Present",
      stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Dynamic typing animation and animated statistics",
        "Responsive, mobile-first design and dark-theme aesthetics",
        "Filterable project section with dedicated case study pages",
        "Interactive GitHub contribution graph and profile dashboard preview",
      ],
      problemStatement:
        "Recruiters often sift through dry, text-only resumes, making it difficult for software engineering applicants to stand out, showcase front-end styling abilities, present modular projects interactively, and verify dynamic coding credentials.",
      architecture:
        "Built as a Single Page Application (SPA) using React, Vite, and TypeScript. The layouts are styled with Tailwind CSS, utilizing Framer Motion for state-based animations, and structured with modular UI components to ensure fast performance and no layout shifts.",
      challenges:
        "Fine-tuning performance scores, eliminating layout shifts from lazy-loaded graphics, and keeping initial transition animations running at a smooth 60fps across mobile and tablet viewports.",
      learnings:
        "Mastered responsive page design, improved content hierarchy, and refined portfolio storytelling for a premium personal brand experience.",
      futureImprovements: [
        "Add accessibility-first keyboard interactions and screen reader support.",
        "Publish a polished theme toggle with saved preferences.",
        "Expand the experience with live analytics and recruiter-focused metrics.",
      ],
      github: "https://github.com/rk4790385-png",
      demo: "https://github.com/rk4790385-png",
    },
    {
      slug: "campus-placement-portal",
      title: "Campus Placement Portal",
      subtitle: "Recruitment Workflow System",
      desc: "A comprehensive web application designed to streamline campus recruitment workflows for students, coordinators, and employers.",
      status: "In Progress",
      role: "Full-Stack Developer",
      duration: "Jul 2024 — Ongoing",
      stack: ["Java", "Spring Boot", "REST APIs", "MySQL", "React", "Tailwind CSS"],
      features: [
        "Student profile creation, resume uploading, and eligibility calculation",
        "Recruiter dashboard to filter candidates based on CGPA and Branch",
        "Automated job board with dynamic post creation and applications pipeline",
        "Real-time interview scheduling and status tracking for applicants",
      ],
      problemStatement:
        "Campus placement workflows are traditionally fragmented, relying on manual spreadsheet entries, paper-based notifications, and emails to manage student data, verify eligibility metrics, publish job openings, and trace selection results.",
      architecture:
        "Follows a decoupled three-tier MVC architecture: a frontend Client built with React and Tailwind CSS, a Spring Boot backend REST API managing candidate filter logic and business services, and a MySQL relational database handling normalized records.",
      challenges:
        "Designing an efficient backend query system to filter student records using multi-attribute criteria (CGPA threshold, active backlogs, branch) while maintaining quick response times and query accuracy.",
      learnings:
        "Deepened understanding of building secure RESTful APIs, working with Spring Data JPA repositories, utilizing MySQL indexes for performance, and designing responsive grid interfaces for data dashboards.",
      futureImprovements: [
        "Add role-based access controls and interview notification automations.",
        "Introduce advanced candidate analytics with trend reports.",
      ],
      github: "https://github.com/rk4790385-png",
      demo: null,
    },
    {
      slug: "employee-management-system",
      title: "Employee Management System",
      subtitle: "Full-Stack Enterprise Directory",
      desc: "A scalable full-stack application to organize department details, automate salary listings, and manage employee records.",
      status: "Completed",
      role: "Backend Developer",
      duration: "Apr 2024 — Jun 2024",
      stack: ["Java", "Spring Boot", "JDBC", "MySQL", "HTML5", "CSS3", "JavaScript"],
      features: [
        "Secure dashboard interface with HR/Admin authentication access control",
        "CRUD operations for employee records, department structures, and job roles",
        "Automated salary slip logging and attendance log tracking functionality",
        "Database integration with relational mapping for data consistency",
      ],
      problemStatement:
        "Small and medium enterprises struggle to securely manage employee profiles, department transfers, attendance logging, and payroll records without dedicated systems, often resulting in synchronization conflicts and data leaks.",
      architecture:
        "Structured using a standard Model-View-Controller backend with Spring Boot. Relational database mapping is handled via JDBC/JPA, routing request parameters to services that interact with a MySQL database. Rendered on the frontend using responsive HTML templates.",
      challenges:
        "Constructing a reliable, transaction-safe service method to process monthly payroll updates and generate pay slips, preventing errors during database connections or network disruptions.",
      learnings:
        "Gained hands-on experience in Java database integration (JDBC), managing database transactions, implementing input validation filters, and setting up role-based conditional rendering.",
      futureImprovements: [
        "Add employee self-service profile updates and approval workflows.",
        "Implement paginated search and dynamic reporting panels.",
      ],
      github: "https://github.com/rk4790385-png",
      demo: null,
    },
    {
      slug: "hospital-management-system",
      title: "Hospital Management System",
      subtitle: "Healthcare Administration Platform",
      desc: "An enterprise-grade hospital management system built to coordinate patient care, staff scheduling, and clinical documentation.",
      status: "Completed",
      role: "System Architect",
      duration: "Feb 2024 — May 2024",
      stack: ["Java", "Spring Boot", "MySQL", "REST APIs", "HTML5", "CSS3", "JavaScript"],
      features: [
        "Patient registration, appointment scheduling, and doctor allocation",
        "Secure administrative dashboard with bed and staff management",
        "Automated billing and invoice generation for treatment cycles",
        "Role-based access controls for doctors, nurses, and administrators",
      ],
      problemStatement:
        "Hospitals often manage patient details, appointments, and billing through disconnected spreadsheets and manual workflows, causing delays in care coordination, admission tracking, and financial reconciliation.",
      architecture:
        "Designed as a RESTful backend using Spring Boot with MySQL for relational data persistence. The frontend uses responsive HTML and JavaScript templates to deliver a dependable, accessible hospital admin experience.",
      challenges:
        "Synchronizing patient, appointment, and billing data while preserving consistency across multiple user roles and workflow states.",
      learnings:
        "Strengthened service design for multi-role systems, learned to implement secure REST abstractions, and improved data integrity handling for healthcare operations.",
      futureImprovements: [
        "Integrate notifications for patient reminders and doctor schedule updates.",
        "Add analytics dashboards for occupancy, revenue, and patient throughput.",
      ],
      github: "https://github.com/rk4790385-png",
      demo: null,
    },
  ] as Project[],
  certifications: [] as { title: string; issuer: string; date: string; tech: string; link?: string }[],
  achievements: [
    { title: "Academic Excellence", desc: "Maintaining a solid CGPA of 6.97 in Artificial Intelligence and Data Science branch." },
    { title: "Coding Milestones", desc: "Solving multiple coding problems across platform challenges, establishing core logic proficiency." },
    { title: "Project Milestones", desc: "Built functional desktop applications in Java and full-stack interfaces, translating theoretical knowledge to practice." },
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
    {
      name: "LeetCode",
      handle: "@rk4790385-png",
      stat: "DSA & Problem Solving challenge profile",
      url: "#",
    },
    {
      name: "HackerRank",
      handle: "@rk4790385-png",
      stat: "SQL & Java gold badge profile",
      url: "#",
    },
  ],
  stats: [
    { label: "Major Projects", value: "3+" },
    { label: "Graduate", value: "2026" },
    { label: "Primary Language", value: "Java" },
    { label: "Specialization", value: "AI & DS" },
  ],
};

export type Portfolio = typeof portfolio;
