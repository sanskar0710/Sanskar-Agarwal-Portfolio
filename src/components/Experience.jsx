import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { experiences } from '../data/portfolioData'

function Experience() {
  return (
    <section id="experience" className="section-wrap">
      <SectionHeading
        eyebrow="Experience"
        title="Internship experience focused on applied NLP systems"
        subtitle="Delivered secure, offline-capable AI functionality with full-stack integration in an enterprise context."
      />

      <div className="mx-auto max-w-4xl space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: index * 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="glass-card"
          >
            <div className="relative pl-7">
              {/* Timeline line & dot */}
              <div className="timeline-line" />
              <div className="timeline-dot" />

              {/* Header */}
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="mt-1 text-sm font-medium text-cyan-300/80">{exp.company}</p>
                </div>
                <span className="inline-flex shrink-0 items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
                  {exp.duration}
                </span>
              </div>

              {/* Description */}
              <p className="mb-4 text-sm leading-relaxed text-slate-400">{exp.description}</p>

              {/* Bullet Points */}
              <ul className="mb-5 space-y-2.5">
                {exp.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-sm text-slate-300"
                  >
                    <FiCheckCircle className="mt-0.5 shrink-0 text-cyan-400/70" size={14} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
