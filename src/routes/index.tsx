import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/portfolio/Portfolio";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "K Raj — Artificial Intelligence & Data Science Student & Java Developer" },
      { name: "description", content: "Portfolio of K Raj — Artificial Intelligence & Data Science student. Strong skills in Java, SQL, Spring Boot, MySQL, and Web Development. Seeking Software Developer and QA Internship opportunities." },
      { name: "keywords", content: "K Raj, Raj K, Software Developer Portfolio, Java Developer Intern, QA Intern, Spring Boot, SQL, Raichur, Karnataka, Government Engineering College Bidar" },
      { property: "og:title", content: "K Raj — Artificial Intelligence & Data Science Student & Java Developer" },
      { property: "og:description", content: "Java • SQL • Spring Boot • React • Software Testing. Projects, certifications, open source, and contact." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "K Raj Portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "K Raj — AI & DS Student & Java Developer" },
      { name: "twitter:description", content: "Java, SQL, Spring Boot, and Web Development Portfolio. Seeking Software Developer & QA Internship roles." },
    ],
  }),
  component: Index,
});

function Index() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "K Raj",
    "jobTitle": "Artificial Intelligence & Data Science Student & Java Developer",
    "url": "https://github.com/rk4790385-png",
    "sameAs": [
      "https://www.linkedin.com/in/raj-k-5571372ba",
      "https://github.com/rk4790385-png"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Government Engineering College, Bidar"
    },
    "knowsAbout": [
      "Java",
      "Python",
      "SQL",
      "Spring Boot",
      "REST APIs",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Manual Testing",
      "Selenium"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Portfolio />
      <Toaster richColors position="top-right" />
    </>
  );
}

