import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  Badge,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X } from "lucide-react";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const project = portfolio.projects.find((p) => p.slug === params.slug);
    return {
      meta: [
        {
          title: project
            ? `${project.title} — Case Study`
            : "Project Case Study — K Raj Portfolio",
        },
        {
          name: "description",
          content: project
            ? `${project.desc} — A case study by K Raj exploring the problem, solution, architecture, and learnings.`
            : "Explore detailed project case studies from K Raj's portfolio.",
        },
      ],
    };
  },
  component: ProjectDetailPage,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Project not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The project you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link to="/#projects">View all projects</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function ProjectDetailPage() {
  const { slug } = useParams({ from: "/projects/$slug" });
  const allowedProjectSlugs = [
    "employee-management-system",
    "campus-placement-portal",
    "hospital-management-system",
  ];
  const project = portfolio.projects.find(
    (p) => p.slug === slug && allowedProjectSlugs.includes(p.slug),
  );
  const [activeTab, setActiveTab] = useState("Overview");

  if (!project) {
    return <ProjectNotFound />;
  }

  const tabs = [
    "Overview",
    "Problem",
    "Architecture",
    "Features",
    "Technology Stack",
    "Challenges",
    "Learnings",
    "Future Improvements",
  ];

  const techGroups = useMemo(() => {
    const groups: Record<string, string[]> = {};
    project.stack.forEach((tech) => {
      const category = tech === "React" || tech === "HTML5" || tech === "CSS3" || tech === "JavaScript" ? "Frontend" :
                      tech === "Spring Boot" || tech === "Java" || tech === "REST APIs" ? "Backend" :
                      tech === "MySQL" || tech === "JDBC" ? "Database" :
                      tech === "TypeScript" || tech === "Vite" ? "Build Tools" :
                      tech === "Tailwind CSS" || tech === "Framer Motion" ? "Styling" : "Other";
      
      if (!groups[category]) groups[category] = [];
      if (!groups[category].includes(tech)) groups[category].push(tech);
    });
    return groups;
  }, [project.stack]);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8 sm:py-8">
        {/* Back Link */}
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* Main Case Study Modal Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-8 overflow-hidden rounded-[2rem] border border-border/80 bg-background/95 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.65)]"
        >
          <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/5 pointer-events-none" />
          <div className="flex h-full flex-col overflow-hidden">
            {/* Header */}
            <div className="sticky top-0 z-20 border-b border-border/70 bg-background/95/90 backdrop-blur-xl">
              <div className="px-5 py-4 sm:px-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-3xl border border-border/70 bg-slate-950 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.6)]">
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 text-xs uppercase tracking-[0.25em] text-muted-foreground text-center px-3">
                        {project.title}
                      </div>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground/90">
                        {project.subtitle}
                      </p>
                      <h1 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl">
                        {project.title}
                      </h1>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground/90 sm:text-base">
                        {project.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button
                      asChild
                      size="sm"
                      className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-black shadow-[0_14px_30px_-18px_rgba(249,115,22,0.8)] hover:opacity-95"
                    >
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Source
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-foreground hover:border-accent/50 hover:text-accent"
                      >
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    )}
                    <Button
                      asChild
                      size="sm"
                      variant="ghost"
                      className="rounded-full"
                    >
                      <Link to="/#projects">
                        <X className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="border-t border-border/70 px-5 py-3 sm:px-6">
                <div
                  className="flex w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-border/50 scrollbar-track-transparent"
                  role="tablist"
                  aria-label="Project case study tabs"
                >
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      role="tab"
                      aria-selected={activeTab === tab}
                      onClick={() => setActiveTab(tab)}
                      className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                        activeTab === tab
                          ? "border-accent bg-accent/10 text-accent shadow-[0_10px_30px_-20px_rgba(249,115,22,0.35)]"
                          : "border-border/70 bg-background/80 text-muted-foreground hover:border-accent/40 hover:text-foreground"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div
              className="flex-1 min-h-0 overflow-y-auto px-5 pb-6 sm:px-6"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-8 pt-6"
                >
                  {activeTab === "Overview" && (
                    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                      <div className="space-y-6">
                        <div className="rounded-[1.75rem] border border-border/70 bg-card/85 p-6 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.55)]">
                          <h4 className="text-sm uppercase tracking-[0.3em] text-muted-foreground/80">
                            Overview
                          </h4>
                          <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">
                            {project.desc}
                          </p>
                          <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            <div className="rounded-3xl border border-border/70 bg-background/80 p-4">
                              <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/80">
                                Status
                              </p>
                              <p className="mt-2 text-sm font-semibold text-foreground">
                                {project.status}
                              </p>
                            </div>
                            <div className="rounded-3xl border border-border/70 bg-background/80 p-4">
                              <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/80">
                                Category
                              </p>
                              <p className="mt-2 text-sm font-semibold text-foreground">
                                {project.subtitle}
                              </p>
                            </div>
                            <div className="rounded-3xl border border-border/70 bg-background/80 p-4">
                              <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/80">
                                Duration
                              </p>
                              <p className="mt-2 text-sm font-semibold text-foreground">
                                {project.duration}
                              </p>
                            </div>
                            <div className="rounded-3xl border border-border/70 bg-background/80 p-4">
                              <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/80">
                                Role
                              </p>
                              <p className="mt-2 text-sm font-semibold text-foreground">
                                {project.role}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="rounded-[1.75rem] border border-border/70 bg-card/85 p-6">
                            <h5 className="text-sm font-semibold text-foreground">
                              What was solved
                            </h5>
                            <ul className="mt-4 space-y-3 text-sm text-muted-foreground/90">
                              <li className="flex gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                                {project.problemStatement}
                              </li>
                            </ul>
                          </div>
                          <div className="rounded-[1.75rem] border border-border/70 bg-card/85 p-6">
                            <h5 className="text-sm font-semibold text-foreground">
                              Design principles
                            </h5>
                            <ul className="mt-4 space-y-3 text-sm text-muted-foreground/90">
                              <li className="flex gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                                {project.stack.join(" · ")}
                              </li>
                              <li className="flex gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                                {project.role}
                              </li>
                              <li className="flex gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                                {project.status} · {project.duration}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="rounded-[1.75rem] border border-border/70 bg-card/85 p-6">
                          <h5 className="text-sm font-semibold text-foreground">
                            Quick facts
                          </h5>
                          <div className="mt-4 grid gap-3 text-sm text-muted-foreground/90 sm:grid-cols-2">
                            <div className="rounded-3xl bg-background/80 p-4">
                              Stack count
                              <div className="mt-2 text-lg font-semibold text-foreground">
                                {project.stack.length}
                              </div>
                            </div>
                            <div className="rounded-3xl bg-background/80 p-4">
                              Features
                              <div className="mt-2 text-lg font-semibold text-foreground">
                                {project.features.length}
                              </div>
                            </div>
                            <div className="rounded-3xl bg-background/80 p-4">
                              Delivery
                              <div className="mt-2 text-lg font-semibold text-foreground">
                                Web App
                              </div>
                            </div>
                            <div className="rounded-3xl bg-background/80 p-4">
                              Project type
                              <div className="mt-2 text-lg font-semibold text-foreground">
                                Web Application
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-[1.75rem] border border-border/70 bg-card/85 p-6">
                          <h5 className="text-sm font-semibold text-foreground">
                            Stack
                          </h5>
                          <div className="mt-4 flex flex-wrap gap-3">
                            {project.stack.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-border/60 bg-background/80 px-4 py-2 text-xs text-muted-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.stack.length > 4 && (
                              <span className="rounded-full border border-border/60 bg-background/80 px-4 py-2 text-xs text-muted-foreground">
                                +{project.stack.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "Problem" && (
                    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                      <div className="space-y-4">
                        <div className="rounded-[1.75rem] border border-border/70 bg-card/85 p-6">
                          <h4 className="text-lg font-semibold text-foreground">
                            Problem
                          </h4>
                          <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">
                            {project.problemStatement}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="rounded-[1.75rem] border border-border/70 bg-background/80 p-6">
                          <h5 className="text-sm font-semibold text-foreground">
                            Summary
                          </h5>
                          <p className="mt-3 text-sm text-muted-foreground/90">
                            {project.problemStatement}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "Architecture" && (
                    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                      <div className="rounded-[1.75rem] border border-border/70 bg-card/85 p-6">
                        <h4 className="text-lg font-semibold text-foreground">
                          Architecture
                        </h4>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">
                          {project.architecture}
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="rounded-[1.75rem] border border-border/70 bg-background/80 p-6">
                          <h5 className="text-sm font-semibold text-foreground">
                            Structure
                          </h5>
                          <ul className="mt-4 space-y-3 text-sm text-muted-foreground/90">
                            <li className="flex gap-3">
                              <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                              {project.stack.join(" · ")}
                            </li>
                            <li className="flex gap-3">
                              <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                              {project.role}
                            </li>
                            <li className="flex gap-3">
                              <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                              {project.status} · {project.duration}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "Features" && (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {project.features.map((feat) => (
                        <div
                          key={feat}
                          className="rounded-[1.75rem] border border-border/70 bg-card/85 p-6 shadow-[0_22px_55px_-35px_rgba(0,0,0,0.45)]"
                        >
                          <h5 className="text-base font-semibold text-foreground">
                            Feature
                          </h5>
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground/90">
                            {feat}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "Technology Stack" && techGroups && (
                    <div className="grid gap-6 lg:grid-cols-2">
                      {Object.entries(techGroups).map(([group, items]) => (
                        <div
                          key={group}
                          className="rounded-[1.75rem] border border-border/70 bg-card/85 p-6"
                        >
                          <h4 className="text-lg font-semibold text-foreground">
                            {group}
                          </h4>
                          <div className="mt-4 flex flex-wrap gap-3">
                            {items.length > 0 ? (
                              items.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="outline"
                                  className="border-border/60 bg-background/80 text-[11px] text-foreground"
                                >
                                  {tech}
                                </Badge>
                              ))
                            ) : (
                              <p className="text-sm text-muted-foreground/80">
                                No items available.
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "Challenges" && (
                    <div className="space-y-4">
                      <div className="rounded-[1.75rem] border border-border/70 bg-card/85 p-6">
                        <h4 className="text-lg font-semibold text-foreground">
                          Challenges
                        </h4>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">
                          {project.challenges}
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "Learnings" && (
                    <div className="space-y-4">
                      <div className="rounded-[1.75rem] border border-border/70 bg-card/85 p-6">
                        <h4 className="text-lg font-semibold text-foreground">
                          Learnings
                        </h4>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">
                          {project.learnings}
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "Future Improvements" && (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {project.futureImprovements ? (
                        project.futureImprovements.map((item) => (
                          <div
                            key={item}
                            className="rounded-[1.75rem] border border-border/70 bg-card/85 p-6"
                          >
                            <p className="text-sm leading-relaxed text-muted-foreground/90">
                              {item}
                            </p>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-muted-foreground/80">
                          No future improvements documented yet.
                        </p>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
