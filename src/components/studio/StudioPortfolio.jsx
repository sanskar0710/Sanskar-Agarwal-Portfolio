'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import {
  FiArrowDown,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiX,
  FiDownload,
  FiArrowUp,
  FiCheckCircle,
  FiSend,
  FiCheck,
  FiExternalLink,
  FiAward,
  FiBarChart2,
  FiTrendingUp,
  FiWifi,
} from 'react-icons/fi'
import { certifications, projects, skills, achievements, education } from '../../data/studioData'

gsap.registerPlugin(ScrollTrigger)

/* ─── Nav Links ────────────────────────────── */
const navLinks = [
  { id: 'projects', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

/* ─── Experience Data ──────────────────────── */
const experiences = [
  {
    role: 'AI Chatbot Intern',
    company: 'NPCIL – Government of India Enterprise under BARC',
    duration: '2025',
    description:
      'Engineered a fully offline AI-powered PDF chatbot for secure document querying in air-gapped government environments.',
    bullets: [
      'Built offline AI chatbot using BERT-based semantic search, enabling secure document querying without internet dependency',
      'Leveraged pdfplumber and PyPDF2 for robust multi-format PDF parsing and text extraction across complex document layouts',
      'Designed and deployed an interactive web interface with real-time query response, reducing manual document search time significantly',
    ],
    tech: ['BERT', 'pdfplumber', 'PyPDF2', 'HTML/CSS', 'JavaScript'],
  },
]

/* ─── Stats ────────────────────────────────── */
const stats = [
  { label: 'Projects', value: '60+' },
  { label: 'Certifications', value: '8+' },
  { label: 'Achievements', value: '4' },
]

/* ─── Cert Icons ───────────────────────────── */
const certIconMap = {
  Oracle: FiAward,
  Deloitte: FiBarChart2,
  NPTEL: FiTrendingUp,
  'Cisco Networking Academy': FiWifi,
}

/* ═══════════════════════════════════════════════
   LOADER
   ═══════════════════════════════════════════════ */
function Loader() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {!ready && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="loader-screen"
        >
          <div className="loader-inner">
            <motion.p
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="loader-text"
            >
              Sanskar Agrawal
            </motion.p>
            <motion.div
              className="loader-bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.9, ease: 'easeInOut' }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="loader-sub"
            >
              AI/ML Engineer &middot; Full Stack Developer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ═══════════════════════════════════════════════
   CUSTOM CURSOR
   ═══════════════════════════════════════════════ */
function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <span
      className="cursor-dot"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    />
  )
}

/* ═══════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════ */
export default function StudioPortfolio() {
  const scope = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [formState, setFormState] = useState('idle')

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  /* Body scroll lock */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* GSAP + Lenis */
  useEffect(() => {
    let lenis
    let rafId

    import('lenis').then(({ default: Lenis }) => {
      lenis = new Lenis({ duration: 1.2, smoothWheel: true })
      const raf = (time) => {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
    })

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          },
        )
      })

      gsap.utils.toArray('.project-panel').forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 0.96, opacity: 0.6 },
          {
            scale: 1,
            opacity: 1,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top 85%', end: 'top 40%', scrub: true },
          },
        )
      })
    }, scope)

    return () => {
      ctx.revert()
      if (lenis) lenis.destroy()
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  /* Form handler — hits API route, falls back to mailto */
  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormState('sending')
    const f = e.target
    const name = f.elements.name.value
    const email = f.elements.email.value
    const message = f.elements.message.value

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      const data = await res.json()

      if (data.success) {
        setFormState('sent')
        f.reset()
        setTimeout(() => setFormState('idle'), 3000)
        return
      }
    } catch {
      // API failed — fall back to mailto
    }

    // Mailto fallback
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.open(
      `mailto:sanskaragrawl3263@gmail.com?subject=${subject}&body=${body}`,
      '_self',
    )
    setFormState('sent')
    f.reset()
    setTimeout(() => setFormState('idle'), 3000)
  }

  return (
    <div ref={scope} className="studio-root">
      <Loader />
      <Cursor />

      {/* ─── NAVBAR ─────────────────────────────── */}
      <header className="studio-nav">
        <p className="brand">Sanskar / Studio</p>
        <nav className="nav-desktop">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="nav-cta">
          Let&apos;s Talk
        </a>
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </header>

      {/* ─── MOBILE MENU ───────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-overlay"
              onClick={closeMenu}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="mobile-drawer"
            >
              <div className="drawer-head">
                <span className="brand">Sanskar / Studio</span>
                <button type="button" onClick={closeMenu} aria-label="Close menu">
                  <FiX size={22} />
                </button>
              </div>
              <ul>
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <a href={`#${l.id}`} onClick={closeMenu}>
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a href="#contact" onClick={closeMenu} className="drawer-cta">
                Let&apos;s Talk <FiArrowUpRight />
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ─── HERO ──────────────────────────────── */}
      <section className="hero section" id="home">
        <div className="hero-noise" />
        <div className="hero-grid">
          <div className="hero-content">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="eyebrow"
            >
              AI + DATA SCIENCE PORTFOLIO
            </motion.p>
            <h1 className="hero-title reveal">
              I build intelligent systems &amp; immersive digital experiences
            </h1>
            <p className="hero-name reveal">Sanskar Agrawal</p>
            <p className="hero-sub reveal">
              AI/ML Engineer &nbsp;|&nbsp; Full Stack Developer &nbsp;|&nbsp; Data
              Scientist
            </p>

            <div className="hero-actions reveal">
              <a href="#projects" className="btn-accent">
                View Work <FiArrowDown />
              </a>
              <a href="/resume.pdf" download className="btn-outline">
                Resume <FiDownload />
              </a>
              <a
                href="https://github.com/sanskar0710"
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sanskaragrawal07/"
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats reveal">
              {stats.map((s) => (
                <div key={s.label} className="stat">
                  <p className="stat-value">{s.value}</p>
                  <p className="stat-label">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-image-container reveal">
            <div className="hero-image-frame">
              <Image
                src="/profile.jpg"
                alt="Sanskar Agrawal"
                width={360}
                height={480}
                priority
                className="hero-img"
              />
            </div>
          </div>
        </div>

        <a href="#projects" className="scroll-cta">
          Scroll <FiArrowDown />
        </a>
      </section>

      {/* ─── ABOUT ─────────────────────────────── */}
      <section id="about" className="section about">
        <div className="section-header reveal">
          <p className="eyebrow">ABOUT</p>
          <h2 className="section-title">
            A builder at the intersection of engineering &amp; analytics
          </h2>
        </div>
        <div className="about-grid">
          <article className="about-card reveal">
            <span className="about-num">01</span>
            <h3>Who I Am</h3>
            <p>
              Computer science student with a focus on data science and applied AI. I build high quality digital products with intelligence embedded in core workflows.
            </p>
          </article>
          <article className="about-card reveal">
            <span className="about-num">02</span>
            <h3>What I Do</h3>
            <p>
              Build full-stack systems, AI assistants, and analytics products with strong
              architecture and human-centered UX that solve real problems.
            </p>
          </article>
          <article className="about-card reveal">
            <span className="about-num">03</span>
            <h3>What Drives Me</h3>
            <p>
              Curiosity, measurable impact, and the pursuit of creating software that
              feels premium, useful, and technically impressive.
            </p>
          </article>
        </div>
      </section>

      {/* ─── PROJECTS ──────────────────────────── */}
      <section id="projects" className="section projects">
        <div className="section-header reveal">
          <p className="eyebrow">SELECTED WORK</p>
          <h2 className="section-title">Projects with measurable impact</h2>
        </div>
        {projects.map((project) => (
          <article key={project.title} className="project-panel reveal">
            <p className="project-type">{project.type}</p>
            <h2>{project.title}</h2>
            <p className="project-sub">{project.subtitle}</p>
            <p className="project-desc">{project.description}</p>
            <div className="tags">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href="#" className="project-link">
                View Project <FiArrowUpRight />
              </a>
              <a href="#" className="project-link-secondary">
                <FiGithub /> Code
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* ─── EXPERIENCE ────────────────────────── */}
      <section id="experience" className="section experience">
        <div className="section-header reveal">
          <p className="eyebrow">EXPERIENCE</p>
          <h2 className="section-title">Industry experience with applied NLP</h2>
        </div>
        {experiences.map((exp) => (
          <div key={exp.role} className="exp-card reveal">
            <div className="exp-header">
              <div>
                <h3>{exp.role}</h3>
                <p className="exp-company">{exp.company}</p>
              </div>
              <span className="exp-duration">{exp.duration}</span>
            </div>
            <p className="exp-desc">{exp.description}</p>
            <ul className="exp-bullets">
              {exp.bullets.map((b) => (
                <li key={b}>
                  <FiCheckCircle className="exp-check" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="tags">
              {exp.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ─── SKILLS ────────────────────────────── */}
      <section id="skills" className="section skills-section">
        <div className="section-header reveal">
          <p className="eyebrow">SKILL STACK</p>
          <h2 className="section-title">Technical strengths across domains</h2>
        </div>
        <div className="skills-grid reveal">
          {Object.entries(skills).map(([category, entries]) => (
            <article key={category} className="skill-block">
              <h3>{category}</h3>
              <div className="tags">
                {entries.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── EDUCATION ─────────────────────────── */}
      <section className="section edu-section">
        <div className="section-header reveal">
          <p className="eyebrow">EDUCATION</p>
          <h2 className="section-title">Academic Background</h2>
        </div>
        <div className="edu-card reveal">
          <div className="edu-header">
            <div>
              <h3>{education.institution}</h3>
              <p className="edu-degree">{education.degree}</p>
            </div>
            <div className="edu-meta">
              <span className="exp-duration">{education.period}</span>
              <p className="edu-location">{education.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ────────────────────── */}
      <section className="section certs-section">
        <div className="section-header reveal">
          <p className="eyebrow">CERTIFICATIONS</p>
          <h2 className="section-title">Professional Credentials</h2>
        </div>
        <div className="certs-grid reveal">
          {certifications.map((cert) => {
            const Icon = certIconMap[cert.issuer] || FiAward
            return (
              <article key={cert.title} className="cert-card-v2">
                <div className="cert-icon-wrap">
                  <Icon />
                </div>
                <div>
                  <p className="cert-title">{cert.title}</p>
                  <p className="cert-issuer">{cert.issuer} &middot; {cert.year}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* ─── ACHIEVEMENTS ──────────────────────── */}
      <section className="section achieve-section">
        <div className="section-header reveal">
          <p className="eyebrow">ACHIEVEMENTS</p>
          <h2 className="section-title">Recognition &amp; Participation</h2>
        </div>
        <div className="achieve-grid reveal">
          {achievements.map((a) => (
            <article key={a.title} className="achieve-card">
              <FiAward className="achieve-icon" />
              <div>
                <p className="achieve-title">{a.title}</p>
                <p className="achieve-meta">{a.org} &middot; {a.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── CONTACT ───────────────────────────── */}
      <section id="contact" className="section contact">
        <div className="section-header reveal">
          <p className="eyebrow">CONTACT</p>
        </div>
        <h2 className="contact-title reveal">
          Let&apos;s build something great.
        </h2>
        <div className="contact-grid">
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or opportunity..."
                rows={4}
                required
              />
            </div>
            <button type="submit" disabled={formState === 'sending'}>
              {formState === 'idle' && (
                <>
                  Send Message <FiSend />
                </>
              )}
              {formState === 'sending' && 'Sending...'}
              {formState === 'sent' && (
                <>
                  Sent! <FiCheck />
                </>
              )}
            </button>
          </form>

          <div className="contact-info reveal">
            <h3>Find me online</h3>
            <p>Happy to discuss AI/ML projects, collaborations, or opportunities.</p>
            <div className="contact-socials">
              <a
                href="https://github.com/sanskar0710"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub /> <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sanskaragrawal07/"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin /> <span>LinkedIn</span>
              </a>
              <a href="mailto:sanskaragrawl3263@gmail.com">
                <FiMail /> <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────── */}
      <footer className="studio-footer">
        <div className="footer-inner">
          <div className="footer-left">
            <p className="brand">Sanskar / Studio</p>
            <p className="footer-copy">
              © {new Date().getFullYear()} Sanskar Agrawal. Built with Next.js, GSAP &amp; ❤️
            </p>
          </div>
          <div className="footer-socials">
            <a href="https://github.com/sanskar0710" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/sanskaragrawal07/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="mailto:sanskaragrawl3263@gmail.com" aria-label="Email">
              <FiMail />
            </a>
          </div>
          <button
            type="button"
            className="back-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to top <FiArrowUp />
          </button>
        </div>
      </footer>
    </div>
  )
}
