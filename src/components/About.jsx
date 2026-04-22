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
        title="Engineering intelligence into elegant products"
        subtitle="Computer Science Engineering student with expertise in Web Development, AI/ML, and Data Science. Passionate about building scalable and intelligent systems."
      />
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        {aboutCards.map((card, index) => {
          const Icon = iconMap[card.icon]
          return (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card group"
            >
              <Icon className="mb-4 text-2xl text-cyan-300 transition group-hover:scale-110" />
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{card.description}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default About
