import { motion } from 'framer-motion'

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[60] grid place-items-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      style={{ pointerEvents: 'none' }}
    >
      <div className="flex items-center gap-3">
        <span className="h-3 w-3 animate-pulse rounded-full bg-cyan-300" />
        <p className="text-sm tracking-[0.3em] text-slate-200">LOADING</p>
      </div>
    </motion.div>
  )
}

export default Loader
