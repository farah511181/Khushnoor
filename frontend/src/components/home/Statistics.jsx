import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

const STATS = [
  { value: 123, suffix: '+', label: 'Cups of Coffee' },
  { value: 743, suffix: '+', label: 'Happy Couples' },
  { value: 15, suffix: '', label: 'Years of Passion' },
  { value: 54, suffix: '', label: 'Destinations' },
  { value: 954, suffix: '', label: 'Ceremonies' },
]

function Counter({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const duration = 1800
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  )
}

export default function Statistics() {
  return (
<section className="py-20 lg:py-[100px] bg-nude">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-serif text-5xl md:text-6xl text-espresso font-light">
                <Counter value={stat.value} />
                {stat.suffix}
              </p>
              <p className="mt-3 font-sans text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-taupe">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
