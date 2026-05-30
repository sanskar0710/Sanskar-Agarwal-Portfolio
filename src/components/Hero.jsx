import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiChevronDown, FiBarChart2 } from 'react-icons/fi'
import { heroRoles, heroStats } from '../data/portfolioData'
import { useTypingEffect } from '../hooks/useTypingEffect'

function Hero() {
  const typedRole = useTypingEffect(heroRoles)
  const [imageSrc, setImageSrc] = useState('/profile.jpg')

  return (
    <section id="home" className="relative px-4 pb-20 pt-8 md:pb-28 md:pt-16 lg:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        {/* Text Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="status-badge mb-6 inline-flex">
              <span className="status-dot" />
              Open to opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Sanskar Agrawal</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 h-8 text-lg font-medium text-sky-300 md:text-xl"
          >
            {typedRole}
            <span className="typing-caret" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base"
          >
            Computer Science student specializing in data science, machine learning, and full stack
            engineering. I build systems that are analytical under the hood and clean on the surface.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a className="btn-primary" href="#projects">
              View Projects <FiArrowRight />
            </a>
            <a className="btn-glass" href="/resume.pdf" download>
              Resume <FiDownload />
            </a>
            <a
              className="btn-glass"
              href="https://github.com/sanskar0710"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </a>
            <a
              className="btn-glass"
              href="https://www.linkedin.com/in/sanskaragrawal07/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex gap-8 border-t border-white/8 pt-8"
          >
            {heroStats.map((stat, i) => (
              <div key={stat.label}>
                <motion.p
                  className="mono text-2xl font-bold text-white md:text-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  {stat.value}
                </motion.p>
                <p className="mt-1 text-xs text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="mt-7 max-w-xl rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4"
          >
            <div className="mb-3 flex items-center gap-2 text-emerald-300">
              <FiBarChart2 />
              <span className="text-xs uppercase tracking-[0.22em]">Current Focus</span>
            </div>
            <p className="text-sm text-slate-300">
              NLP applications, model-backed product features, and data visualization interfaces for
              real-world decision making.
            </p>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="hero-ring" />
          {/* Decorative elements */}
          <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-emerald-400/20 blur-2xl" />
          <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-sky-500/20 blur-2xl" />
          <div className="hero-tech-grid" />

          <motion.img
            src={imageSrc}
            alt="Sanskar Agrawal portrait"
            className="relative z-10 h-[340px] w-full rounded-2xl border border-white/10 object-cover shadow-2xl shadow-emerald-900/25 sm:h-[380px]"
            onError={() => setImageSrc('/profile-placeholder.svg')}
            loading="eager"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="scroll-indicator flex flex-col items-center gap-1 text-slate-500 transition-colors hover:text-emerald-300"
          aria-label="Scroll to about section"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <FiChevronDown size={16} />
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
