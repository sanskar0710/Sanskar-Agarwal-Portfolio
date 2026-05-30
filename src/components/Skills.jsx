import { motion } from 'framer-motion'
import { FiCode, FiLayers, FiBarChart2, FiDatabase } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/portfolioData'

const iconMap = {
  code: FiCode,
  layers: FiLayers,
  chart: FiBarChart2,
  database: FiDatabase,
}

function Skills() {
  return (
    <section id="skills" className="section-wrap">
      <SectionHeading
        eyebrow="Skill Stack"
        title="Technical strengths across software and data science"
        subtitle="Balanced profile across coding, ML frameworks, analytics libraries, and deployment-ready development."
      />

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {skillGroups.map((group, groupIndex) => {
          const Icon = iconMap[group.icon]
          return (
            <motion.div
              key={group.category}
              className="glass-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: groupIndex * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/15 to-violet-500/15">
                  <Icon className="text-lg text-cyan-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">{group.category}</h3>
              </div>

              <div className="space-y-4">
                {group.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group/skill">
                    <div className="mb-1.5 flex items-baseline justify-between">
                      <span className="text-sm font-medium text-slate-300 transition-colors group-hover/skill:text-white">
                        {skill.name}
                      </span>
                      <span className="mono text-xs text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: groupIndex * 0.1 + skillIndex * 0.05,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      />
                      {/* Shimmer effect on the bar */}
                      <motion.div
                        className="absolute inset-y-0 left-0 rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                          backgroundSize: '200% 100%',
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: groupIndex * 0.1 + skillIndex * 0.05,
                        }}
                        animate={{
                          backgroundPosition: ['200% 0', '-200% 0'],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
