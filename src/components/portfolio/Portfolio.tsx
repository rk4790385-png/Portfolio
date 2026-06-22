import { useEffect, useMemo, useRef, useState } from "react";
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
import profileImg from "@/assets/profile.jpg";
import { portfolio } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const NAV = [
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
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
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
    <section id={id} className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 sm:mb-14"
        >
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> {eyebrow}
            </div>
          )}
          <h2 className="text-3xl font-bold sm:text-5xl">
            <span className="gradient-text">{title}</span>
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function Nav() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 sm:px-6 transition-all ${
          scrolled ? "glass shadow-lg" : ""
        }`}
      >
        <a href="#home" className="flex items-center gap-2 py-3 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground">
            KR
          </span>
          <span className="hidden sm:inline">K Raj<span className="text-accent">.dev</span></span>
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`relative rounded-full px-3 py-2 text-sm transition-colors ${
                active === n.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {n.label}
              {active === n.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 ring-1 ring-primary/30"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-[var(--shadow-elegant)] hover:opacity-95">
            <a href="#contact">Contact Me</a>
          </Button>
          <button
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card/40 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-6xl px-4 lg:hidden"
          >
            <div className="glass grid grid-cols-2 gap-1 rounded-2xl p-3">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-3 py-2 text-sm ${
                    active === n.id
                      ? "bg-gradient-to-r from-primary/25 to-secondary/25 text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {n.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
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
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative order-1 mx-auto w-full max-w-sm lg:order-none"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/40 via-secondary/40 to-accent/30 blur-2xl" />
          <div className="glass relative overflow-hidden rounded-[2rem] p-2">
            <img
              src={profileImg}
              alt="Portrait of K Raj"
              width={1024}
              height={1024}
              className="aspect-square w-full rounded-[1.6rem] object-cover"
            />
          </div>
          <div className="animate-float absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 text-sm shadow-[var(--shadow-glow)]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <span className="text-muted-foreground font-medium">Open to work</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="flex flex-col gap-1">
            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Hi, I'm
            </p>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight sm:text-6xl text-foreground">
              {portfolio.name}
            </h1>
            <p className="mt-1 text-sm font-semibold text-accent uppercase tracking-wider">
              {portfolio.role}
            </p>
          </div>
          <p className="mt-3 text-xl sm:text-2xl">
            I'm a <TypingText words={portfolio.typing} />
          </p>
          <p className="mt-5 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">{portfolio.tagline}</p>

          {/* Hero bullets */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-muted-foreground/95">
            {portfolio.heroBullets.map((bullet) => (
              <span key={bullet} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                {bullet}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border bg-card/40 transition-transform hover:-translate-y-0.5">
              <a href="#projects">
                <FolderGit2 className="mr-2 h-4 w-4" /> View Projects
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="transition-transform hover:-translate-y-0.5">
              <a href="#contact">
                <Send className="mr-2 h-4 w-4" /> Contact Me
              </a>
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3 text-muted-foreground">
            <SocialIcon href={portfolio.socials.linkedin} label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialIcon>
            <SocialIcon href={portfolio.socials.github} label="GitHub"><Github className="h-4 w-4" /></SocialIcon>
            <SocialIcon href={portfolio.socials.leetcode} label="LeetCode"><Code2 className="h-4 w-4" /></SocialIcon>
            <SocialIcon href={portfolio.socials.hackerrank} label="HackerRank"><Trophy className="h-4 w-4" /></SocialIcon>
            <SocialIcon href={`mailto:${portfolio.contact.email}`} label="Email"><Mail className="h-4 w-4" /></SocialIcon>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {portfolio.stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
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
  return (
    <Section id="about" eyebrow="About me" title="A short intro">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8"
        >
          <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">{portfolio.about.summary}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {portfolio.about.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary to-secondary" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {portfolio.about.quick.map((q, i) => {
            const icons = [MapPin, GraduationCap, Building2, Mail, Phone, Calendar, Sparkles];
            const Ico = icons[i] ?? Sparkles;
            return (
              <motion.div
                key={q.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -0.5 }}
                className="glass flex items-center gap-3 rounded-2xl p-4 transition-transform hover:-translate-y-0.5"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 text-foreground">
                  <Ico className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{q.label}</div>
                  <div className="truncate text-sm">{q.value}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Currently Learning Section */}
      <div className="mt-12">
        <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground text-center">
          Currently Learning
        </h3>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {portfolio.about.currentlyLearning.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass flex flex-col justify-between rounded-xl p-4 text-center border-t-2 border-t-primary/40 hover:border-primary/60 transition-all"
            >
              <span className="font-semibold text-xs sm:text-sm text-foreground">{item.name}</span>
              <span className="text-[10px] text-muted-foreground mt-2">{item.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Tech stack" title="Skills & toolbox">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.skills.map((g, gi) => (
          <motion.div
            key={g.group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
            className="glass rounded-2xl p-6 hover:border-primary/20 transition-colors"
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground border-b border-border/50 pb-2">
              {g.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <div
                  key={s.name}
                  className="group relative flex items-center gap-1.5 rounded-xl border border-border bg-card/30 px-3 py-1.5 text-xs transition-all hover:bg-card hover:border-primary/30"
                >
                  <span className="font-medium text-foreground">{s.name}</span>
                  <Badge 
                    variant="outline" 
                    className={`
                      text-[9px] px-1.5 py-0 border-none rounded-md font-semibold font-sans uppercase tracking-wider
                      ${s.proficiency === "Advanced" ? "bg-primary/25 text-primary-foreground font-bold" : ""}
                      ${s.proficiency === "Fluent" ? "bg-accent/25 text-foreground font-bold" : ""}
                      ${s.proficiency === "Intermediate" ? "bg-secondary/25 text-foreground font-semibold" : ""}
                      ${s.proficiency === "Familiar" ? "bg-muted text-muted-foreground" : ""}
                      ${s.proficiency === "Learning" ? "bg-success/20 text-success font-semibold animate-pulse" : ""}
                    `}
                  >
                    {s.proficiency}
                  </Badge>
                </div>
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

interface LocalProject {
  title: string;
  subtitle: string;
  desc: string;
  status: "Completed" | "In Progress";
  stack: string[];
  features: string[];
  problemStatement: string;
  architecture: string;
  challenges: string;
  learnings: string;
  github: string;
  demo: string | null;
}

function Projects() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<LocalProject | null>(null);

  const tags = useMemo(() => {
    const set = new Set<string>();
    portfolio.projects.forEach((p) => p.stack.forEach((s) => set.add(s)));
    return ["All", ...Array.from(set).slice(0, 8)];
  }, []);

  const filtered = (portfolio.projects as LocalProject[]).filter((p) => {
    const matchQ = (p.title + p.desc).toLowerCase().includes(query.toLowerCase());
    const matchT = filter === "All" || p.stack.includes(filter);
    return matchQ && matchT;
  });

  return (
    <Section id="projects" eyebrow="Selected work" title="Projects">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9 bg-card/40"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                filter === t
                  ? "border-primary/50 bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative m-px rounded-[calc(1rem-1px)] bg-card p-5 flex flex-col justify-between h-full min-h-[380px]">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span 
                      className={`text-[9px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full border
                        ${p.status === "Completed" ? "bg-success/10 border-success/30 text-success" : "bg-amber-500/10 border-amber-500/30 text-amber-500 animate-pulse"}
                      `}
                    >
                      {p.status}
                    </span>
                    <span className="text-[10px] text-muted-foreground/60 uppercase tracking-widest font-semibold">{p.subtitle}</span>
                  </div>

                  {/* macOS Browser Mockup */}
                  <div className="mb-4 overflow-hidden rounded-xl border border-border bg-slate-950 aspect-[16/9] relative group-hover:border-primary/20 transition-all flex flex-col justify-between shadow-inner">
                    <div className="bg-slate-900 px-3 py-2 flex items-center gap-1.5 border-b border-border/30 shrink-0">
                      <span className="h-2 w-2 rounded-full bg-red-500/70" />
                      <span className="h-2 w-2 rounded-full bg-amber-500/70" />
                      <span className="h-2 w-2 rounded-full bg-green-500/70" />
                      <div className="h-3.5 flex-1 mx-3 rounded-md bg-slate-950/60 border border-border/20 flex items-center justify-center text-[7px] text-muted-foreground truncate px-2 font-mono">
                        {p.title.toLowerCase().replace(/\s+/g, "-")}.kraj.dev
                      </div>
                    </div>
                    
                    <div className="p-3.5 flex-1 flex flex-col justify-between text-muted-foreground relative select-none overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent opacity-40 pointer-events-none" />

                      {p.title === "Portfolio Website" && (
                        <div className="h-full flex flex-col justify-center items-center text-center relative z-10">
                          <div className="h-5 w-5 rounded bg-gradient-to-br from-primary to-secondary text-[8px] font-bold text-white flex items-center justify-center mb-1">KR</div>
                          <span className="font-display font-bold text-[10px] text-foreground">K Raj Portfolio</span>
                          <span className="text-[7px] text-accent mt-0.5">Java Developer · 2026 Grad</span>
                          <div className="mt-2.5 flex gap-1 items-center">
                            <div className="h-2 w-8 rounded-full bg-primary/20 border border-primary/30 text-[5px] text-center flex items-center justify-center font-bold">About</div>
                            <div className="h-2 w-8 rounded-full bg-secondary/20 border border-secondary/30 text-[5px] text-center flex items-center justify-center font-bold">Projects</div>
                          </div>
                        </div>
                      )}

                      {p.title === "Campus Placement Portal" && (
                        <div className="h-full flex flex-col justify-between relative z-10 text-[9px]">
                          <div className="flex justify-between items-center pb-1.5 border-b border-border/30">
                            <span className="font-bold text-[8px] tracking-wide text-foreground">PLACEMENT HUB</span>
                            <div className="h-2.5 w-8 rounded bg-primary/20 border border-primary/30" />
                          </div>
                          <div className="grid grid-cols-3 gap-1 mt-1.5">
                            <div className="glass rounded p-1 text-[6px] text-center">
                              <span className="block font-bold text-foreground">12</span> Active Jobs
                            </div>
                            <div className="glass rounded p-1 text-[6px] text-center">
                              <span className="block font-bold text-foreground">85%</span> Placed
                            </div>
                            <div className="glass rounded p-1 text-[6px] text-center">
                              <span className="block font-bold text-foreground">14</span> Recruiters
                            </div>
                          </div>
                          <div className="h-1.5 w-full rounded bg-muted/20 mt-2" />
                        </div>
                      )}

                      {p.title === "Employee Management System" && (
                        <div className="h-full flex flex-col justify-between relative z-10 text-[9px]">
                          <div className="flex justify-between items-center pb-1 border-b border-border/30">
                            <span className="font-bold text-[8px] text-foreground">DIRECTORY</span>
                            <span className="text-[6px] text-success font-bold bg-success/15 px-1.5 rounded-full">Secure CRUD</span>
                          </div>
                          <div className="space-y-1 mt-1.5">
                            <div className="flex justify-between items-center px-1.5 py-0.5 rounded bg-slate-900/60 border border-border/20">
                              <div className="flex items-center gap-1.5">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                <span className="text-[6px] font-medium text-foreground">Raj K.</span>
                              </div>
                              <span className="text-[5px] text-muted-foreground">Software Eng</span>
                            </div>
                            <div className="flex justify-between items-center px-1.5 py-0.5 rounded bg-slate-900/60 border border-border/20">
                              <div className="flex items-center gap-1.5">
                                <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                                <span className="text-[6px] font-medium text-foreground">Rahul S.</span>
                              </div>
                              <span className="text-[5px] text-muted-foreground">QA Analyst</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">{p.desc}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-1">
                    {p.stack.slice(0, 4).map((s) => (
                      <Badge key={s} variant="outline" className="border-primary/20 bg-primary/5 text-[9px] py-0.5">{s}</Badge>
                    ))}
                    {p.stack.length > 4 && (
                      <Badge variant="outline" className="border-border bg-card/60 text-[9px] py-0.5">+{p.stack.length - 4} more</Badge>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex gap-2">
                  <Button 
                    onClick={() => setSelectedProject(p)} 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 text-xs border-border bg-card/30 hover:border-primary/40 hover:bg-card/50 transition-colors"
                  >
                    Read More
                  </Button>
                  {p.github && (
                    <Button asChild size="sm" variant="ghost" className="px-3 hover:text-foreground">
                      <a href={p.github} target="_blank" rel="noreferrer" aria-label="View Source Code">
                        <Github className="h-4 w-4" />
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
              className="group relative overflow-hidden rounded-2xl border border-dashed border-muted-foreground/35 bg-transparent p-6 flex flex-col justify-center items-center text-center min-h-[380px]"
            >
              <FolderGit2 className="h-8 w-8 text-muted-foreground/60 mb-2.5" />
              <h3 className="font-display text-sm font-semibold text-muted-foreground">More Projects Coming Soon</h3>
              <p className="mt-1 text-xs text-muted-foreground/70 max-w-[200px]">
                Stay tuned as I continue expanding my full-stack and machine learning portfolio.
              </p>
            </motion.article>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/85 backdrop-blur-md overflow-y-auto"
          >
            <div className="absolute inset-0 cursor-default" onClick={() => setSelectedProject(null)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="glass relative w-full max-w-2xl rounded-3xl p-6 md:p-8 overflow-hidden max-h-[85vh] overflow-y-auto shadow-2xl border-t border-t-primary/30"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-border bg-card/40 hover:bg-card hover:text-foreground text-muted-foreground transition-colors z-20"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="mb-6 relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border
                    ${selectedProject.status === "Completed" ? "bg-success/15 border-success/30 text-success" : "bg-amber-500/15 border-amber-500/30 text-amber-500 animate-pulse"}
                  `}>
                    {selectedProject.status}
                  </span>
                  <span className="text-[10px] text-muted-foreground/80 font-medium uppercase tracking-wider">{selectedProject.subtitle}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground pr-8">{selectedProject.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{selectedProject.desc}</p>
              </div>

              <div className="space-y-6 text-sm leading-relaxed border-t border-border/40 pt-6 text-muted-foreground/90 relative z-10">
                <div>
                  <h4 className="text-xs uppercase font-bold text-foreground tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-accent" /> Problem Statement
                  </h4>
                  <p className="text-xs sm:text-sm">{selectedProject.problemStatement}</p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold text-foreground tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5 text-accent" /> Architecture & Workflow
                  </h4>
                  <p className="text-xs sm:text-sm">{selectedProject.architecture}</p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold text-foreground tracking-wider mb-2 flex items-center gap-1.5">
                    <Code2 className="h-3.5 w-3.5 text-accent" /> Key Features
                  </h4>
                  <ul className="list-disc list-inside space-y-1.5 text-xs">
                    {selectedProject.features.map((feat) => (
                      <li key={feat} className="text-[11px] sm:text-xs">{feat}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold text-foreground tracking-wider mb-2 flex items-center gap-1.5">
                    <FolderGit2 className="h-3.5 w-3.5 text-accent" /> Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.stack.map((s) => (
                      <Badge key={s} variant="outline" className="border-primary/30 bg-primary/10 text-foreground font-medium text-[10px]">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold text-foreground tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Trophy className="h-3.5 w-3.5 text-accent" /> Challenges Faced
                  </h4>
                  <p className="text-xs sm:text-sm">{selectedProject.challenges}</p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold text-foreground tracking-wider mb-1.5 flex items-center gap-1.5">
                    <GraduationCap className="h-3.5 w-3.5 text-accent" /> Key Learnings
                  </h4>
                  <p className="text-xs sm:text-sm">{selectedProject.learnings}</p>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-border/40 flex flex-wrap gap-3 relative z-10">
                <Button asChild className="flex-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-[var(--shadow-elegant)] hover:opacity-95">
                  <a href={selectedProject.github} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Source Code
                  </a>
                </Button>
                {selectedProject.demo ? (
                  <Button asChild variant="outline" className="flex-1 border-border bg-card/40">
                    <a href={selectedProject.demo} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                ) : (
                  <Button variant="outline" className="flex-1 opacity-50 cursor-not-allowed border-border bg-card/10 text-muted-foreground/60" disabled>
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo Unavailable
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
            {NAV.slice(0, 8).map((n) => (
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
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen font-sans antialiased bg-background text-foreground">
      <Loader done={ready} />
      <ScrollProgress />
      <Nav />
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