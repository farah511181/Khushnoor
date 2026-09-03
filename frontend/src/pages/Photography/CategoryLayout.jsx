import PageHero from '../../components/common/PageHero'
import PhotographyGallery from '../../components/photography/PhotographyGallery'
import Button from '../../components/common/Button'
import { GALLERY_IMAGES } from '../../data/portfolioData'

export default function CategoryLayout({ slug, name, tagline, description }) {
  const images = GALLERY_IMAGES[slug] || []

  return (
    <>
      <PageHero
        eyebrow={tagline}
        title={name}
        description={description}
      />

      {/* Photography Images */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <PhotographyGallery images={images} />
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-espresso">
              Ready to begin your {name.toLowerCase()} story?
            </h3>

            <p className="mt-2 text-taupe">
              Let's plan a session that reflects who you are.
            </p>
          </div>

          <Button to="/contact" variant="primary" size="md">
            Book a Session
          </Button>
        </div>
      </section>
    </>
  )
}
