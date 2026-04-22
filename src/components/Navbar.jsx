import { motion } from 'framer-motion'
import { navLinks } from '../data/portfolioData'

function Navbar() {
  return (
    <motion.header
      initial={{ y: -45, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-3 z-50 mx-auto mb-6 w-[95%] max-w-6xl rounded-full border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-xl"
    >
      <nav className="flex items-center justify-between">
        <a href="#home" className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-sm font-semibold text-transparent">
          Sanskar.dev
        </a>
        <ul className="hidden gap-6 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="transition hover:text-cyan-200">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

export default Navbar
