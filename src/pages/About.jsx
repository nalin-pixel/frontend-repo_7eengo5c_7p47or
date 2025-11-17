import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { label: 'Years Serving Rockford', value: 8 },
    { label: 'Happy Clients', value: 4200 },
    { label: 'Print Jobs Completed', value: 12000 },
    { label: 'Packages Shipped', value: 25000 },
  ]

  return (
    <div className="bg-gradient-to-b from-black to-zinc-900 min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-12">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white">About MAS</h1>
        <p className="text-white/70 mt-4 max-w-2xl">We are a locally owned, full-service mail and print center. From shipping to design and printing, we provide modern, reliable services that help people and businesses move faster.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <motion.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring' }} className="text-3xl md:text-4xl font-extrabold text-yellow-400">
                {s.value.toLocaleString()}
              </motion.div>
              <div className="text-white/80 text-sm mt-2">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
