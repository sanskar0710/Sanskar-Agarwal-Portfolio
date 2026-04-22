import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import SectionHeading from './SectionHeading'

function Contact() {
  return (
    <section id="contact" className="section-wrap pb-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something exceptional"
        subtitle="Open to internships, collaborations, and impactful software opportunities."
      />
      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
        <form className="glass-card space-y-4">
          <input className="input-field" type="text" placeholder="Name" required />
          <input className="input-field" type="email" placeholder="Email" required />
          <textarea className="input-field min-h-[150px]" placeholder="Message" required />
          <button type="submit" className="btn-primary w-full justify-center">
            Send Message
          </button>
        </form>
        <div className="glass-card">
          <h3 className="text-xl font-semibold text-white">Find me online</h3>
          <p className="mt-3 text-sm text-slate-300">
            Feel free to connect through any of the platforms below.
          </p>
          <div className="mt-6 space-y-3">
            <a
              href="https://github.com/sanskar0710"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sanskaragrawal07/"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin /> LinkedIn
            </a>
            <a href="mailto:sanskaragrawl3263@gmail.com" className="social-link">
              <FiMail /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
