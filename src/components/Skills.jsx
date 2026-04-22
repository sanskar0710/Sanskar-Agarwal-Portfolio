import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/portfolioData'

function Skills() {
  return (
    <section id="skills" className="section-wrap">
      <SectionHeading
        eyebrow="Skill Stack"
        title="Built for modern software and AI workflows"
        subtitle="Hands-on across frontend, backend, machine learning, and production-grade tooling."
      />

      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            className="glass-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: groupIndex * 0.08 }}
          >
            <h3 className="mb-4 text-xl text-white">{group.category}</h3>
            <div className="space-y-4">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1 flex justify-between text-sm text-slate-300">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
