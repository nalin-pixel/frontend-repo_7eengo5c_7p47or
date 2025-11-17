import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Package, Truck, Mailbox, Printer, Fax, Scan, PenLine, Brush, Shirt, PanelTop, CreditCard, Box } from 'lucide-react'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.5, ease: 'easeOut' } }),
}

function ServiceCard({ i, icon: Icon, title, bullets }) {
  return (
    <motion.div
      className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-yellow-400/50 hover:bg-white/10 transition-all backdrop-blur"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={i}
      variants={cardVariants}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-md bg-gradient-to-br from-yellow-500 to-yellow-300 flex items-center justify-center text-black">
          <Icon size={22} />
        </div>
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>
      <ul className="text-white/80 text-sm space-y-1.5 list-disc list-inside">
        {bullets.map((b, idx) => (
          <li key={idx}>{b}</li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Services() {
  const services = [
    { icon: Truck, title: 'Shipping Services', bullets: ['USPS, UPS, DHL (No FedEx yet)', 'Domestic & international shipping', 'Label printing and drop-off'] },
    { icon: Package, title: 'Package Tracking', bullets: ['Quick links to USPS, UPS, DHL tracking', 'Clean input with Track button', 'Real-time guidance'] },
    { icon: Mailbox, title: 'Mailbox Rental', bullets: ['Real street address', 'Email & text notifications', '24/7 access'] },
    { icon: Printer, title: 'Printing & Copies', bullets: ['Flyers, business cards, forms', 'Color and B&W options', 'Fast turnaround'] },
    { icon: Fax, title: 'Faxing & Shredding', bullets: ['Send & receive faxes', 'Secure document shredding'] },
    { icon: Scan, title: 'Document Scanning', bullets: ['Email, USB, or PDF output', 'Bulk or single-scan options'] },
    { icon: PenLine, title: 'Notary Services', bullets: ['Walk-in or appointment', 'Personal & business documents'] },
    { icon: Brush, title: 'Graphic Design', bullets: ['Business cards, flyers, menus', 'Logo & brand development'] },
    { icon: Shirt, title: 'Custom Apparel (DTF)', bullets: ['Custom shirts for teams & staff', 'Retail-ready prints'] },
    { icon: PanelTop, title: 'Posters & Banners', bullets: ['Grand openings', 'Storefront signage', 'Event prints'] },
    { icon: CreditCard, title: 'Credit Card Machines', bullets: ['Clover POS setup & sales', 'On-site business support', 'Payment processing systems'] },
    { icon: Box, title: 'Packaging & Supplies', bullets: ['Boxes, envelopes, tape', 'Bubble wrap, packing peanuts'] },
  ]

  return (
    <section id="services" className="relative bg-gradient-to-b from-black to-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Services</h2>
          <p className="text-white/70 mt-2">Everything your business needs — in one place.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={i} i={i} icon={s.icon} title={s.title} bullets={s.bullets} />
          ))}
        </div>
      </div>
    </section>
  )
}
