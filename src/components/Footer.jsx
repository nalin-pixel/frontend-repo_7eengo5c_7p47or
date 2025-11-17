import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-extrabold tracking-wider">MAS Mail & Print Center</h4>
          <p className="text-white/70 text-sm mt-2">Your full-service partner for mail, print, and business essentials.</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Contact</h5>
          <ul className="text-white/80 text-sm space-y-1">
            <li className="flex items-center gap-2"><MapPin size={16}/> 5970 E State St, Rockford, IL 61108</li>
            <li className="flex items-center gap-2"><Phone size={16}/> (815) 505-2509</li>
            <li className="flex items-center gap-2"><Mail size={16}/> info@masmailprint.com</li>
          </ul>
        </div>
        <div className="text-sm text-white/60">
          <p>Open Mon–Sat • Closed Sun</p>
          <p className="mt-2">© {new Date().getFullYear()} MAS Mail & Print Center</p>
        </div>
      </div>
    </footer>
  )
}
