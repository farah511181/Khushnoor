import Hero from '../../components/home/Hero'
import AboutPreview from '../../components/home/AboutPreview'
import FeaturedWork from '../../components/home/FeaturedWork'
import FeaturedFilms from '../../components/home/FeaturedFilms'
import Statistics from '../../components/home/Statistics'
import JournalPreview from '../../components/home/JournalPreview'
import Awards from '../../components/home/Awards'
import Testimonials from '../../components/home/Testimonials'
import FinalCTA from '../../components/home/FinalCTA'
import InstagramPreview from '../../components/home/InstagramPreview'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedWork />
      <FeaturedFilms />
      <Statistics />
      <JournalPreview />
      <Awards />
      <Testimonials />
      <FinalCTA />
      <InstagramPreview />
    </>
  )
}