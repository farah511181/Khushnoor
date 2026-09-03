import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import PageHero from '../../components/common/PageHero'
import { FILMS } from '../../data/portfolioData'

export default function Films() {
  return (
    <>
      <PageHero
        eyebrow="Films"
        title="Cinematic Stories"
        description="Short films that capture the emotion, movement, and sound of life's most precious moments."
      />

<section className="py-20 lg:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FILMS.map((film, i) => (
              <motion.div
                key={film.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative overflow-hidden"
              >
                <Link to={`/films/${film.id}`} className="block relative">
<img
                    src={film.cover}
                    alt={film.title}
                    className="w-full h-auto object-contain bg-espresso/5"
                  />
                  <div className="absolute inset-0 bg-espresso/40 group-hover:bg-espresso/60 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-ivory/90 flex items-center justify-center group-hover:bg-ivory transition-colors duration-300">
                      <svg width="18" height="20" viewBox="0 0 12 16" fill="#0d0b0a">
                        <path d="M0 0l12 8-12 8V0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mocha">
                        {film.category}
                      </p>
                      <span className="font-mono text-xs text-ivory">
                        {film.duration}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl text-ivory mt-2">
                      {film.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
