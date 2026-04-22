import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
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
        title="Production-minded builds with impact"
        subtitle="Focused on practical AI systems, scalable web apps, and data-driven products."
      />
      <div className="mx-auto mb-8 flex max-w-6xl flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              activeFilter === filter ? 'bg-cyan-300 text-black' : 'bg-white/5 text-slate-300 hover:bg-white/15'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.title}
            className="glass-card group flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                {project.internship && (
                  <p className="text-xs text-cyan-300">{project.internship}</p>
                )}
              </div>
              <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs text-violet-200">
                {project.tag}
              </span>
            </div>
            <p className="text-sm text-slate-300">{project.description}</p>
            <div className="my-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 px-2 py-1 text-xs text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-3 pt-2 text-sm">
              <a href={project.github} className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
                <FiGithub /> GitHub
              </a>
              <a href={project.demo} className="inline-flex items-center gap-2 text-violet-300 hover:text-violet-200">
                <FiExternalLink /> Live Demo
              </a>
            </div>
          </motion.article>
        ))}

        <motion.article
          className="glass-card flex min-h-[240px] items-center justify-center border border-dashed border-cyan-400/30 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-300">More projects coming soon...</p>
        </motion.article>
      </div>
    </section>
  )
}

export default Projects
