import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiSend, FiCheck } from 'react-icons/fi'
import SectionHeading from './SectionHeading'

function Contact() {
  const [formState, setFormState] = useState('idle') // idle | sending | sent

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState('sending')

    const form = e.target
    const name = form.elements.name.value
    const email = form.elements.email.value
    const message = form.elements.message.value

    // mailto fallback
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.open(`mailto:sanskaragrawl3263@gmail.com?subject=${subject}&body=${body}`, '_self')

    setTimeout(() => {
      setFormState('sent')
      form.reset()
      setTimeout(() => setFormState('idle'), 3000)
    }, 500)
  }

  return (
    <section id="contact" className="section-wrap pb-12">
      <SectionHeading
        eyebrow="Contact"
        title="Open to internships and data-focused engineering roles"
        subtitle="Happy to discuss AI/ML projects, software engineering opportunities, or collaborative builds."
      />
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card space-y-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              className="input-field"
              type="text"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              className="input-field"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              className="input-field min-h-[140px]"
              placeholder="Tell me about your project or opportunity..."
              required
            />
          </div>
          <button
            type="submit"
            disabled={formState === 'sending'}
            className="btn-primary w-full justify-center disabled:opacity-70"
          >
            {formState === 'idle' && (
              <>Send Message <FiSend size={14} /></>
            )}
            {formState === 'sending' && 'Sending...'}
            {formState === 'sent' && (
              <>Sent! <FiCheck size={14} /></>
            )}
          </button>
        </motion.form>

        {/* Social Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card flex flex-col"
        >
          <h3 className="text-xl font-bold text-white">Find me online</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Feel free to connect through any of the platforms below. I usually
            respond within 24 hours.
          </p>

          <div className="mt-6 space-y-3">
            <a
              href="https://github.com/sanskar0710"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub className="text-lg" />
              <div>
                <p className="text-sm font-medium text-white">GitHub</p>
                <p className="text-xs text-slate-500">@sanskar0710</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/sanskaragrawal07/"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin className="text-lg" />
              <div>
                <p className="text-sm font-medium text-white">LinkedIn</p>
                <p className="text-xs text-slate-500">sanskaragrawal07</p>
              </div>
            </a>
            <a href="mailto:sanskaragrawl3263@gmail.com" className="social-link">
              <FiMail className="text-lg" />
              <div>
                <p className="text-sm font-medium text-white">Email</p>
                <p className="text-xs text-slate-500">sanskaragrawl3263@gmail.com</p>
              </div>
            </a>
          </div>

          {/* Decorative element */}
          <div className="relative mt-auto pt-6">
            <div className="rounded-xl border border-white/5 bg-gradient-to-br from-cyan-400/5 to-violet-500/5 p-4 text-center">
              <p className="text-sm font-medium text-slate-300">
                💡 Prefer a quick chat?
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Drop a message and I'll get back to you ASAP
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
