"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowDown, ArrowUpRight, Command, Github, Linkedin, Mail, Menu, Moon, Send, Sparkles, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { focusAreas, gallery, navigation, projects, skillGroups, stats, values } from "../data/portfolio";

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

function SectionTitle({ eyebrow, title, emphasis }: { eyebrow: string; title: string; emphasis?: string }) {
  return <motion.div className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={reveal} transition={{ duration: 0.6 }}>
    <p className="eyebrow"><span />{eyebrow}</p><h2>{title} {emphasis && <em>{emphasis}</em>}</h2>
  </motion.div>;
}

function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); onClose(); };
  return <AnimatePresence>{open && <motion.div className="command-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
    <motion.div className="command-panel" initial={{ opacity: 0, y: 12, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12 }} onMouseDown={(e) => e.stopPropagation()}>
      <div className="command-head"><Command size={17} /><span>Quick navigation</span><kbd>ESC</kbd></div>
      {navigation.map((item, index) => <button key={item} onClick={() => go(item.toLowerCase())}><span>0{index + 1}</span>{item}<ArrowUpRight size={15} /></button>)}
    </motion.div>
  </motion.div>}</AnimatePresence>;
}

export function Portfolio() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const [menuOpen, setMenuOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const openCommand = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setCommandOpen(true); } };
    window.addEventListener("keydown", openCommand);
    return () => window.removeEventListener("keydown", openCommand);
  }, []);
  const closeMenu = () => setMenuOpen(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); const form = new FormData(event.currentTarget); const subject = encodeURIComponent(`Portfolio enquiry from ${form.get("name")}`); const body = encodeURIComponent(String(form.get("message") || "")); window.location.href = `mailto:soodinirishithreddy@gmail.com?subject=${subject}&body=${body}`; setSent(true); };

  return <main>
    <motion.div className="progress" style={{ scaleX: progress }} />
    <div className="ambient ambient-a" /><div className="ambient ambient-b" />
    <header className="nav-shell">
      <a className="wordmark" href="#home" onClick={closeMenu}>SRR<span>•</span></a>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>{navigation.slice(1).map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}</nav>
      <div className="nav-actions"><button className="command-button" onClick={() => setCommandOpen(true)} aria-label="Open quick navigation"><Command size={15} /><span>Menu</span></button><a className="resume-button" href="#contact">Request résumé <ArrowUpRight size={14} /></a><button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button></div>
    </header>

    <section id="home" className="hero">
      <div className="hero-grid" /><div className="cursor-glow" />
      <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: .12 } } }}>
        <motion.p variants={reveal} className="availability"><i />Available for ambitious opportunities</motion.p>
        <motion.p variants={reveal} className="hero-kicker">SOODINI</motion.p>
        <motion.h1 variants={reveal}>RISHITH<br /><span>REDDY</span></motion.h1>
        <motion.p variants={reveal} className="hero-role">AI Developer <b>•</b> Full Stack Developer <b>•</b> Creative Technologist</motion.p>
        <motion.p variants={reveal} className="hero-description">Building intelligent software, creating impactful digital experiences, and leading innovation through technology.</motion.p>
        <motion.div variants={reveal} className="hero-buttons"><a className="primary-button" href="#projects">Explore projects <ArrowDown size={16} /></a><a className="quiet-button" href="#about">Discover my work <ArrowUpRight size={15} /></a></motion.div>
      </motion.div>
      <motion.aside className="hero-card" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .65, duration: .7 }}><span className="card-top">CURRENT FOCUS</span><div className="orbit"><div /><div /><b>AI</b></div><h2>Ideas that<br /><em>move people.</em></h2><p>Lead, Photography & Videography Department<br />Center for Innovation & Entrepreneurship</p></motion.aside>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
    </section>

    <section id="about" className="section about"><SectionTitle eyebrow="01 / ABOUT" title="A technologist with" emphasis="a creative eye." /><div className="about-layout"><motion.div className="portrait-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}><div className="portrait-monogram">SRR</div><span>COMPUTER SCIENCE<br />ENGINEERING</span><div className="portrait-shine" /></motion.div><motion.div className="about-copy" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ delay: .1 }}><p className="lead">I turn complex problems into clear, useful experiences — at the intersection of artificial intelligence, full-stack development, and visual storytelling.</p><p>As a Computer Science Engineering student and creative lead, I bring equal attention to systems, interfaces, and the human story behind every product.</p><div className="value-list">{values.map(({ icon: Icon, text }) => <span key={text}><Icon size={15} />{text}</span>)}</div></motion.div></div><div className="stats">{stats.map((stat) => <motion.div key={stat.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}><strong>{stat.value}</strong><span>{stat.label}</span></motion.div>)}</div></section>

    <section id="experience" className="section experience"><SectionTitle eyebrow="02 / EXPERIENCE" title="Making innovation" emphasis="visible." /><motion.div className="timeline" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}><div className="timeline-meta"><span>2026 — PRESENT</span><small>LEADERSHIP</small></div><div className="timeline-content"><i className="timeline-dot" /><p className="label">CENTER FOR INNOVATION & ENTREPRENEURSHIP</p><h3>Lead, Photography &<br />Videography Department</h3><p>Leading a media team across photography, videography, creative direction, branding, and event documentation — translating innovation events into stories that resonate.</p><div className="tags"><span>CREATIVE DIRECTION</span><span>EVENT MEDIA</span><span>TEAM LEADERSHIP</span></div></div></motion.div></section>

    <section id="skills" className="section skills"><SectionTitle eyebrow="03 / TOOLKIT" title="Comfortable with complexity." emphasis="Curious about everything." /><div className="skills-grid">{skillGroups.map((group, index) => <motion.article key={group.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ delay: index * .06 }}><span>0{index + 1}</span><h3>{group.title}</h3><div>{group.skills.map((skill) => <b key={skill}>{skill}</b>)}</div></motion.article>)}</div></section>

    <section id="projects" className="section projects"><SectionTitle eyebrow="04 / SELECTED WORK" title="Ideas, built into" emphasis="impact." /><div className="project-grid">{projects.map((project, index) => <motion.article className={`project-card ${project.accent}`} key={project.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ delay: index * .08 }}><div className="project-visual"><div className="signal signal-one" /><div className="signal signal-two" /><span>{project.number} / {project.type}</span><b>{project.title.slice(0, 2)}</b></div><div className="project-body"><p>{project.type}</p><h3>{project.title}</h3><span>{project.summary}</span><div className="tags">{project.tags.map((tag) => <i key={tag}>{tag}</i>)}</div><a href="#contact">Discuss this project <ArrowUpRight size={15} /></a></div></motion.article>)}</div></section>

    <section id="gallery" className="section gallery"><SectionTitle eyebrow="05 / VISUAL STORIES" title="The work behind" emphasis="the work." /><div className="gallery-grid">{gallery.map((item, index) => <motion.button key={item.label} className={`gallery-item ${item.tone}`} onClick={() => setLightbox(index)} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} aria-label={`Open ${item.label}`}><span>{item.kind}</span><strong>{item.label}</strong><div className="gallery-orb" /><ArrowUpRight size={18} /></motion.button>)}</div></section>

    <section className="section impact"><p className="eyebrow"><span />06 / MOMENTUM</p><div>{focusAreas.map(({ icon: Icon, title, copy }) => <motion.article key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}><Icon /><h3>{title}</h3><p>{copy}</p></motion.article>)}</div></section>

    <section id="contact" className="section contact"><SectionTitle eyebrow="07 / CONTACT" title="Have an idea worth" emphasis="making?" /><div className="contact-layout"><div><p>Open to thoughtful conversations, ambitious collaborations, and problems worth solving.</p><a className="email-link" href="mailto:soodinirishithreddy@gmail.com">soodinirishithreddy@gmail.com <ArrowUpRight size={18} /></a><div className="social-links"><a href="https://github.com/rishith-reddy-git" target="_blank" rel="noreferrer"><Github size={17} />GitHub</a><a href="mailto:soodinirishithreddy@gmail.com"><Mail size={17} />Email</a><a href="#contact"><Linkedin size={17} />LinkedIn</a></div></div><form onSubmit={submit}><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@company.com" /></label><label>Message<textarea name="message" required placeholder="Tell me about the idea..." rows={4} /></label><button className="primary-button" type="submit">{sent ? "Opening your email app" : "Start a conversation"} <Send size={15} /></button></form></div></section>

    <footer><a className="wordmark" href="#home">SRR<span>•</span></a><p>Designed & developed by Soodini Rishith Reddy</p><p>Built with Next.js, TypeScript & Framer Motion</p></footer>
    <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />
    <AnimatePresence>{lightbox !== null && <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}><motion.div initial={{ scale: .94 }} animate={{ scale: 1 }} onClick={(event) => event.stopPropagation()} className={`lightbox-art ${gallery[lightbox].tone}`}><button onClick={() => setLightbox(null)} aria-label="Close gallery item"><X /></button><span>{gallery[lightbox].kind}</span><h2>{gallery[lightbox].label}</h2><p>Visual storytelling by Soodini Rishith Reddy.</p></motion.div></motion.div>}</AnimatePresence>
  </main>;
}
