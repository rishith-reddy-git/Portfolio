"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, Command, Github, Instagram, Linkedin, Mail, Menu, Send, Sparkles, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { focusAreas, navigation, projects, skillGroups, stats, timelineEntries, values, socialLinks, Project } from "../data/portfolio";
import { ResumeModal } from "./resume-modal";
import { ProjectModal } from "./project-modal";

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

function SectionTitle({ eyebrow, title, emphasis }: { eyebrow: string; title: string; emphasis?: string }) {
  return (
    <motion.div className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={reveal} transition={{ duration: 0.6 }}>
      <p className="eyebrow"><span />{eyebrow}</p>
      <h2>{title} {emphasis && <em>{emphasis}</em>}</h2>
    </motion.div>
  );
}

function CommandPalette({ open, onClose, onOpenResume }: { open: boolean; onClose: () => void; onOpenResume: () => void }) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="command-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
          <motion.div className="command-panel" initial={{ opacity: 0, y: 12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12 }} onMouseDown={(e) => e.stopPropagation()}>
            <div className="command-head">
              <Command size={17} />
              <span>Quick navigation</span>
              <kbd>ESC</kbd>
            </div>
            {navigation.map((item, index) => (
              <button key={item} onClick={() => go(item.toLowerCase())}>
                <span>0{index + 1}</span>
                {item}
                <ArrowUpRight size={15} />
              </button>
            ))}
            <button
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              style={{ borderTop: "1px dashed rgba(255,255,255,0.15)", background: "rgba(59,130,246,0.08)" }}
            >
              <span>📄</span>
              View Full Résumé
              <ArrowUpRight size={15} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Portfolio() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const [menuOpen, setMenuOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [sent, setSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const openCommand = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen(true);
      }
    };
    window.addEventListener("keydown", openCommand);
    return () => window.removeEventListener("keydown", openCommand);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.get("name")}`);
    const body = encodeURIComponent(String(form.get("message") || ""));
    window.location.href = `mailto:${socialLinks.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <main>
      <motion.div className="progress" style={{ scaleX: progress }} />
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      {/* Navigation Shell */}
      <header className="nav-shell">
        <a className="wordmark" href="#home" onClick={closeMenu}>
          SRR<span>•</span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navigation.slice(1).map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="command-button" onClick={() => setCommandOpen(true)} aria-label="Open quick navigation">
            <Command size={15} />
            <span>Menu (⌘K)</span>
          </button>
          <button className="resume-button" onClick={() => setResumeOpen(true)}>
            Request résumé <ArrowUpRight size={14} />
          </button>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-grid" />
        <div className="cursor-glow" />
        <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
          <motion.p variants={reveal} className="availability">
            <i />Available for ambitious opportunities
          </motion.p>
          <motion.p variants={reveal} className="hero-kicker">
            SOODINI
          </motion.p>
          <motion.h1 variants={reveal}>
            RISHITH<br />
            <span>REDDY</span>
          </motion.h1>
          <motion.p variants={reveal} className="hero-role">
            AI Developer <b>•</b> Full Stack Developer <b>•</b> Creative Technologist
          </motion.p>
          <motion.p variants={reveal} className="hero-description">
            Building intelligent software, creating impactful digital experiences, and leading innovation through technology.
          </motion.p>
          <motion.div variants={reveal} className="hero-buttons">
            <a className="primary-button" href="#projects">
              Explore projects <ArrowDown size={16} />
            </a>
            <button className="quiet-button" onClick={() => setResumeOpen(true)} style={{ background: "transparent", border: 0, color: "inherit", cursor: "pointer" }}>
              View Résumé <ArrowUpRight size={15} />
            </button>
          </motion.div>
        </motion.div>

        <motion.aside className="hero-card" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.65, duration: 0.7 }}>
          <span className="card-top">CURRENT FOCUS</span>
          <div className="orbit">
            <div />
            <div />
            <b>AI</b>
          </div>
          <h2>
            Ideas that<br />
            <em>move people.</em>
          </h2>
          <p>
            Lead, Photography & Videography Department<br />
            Center for Innovation & Entrepreneurship
          </p>
        </motion.aside>

        <a className="scroll-cue" href="#about">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <SectionTitle eyebrow="01 / ABOUT" title="A technologist with" emphasis="a creative eye." />
        <div className="about-layout">
          <motion.div className="portrait-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <div className="portrait-monogram">SRR</div>
            <span>COMPUTER SCIENCE<br />ENGINEERING</span>
            <div className="portrait-shine" />
          </motion.div>
          <motion.div className="about-copy" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ delay: 0.1 }}>
            <p className="lead">
              I turn complex problems into clear, useful experiences — at the intersection of artificial intelligence, full-stack development, and visual storytelling.
            </p>
            <p>
              As a Computer Science Engineering student and creative lead at the Center for Innovation & Entrepreneurship, I bring equal attention to systems, interfaces, and the human story behind every product.
            </p>
            <div className="value-list">
              {values.map(({ icon: Icon, text }) => (
                <span key={text}>
                  <Icon size={15} />
                  {text}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="stats">
          {stats.map((stat) => (
            <motion.div key={stat.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience & Timeline Section */}
      <section id="experience" className="section experience">
        <SectionTitle eyebrow="02 / EXPERIENCE & JOURNEY" title="Making innovation" emphasis="visible." />
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {timelineEntries.map((entry, index) => {
            const Icon = entry.icon;
            return (
              <motion.div key={entry.role} className="timeline" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ delay: index * 0.1 }}>
                <div className="timeline-meta">
                  <span>{entry.period}</span>
                  <small>{entry.category}</small>
                </div>
                <div className="timeline-content">
                  <i className="timeline-dot" />
                  <p className="label">{entry.organization}</p>
                  <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Icon size={24} style={{ color: "var(--cyan)" }} />
                    {entry.role}
                  </h3>
                  <p>{entry.description}</p>
                  <div className="tags">
                    {entry.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Skills Toolkit Section */}
      <section id="skills" className="section skills">
        <SectionTitle eyebrow="03 / TOOLKIT" title="Comfortable with complexity." emphasis="Curious about everything." />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article key={group.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ delay: index * 0.06 }}>
              <span>0{index + 1}</span>
              <h3>{group.title}</h3>
              <div>
                {group.skills.map((skill) => (
                  <b key={skill}>{skill}</b>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <SectionTitle eyebrow="04 / SELECTED WORK" title="Ideas, built into" emphasis="impact." />
        <div className="project-grid" style={{ gridTemplateColumns: "1fr" }}>
          {projects.map((project, index) => (
            <motion.article
              className={`project-card ${project.accent}`}
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
              transition={{ delay: index * 0.08 }}
            >
              <div className="project-visual">
                <div className="signal signal-one" />
                <div className="signal signal-two" />
                <span>
                  {project.number} / {project.type}
                </span>
                <b>{project.title.slice(0, 2)}</b>
              </div>
              <div className="project-body">
                <p>{project.type}</p>
                <h3>{project.title}</h3>
                <span>{project.summary}</span>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <i key={tag}>{tag}</i>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", marginTop: "16px", flexWrap: "wrap" }}>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="primary-button"
                      style={{ padding: "7px 14px", fontSize: "11px", textDecoration: "none" }}
                    >
                      <span>Live Demo (Render)</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="resume-button"
                    style={{ fontSize: "11px", fontWeight: 700, textDecoration: "none", display: "inline-flex", gap: "6px", alignItems: "center", padding: "6px 12px" }}
                  >
                    <Github size={14} /> GitHub Repo
                  </a>
                  <button
                    onClick={() => setActiveProject(project)}
                    style={{
                      background: "transparent",
                      border: "1px solid var(--line)",
                      color: "#9da6b9",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      fontSize: "11px",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    View Specs
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Focus / Impact Section */}
      <section className="section impact">
        <p className="eyebrow">
          <span />05 / MOMENTUM
        </p>
        <div>
          {focusAreas.map(({ icon: Icon, title, copy }) => (
            <motion.article key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <SectionTitle eyebrow="06 / CONTACT" title="Have an idea worth" emphasis="making?" />
        <div className="contact-layout">
          <div>
            <p>Open to thoughtful conversations, ambitious collaborations, and problems worth solving.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", margin: "20px 0" }}>
              <a className="email-link" href={`mailto:${socialLinks.email}`}>
                {socialLinks.email} <ArrowUpRight size={18} />
              </a>
              <button
                onClick={copyEmail}
                style={{
                  width: "max-content",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid var(--line)",
                  borderRadius: "6px",
                  color: copiedEmail ? "#4ade80" : "#d5dbe7",
                  padding: "6px 12px",
                  fontSize: "11px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {copiedEmail ? <Check size={14} /> : <Mail size={14} />}
                {copiedEmail ? "Email copied to clipboard!" : "Copy email address"}
              </button>
            </div>
            <div className="social-links">
              <a href={socialLinks.github} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={17} /> LinkedIn
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
                <Instagram size={17} /> Instagram
              </a>
              <a href={`mailto:${socialLinks.email}`}>
                <Mail size={17} /> Direct Email
              </a>
            </div>
          </div>

          <form onSubmit={submit}>
            <label>
              Name
              <input name="name" required placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="email" type="email" required placeholder="you@company.com" />
            </label>
            <label>
              Message
              <textarea name="message" required placeholder="Tell me about the idea..." rows={4} />
            </label>
            <button className="primary-button" type="submit">
              {sent ? "Opening your email app..." : "Start a conversation"} <Send size={15} />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <a className="wordmark" href="#home">
          SRR<span>•</span>
        </a>
        <p>Designed & developed by Soodini Rishith Reddy</p>
        <p>Built with Next.js 15, TypeScript & Framer Motion</p>
      </footer>

      {/* Quick Navigation Command Palette */}
      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} onOpenResume={() => setResumeOpen(true)} />

      {/* Interactive Résumé Viewer Modal */}
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Interactive Project Details Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </main>
  );
}
