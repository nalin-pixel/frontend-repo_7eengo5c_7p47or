import { useState, useEffect } from 'react'

const items = [
  { quote: 'Super fast printing and super friendly service. Highly recommend!', author: 'Alicia P.' },
  { quote: 'They handled my shipping and mailbox rental seamlessly.', author: 'Marcus W.' },
  { quote: 'Professional graphic design and quick turnaround. Great experience.', author: 'Devon R.' },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative bg-zinc-900 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-white text-2xl font-semibold mb-6">What customers say</h3>
        <div className="relative h-28">
          {items.map((t, i) => (
            <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-white/90 text-lg">“{t.quote}”</p>
              <p className="text-white/60 mt-2">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
