import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi'
import { heroRoles } from '../data/portfolioData'
import { useTypingEffect } from '../hooks/useTypingEffect'

function Hero() {
  const typedRole = useTypingEffect(heroRoles)
  const [imageSrc, setImageSrc] = useState('/profile.jpg')

  return (
    <section id="home" className="px-4 pb-20 pt-6 md:pt-14">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-300">Portfolio</p>
          <h1 className="text-4xl font-bold text-white md:text-6xl">Sanskar Agrawal</h1>
          <p className="mt-4 h-8 text-lg text-violet-200 md:text-xl">
            {typedRole}
            <span className="typing-caret" />
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            Computer Science Engineering student building premium web products and
            intelligent AI systems with a focus on speed, usability, and impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-primary" href="#projects">
              View Projects <FiArrowRight />
            </a>
            <a className="btn-glass" href="/resume.pdf" download>
              Download Resume <FiDownload />
            </a>
            <a className="btn-glass" href="#contact">
              Contact Me
            </a>
            <a
              className="btn-glass"
              href="https://github.com/sanskar0710"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <FiGithub />
            </a>
            <a
              className="btn-glass"
              href="https://www.linkedin.com/in/sanskaragrawal07/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FiLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="hero-ring" />
          <img
            src={imageSrc}
            alt="Sanskar Agrawal portrait"
            className="relative z-10 h-[360px] w-full rounded-[2rem] border border-cyan-300/20 object-cover shadow-2xl shadow-violet-900/45"
            onError={() => setImageSrc('/profile-placeholder.svg')}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
