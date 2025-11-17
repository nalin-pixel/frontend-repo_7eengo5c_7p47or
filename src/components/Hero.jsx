import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ onSeeServices, onTrackClick }) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/G0i6ZIv4Vd1oW14L/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 py-28 w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Your Local Partner for <span className="text-yellow-400">Mail</span>, <span className="text-yellow-400">Print</span> & Business Services
          </h1>
          <p className="mt-5 text-white/80 text-lg">Full-service shipping, printing, mailbox rentals, notary, design, and more — right here in Rockford.</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} onClick={onTrackClick} className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-yellow-400 text-black font-semibold shadow-lg hover:brightness-110 transition-all">
              Track a Package
            </motion.button>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} onClick={onSeeServices} className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors">
              See Our Services
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
