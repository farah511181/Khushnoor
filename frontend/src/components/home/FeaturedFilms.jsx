import { motion } from 'motion/react'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import { WEDDING_FILM } from '../../data/weddingData'

export default function FeaturedFilms() {
  return (
<section className="py-20 lg:py-[100px] bg-espresso relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <SectionHeading
          eyebrow="Wedding Films"
          title="Redefining Wedding Films Through Storytelling"
          description="Our wedding films are tailor-made for your big day. We make every film feel personal and earthy, with real emotions, natural sounds and candid moments captured as they unfold."
          light
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mt-12 relative"
        >
{/* 16:9 cinematic video area */}
          <div className="relative overflow-hidden aspect-[16/9] bg-charcoal group cursor-pointer">
{WEDDING_FILM.poster && (
<img
                src={WEDDING_FILM.poster}
                alt={WEDDING_FILM.title}
                className="w-full h-full object-contain"
              />
            )}
            <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/30 transition-colors duration-500" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-ivory/95 flex items-center justify-center shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] group-hover:bg-ivory transition-colors duration-500">
                <svg width="20" height="24" viewBox="0 0 12 16" fill="#2A211B">
                  <path d="M0 0l12 8-12 8V0z" />
                </svg>
              </div>
            </div>

            {/* Film label bottom */}
            <div className="absolute left-6 md:left-10 bottom-6 md:bottom-10 right-6 flex items-end justify-between">
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-sand">
                  Featured Film
                </p>
                <h3 className="font-display text-2xl md:text-4xl text-ivory mt-2">
                  {WEDDING_FILM.title}
                </h3>
              </div>
              <span className="hidden md:inline-block font-sans text-[11px] uppercase tracking-[0.3em] text-ivory/70">
                Watch Film
              </span>
            </div>
          </div>
        </motion.div>

        <div className="mt-14 text-center">
          <Button to="/films" variant="light">
            Explore Our Films
          </Button>
        </div>
      </div>
    </section>
  )
}

