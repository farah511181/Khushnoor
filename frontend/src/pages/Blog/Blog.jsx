import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import PageHero from '../../components/common/PageHero'
import { BLOG_POSTS } from '../../data/portfolioData'

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Stories & Guides"
        description="Notes from the studio — practical guides, honest reflections, and behind-the-scenes glimpses of our world."
      />

<section className="py-20 lg:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group"
            >
<Link to={`/blog/${post.id}`} className="block">
{post.image && (
                <div className="overflow-hidden">
<img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto object-contain bg-espresso/5"
                  />
                </div>
              )}
                <div className="pt-5">
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-mocha mb-3">
                    <span>{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-mocha" />
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-display text-xl text-espresso leading-snug group-hover:text-mocha transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-taupe leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 font-mono text-[11px] uppercase tracking-[0.25em] text-espresso group-hover:gap-3 transition-all">
Read more <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  )
}
