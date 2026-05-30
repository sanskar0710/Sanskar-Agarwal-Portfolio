import { FiAward, FiBarChart2, FiTrendingUp, FiWifi } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { certifications } from '../data/portfolioData'

const iconMap = {
  award: FiAward,
  chart: FiBarChart2,
  trending: FiTrendingUp,
  network: FiWifi,
}

function Achievements() {
  const items = [...certifications, ...certifications]

  return (
    <section id="achievements" className="section-wrap overflow-hidden">
      <SectionHeading
        eyebrow="Achievements"
        title="Certifications aligned with data and engineering roles"
        subtitle="Credentialed through analytics, quant, cloud data science, and networking fundamentals."
      />

      <div className="marquee-container" role="region" aria-label="Certifications marquee">
        <div className="marquee-track">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon] || FiAward
            return (
              <article
                key={`${item.title}-${index}`}
                className="marquee-card flex items-start gap-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/15 to-violet-500/15">
                  <Icon className="text-base text-cyan-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{item.issuer}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Achievements
