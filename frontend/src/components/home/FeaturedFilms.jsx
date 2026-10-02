import { motion } from 'motion/react'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'

import weddingVideo1 from '../../assets/FrontVideo/IMG_0470.MP4'

// Baad mein:
// import weddingVideo2 from '../../assets/FrontVideo/SECOND-VIDEO.mp4'
// import weddingVideo3 from '../../assets/FrontVideo/THIRD-VIDEO.mp4'

const WEDDING_VIDEOS = [
  {
    id: 1,
    title: 'Wedding Film',
    video: weddingVideo1,
  },

  // Baad mein second video yahan add karna
  // {
  //   id: 2,
  //   title: 'Wedding Film',
  //   video: weddingVideo2,
  // },

  // Baad mein third video yahan add karna
  // {
  //   id: 3,
  //   title: 'Wedding Film',
  //   video: weddingVideo3,
  // },
]

export default function FeaturedFilms() {
  return (
    <section className="py-20 lg:py-[100px] bg-espresso relative overflow-hidden">

      <div className="w-full">

        {/* Heading */}
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeading
            eyebrow="Wedding Films"
            title="Redefining Wedding Films Through Storytelling"
            description="Our wedding films are tailor-made for your big day. We make every film feel personal and earthy, with real emotions, natural sounds and candid moments captured as they unfold."
            light
          />
        </div>

        {/* =====================================================
            WEDDING VIDEOS
            Full width — NO CROP — NO BLACK BACKGROUND
        ===================================================== */}

        <div className="mt-12 space-y-20">

          {WEDDING_VIDEOS.map((film, index) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: '-80px',
              }}
              transition={{
                duration: 0.9,
                ease: 'easeOut',
              }}
              className="w-full"
            >

              {/* FULL WIDTH VIDEO */}
              <div className="w-full overflow-hidden">

                <video
                  src={film.video}
                  className="block w-full h-auto"
                  controls
                  playsInline
                  preload="metadata"
                />

              </div>

              {/* VIDEO TITLE */}
              <div className="max-w-[1600px] mx-auto px-6 mt-5 flex items-end justify-between">

                <div>
                  <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-sand">
                    Wedding Film {String(index + 1).padStart(2, '0')}
                  </p>

                  <h3 className="font-display text-2xl md:text-4xl text-ivory mt-2">
                    {film.title}
                  </h3>
                </div>

                <span className="hidden md:block font-sans text-[11px] uppercase tracking-[0.3em] text-ivory/60">
                  Watch Film
                </span>

              </div>

            </motion.div>
          ))}

        </div>

        {/* BUTTON */}
        <div className="mt-16 text-center">
          <Button to="/films" variant="light">
            Explore Our Films
          </Button>
        </div>

      </div>
    </section>
  )
}