import { motion } from 'motion/react'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'

const AWARDS = ['WPJA', 'Fearless', 'Junebug', 'Two Bright Lights', 'The Wedding Story']

export default function Awards() {
  return (
<section className="py-20 lg:py-[100px] bg-ivory">
      <div className="max-w-5xl mx-auto px-6 lg:px-16 text-center">
        <SectionHeading
          eyebrow="Recognition"
          title="Recognition"
          description="Our work has been recognised by leading international wedding photography communities and organisations. Our studio has been associated with respected photography fraternities and has received accolades celebrating creativity, storytelling and visual excellence."
        />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {AWARDS.map((award, i) => (
            <motion.div
              key={award}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#8A6A52" strokeWidth="1">
                  <path d="M12 2l3 6.5 7 1-5 5 1.5 7L12 18l-6.5 3.5L7 14.5l-5-5 7-1z" />
                </svg>
              </div>
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-taupe">
                {award}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-14">
          <Button href="#featured-work" variant="outline-dark">
            Read More
          </Button>
        </div>
      </div>
    </section>
  )
}
