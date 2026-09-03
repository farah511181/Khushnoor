import { motion } from 'motion/react'
import PageHero from '../../components/common/PageHero'
import SectionHeading from '../../components/common/SectionHeading'
import clientImage from '../../assets/client/images/clint image.jpeg'

const VALUES = [
  {
    title: 'Authenticity',
    description:
      'We never chase a pose. The most powerful images are the ones that happen naturally, between the moments we plan.',
  },
  {
    title: 'Light',
    description:
      'Light is our language. We study it, chase it, and use it to sculpt emotion in every single frame.',
  },
  {
    title: 'Storytelling',
    description:
      'Every session is a narrative. We look for the connective tissue that turns a collection of photos into a story.',
  },
  {
    title: 'Connection',
    description:
      'Trust is the foundation of great portraiture. We build real relationships with every family, couple, and client.',
  },
]

export default function About() {
  return (
    <>
      {/* ====================================================== */}
      {/* PAGE HERO */}
      {/* ====================================================== */}

      <PageHero
        eyebrow="About Hemant Sharma"
        title="The Story Behind the Lens"
        description="Photographer, storyteller, and Founder of Hemant Sharma Photography and Studio Portrait by Hemant."
      />

      {/* ====================================================== */}
      {/* MEET THE FOUNDER */}
      {/* ====================================================== */}

      <section className="bg-[#09090b] text-white overflow-hidden">
        <div className="lg:min-h-[640px] grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">

          {/* ================================================== */}
          {/* FOUNDER CONTENT — LEFT */}
          {/* ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="
              order-2
              lg:order-1
              flex
              items-center
              justify-center
              px-6
              py-16
              sm:px-10
              lg:px-14
              lg:py-20
            "
          >
            <div className="max-w-xl text-center lg:text-left">

              {/* Eyebrow */}

              <p
                className="
                  font-sans
                  text-[11px]
                  md:text-xs
                  uppercase
                  tracking-[0.45em]
                  text-white/60
                  mb-5
                "
              >
                Meet
              </p>

              {/* Heading */}

              <h2
                className="
                  font-display
                  text-4xl
                  md:text-5xl
                  text-white
                  leading-tight
                "
              >
                Our Founder
              </h2>

              {/* Intro */}

              <div
                className="
                  mt-8
                  space-y-6
                  text-sm
                  md:text-base
                  leading-relaxed
                  text-white/70
                "
              >

                <p>
                  I’m Hemant Sharma, Founder and Creative Director of
                  <span className="text-white">
                    {' '}Hemant Sharma Photography
                  </span>{' '}
                  and
                  <span className="text-white">
                    {' '}Studio Portrait by Hemant.
                  </span>
                </p>

                <p>
                  Photography, for me, has never been simply about creating
                  beautiful images. It is about preserving emotions, documenting
                  genuine connections, and transforming fleeting moments into
                  memories that last a lifetime.
                </p>

                <p>
                  With over
                  <span className="text-white">
                    {' '}7 years of professional experience
                  </span>{' '}
                  and more than
                  <span className="text-white">
                    {' '}500 weddings captured,
                  </span>{' '}
                  my journey has been shaped by a simple belief: the best
                  photographs are the ones you can feel.
                </p>

                <p>
                  Every wedding, portrait session, and celebration carries its
                  own personality. Rather than following a fixed formula, we
                  take the time to understand each story and capture it in a
                  way that feels honest, personal, and timeless.
                </p>

                <p>
                  At
                  <span className="text-white">
                    {' '}Studio Portrait by Hemant,
                  </span>{' '}
                  we believe great photography goes beyond perfect poses.
                  Genuine expressions, real emotions, spontaneous laughter,
                  quiet glances, and those unexpected moments often become the
                  photographs people treasure the most.
                </p>

                <p>
                  Our approach combines
                  <span className="text-white">
                    {' '}storytelling, thoughtful composition, natural emotion,
                    {' '}and refined visual aesthetics
                  </span>{' '}
                  to create imagery that feels both contemporary and
                  meaningful.
                </p>

                <p>
                  From our first conversation to the final delivery, every
                  detail is handled with care. We believe a premium photography
                  experience is not only about the final photographs, but also
                  about making the entire journey comfortable, personal, and
                  memorable for our clients.
                </p>

                <p>
                  Each image is thoughtfully selected, professionally edited,
                  and refined with attention to the smallest details. The goal
                  is never simply to deliver photographs, but to create a
                  collection that allows you to return to a moment and
                  experience it all over again.
                </p>

                <p>
                  Our mission is simple:
                  <span className="text-white">
                    {' '}to create photographs that make you feel.
                  </span>
                </p>

                <p>
                  Whether it is a wedding day, an intimate portrait, a fashion
                  story, or a family celebration, we look for the moments that
                  carry emotion and meaning — the moments that remain long after
                  the day itself has passed.
                </p>

                <p>
                  Client satisfaction remains at the heart of everything we do.
                  We aim not only to meet expectations, but to exceed them
                  through exceptional quality, personalized service, and
                  photographs that families can cherish for generations.
                </p>

                {/* Closing Statement */}

                <div className="pt-5 border-t border-white/10">

                  <p
                    className="
                      font-display
                      text-xl
                      md:text-2xl
                      leading-relaxed
                      text-white
                    "
                  >
                    “Every photograph is more than an image —
                    it is a story, an emotion, and a memory preserved forever.”
                  </p>

                  <p
                    className="
                      mt-5
                      font-sans
                      text-[10px]
                      uppercase
                      tracking-[0.35em]
                      text-white/45
                    "
                  >
                    — Hemant Sharma
                  </p>

                </div>

              </div>
            </div>
          </motion.div>

          {/* ================================================== */}
          {/* FOUNDER IMAGE — RIGHT */}
          {/* ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="
              relative
              order-1
              lg:order-2
              h-[60vh]
              lg:h-auto
              overflow-hidden
            "
          >
            <img
              src={clientImage}
              alt="Hemant Sharma, Founder & Creative Director"
              className="
                w-full
                h-full
                object-cover
                object-center
                grayscale
                contrast-125
              "
            />
          </motion.div>

        </div>
      </section>

      {/* ====================================================== */}
      {/* VALUES */}
      {/* ====================================================== */}

      <section className="py-20 lg:py-20 bg-nude">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <SectionHeading
            eyebrow="Our Approach"
            title="What Guides Our Craft"
            description="At Studio Portrait by Hemant, we believe great photography isn't about perfect poses — it's about genuine expressions, real emotions, and unforgettable moments."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {VALUES.map((value, i) => (

              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                }}
                className="
                  bg-ivory
                  p-7
                  border
                  border-espresso/5
                  hover:border-mocha/40
                  transition-colors
                "
              >

                <span className="font-display text-4xl text-mocha/30">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <h3
                  className="
                    font-display
                    text-2xl
                    text-espresso
                    mt-3
                    mb-3
                  "
                >
                  {value.title}
                </h3>

                <p className="text-sm text-taupe leading-relaxed">
                  {value.description}
                </p>

              </motion.div>

            ))}

          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* STATS */}
      {/* ====================================================== */}

      <section className="py-20 lg:py-20 bg-espresso">

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            lg:px-10
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-10
            text-center
          "
        >

          {[
            ['7+', 'Years of Experience'],
            ['500+', 'Weddings Captured'],
            ['1000+', 'Happy Clients'],
            ['100%', 'Commitment to Quality'],
          ].map(([num, label], i) => (

            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
              }}
            >

              <p
                className="
                  font-display
                  text-5xl
                  md:text-6xl
                  text-ivory
                "
              >
                {num}
              </p>

              <p
                className="
                  font-mono
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-mocha
                  mt-3
                "
              >
                {label}
              </p>

            </motion.div>

          ))}

        </div>
      </section>
    </>
  )
}