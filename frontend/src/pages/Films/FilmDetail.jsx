import { useParams } from 'react-router-dom'
import { motion } from 'motion/react'
import Button from '../../components/common/Button'
import { FILMS } from '../../data/portfolioData'

export default function FilmDetail() {
  const { id } = useParams()
  const film = FILMS.find((f) => f.id === id)

  if (!film) {
    return (
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-display text-4xl text-espresso mb-4">Film not found</h1>
        <p className="text-taupe mb-8">The film you're looking for doesn't exist.</p>
        <Button to="/films" variant="primary">
          Back to Films
        </Button>
      </section>
    )
  }

  return (
    <>
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-espresso pt-20">
        <img
          src={film.cover}
          alt={film.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-mocha mb-4">
              {film.category}
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-ivory">
              {film.title}
            </h1>
            <p className="mt-6 max-w-xl mx-auto text-taupe text-lg">
              {film.description}
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href={film.video}
                className="inline-flex items-center gap-3 bg-mocha text-ivory px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] hover:bg-walnut transition-colors"
              >
                <svg width="12" height="14" viewBox="0 0 12 16" fill="currentColor">
                  <path d="M0 0l12 8-12 8V0z" />
                </svg>
                Play Film
              </a>
              <span className="font-mono text-sm text-ivory">{film.duration}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="aspect-video bg-espresso flex items-center justify-center">
            <a
              href={film.video}
              className="flex flex-col items-center gap-4 text-center p-10"
            >
              <div className="w-20 h-20 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-mocha transition-colors">
                <svg width="28" height="32" viewBox="0 0 12 16" fill="#f5f0e8">
                  <path d="M0 0l12 8-12 8V0z" />
                </svg>
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-taupe">
{film.title} — {film.duration}
              </span>
            </a>
          </div>

          <div className="mt-12 text-center">
            <Button to="/films" variant="outline">
              View All Films
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
