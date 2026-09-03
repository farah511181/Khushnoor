import { motion } from 'motion/react'
import Button from '../common/Button'
import { INSTAGRAM_POSTS, INSTAGRAM_USERNAME, INSTAGRAM_URL } from '../../data/instagramData'

export default function InstagramPreview() {
  return (
<section className="py-20 lg:py-[100px] bg-ivory">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
className="font-sans text-[11px] uppercase tracking-[0.4em] text-walnut mb-4"
          >
            Follow Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display text-4xl md:text-5xl text-espresso"
          >
            Follow Our Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 font-serif italic text-lg text-taupe"
          >
            {INSTAGRAM_USERNAME}
          </motion.p>
        </div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 lg:gap-10">
          {INSTAGRAM_POSTS.map((post, i) => (
<motion.a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.06 }}
              className="group relative overflow-hidden aspect-square"
>
{post.src ? (
<img
                  src={post.src}
                  alt={post.alt}
                  className="w-full h-auto object-contain bg-espresso/5"
                />
              ) : (
                <div className="w-full h-full bg-espresso/10" />
              )}
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/30 transition-colors duration-500 flex items-center justify-center">
                <svg
                  className="w-7 h-7 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-ivory"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href={INSTAGRAM_URL} target="_blank" variant="outline-dark">
            Follow on Instagram
          </Button>
        </div>
      </div>
    </section>
  )
}
