import Intro2 from '../../assets/Imagess/IntroImage/Intro2.jpeg'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#9bb9d2]">
      <img
        src={Intro2}
        alt="Hemant Sharma Photography"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-center
        "
      />
    </section>
  )
}