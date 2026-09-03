import PageHero from '../../components/common/PageHero'
import PhotographyCategoryCard from '../../components/photography/PhotographyCategoryCard'
import { CATEGORIES } from '../../data/portfolioData'

export default function Photography() {
  return (
    <>
      <PageHero
        eyebrow="Photography"
        title="Our Collections"
description="Explore our work across weddings, couples, families, and fashion — each collection told in its own light."
      />

<section className="py-20 lg:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat, i) => (
              <PhotographyCategoryCard key={cat.slug} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
