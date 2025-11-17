import { useRef } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Tracker from './components/Tracker'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'

function Home() {
  const servicesRef = useRef(null)
  const scrollToServices = () => servicesRef.current?.scrollIntoView({ behavior: 'smooth' })
  const openTrack = () => document.getElementById('track-section')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="bg-black">
      <Navbar onTrackClick={openTrack} />
      <Hero onSeeServices={scrollToServices} onTrackClick={openTrack} />
      <div ref={servicesRef}>
        <Services />
      </div>

      <section id="track-section" className="bg-gradient-to-b from-zinc-900 to-black py-16">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <h3 className="text-white text-2xl font-bold mb-4">Track a Package</h3>
          <Tracker />
        </div>
      </section>

      <Testimonials />
      <Footer />
    </div>
  )
}

export default function App() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<>
          <Navbar onTrackClick={() => navigate('/#track-section')} />
          <About />
          <Footer />
        </>} />
        <Route path="/contact" element={<>
          <Navbar onTrackClick={() => navigate('/#track-section')} />
          <Contact />
          <Footer />
        </>} />
      </Routes>
    </div>
  )
}
