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
              <span className="text-muted-foreground">Open to work</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
            Hi, I'm
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-6xl">
            {portfolio.name}
          </h1>
          <p className="mt-3 text-xl sm:text-2xl">
            I'm a <TypingText words={portfolio.typing} />
          </p>
          <p className="mt-5 max-w-xl text-muted-foreground">{portfolio.tagline}</p>

          <div className="mt-7 flex flex-wrap gap-3">
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
              <CounterCard key={s.label} {...s} />
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

function CounterCard({ label, value }: { label: string; value: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const duration = 1200;
          const start = performance.now();
          const step = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            setN(Math.floor(value * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <div ref={ref} className="glass rounded-2xl p-4 text-center">
      <div className="font-display text-2xl font-bold gradient-text">{n}{value > 0 ? "+" : ""}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
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
          <p className="text-lg text-foreground/90">{portfolio.about.summary}</p>
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
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Tech stack" title="Skills & toolbox">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.skills.map((g, gi) => (
          <motion.div
            key={g.group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {g.group}
            </h3>
            <div className="space-y-3">
              {g.items.map((s) => (
                <div key={s.name}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span>{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                    />
                  </div>
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
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/30 opacity-60 transition-opacity group-hover:opacity-100" />
              <div className="relative m-px rounded-[calc(1rem-1px)] bg-card p-6">
                <div className="mb-4 grid h-32 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/10">
                  <span className="font-display text-2xl font-bold opacity-70">{p.title.split(" ").map(w => w[0]).slice(0,3).join("")}</span>
                </div>
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <Badge key={s} variant="outline" className="border-primary/30 bg-primary/10 text-xs">{s}</Badge>
                  ))}
                </div>
                <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                  {p.features.map((f) => (<li key={f}>• {f}</li>))}
                </ul>
                <div className="mt-5 flex gap-2">
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <a href={p.github || portfolio.socials.github} target="_blank" rel="noreferrer">
                      <Github className="mr-1.5 h-3.5 w-3.5" /> Code
                    </a>
                  </Button>
                  {p.demo ? (
                    <Button asChild size="sm" className="flex-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Live
                      </a>
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" className="flex-1 opacity-60 cursor-not-allowed" disabled>
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certifications" eyebrow="Credentials" title="Certifications">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {portfolio.certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-5"
          >
            <Award className="mb-3 h-6 w-6 text-accent" />
            <h3 className="font-medium leading-snug">{c.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
          </motion.div>
        ))}
      </div>
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
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
              <p className="mt-1 text-sm text-accent">{p.stat}</p>
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
      <div className="glass grid items-center gap-6 rounded-3xl p-8 md:grid-cols-[1fr_1.2fr]">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/15 via-secondary/10 to-transparent p-6">
          <FileText className="h-8 w-8 text-accent" />
          <div className="mt-4 space-y-2">
            <div className="h-3 w-1/2 rounded bg-muted" />
            <div className="h-2 w-3/4 rounded bg-muted" />
            <div className="h-2 w-2/3 rounded bg-muted" />
            <div className="mt-4 h-2 w-full rounded bg-muted" />
            <div className="h-2 w-5/6 rounded bg-muted" />
            <div className="h-2 w-4/6 rounded bg-muted" />
          </div>
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold">A snapshot of my journey</h3>
          <p className="mt-2 text-muted-foreground">
            Download my latest resume for a concise overview of my skills, education, and projects —
            tailored for Software Developer, Java Developer, and Internship opportunities.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                <FileText className="mr-2 h-4 w-4" /> View Resume
              </a>
            </Button>
            <Button asChild variant="outline">
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
    // EmailJS-ready: wire up later with publishable keys.
    toast.success("Thanks! Your message has been queued. I'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };
  return (
    <Section id="contact" eyebrow="Let's talk" title="Get in touch">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-3">
          {[
            { icon: Mail, label: "Email", value: portfolio.contact.email, href: `mailto:${portfolio.contact.email}` },
            { icon: Phone, label: "Phone", value: portfolio.contact.phone, href: `tel:${portfolio.contact.phone}` },
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
                <div className="truncate text-sm">{value}</div>
              </div>
            </a>
          ))}
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
          <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-[var(--shadow-elegant)]">
            <Send className="mr-2 h-4 w-4" /> Send message
          </Button>
        </form>
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
            Aspiring Software Engineer with a foundation in Java, SQL, web technologies, and data science.
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
          <div className="flex gap-2">
            <SocialIcon href={portfolio.socials.linkedin} label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialIcon>
            <SocialIcon href={portfolio.socials.github} label="GitHub"><Github className="h-4 w-4" /></SocialIcon>
            <SocialIcon href={portfolio.socials.leetcode} label="LeetCode"><Code2 className="h-4 w-4" /></SocialIcon>
            <SocialIcon href={`mailto:${portfolio.contact.email}`} label="Email"><Mail className="h-4 w-4" /></SocialIcon>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {portfolio.name}. Crafted with React, Tailwind & Framer Motion.
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
    <div className="min-h-screen">
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