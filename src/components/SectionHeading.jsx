import { motion } from 'framer-motion'

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      <p className="mb-2 text-xs uppercase tracking-[0.35em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-sm text-slate-300 md:text-base">{subtitle}</p>}
    </motion.div>
  )
}

export default SectionHeading
