import { useState } from 'react'
import { motion } from 'framer-motion'

const providers = [
  { id: 'usps', name: 'USPS', url: 'https://tools.usps.com/go/TrackConfirmAction?tLabels=' },
  { id: 'ups', name: 'UPS', url: 'https://www.ups.com/track?loc=en_US&tracknum=' },
  { id: 'dhl', name: 'DHL', url: 'https://www.dhl.com/us-en/home/tracking/tracking-express.html?submit=1&tracking-id=' },
]

export default function Tracker() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [carrier, setCarrier] = useState('usps')

  const handleTrack = () => {
    const prov = providers.find(p => p.id === carrier)
    if (!prov || !trackingNumber) return
    const url = prov.url + encodeURIComponent(trackingNumber)
    window.open(url, '_blank')
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur">
      <div className="flex flex-col sm:flex-row gap-3">
        <select value={carrier} onChange={(e) => setCarrier(e.target.value)} className="bg-black text-white border border-white/20 rounded-md px-3 py-2">
          {providers.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
        <input value={trackingNumber} onChange={(e) => setTrackingNumber(e.target.value)} placeholder="Enter tracking number" className="flex-1 bg-black text-white placeholder-white/40 border border-white/20 rounded-md px-3 py-2 outline-none focus:border-yellow-400" />
        <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={handleTrack} className="px-5 py-2 rounded-md bg-yellow-400 text-black font-semibold">
          Track
        </motion.button>
      </div>
      <p className="text-white/60 text-xs mt-2">We support USPS, UPS, and DHL. FedEx coming soon.</p>
    </div>
  )
}
