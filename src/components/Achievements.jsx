import { certifications } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

function Achievements() {
  const items = [...certifications, ...certifications]
  return (
    <section id="achievements" className="section-wrap overflow-hidden">
      <SectionHeading
        eyebrow="Achievements"
        title="Certifications and simulations"
        subtitle="Continuous upskilling through applied learning and industry simulations."
      />
      <div className="marquee-track">
        {items.map((item, index) => (
          <article key={`${item}-${index}`} className="marquee-card">
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Achievements
