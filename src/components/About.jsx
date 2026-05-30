import { motion } from 'framer-motion'
import { FiGlobe, FiCpu, FiZap } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { aboutCards } from '../data/portfolioData'

const iconMap = {
  globe: FiGlobe,
  brain: FiCpu,
  spark: FiZap,
}

function About() {
  return (
    <section id="about" className="section-wrap">
      <SectionHeading
        eyebrow="About"
        title="A builder at the intersection of engineering and analytics"
        subtitle="I enjoy solving high-impact problems where software, machine learning, and product thinking come together."
      />
      <div className="mx-auto mb-6 max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-5">
        <p className="text-sm leading-relaxed text-slate-300 md:text-base">
          I am a Computer Science Engineering student with a strong focus on data science and applied AI.
          From building full-stack products to designing ML-backed workflows, my goal is to ship systems that
          are scalable, interpretable, and recruiter-ready in terms of technical depth and execution quality.
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {aboutCards.map((card, index) => {
          const Icon = iconMap[card.icon]
          return (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.12,
                duration: 0.55,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="glass-card group"
            >
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-violet-500/15 transition-all duration-300 group-hover:from-cyan-400/25 group-hover:to-violet-500/25 group-hover:shadow-lg group-hover:shadow-cyan-400/10">
                  <Icon className="text-xl text-cyan-300 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="mono text-xs font-medium text-slate-600">
                  {card.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                {card.description}
              </p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default About
