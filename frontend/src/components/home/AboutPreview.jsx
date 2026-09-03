import { motion } from 'motion/react'
import Button from '../common/Button'
import AboutImage from '../../assets/Imagess/W13.jpeg'

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-[100px] bg-nude">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="overflow-hidden bg-espresso/5 w-full">
            <img
              src={AboutImage}
              alt="Hemant Sharma Photography — behind the lens"
              className="w-full h-auto object-contain object-center bg-espresso/5"
            />
          </div>

          {/* Experience Badge */}
          <div className="absolute -bottom-6 -right-6 bg-espresso text-ivory p-5 hidden md:block">
            <p className="font-display text-3xl font-light">
              7+
            </p>

            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-sand mt-1">
              Years of Passion
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.35em] text-walnut mb-4">
            Our Philosophy
          </p>

          <h1 className="font-display text-4xl md:text-5xl text-espresso leading-tight">
            We Tell Love Stories
          </h1>

          <p className="mt-6 text-base md:text-lg text-taupe leading-relaxed">
            For us, photography is much more than creating beautiful images —
            it’s about preserving emotions, honouring traditions, and capturing
            the moments that become timeless memories. Every wedding carries
            its own rhythm, and we listen before we shoot.
          </p>

          <p className="mt-4 text-base md:text-lg text-taupe leading-relaxed">
            With years of experience photographing destination weddings across
            the world, we bring an editorial, cinematic and deeply personal
            approach to every celebration.
          </p>

          <div className="mt-8">
            <Button to="/about" variant="outline-dark">
              Our Story
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}