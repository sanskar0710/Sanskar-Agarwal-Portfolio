import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5 bg-black/30 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 md:flex-row md:justify-between">
        {/* Left: Brand + Copyright */}
        <div className="text-center md:text-left">
          <p className="gradient-text text-base font-bold">Sanskar // Data Portfolio</p>
          <p className="mt-1 text-xs text-slate-500">
            © {new Date().getFullYear()} Sanskar Agrawal. Built with React, data-first design, and motion.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-3">
          {[
            { icon: FiGithub, href: 'https://github.com/sanskar0710', label: 'GitHub' },
            { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sanskaragrawal07/', label: 'LinkedIn' },
            { icon: FiMail, href: 'mailto:sanskaragrawl3263@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noreferrer' : undefined}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/3 text-slate-400 transition-all duration-200 hover:border-emerald-400/30 hover:bg-white/8 hover:text-emerald-300"
              aria-label={label}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Right: Back to top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-2 rounded-full border border-white/8 bg-white/3 px-4 py-2 text-xs text-slate-400 transition-all duration-200 hover:border-emerald-400/30 hover:bg-white/8 hover:text-white"
          aria-label="Back to top"
        >
          Back to top <FiArrowUp size={14} />
        </button>
      </div>
    </footer>
  )
}

export default Footer
