import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../data/portfolioData'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [hasScrolled, setHasScrolled] = useState(false)

  // Track scroll position for navbar bg
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for active section
  useEffect(() => {
    const observers = []
    navLinks.forEach((link) => {
      const el = document.getElementById(link.id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(link.id)
          }
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  const closeMenu = useCallback(() => setIsOpen(false), [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`sticky top-3 z-50 mx-auto mb-4 w-[92%] max-w-6xl rounded-2xl border px-5 py-3.5 transition-all duration-300 ${
          hasScrolled
            ? 'border-white/10 bg-black/70 shadow-lg shadow-black/20 backdrop-blur-2xl'
            : 'border-white/5 bg-black/30 backdrop-blur-xl'
        }`}
      >
        <nav className="flex items-center justify-between">
          <a
            href="#home"
            className="gradient-text text-base font-bold tracking-tight"
          >
            Sanskar // Data
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.id
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-lg bg-white/8"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Hire Me CTA (Desktop) */}
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 px-4 py-2 text-xs font-semibold text-black transition-transform hover:scale-105 md:inline-flex"
          >
            Let&apos;s Connect
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center rounded-lg p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white md:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col border-l border-white/10 bg-[#0a0f1a]/95 p-6 backdrop-blur-2xl md:hidden"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="gradient-text text-base font-bold">Sanskar.dev</span>
                
                <button
                  type="button"
                  onClick={closeMenu}
                  className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Close menu"
                >
                  <FiX size={20} />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={closeMenu}
                      className={`flex rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                        activeSection === link.id
                          ? 'bg-white/8 text-white'
                          : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="btn-primary w-full justify-center text-sm"
                >
                  Let&apos;s Connect
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
