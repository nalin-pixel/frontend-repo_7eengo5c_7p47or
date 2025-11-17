import { useState, useEffect } from 'react'
import { Menu, X, PackageSearch, Phone, MapPin } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar({ onTrackClick }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all ${
    scrolled ? 'backdrop-blur bg-black/60 border-b border-white/10' : 'bg-transparent'
  }`

  const linkBase = 'text-sm font-medium tracking-wide px-3 py-2 rounded-md hover:text-gold-400 transition-colors'

  return (
    <header className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-300 shadow ring-2 ring-white/20" />
            <div className="leading-tight">
              <div className="text-white font-extrabold tracking-wider text-sm">MAS</div>
              <div className="text-white/90 text-[10px] uppercase">Mail & Print Center</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1 text-white">
            <Link to="/" className={linkBase + (location.pathname === '/' ? ' text-gold-400' : ' text-white/90')}>Home</Link>
            <Link to="/about" className={linkBase + (location.pathname === '/about' ? ' text-gold-400' : ' text-white/90')}>About</Link>
            <Link to="/contact" className={linkBase + (location.pathname === '/contact' ? ' text-gold-400' : ' text-white/90')}>Contact</Link>
            <a href="#services" className={linkBase + ' text-white/90'}>Services</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+18155052509" className="inline-flex items-center gap-2 text-white/90 hover:text-gold-300 transition-colors text-sm"><Phone size={16}/> (815) 505-2509</a>
            <button onClick={onTrackClick} className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-semibold px-4 py-2 rounded-md shadow hover:shadow-lg hover:brightness-110 transition-all">
              <PackageSearch size={18}/> Track Package
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X/> : <Menu/>}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 text-white border-t border-white/10">
          <div className="px-4 py-3 space-y-2">
            <Link to="/" className="block py-2" onClick={() => setOpen(false)}>Home</Link>
            <a href="#services" className="block py-2" onClick={() => setOpen(false)}>Services</a>
            <Link to="/about" className="block py-2" onClick={() => setOpen(false)}>About</Link>
            <Link to="/contact" className="block py-2" onClick={() => setOpen(false)}>Contact</Link>
            <a href="https://maps.google.com/?q=5970+E+State+St,+Rockford,+IL+61108" target="_blank" rel="noreferrer" className="flex items-center gap-2 py-2 text-white/80"><MapPin size={16}/> 5970 E State St, Rockford</a>
            <button onClick={() => { setOpen(false); onTrackClick?.() }} className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-semibold px-4 py-2 rounded-md">
              <PackageSearch size={18}/> Track Package
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
