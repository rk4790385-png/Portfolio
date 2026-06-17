import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/portfolio/Portfolio";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "K Raj — AI & Data Science Student & Java Developer" },
      { name: "description", content: "Portfolio of K Raj — Java, SQL, HTML, CSS, JavaScript, and AI & Data Science. Open to Software Developer and Internship roles." },
      { property: "og:title", content: "K Raj — AI & Data Science Student & Java Developer" },
      { property: "og:description", content: "Java • SQL • HTML/CSS • JavaScript • AI & Data Science. Projects, skills, education, and contact." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Portfolio />
      <Toaster richColors position="top-right" />
    </>
  );
}
