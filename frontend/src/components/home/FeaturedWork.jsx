import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import { FEATURED_STORIES } from '../../data/weddingData'

export default function FeaturedWork() {
  return (
<section id="featured-work" className="py-20 lg:py-[100px] bg-ivory">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <SectionHeading
          eyebrow="Featured Stories"
          title="Stories We’ve Had the Honour to Tell"
          description="Every celebration carries its own rhythm, traditions and emotions. We document those moments honestly, allowing every wedding to become a story of its own."
        />

<div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {FEATURED_STORIES.map((story, i) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: (i % 4) * 0.08, ease: 'easeOut' }}
              className={`group ${
                story.tall
                  ? 'lg:col-span-5'
                  : i === 1
                    ? 'lg:col-span-7 lg:mt-16'
                    : 'lg:col-span-7 lg:-mt-8'
              }`}
            >
<Link to="/photography" className="block overflow-hidden relative">
{story.image && (
<img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-auto object-contain bg-espresso/5"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </Link>
              <div className="pt-5">
<p className="font-sans text-[10px] uppercase tracking-[0.3em] text-walnut">
                  {story.category}
                </p>
<h3 className="font-display text-xl md:text-2xl text-espresso mt-2 leading-snug group-hover:text-walnut transition-colors duration-500">
                  {story.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button to="/photography" variant="outline-dark">
            Explore All Stories
          </Button>
        </div>
      </div>
    </section>
  )
}

