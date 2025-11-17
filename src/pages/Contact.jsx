import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div className="bg-gradient-to-b from-black to-zinc-900 min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-12 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">Contact Us</h1>
          <p className="text-white/70 mt-3">We'd love to help. Call, visit, or send us a message.</p>

          <div className="mt-6 space-y-3 text-white/80">
            <div className="flex items-center gap-2"><MapPin size={18}/> 5970 E State St, Rockford, IL 61108</div>
            <div className="flex items-center gap-2"><Phone size={18}/> (815) 505-2509</div>
            <div className="flex items-center gap-2"><Mail size={18}/> info@masmailprint.com</div>
          </div>

          <div className="mt-6 h-64 rounded-lg overflow-hidden border border-white/10">
            <iframe title="map" width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen src="https://www.google.com/maps?q=5970+E+State+St,+Rockford,+IL+61108&output=embed"></iframe>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <form onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will be in touch.') }} className="space-y-4">
            <div className="relative">
              <input name="name" value={form.name} onChange={onChange} className="w-full bg-transparent border border-white/20 rounded-md px-3 pt-5 pb-2 text-white placeholder-transparent focus:border-yellow-400 outline-none" placeholder="Name" />
              <label className={`absolute left-3 top-2 text-xs transition-all ${form.name ? 'text-yellow-300' : 'text-white/50'}`}>Name</label>
            </div>
            <div className="relative">
              <input name="email" type="email" value={form.email} onChange={onChange} className="w-full bg-transparent border border-white/20 rounded-md px-3 pt-5 pb-2 text-white placeholder-transparent focus:border-yellow-400 outline-none" placeholder="Email" />
              <label className={`absolute left-3 top-2 text-xs transition-all ${form.email ? 'text-yellow-300' : 'text-white/50'}`}>Email</label>
            </div>
            <div className="relative">
              <textarea name="message" value={form.message} onChange={onChange} rows="5" className="w-full bg-transparent border border-white/20 rounded-md px-3 pt-5 pb-2 text-white placeholder-transparent focus:border-yellow-400 outline-none" placeholder="Message" />
              <label className={`absolute left-3 top-2 text-xs transition-all ${form.message ? 'text-yellow-300' : 'text-white/50'}`}>Message</label>
            </div>
            <button className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-md hover:brightness-110 transition">Send Message</button>
            <div className="flex gap-4 justify-center text-white/80 mt-4">
              <a href="#" className="hover:text-yellow-300 transition">Facebook</a>
              <a href="#" className="hover:text-yellow-300 transition">Instagram</a>
              <a href="#" className="hover:text-yellow-300 transition">Google</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
