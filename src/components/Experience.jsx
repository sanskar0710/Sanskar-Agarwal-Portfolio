import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const bullets = [
  'Built offline AI chatbot using BERT for privacy-focused internal usage',
  'Designed secure PDF querying system with robust document handling',
  'Developed full-stack interface for smooth interaction and search accuracy',
]

function Experience() {
  return (
    <section id="experience" className="section-wrap">
      <SectionHeading
        eyebrow="Experience"
        title="Industry experience with applied AI"
        subtitle="Hands-on internship delivering secure and practical AI applications."
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
      >
        <div className="relative border-l border-cyan-400/35 pl-6">
          <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,.7)]" />
          <h3 className="text-xl font-semibold text-white">AI Chatbot Intern - NPCIL</h3>
          <p className="mt-4 text-sm text-slate-300">
            Worked on a secure internal AI system designed for intelligent document interaction.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {bullets.map((bullet) => (
              <li key={bullet}>- {bullet}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
