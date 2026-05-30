import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { projects } from '../data/portfolioData'

const filters = ['All', 'AI', 'Web', 'Data Science']

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.tag === activeFilter)
  }, [activeFilter])

  return (
    <section id="projects" className="section-wrap">
      <SectionHeading
        eyebrow="Projects"
        title="Selected projects with clear technical outcomes"
        subtitle="Each project highlights architecture choices, model usage, and measurable product value."
      />

      {/* Filter Pills */}
      <div className="mx-auto mb-10 flex max-w-6xl flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-250 ${
              activeFilter === filter
                ? 'text-black'
                : 'text-slate-400 hover:bg-white/8 hover:text-slate-200'
            }`}
          >
            {activeFilter === filter && (
              <motion.span
                layoutId="filter-active"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{filter}</span>
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className="glass-card group flex flex-col"
              layout
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* Gradient Banner */}
              <div
                className={`mb-4 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br ${project.color} relative overflow-hidden`}
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${project.accentColor}15, transparent 70%)`,
                  }}
                />
                <span className="mono relative z-10 text-3xl font-bold text-white/20 transition-all duration-300 group-hover:text-white/40 group-hover:scale-110">
                  {project.title.charAt(0)}
                </span>
              </div>

              {/* Header */}
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-cyan-200">
                    {project.title}
                  </h3>
                  {project.internship && (
                    <p className="mt-0.5 text-xs font-medium text-cyan-400/80">
                      {project.internship}
                    </p>
                  )}
                </div>
                <span
                  className="shrink-0 rounded-full px-2.5 py-1 text-xs font-medium"
                  style={{
                    background: `${project.accentColor}15`,
                    color: project.accentColor,
                    border: `1px solid ${project.accentColor}25`,
                  }}
                >
                  {project.tag}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>
              <p className="mt-3 rounded-lg border border-cyan-400/15 bg-cyan-400/5 px-3 py-2 text-xs text-cyan-200">
                Impact: {project.impact}
              </p>

              {/* Tech Stack */}
              <div className="my-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-auto flex items-center gap-4 border-t border-white/6 pt-4 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-cyan-300"
                >
                  <FiGithub size={15} /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-violet-300"
                >
                  <FiExternalLink size={15} /> Demo
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-all hover:bg-white/10 hover:text-white"
                  aria-label={`Open ${project.title}`}
                >
                  <FiArrowUpRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>

        {/* Coming Soon Card — only in "All" view */}
        {activeFilter === 'All' && (
          <motion.article
            className="glass-card flex min-h-[280px] items-center justify-center border-dashed text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div>
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                <span className="text-xl">🚀</span>
              </div>
              <p className="font-medium text-slate-400">More projects coming soon</p>
              <p className="mt-1 text-xs text-slate-500">Stay tuned for updates</p>
            </div>
          </motion.article>
        )}
      </div>
    </section>
  )
}

export default Projects
