import { motion } from 'motion/react'
import PageHero from '../../components/common/PageHero'
import { POEMS, POETRY_IMAGES } from '../../data/portfolioData'

export default function Poetry() {
  const layouts = [
    // ROW 1 — 2 IMAGES
    [
      {
        image: POETRY_IMAGES[0],
        width: 'md:col-span-5',
        content: POEMS[0],
      },
      {
        image: POETRY_IMAGES[1],
        width: 'md:col-span-7',
        content: POEMS[1],
      },
    ],

    // ROW 2 — 3 IMAGES
    [
      {
        image: POETRY_IMAGES[2],
        width: 'md:col-span-4',
        content: POEMS[2],
      },
      {
        image: POETRY_IMAGES[3],
        width: 'md:col-span-4',
        content: POEMS[3],
      },
      {
        image: POETRY_IMAGES[4],
        width: 'md:col-span-4',
        content: POEMS[4],
      },
    ],

    // ROW 3 — 2 IMAGES
    [
      {
        image: POETRY_IMAGES[5],
        width: 'md:col-span-7',
        content: POEMS[5],
      },
      {
        image: POETRY_IMAGES[6],
        width: 'md:col-span-5',
        content: POEMS[6],
      },
    ],

    // ROW 4 — 2 IMAGES
    [
      {
        image: POETRY_IMAGES[7],
        width: 'md:col-span-5',
        content: POEMS[7],
      },
      {
        image: POETRY_IMAGES[8],
        width: 'md:col-span-7',
        content: POEMS[8],
      },
    ],
  ]

  return (
    <>
      <PageHero
        eyebrow="Poetry"
        title="Words & Light"
        description="A collection of moments captured in light, emotion, and quiet stories."
      />

      <section className="bg-ivory py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="space-y-28 lg:space-y-40">

            {layouts.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-12
                  gap-10
                  lg:gap-14
                  items-start
                "
              >

                {row.map((item, itemIndex) => (
                  <motion.article
                    key={`${rowIndex}-${itemIndex}`}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: '-80px',
                    }}
                    transition={{
                      duration: 0.8,
                      delay: itemIndex * 0.12,
                      ease: 'easeOut',
                    }}
                    className={`${item.width} w-full`}
                  >

                    {/* IMAGE */}

                    <div className="group relative w-full overflow-hidden">

                      <img
                        src={item.image}
                        alt={
                          item.content?.title ||
                          `Poetry photograph ${itemIndex + 1}`
                        }
                        className="
                          block
                          w-full
                          h-auto
                          object-contain
                          transition-transform
                          duration-[1200ms]
                          ease-out
                          group-hover:scale-[1.02]
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-0
                          bg-black/10
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          duration-700
                          pointer-events-none
                        "
                      />

                    </div>


                    {/* CONTENT BELOW EVERY IMAGE */}

                    <div className="pt-8 lg:pt-10">

                      <p
                        className="
                          font-mono
                          text-[9px]
                          uppercase
                          tracking-[0.3em]
                          text-mocha
                          mb-4
                        "
                      >
                        Poem {rowIndex + itemIndex + 1}
                      </p>

                      <h2
                        className="
                          font-display
                          text-3xl
                          lg:text-4xl
                          text-espresso
                          mb-5
                        "
                      >
                        {item.content.title}
                      </h2>

                      <p
                        className="
                          font-serif
                          text-lg
                          lg:text-xl
                          text-taupe
                          leading-relaxed
                          italic
                          max-w-2xl
                        "
                      >
                        &ldquo;{item.content.full}&rdquo;
                      </p>

                    </div>

                  </motion.article>
                ))}

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  )
}