import { useParams, Link } from 'react-router-dom'
import Button from '../../components/common/Button'
import { BLOG_POSTS } from '../../data/portfolioData'

const SAMPLE_CONTENT = [
  "Light is the very first thing we notice in any photograph, yet it is the thing we most often take for granted. The difference between an ordinary image and a breathtaking one is rarely the subject — it's the quality of light falling on it.",
  "Working with natural light requires patience and timing. The golden hour, that brief window shortly after sunrise and before sunset, transforms ordinary scenes into something almost magical. Shadows grow long, colors deepen, and skin takes on a warm, luminous glow.",
  "Our advice to any couple or family preparing for a session is simple: trust your photographer, and trust the light. The most memorable images aren't the ones where everyone is looking at the camera — they're the ones where it's clear no one noticed it was there.",
  "As we look ahead to the coming season, we're most excited about the quiet moments. The laughter between stills, the tears held back during a father-daughter dance, the way a child's hand fits perfectly inside a parent's.",
  "Because at the end of the day, that's what we're really preserving — not just faces and places, but the feeling of being alive in a moment that will never come again.",
]

export default function BlogDetail() {
  const { id } = useParams()
  const post = BLOG_POSTS.find((p) => p.id === id)

  if (!post) {
    return (
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-display text-4xl text-espresso mb-4">
          Post not found
        </h1>
        <p className="text-taupe mb-8">The article you're looking for doesn't exist.</p>
        <Button to="/blog" variant="primary">
          Back to Journal
        </Button>
      </section>
    )
  }

  return (
    <>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-espresso pt-20">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 pb-16 text-center">
          <div className="flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mocha mb-4">
            <span>{post.category}</span>
            <span className="w-1 h-1 rounded-full bg-mocha" />
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-mocha" />
            <span>{post.readTime}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-ivory leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="py-20 bg-ivory">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="font-serif text-xl md:text-2xl text-espresso leading-relaxed mb-8">
            {post.excerpt}
          </p>
          {SAMPLE_CONTENT.map((para, i) => (
            <p key={i} className="text-taupe leading-relaxed mb-6">
              {para}
            </p>
          ))}

          <div className="mt-12 pt-8 border-t border-espresso/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-espresso hover:text-mocha transition-colors"
            >
              <span aria-hidden>←</span> Back to Journal
            </Link>
            <div className="flex gap-4">
              <a href="#" className="font-mono text-[11px] uppercase tracking-[0.22em] text-mocha hover:text-espresso">Share</a>
              <a href="#" className="font-mono text-[11px] uppercase tracking-[0.22em] text-mocha hover:text-espresso">Instagram</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
