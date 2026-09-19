import { useState, useEffect, useRef } from "react";
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Code2, ChevronDown, Terminal, Layers, GitBranch, Zap, Monitor, Send, Menu, X } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────

type Theme = "light" | "dark";

// ── Tech Stack Data ────────────────────────────────────────────────────────
const techStack = [
  { name: "React", icon: "⚛", color: "text-cyan-500", bg: "bg-cyan-50 dark:bg-cyan-950/40", border: "border-cyan-200 dark:border-cyan-800" },
  { name: "Redux", icon: "⬡", color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-950/40", border: "border-purple-200 dark:border-purple-800" },
  { name: "Node.js", icon: "⬢", color: "text-green-600", bg: "bg-green-50 dark:bg-green-950/40", border: "border-green-200 dark:border-green-800" },
  { name: "Express", icon: "⚙️", color: "text-slate-500", bg: "bg-slate-50 dark:bg-slate-950/40", border: "border-slate-200 dark:border-slate-800" },
  { name: "Tailwind", icon: "◈", color: "text-teal-500", bg: "bg-teal-50 dark:bg-teal-950/40", border: "border-teal-200 dark:border-teal-800" },
  { name: "PHP", icon: "🐘", color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-950/40", border: "border-indigo-200 dark:border-indigo-800" },
  { name: "Laravel", icon: "◉", color: "text-red-500", bg: "bg-red-50 dark:bg-red-950/40", border: "border-red-200 dark:border-red-800" },
  { name: "MySQL", icon: "🛢️", color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-950/40", border: "border-orange-200 dark:border-orange-800" },
  { name: "MongoDB", icon: "🍃", color: "text-green-500", bg: "bg-green-50 dark:bg-green-950/40", border: "border-green-200 dark:border-green-800" },
  { name: "Docker", icon: "🐳", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-950/40", border: "border-blue-200 dark:border-blue-800" },
  { name: "WordPress", icon: "◎", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-950/40", border: "border-blue-200 dark:border-blue-800" },
];
// ── Projects Data ──────────────────────────────────────────────────────────
const projects = [
  {
    title: "AyAuto",
    subtitle: "Plateforme automobile",
    description: "Site vitrine pour une concession automobile avec catalogue dynamique, filtres de recherche et formulaire de contact.",
    tags: ["WordPress", "WooCommerce", "PHP", "CSS"],
    color: "from-blue-500 to-indigo-600",
    accent: "bg-blue-500",
    icon: "🚗",
    link: "#",
  },
  {
    title: "Dar L'Hout",
    subtitle: "Restaurant & Livraison",
    description: "Site web de restaurant avec menu interactif, système de réservation en ligne et intégration livraison.",
    tags: ["WordPress", "Elementor", "WooCommerce"],
    color: "from-emerald-500 to-teal-600",
    accent: "bg-emerald-500",
    icon: "🐟",
    link: "#",
  },
  {
    title: "E-School",
    subtitle: "Plateforme e-learning",
    description: "Application éducative complète avec authentification, tableau de bord étudiant, cours en ligne et suivi de progression.",
    tags: ["React", "Laravel", "MySQL", "Tailwind"],
    color: "from-violet-500 to-purple-600",
    accent: "bg-violet-500",
    icon: "📚",
    link: "#",
  },
];

// ── Methodology Cards ──────────────────────────────────────────────────────

const methodCards = [
  {
    icon: <Zap size={22} />,
    title: "Méthode Agile",
    desc: "Sprints itératifs, livraisons régulières et adaptation continue aux besoins du client.",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    icon: <Layers size={22} />,
    title: "Gestion Jira",
    desc: "Suivi des tâches, backlogs priorisés et coordination d'équipe en environnement agile.",
    color: "text-violet-500",
    bg: "bg-violet-50 dark:bg-violet-950/30",
  },
  {
    icon: <GitBranch size={22} />,
    title: "Git Versioning",
    desc: "Branches structurées, pull requests et historique de commits clair pour chaque projet.",
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
  },
];

// ── Abstract Tech Illustration ─────────────────────────────────────────────

function TechIllustration({ dark }: { dark: boolean }) {
  return (
    <div className="relative w-full max-w-sm mx-auto select-none" aria-hidden="true">
      {/* Outer ring */}
      <div className={`absolute inset-0 rounded-full border-2 ${dark ? "border-blue-800/40" : "border-blue-200/60"} animate-[spin_20s_linear_infinite]`} />
      <div className={`absolute inset-4 rounded-full border ${dark ? "border-indigo-700/30" : "border-indigo-200/40"} animate-[spin_15s_linear_infinite_reverse]`} />

      {/* Center card */}
      <div className={`relative mx-auto w-64 h-64 rounded-3xl ${dark ? "bg-[#1a1d27] border border-[#2a2f42]" : "bg-white border border-blue-100"} shadow-2xl flex items-center justify-center overflow-hidden`}>
        {/* Grid pattern */}
        <div className={`absolute inset-0 opacity-10`}
          style={{
            backgroundImage: `linear-gradient(${dark ? "#60a5fa" : "#2563eb"} 1px, transparent 1px), linear-gradient(90deg, ${dark ? "#60a5fa" : "#2563eb"} 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Floating badges */}
        <div className={`absolute top-4 left-4 px-2 py-1 rounded-md font-mono text-xs ${dark ? "bg-blue-900/60 text-blue-300 border border-blue-700/40" : "bg-blue-50 text-blue-600 border border-blue-200"}`}>
          &lt;React /&gt;
        </div>
        <div className={`absolute bottom-6 right-4 px-2 py-1 rounded-md font-mono text-xs ${dark ? "bg-red-900/40 text-red-300 border border-red-700/40" : "bg-red-50 text-red-500 border border-red-200"}`}>
          Laravel
        </div>
        <div className={`absolute top-8 right-5 w-2 h-2 rounded-full ${dark ? "bg-blue-400" : "bg-blue-500"} animate-pulse`} />
        <div className={`absolute bottom-10 left-5 w-1.5 h-1.5 rounded-full ${dark ? "bg-violet-400" : "bg-violet-500"} animate-pulse`} />

        {/* Central logo */}
        <div className="z-10 text-center">
          <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-3xl mb-2 ${dark ? "bg-gradient-to-br from-blue-500 to-indigo-600" : "bg-gradient-to-br from-blue-500 to-indigo-600"} shadow-lg shadow-blue-500/30`}>
            <Code2 size={32} className="text-white" />
          </div>
          <p className={`font-mono text-xs ${dark ? "text-blue-300" : "text-blue-600"}`}>full-stack dev</p>
        </div>

        {/* Corner decorations */}
        <div className={`absolute bottom-4 left-4 font-mono text-xs ${dark ? "text-slate-600" : "text-slate-300"}`}>&#47;&#47; v2.0</div>
      </div>

      {/* Orbiting dots */}
      <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${dark ? "bg-blue-500" : "bg-blue-400"} shadow-lg shadow-blue-400/50`} />
      </div>
      <div className="absolute inset-0 animate-[spin_12s_linear_infinite_reverse]">
        <div className={`absolute bottom-0 right-1/4 w-2 h-2 rounded-full ${dark ? "bg-violet-500" : "bg-violet-400"} shadow-lg shadow-violet-400/50`} />
      </div>
    </div>
  );
}

// ── Dark Mode Toggle ───────────────────────────────────────────────────────

function ThemeToggle({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${dark ? "bg-blue-600" : "bg-slate-200"}`}
    >
      <span
        className={`inline-flex h-5 w-5 items-center justify-center rounded-full shadow-md transition-transform duration-300 ${dark ? "translate-x-8 bg-white" : "translate-x-1 bg-white"}`}
      >
        {dark
          ? <Moon size={11} className="text-blue-600" />
          : <Sun size={11} className="text-amber-500" />
        }
      </span>
    </button>
  );
}

// ── Main App ───────────────────────────────────────────────────────────────

export default function App() {
  const [dark, setDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    ["hero", "about", "stack", "projects", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 3500);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground transition-colors duration-300"
      style={{ fontFamily: "'Inter', 'Plus Jakarta Sans', sans-serif" }}
    >

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${dark ? "bg-[#0f1117]/90 border-b border-[#2a2f42]" : "bg-white/90 border-b border-slate-200"} backdrop-blur-md`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-md shadow-blue-500/20 bg-gradient-to-br from-blue-500 to-indigo-600 group-hover:shadow-blue-500/40 transition-shadow`}>
              AB
            </div>
            <span className="font-semibold text-sm tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Aya Belghazi
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeSection === l.href.replace("#", "") ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle dark={dark} toggle={() => setDark(!dark)} />
            <button
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-t ${dark ? "border-[#2a2f42] bg-[#0f1117]" : "border-slate-200 bg-white"} px-6 py-4 flex flex-col gap-1`}>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section id="hero" ref={heroRef} className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div>
            {/* Status badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8 border ${dark ? "bg-blue-950/40 border-blue-800/60 text-blue-300" : "bg-blue-50 border-blue-200 text-blue-700"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Disponible pour stage / alternance
            </div>

            <h1
              className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Développeuse
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">Full Stack</span>
            </h1>

            <p className={`text-lg leading-relaxed mb-8 max-w-md ${dark ? "text-slate-400" : "text-slate-600"}`}>
              Création d'applications web sur-mesure avec{" "}
              <span className={`font-semibold ${dark ? "text-slate-200" : "text-slate-800"}`}>React & Laravel</span>
              {" "}— du design au déploiement.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
              >
                <Monitor size={16} />
                Voir les Projets
              </a>
              <a
                href="#"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all ${dark ? "border-[#2a2f42] text-slate-200 hover:bg-[#1a1d27]" : "border-slate-200 text-slate-700 hover:bg-slate-50"}`}
              >
                <ExternalLink size={16} />
                Télécharger CV
              </a>
            </div>

            {/* Stats row */}
            <div className={`mt-12 pt-8 border-t flex gap-8 ${dark ? "border-[#2a2f42]" : "border-slate-100"}`}>
              {[
                { label: "Projets réalisés", value: "3+" },
                { label: "Technologies", value: "7+" },
                { label: "Mois de stage", value: "6" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.value}</p>
                  <p className={`text-xs mt-0.5 ${dark ? "text-slate-500" : "text-slate-400"}`}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: illustration */}
          <div className="flex justify-center">
            <TechIllustration dark={dark} />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-16">
          <a href="#about" className={`flex flex-col items-center gap-1 text-xs ${dark ? "text-slate-600" : "text-slate-400"} hover:text-blue-500 transition-colors`}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>scroll</span>
            <ChevronDown size={16} className="animate-bounce" />
          </a>
        </div>
      </section>

    {/* ── About & Experience ──────────────────────────────────────────── */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className={`font-mono text-xs uppercase tracking-widest mb-3 ${dark ? "text-blue-400" : "text-blue-600"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              01 — À propos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Parcours & Expérience
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-6">
              <p className={`text-base leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>
                Développeuse Full Stack spécialisée dans la création de solutions web robustes et évolutives. Experte de l'écosystème <span className={`font-semibold ${dark ? "text-slate-100" : "text-slate-900"}`}>React.js et Laravel</span>, je transforme des concepts complexes en interfaces intuitives, en garantissant un code propre et des performances optimales du back-end jusqu'à l'expérience utilisateur.
              </p>
              <p className={`text-base leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>
                Mon stage professionnel chez <span className={`font-semibold ${dark ? "text-slate-100" : "text-slate-900"}`}>2M Crafters</span> m'a permis d'intervenir concrètement sur des architectures SaaS en environnement Agile. De la conception de bases de données relationnelles à l'intégration de tableaux de bord interactifs, j'ai acquis une solide expérience pratique. Habituée à travailler en équipe, je suis immédiatement disponible pour apporter ma rigueur et mon dynamisme à de nouveaux projets innovants.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { year: "Avril – Mai 2026", role: "Stagiaire Développeuse Full Stack", org: "2M Crafters (Télétravail)", color: "bg-blue-500" },
                  { year: "2024 – 2026", role: "Technicienne Spécialisée Full Stack", org: "ISMONTIC, Tanger", color: "bg-violet-500" },
                ].map((item) => (
                  <div key={item.role} className={`flex gap-4 items-start p-4 rounded-xl border ${dark ? "border-[#2a2f42] bg-[#1a1d27]" : "border-slate-100 bg-white"}`}>
                    <div className={`mt-0.5 w-2.5 h-2.5 rounded-full flex-shrink-0 ${item.color}`} />
                    <div>
                      <div className="flex items-baseline gap-3">
                        <p className={`font-semibold text-sm ${dark ? "text-slate-100" : "text-slate-900"}`}>{item.role}</p>
                        <span className={`text-xs font-mono ${dark ? "text-slate-500" : "text-slate-400"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>{item.year}</span>
                      </div>
                      <p className={`text-sm mt-0.5 ${dark ? "text-slate-400" : "text-slate-500"}`}>{item.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              {methodCards.map((card) => (
                <div key={card.title} className={`p-5 rounded-xl border transition-all hover:shadow-md ${dark ? "border-[#2a2f42] bg-[#1a1d27] hover:border-blue-800/60" : "border-slate-100 bg-white hover:border-blue-200"}`}>
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${card.bg} ${card.color}`}>
                    {card.icon}
                  </div>
                  <h3 className={`font-semibold text-sm mb-1 ${dark ? "text-slate-100" : "text-slate-900"}`} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {card.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${dark ? "text-slate-400" : "text-slate-500"}`}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ──────────────────────────────────────────────────── */}
      <section id="stack" className={`py-24 px-6 ${dark ? "bg-[#1a1d27]" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto">

          <div className="mb-16">
            <p className={`font-mono text-xs uppercase tracking-widest mb-3 ${dark ? "text-blue-400" : "text-blue-600"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              02 — Stack technique
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Technologies maîtrisées
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className={`flex flex-col items-center gap-3 p-5 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-lg cursor-default ${tech.bg} ${dark ? `border-opacity-50 ${tech.border}` : tech.border}`}
              >
                <span className={`text-3xl ${tech.color}`}>{tech.icon}</span>
                <span className={`text-xs font-semibold tracking-wide ${dark ? "text-slate-200" : "text-slate-700"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Secondary tools */}
          <div className={`mt-10 flex flex-wrap gap-2`}>
            <p className={`w-full text-xs uppercase tracking-widest mb-2 font-mono ${dark ? "text-slate-600" : "text-slate-400"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Outils & Environnement
            </p>
            {["Git & GitHub", "VS Code", "Figma", "Postman", "MySQL", "REST API", "Jira"].map((tool) => (
              <span
                key={tool}
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono border ${dark ? "bg-[#0f1117] border-[#2a2f42] text-slate-400" : "bg-slate-50 border-slate-200 text-slate-600"}`}
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ────────────────────────────────────────────────────── */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="mb-16">
            <p className={`font-mono text-xs uppercase tracking-widest mb-3 ${dark ? "text-blue-400" : "text-blue-600"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              03 — Projets
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Réalisations récentes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`group flex flex-col rounded-2xl border overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 ${dark ? "border-[#2a2f42] bg-[#1a1d27]" : "border-slate-100 bg-white"}`}
              >
                {/* Mockup area */}
                <div className={`relative h-44 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                  {/* Screen mockup */}
                  <div className={`relative w-36 h-24 rounded-lg ${dark ? "bg-[#0f1117]/80" : "bg-white/20"} border border-white/20 backdrop-blur-sm shadow-xl`}>
                    {/* Browser chrome */}
                    <div className={`h-5 rounded-t-lg flex items-center gap-1 px-2 ${dark ? "bg-[#1a1d27]/90" : "bg-white/30"}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="p-2 text-center mt-2">
                      <span className="text-2xl">{project.icon}</span>
                    </div>
                  </div>
                  {/* Decorative dots */}
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10" />
                  <div className="absolute bottom-2 left-4 w-8 h-8 rounded-full bg-white/10" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <p className={`text-xs font-mono mb-1 ${dark ? "text-slate-500" : "text-slate-400"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {project.subtitle}
                  </p>
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {project.title}
                  </h3>
                  <p className={`text-sm leading-relaxed flex-1 ${dark ? "text-slate-400" : "text-slate-500"}`}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 rounded-md text-xs font-mono ${dark ? "bg-[#0f1117] text-slate-400 border border-[#2a2f42]" : "bg-slate-50 text-slate-600 border border-slate-200"}`}
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={project.link}
                    className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${dark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"}`}
                  >
                    <Code2 size={14} />
                    Voir le code
                    <ExternalLink size={12} className="opacity-60" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────────────── */}
      <section id="contact" className={`py-24 px-6 ${dark ? "bg-[#1a1d27]" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto">

          <div className="mb-16">
            <p className={`font-mono text-xs uppercase tracking-widest mb-3 ${dark ? "text-blue-400" : "text-blue-600"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              04 — Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Travaillons ensemble
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Left: info */}
            <div>
              <p className={`text-base leading-relaxed mb-8 ${dark ? "text-slate-400" : "text-slate-600"}`}>
                Je suis actuellement à la recherche d'opportunités de stage ou d'alternance. N'hésitez pas à me contacter pour discuter de vos projets ou de collaborations.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:aya.belghazi@example.com"
                  className={`flex items-center gap-3 text-sm group ${dark ? "text-slate-300 hover:text-blue-400" : "text-slate-700 hover:text-blue-600"} transition-colors`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${dark ? "bg-[#0f1117] border border-[#2a2f42]" : "bg-slate-50 border border-slate-200"}`}>
                    <Mail size={16} className={dark ? "text-blue-400" : "text-blue-500"} />
                  </div>
                  aya.belghazi@example.com
                </a>

                {/* Social links */}
                <div className="flex gap-3 pt-2">
                  {[
                    { icon: <Github size={18} />, label: "GitHub", href: "#" },
                    { icon: <Linkedin size={18} />, label: "LinkedIn", href: "#" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${dark ? "border-[#2a2f42] bg-[#0f1117] text-slate-300 hover:border-blue-700 hover:text-blue-400" : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300 hover:text-blue-600"}`}
                    >
                      {s.icon}
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {formSent && (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-sm flex items-center gap-2">
                  <span>✓</span> Message envoyé avec succès !
                </div>
              )}

              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${dark ? "text-slate-400" : "text-slate-600"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Nom
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                  placeholder="Votre nom"
                  className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all ${dark ? "bg-[#0f1117] border-[#2a2f42] text-slate-200 placeholder-slate-600 focus:border-blue-600" : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-400"} focus:ring-2 focus:ring-blue-500/20`}
                />
              </div>

              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${dark ? "text-slate-400" : "text-slate-600"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState((p) => ({ ...p, email: e.target.value }))}
                  placeholder="votre@email.com"
                  className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all ${dark ? "bg-[#0f1117] border-[#2a2f42] text-slate-200 placeholder-slate-600 focus:border-blue-600" : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-400"} focus:ring-2 focus:ring-blue-500/20`}
                />
              </div>

              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${dark ? "text-slate-400" : "text-slate-600"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
                  placeholder="Décrivez votre projet ou votre demande..."
                  className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all resize-none ${dark ? "bg-[#0f1117] border-[#2a2f42] text-slate-200 placeholder-slate-600 focus:border-blue-600" : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-400"} focus:ring-2 focus:ring-blue-500/20`}
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all"
              >
                <Send size={15} />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className={`border-t py-8 px-6 ${dark ? "border-[#2a2f42] bg-[#0f1117]" : "border-slate-100 bg-slate-50"}`}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
              AB
            </div>
            <span className={`text-sm font-medium ${dark ? "text-slate-400" : "text-slate-600"}`}>Aya Belghazi</span>
          </div>

          <p className={`text-xs font-mono ${dark ? "text-slate-600" : "text-slate-400"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            © 2024 — Développeuse Full Stack, Tanger, Maroc
          </p>

          <div className="flex items-center gap-3">
            {[
              { icon: <Github size={16} />, href: "#", label: "GitHub" },
              { icon: <Linkedin size={16} />, href: "#", label: "LinkedIn" },
              { icon: <Mail size={16} />, href: "#contact", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className={`p-2 rounded-lg transition-colors ${dark ? "text-slate-500 hover:text-blue-400 hover:bg-[#1a1d27]" : "text-slate-400 hover:text-blue-500 hover:bg-white"}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
