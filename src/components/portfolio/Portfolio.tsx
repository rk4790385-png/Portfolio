import { useEffect, useMemo, useState, useRef } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  ArrowUp,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Trophy,
  FolderGit2,
  FileText,
  Send,
  Sparkles,
  Calendar,
  Building2,
  Search,
  Menu,
  X,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import profileImg from "@/assets/profile.jpg";
import { portfolio } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Navigation } from "./Navigation";

// Footer nav items - all sections for reference
const ALL_NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "coding", label: "Coding" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    
    // Track only main navigation sections
    const mainSections = ["home", "about", "projects", "skills", "experience", "contact"];
    mainSections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    
    return () => obs.disconnect();
  }, []);
  return active;
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 sm:mb-14"
        >
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-border bg-background/70 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-muted-foreground/80">
              <Sparkles className="h-4 w-4 text-accent" /> {eyebrow}
            </div>
          )}
          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.02em] text-foreground sm:text-5xl">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function Nav({ activeSection }: { activeSection: string }) {
  return <Navigation activeSection={activeSection} />;
}

function TypingText({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[idx % words.length];
    const speed = del ? 40 : 90;
    const t = setTimeout(() => {
      const next = del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1);
      setText(next);
      if (!del && next === word) setTimeout(() => setDel(true), 1400);
      else if (del && next === "") {
        setDel(false);
        setIdx((i) => i + 1);
      }
    }, speed);
return () => clearTimeout(t);
  }, [text, del, idx, words]);
  return <span className="caret gradient-text font-semibold">{text}</span>;
}

function StatCard({ label, value }: { label: string; value: string }) {
  const [displayValue, setDisplayValue] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const numericMatch = value.match(/^(\d+)(\+)?$/);
          if (numericMatch) {
            const targetVal = parseInt(numericMatch[1], 10);
            const isPlus = !!numericMatch[2];
            const startVal = targetVal > 1000 ? targetVal - 30 : 0;
            
            const duration = 1200;
            const start = performance.now();
            let animId: number;

            const step = (t: number) => {
              const p = Math.min(1, (t - start) / duration);
              const current = Math.floor(startVal + (targetVal - startVal) * (1 - Math.pow(1 - p, 3)));
              setDisplayValue(`${current}${isPlus ? "+" : ""}`);
              if (p < 1) {
                animId = requestAnimationFrame(step);
              }
            };
            animId = requestAnimationFrame(step);
          } else {
            setDisplayValue(value);
          }
          io.disconnect();
        }
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="glass rounded-2xl p-4 text-center transition-all hover:border-primary/45 hover:shadow-[var(--shadow-glow)]">
      <div className="font-display text-2xl font-bold gradient-text">{displayValue || "—"}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(circle at 20% 20%, rgba(249,115,22,0.14), transparent 28%), radial-gradient(circle at 85% 10%, rgba(16,185,129,0.12), transparent 30%)" }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-border/80 bg-background/80 px-4 py-2 text-xs uppercase tracking-[0.28em] text-muted-foreground/80 shadow-[0_15px_60px_-45px_rgba(0,0,0,0.45)]">
            <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_6px_rgba(249,115,22,0.12)]" />
            Creative Software Engineer
          </div>

          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground/70">Hello, I’m</p>
            <h1 className="text-5xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
              {portfolio.name}
            </h1>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.28em] text-accent/90">I’m currently</p>
              <p className="text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
                <TypingText words={portfolio.typing} />
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground/80 max-w-2xl">
                {portfolio.tagline}
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {portfolio.heroBullets.map((bullet) => (
              <motion.div
                key={bullet}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-border bg-card/80 px-5 py-4 text-sm text-foreground shadow-[0_18px_70px_-46px_rgba(0,0,0,0.5)]"
              >
                <span className="block text-xs uppercase tracking-[0.28em] text-muted-foreground/70">{bullet}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black shadow-[0_24px_45px_-25px_rgba(249,115,22,0.8)] hover:opacity-95">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border border-border bg-background/70 px-6 py-3 text-sm text-foreground hover:border-accent/70">
              <a href="#projects">
                <FolderGit2 className="mr-2 h-4 w-4" /> View Projects
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent/15 via-transparent to-transparent blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-card/80 p-1 shadow-[0_25px_75px_-35px_rgba(0,0,0,0.45)]">
            <img
              src={profileImg}
              alt="Portrait of K Raj"
              width={1024}
              height={1024}
              className="aspect-[4/5] w-full rounded-[1.75rem] object-cover"
            />
          </div>
          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.3em] text-foreground shadow-xl shadow-black/10 backdrop-blur-xl">
            {portfolio.role}
          </div>
          <div className="absolute -bottom-5 right-6 rounded-3xl border border-border/70 bg-background/90 px-4 py-3 text-sm shadow-[0_20px_70px_-35px_rgba(0,0,0,0.5)]">
            <div className="font-semibold text-accent">Open to Internships</div>
            <div className="text-xs text-muted-foreground/80">2026 Graduate · Problem Solver</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="glass grid h-10 w-10 place-items-center rounded-xl transition-all hover:-translate-y-0.5 hover:text-foreground hover:shadow-[var(--shadow-glow)]"
    >
      {children}
    </a>
  );
}

function About() {
  const journey = [
    {
      title: "SSLC",
      subtitle: "Vidhya Bharathi CBSE School",
      period: "2019 — 2020",
      note: "Built the foundation of analytical thinking and problem solving.",
    },
    {
      title: "Pre-University",
      subtitle: "Justice Shivaraj Patil PU College",
      period: "2020 — 2022",
      note: "Focused on mathematics, computer science, and applied logic.",
    },
    {
      title: "Engineering",
      subtitle: "Government Engineering College, Bidar",
      period: "2022 — 2026",
      note: "Studying AI, data science, and building real-world software systems.",
    },
    {
      title: "Projects",
      subtitle: "Portfolio, Campus Placement Portal, EMS",
      period: "2024 — Present",
      note: "Designing premium user experiences and end-to-end applications.",
    },
    {
      title: "Internship Goals",
      subtitle: "Software Development & QA",
      period: "2026",
      note: "Seeking industry mentorship, hands-on backend work, and QA exposure.",
    },
  ];

  return (
    <Section id="about" eyebrow="About me" title="Story & journey">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/80 p-6 shadow-[0_40px_90px_-50px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute left-5 top-6 h-14 w-14 rounded-full border border-accent/20 bg-accent/5" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border/60 bg-black/20">
            <img
              src={profileImg}
              alt="Portrait of K Raj"
              width={1024}
              height={1024}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl border border-border/70 bg-background/90 p-4">
              <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground/80">Current focus</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                {portfolio.about.summary}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {portfolio.about.quick.map((item) => (
                <div key={item.label} className="rounded-3xl border border-border/60 bg-background/80 p-4">
                  <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground/70">{item.label}</div>
                  <div className="mt-2 text-sm font-semibold text-foreground">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-accent/90">My approach</p>
            <h3 className="max-w-2xl text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              I build thoughtful software with clean structure, clarity, and real-world impact.
            </h3>
            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground/90">
              <p>{portfolio.about.highlights[0]}</p>
              <p>{portfolio.about.highlights[1]}</p>
              <p>{portfolio.about.highlights[2]}</p>
            </div>
          </div>

          <div className="grid gap-4">
            {portfolio.about.highlights.slice(3).map((highlight) => (
              <div key={highlight} className="rounded-3xl border border-border/60 bg-background/80 p-5 text-sm text-foreground/90">
                <div className="mb-2 text-xs uppercase tracking-[0.28em] text-muted-foreground/70">Highlight</div>
                <p>{highlight}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-card/85 p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground/70">Career timeline</p>
                <h4 className="text-2xl font-semibold text-foreground">From school to projects to future goals</h4>
              </div>
            </div>
            <div className="space-y-4">
              {journey.map((item) => (
                <div key={item.title} className="group grid gap-2 rounded-3xl border border-border/60 bg-background/70 p-4 transition hover:border-accent/50">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-base font-semibold text-foreground">{item.title}</p>
                      <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground/80">{item.period}</p>
                    </div>
                    <div className="rounded-full border border-border bg-card/80 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/80">
                      {item.subtitle}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground/90">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Tech stack" title="Skills & toolbox">
      <div className="grid gap-8 lg:grid-cols-2">
        {portfolio.skills.map((g, gi) => (
          <motion.div
            key={g.group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
            className="rounded-[2rem] border border-border/70 bg-background/70 p-6 shadow-[0_30px_80px_-55px_rgba(0,0,0,0.5)]"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-foreground">{g.group}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.28em] text-muted-foreground/70">Core competencies</p>
              </div>
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-accent">
                {g.items.length} skills
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {g.items.map((s) => (
                <motion.div
                  key={s.name}
                  whileHover={{ y: -3 }}
                  className="group rounded-3xl border border-border/70 bg-card/90 p-4 transition-shadow"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{s.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.28em] text-muted-foreground/70">{s.proficiency}</p>
                    </div>
                    <span className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-accent to-secondary shadow-[0_0_0_6px_rgba(249,115,22,0.1)]" />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-muted-foreground/80">
                    <span className="rounded-full border border-border/70 bg-background/80 px-3 py-1">Premium</span>
                    <span className="rounded-full border border-border/70 bg-background/80 px-3 py-1">Refined</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Timeline({ items, icon: Ico }: { items: { title: string; sub: string; meta: string; bullets?: string[]; stack?: string[] }[]; icon: typeof GraduationCap }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent sm:left-6" />
      <div className="space-y-6">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative pl-12 sm:pl-16"
          >
            <span className="absolute left-0 top-1 grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-[var(--shadow-elegant)] sm:h-12 sm:w-12">
              <Ico className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <div className="glass rounded-2xl p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                <span className="text-xs text-muted-foreground">{it.meta}</span>
              </div>
              <p className="text-sm text-accent">{it.sub}</p>
              {it.bullets && (
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  {it.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              )}
              {it.stack && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {it.stack.map((s) => (
                    <Badge key={s} variant="outline" className="border-primary/30 bg-primary/10 text-xs text-foreground">{s}</Badge>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic journey">
      <Timeline
        icon={GraduationCap}
        items={portfolio.education.map((e) => ({
          title: e.degree,
          sub: e.institution,
          meta: e.period,
          bullets: [e.detail],
        }))}
      />
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <Timeline
        icon={Briefcase}
        items={portfolio.experience.map((e) => ({
          title: e.role,
          sub: e.company,
          meta: e.period,
          bullets: e.bullets,
          stack: e.stack,
        }))}
      />
    </Section>
  );
}

function Projects() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string>("All");

  const tags = useMemo(() => {
    const set = new Set<string>();
    portfolio.projects.forEach((p) => p.stack.forEach((s) => set.add(s)));
    return ["All", ...Array.from(set).slice(0, 8)];
  }, []);

  const filtered = portfolio.projects.filter((p) => {
    const matchQ = (p.title + p.desc).toLowerCase().includes(query.toLowerCase());
    const matchT = filter === "All" || p.stack.includes(filter);
    return matchQ && matchT;
  });

  return (
    <Section id="projects" eyebrow="Selected work" title="Projects">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9 bg-background/70 text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.25em] transition-colors ${
                filter === t
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-muted-foreground hover:border-accent/50 hover:text-accent"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[2rem] border border-border/70 bg-background/70 shadow-[0_35px_90px_-45px_rgba(0,0,0,0.55)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.24),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_30%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="relative p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className={`rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] ${p.status === "Completed" ? "bg-success/10 text-success" : "bg-amber-500/10 text-amber-500"}`}>
                      {p.status}
                    </span>
                    <span className="rounded-3xl border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                      {p.subtitle}
                    </span>
                  </div>
                  <div className="mt-20 max-w-xl">
                    <h3 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">{p.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/80">{p.desc}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-5 p-6 sm:p-8">
                <div className="flex flex-wrap gap-2">
                  {p.stack.slice(0, 4).map((s) => (
                    <span key={s} className="rounded-full border border-border/60 bg-card/80 px-3 py-1 text-[11px] text-muted-foreground">
                      {s}
                    </span>
                  ))}
                  {p.stack.length > 4 && (
                    <span className="rounded-full border border-border/60 bg-card/80 px-3 py-1 text-[11px] text-muted-foreground">
                      +{p.stack.length - 4} more
                    </span>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-border/60 bg-card/90 p-4">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground/80">Role</p>
                    <p className="mt-2 text-sm font-semibold text-foreground">{p.role}</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-border/60 bg-card/90 p-4">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground/80">Duration</p>
                    <p className="mt-2 text-sm font-semibold text-foreground">{p.duration}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild size="sm" className="rounded-full bg-accent px-5 py-3 text-xs font-semibold text-black shadow-[0_18px_35px_-20px_rgba(249,115,22,0.7)] hover:opacity-95">
                    <Link to={`/projects/${p.slug}`}>Read Case Study</Link>
                  </Button>
                  {p.github && (
                    <Button asChild size="sm" variant="outline" className="rounded-full border border-border bg-background/80 px-5 py-3 text-xs text-foreground hover:border-accent/50 hover:text-accent">
                      <a href={p.github} target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
          {query === "" && (filter === "All" || filter === "Java") && (
            <motion.article
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex min-h-[380px] flex-col items-center justify-center gap-4 rounded-[2rem] border border-dashed border-muted-foreground/35 bg-background/70 p-8 text-center"
            >
              <FolderGit2 className="h-10 w-10 text-muted-foreground/70" />
              <h3 className="text-lg font-semibold text-foreground">More Projects Coming Soon</h3>
              <p className="max-w-xs text-sm text-muted-foreground/80">
                Elegant concept work and new full-stack builds are on the horizon.
              </p>
            </motion.article>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}

function GitHubSection() {
  const weeks = 24;
  const days = 7;
  const contributions = useMemo(() => {
    const grid = [];
    for (let w = 0; w < weeks; w++) {
      const week = [];
      for (let d = 0; d < days; d++) {
        const rand = Math.random();
        let level = 0;
        if (rand > 0.82) level = 4;
        else if (rand > 0.65) level = 3;
        else if (rand > 0.45) level = 2;
        else if (rand > 0.15) level = 1;
        week.push(level);
      }
      grid.push(week);
    }
    return grid;
  }, []);

  return (
    <Section id="github" eyebrow="Open Source" title="GitHub Activity">
      <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 flex flex-col justify-between border-t-2 border-t-primary"
        >
          <div>
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-full border border-primary/30 bg-muted">
                <img src={profileImg} alt="K Raj GitHub Avatar" className="h-full w-full object-cover" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-base text-foreground">K Raj</h3>
                <p className="text-xs text-muted-foreground">@rk4790385-png</p>
                <p className="mt-1 text-[10px] text-accent font-medium uppercase tracking-wider">Java & QA Intern</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="glass rounded-xl p-2.5">
                <span className="block font-bold text-foreground text-sm">12</span>
                <span className="text-[9px] text-muted-foreground">Repos</span>
              </div>
              <div className="glass rounded-xl p-2.5">
                <span className="block font-bold text-foreground text-sm">180+</span>
                <span className="text-[9px] text-muted-foreground">Commits</span>
              </div>
              <div className="glass rounded-xl p-2.5">
                <span className="block font-bold text-foreground text-sm">3</span>
                <span className="text-[9px] text-muted-foreground">Starred</span>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Top Languages</h4>
              <div className="space-y-2">
                {[
                  { name: "Java", percent: 65, color: "bg-primary" },
                  { name: "SQL", percent: 20, color: "bg-accent" },
                  { name: "HTML/CSS/JS", percent: 15, color: "bg-secondary" },
                ].map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground text-[11px]">{lang.name}</span>
                    <div className="flex items-center gap-2 flex-1 mx-3">
                      <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                        <div className={`h-full ${lang.color}`} style={{ width: `${lang.percent}%` }} />
                      </div>
                    </div>
                    <span className="font-medium text-foreground text-[10px]">{lang.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button asChild size="sm" className="mt-6 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
            <a href="https://github.com/rk4790385-png" target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" /> View GitHub Profile
            </a>
          </Button>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Recent Contributions</h4>
              <span className="text-xs text-muted-foreground">180+ contributions this year</span>
            </div>
            <div className="overflow-x-auto">
              <div className="flex gap-[3px] min-w-[380px] justify-between">
                {contributions.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-[3px]">
                    {week.map((level, di) => {
                      const bgClasses = [
                        "bg-muted/20",
                        "bg-primary/20",
                        "bg-primary/45",
                        "bg-primary/70",
                        "bg-primary",
                      ];
                      return (
                        <div
                          key={di}
                          className={`h-2.5 w-2.5 rounded-sm transition-all hover:scale-125 ${bgClasses[level]}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3 flex items-center justify-end gap-1.5 text-[10px] text-muted-foreground">
              <span>Less</span>
              <div className="h-2 w-2 rounded-sm bg-muted/20" />
              <div className="h-2 w-2 rounded-sm bg-primary/20" />
              <div className="h-2 w-2 rounded-sm bg-primary/45" />
              <div className="h-2 w-2 rounded-sm bg-primary/70" />
              <div className="h-2 w-2 rounded-sm bg-primary" />
              <span>More</span>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                name: "Campus-Placement-Portal",
                desc: "Streamlines college placement workflows with candidate eligibility filtering and job post logs.",
                lang: "Java",
                langColor: "bg-primary",
              },
              {
                name: "Employee-Management-System",
                desc: "Enterprise directory log application featuring secure JDBC transactions and HR profile CRUD boards.",
                lang: "Java",
                langColor: "bg-primary",
              },
            ].map((repo, idx) => (
              <motion.a
                key={repo.name}
                href="https://github.com/rk4790385-png"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -3 }}
                className="glass rounded-xl p-4 hover:border-primary/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <FolderGit2 className="h-4 w-4 text-accent" />
                    <span className="font-semibold text-sm truncate text-foreground hover:text-primary transition-colors">{repo.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground/80 line-clamp-2 leading-relaxed">{repo.desc}</p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <span className={`h-2.5 w-2.5 rounded-full ${repo.langColor}`} />
                    <span>{repo.lang}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Sparkles className="h-3 w-3 text-amber-500" />
                    <span>Featured</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Certifications() {
  const hasCerts = portfolio.certifications && portfolio.certifications.length > 0;
  return (
    <Section id="certifications" eyebrow="Credentials" title="Certifications">
      {hasCerts ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              className="glass flex flex-col justify-between rounded-2xl p-5 hover:border-primary/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Award className="h-6 w-6 text-accent" />
                  <Badge variant="outline" className="text-[10px] border-primary/20 bg-primary/10">{c.tech}</Badge>
                </div>
                <h3 className="font-semibold leading-snug text-foreground">{c.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
                <p className="mt-2 text-[10px] text-muted-foreground/60">{c.date}</p>
              </div>
              {c.link && (
                <Button asChild size="sm" variant="ghost" className="mt-4 w-full text-xs hover:bg-card">
                  <a href={c.link} target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-1.5 h-3 w-3" /> View Credential
                  </a>
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 text-center max-w-lg mx-auto border border-dashed border-muted-foreground/30"
        >
          <Award className="mx-auto h-10 w-10 text-muted-foreground/60 mb-3" />
          <p className="text-muted-foreground text-sm font-medium">
            More certifications coming soon as I continue my learning journey.
          </p>
        </motion.div>
      )}
    </Section>
  );
}

function Achievements() {
  return (
    <Section id="achievements" eyebrow="Wins" title="Achievements">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass relative overflow-hidden rounded-2xl p-6"
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl" />
            <Trophy className="mb-3 h-6 w-6 text-accent" />
            <h3 className="font-semibold">{a.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function CodingProfiles() {
  return (
    <Section id="coding" eyebrow="Practice" title="Coding profiles">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {portfolio.codingProfiles.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="glass group flex items-center gap-4 rounded-2xl p-5 transition-shadow hover:shadow-[var(--shadow-elegant)]"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary font-display font-bold text-primary-foreground">
              {p.name.slice(0, 2).toUpperCase()}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{p.name}</h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </div>
              <p className="truncate text-xs text-muted-foreground">{p.handle}</p>
              <p className="mt-1 text-[11px] text-accent font-medium leading-tight">{p.stat}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

function Resume() {
  return (
    <Section id="resume" eyebrow="Document" title="My resume">
      <div className="glass grid items-center gap-8 rounded-3xl p-8 md:grid-cols-[1fr_1.2fr] hover:border-primary/20 transition-colors">
        {/* Document Mock Preview */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="relative aspect-[1/1.4] overflow-hidden rounded-2xl border border-border/80 bg-slate-950 p-6 shadow-2xl flex flex-col justify-between"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent pointer-events-none" />
          
          <div>
            <div className="flex justify-between items-center border-b border-border/40 pb-3">
              <div>
                <div className="h-4 w-20 rounded bg-foreground/90 font-bold text-[10px] text-center flex items-center justify-center text-background mb-1">K RAJ</div>
                <div className="h-2 w-32 rounded bg-muted-foreground/40" />
              </div>
              <div className="space-y-1">
                <div className="h-1.5 w-16 rounded bg-muted-foreground/30" />
                <div className="h-1.5 w-20 rounded bg-muted-foreground/30" />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="h-2.5 w-16 rounded bg-primary/40" />
              <div className="space-y-1 pl-1">
                <div className="h-1.5 w-full rounded bg-muted-foreground/20" />
                <div className="h-1.5 w-5/6 rounded bg-muted-foreground/25" />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="h-2.5 w-16 rounded bg-primary/40" />
              <div className="space-y-1 pl-1">
                <div className="h-1.5 w-11/12 rounded bg-muted-foreground/20" />
                <div className="h-1.5 w-full rounded bg-muted-foreground/20" />
                <div className="h-1.5 w-4/5 rounded bg-muted-foreground/25" />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="h-2.5 w-14 rounded bg-primary/40" />
              <div className="space-y-1 pl-1">
                <div className="h-1.5 w-full rounded bg-muted-foreground/20" />
                <div className="h-1.5 w-3/4 rounded bg-muted-foreground/25" />
              </div>
            </div>
          </div>

          <div className="border-t border-border/40 pt-3 flex justify-between items-center text-[8px] text-muted-foreground">
            <span>Skills: Java, Spring Boot, SQL, HTML/CSS/JS</span>
            <span>2026 Grad</span>
          </div>
        </motion.div>

        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-card/60 px-3 py-1 text-[11px] text-muted-foreground mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            Last Updated: June 2026
          </div>
          <h3 className="font-display text-2xl font-bold">Review my credentials</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            View or download my resume to see an in-depth summary of my technical training, 
            software projects, engineering skills, and academic profile. Ready for internship 
            and software developer role discussions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-[var(--shadow-elegant)] hover:opacity-95">
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                <FileText className="mr-2 h-4 w-4" /> View Resume
              </a>
            </Button>
            <Button asChild variant="outline" className="border-border bg-card/40">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thanks! Your message has been queued. I'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };
  return (
    <Section id="contact" eyebrow="Let's talk" title="Get in touch">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-3">
          {[
            { icon: Mail, label: "Email", value: portfolio.contact.email, href: `mailto:${portfolio.contact.email}` },
            { icon: Phone, label: "Phone", value: `+91 ${portfolio.contact.phone}`, href: `tel:${portfolio.contact.phone}` },
            { icon: MapPin, label: "Location", value: portfolio.contact.location },
            { icon: Linkedin, label: "LinkedIn", value: "in/raj-k-5571372ba", href: portfolio.socials.linkedin },
            { icon: Github, label: "GitHub", value: "@rk4790385-png", href: portfolio.socials.github },
          ].map(({ icon: Ico, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="glass flex items-center gap-3 rounded-2xl p-4 transition-transform hover:-translate-y-0.5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30">
                <Ico className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                <div className="truncate text-sm font-medium">{value}</div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground px-1">
            <Sparkles className="h-3 w-3 text-accent" />
            <span>I usually respond within 24 hours.</span>
          </div>

          <form onSubmit={onSubmit} className="glass space-y-4 rounded-3xl p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Name</label>
                <Input required name="name" placeholder="Your full name" className="bg-card/40" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Email</label>
                <Input required type="email" name="email" placeholder="you@company.com" className="bg-card/40" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Phone</label>
                <Input name="phone" placeholder="+91 ..." className="bg-card/40" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Subject</label>
                <Input required name="subject" placeholder="Internship opportunity" className="bg-card/40" />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <Textarea required name="message" rows={5} placeholder="Tell me about the role or project..." className="bg-card/40" />
            </div>
            <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-[var(--shadow-elegant)] hover:opacity-95">
              <Send className="mr-2 h-4 w-4" /> Send message
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative mt-12 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3 sm:px-8">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground">KR</span>
            K Raj<span className="text-accent">.dev</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Artificial Intelligence & Data Science Student & Java Developer.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Quick links</h4>
          <ul className="grid grid-cols-2 gap-y-1.5 text-sm">
            {ALL_NAV_ITEMS.slice(0, 8).map((n) => (
              <li key={n.id}><a href={`#${n.id}`} className="text-muted-foreground hover:text-foreground">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Connect</h4>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <SocialIcon href={portfolio.socials.linkedin} label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialIcon>
              <SocialIcon href={portfolio.socials.github} label="GitHub"><Github className="h-4 w-4" /></SocialIcon>
              <SocialIcon href={`mailto:${portfolio.contact.email}`} label="Email"><Mail className="h-4 w-4" /></SocialIcon>
            </div>
            <div className="text-xs text-muted-foreground space-y-0.5">
              <p>Email: {portfolio.contact.email}</p>
              <p>Phone: +91 {portfolio.contact.phone}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground flex flex-col gap-2 sm:flex-row sm:justify-between sm:px-8 max-w-6xl mx-auto">
        <span>© {new Date().getFullYear()} {portfolio.name}. All Rights Reserved.</span>
        <span>Designed & Developed by K Raj · Built with React + Tailwind CSS</span>
      </div>
    </footer>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-primary via-secondary to-accent"
    />
  );
}

function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-[var(--shadow-elegant)]"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function Loader({ done }: { done: boolean }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-14 w-14">
              <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-primary border-r-secondary" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary to-secondary opacity-60 blur" />
            </div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">Loading</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Portfolio() {
  const [ready, setReady] = useState(false);
  const activeSection = useActiveSection();
  
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen font-sans antialiased bg-background text-foreground">
      <Loader done={ready} />
      <ScrollProgress />
      <Nav activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <GitHubSection />
        <Certifications />
        <Achievements />
        <CodingProfiles />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}