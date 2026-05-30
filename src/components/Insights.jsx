import { motion } from 'framer-motion'
import { FiActivity, FiDatabase, FiCpu, FiCheckCircle } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { insightCards, pipelineSteps } from '../data/portfolioData'

const insightIcons = [FiActivity, FiDatabase, FiCpu]

function Insights() {
  return (
    <section id="insights" className="section-wrap">
      <SectionHeading
        eyebrow="Data Science Lens"
        title="Building systems with measurable technical impact"
        subtitle="A recruiter-friendly snapshot of how I design data products from ingestion to deployment."
      />

      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="grid gap-4 sm:grid-cols-3">
          {insightCards.map((card, index) => {
            const Icon = insightIcons[index] || FiActivity
            return (
              <motion.article
                key={card.label}
                className="glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
              >
                <Icon className="mb-4 text-lg text-cyan-300" />
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{card.label}</p>
                <p className="mt-2 text-3xl font-semibold text-white">{card.value}</p>
                <p className="mt-2 text-sm text-slate-400">{card.note}</p>
              </motion.article>
            )
          })}
        </div>

        <motion.article
          className="glass-card pipeline-card"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-violet-300">Pipeline Workflow</p>
          <h3 className="mb-5 text-xl font-semibold text-white">From raw data to production insight</h3>
          <ul className="space-y-3">
            {pipelineSteps.map((step) => (
              <li key={step} className="flex items-center gap-3 text-sm text-slate-300">
                <FiCheckCircle className="text-cyan-300" />
                {step}
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  )
}

export default Insights
