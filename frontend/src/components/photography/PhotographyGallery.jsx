import { useState } from 'react'

export default function PhotographyGallery({ images }) {
  const [active, setActive] = useState(0)

  if (!images || images.length === 0) {
    return (
      <div className="w-full py-20 text-center bg-white">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-mocha">
          Portfolio coming soon
        </p>
      </div>
    )
  }

  const current = images[active]

  return (
    <section
      className="
        relative
        left-1/2
        right-1/2
        -mx-[50vw]
        w-screen
        h-screen
        flex
        items-stretch
        overflow-hidden
        bg-black
      "
    >

      {/* ================================================= */}
      {/* SAME IMAGE — FULL BACKGROUND                      */}
      {/* ================================================= */}

      <div className="absolute inset-0 overflow-hidden">
        <img
          key={`background-${current.src}`}
          src={current.src}
          alt=""
          aria-hidden="true"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
            scale-110
            blur-2xl
            opacity-70
            transition-all
            duration-700
          "
        />

        {/* Soft overlay — keeps main image readable */}
        <div
          className="
            absolute
            inset-0
            bg-black/15
          "
        />
      </div>


      {/* ================================================= */}
      {/* LEFT — SELECTED IMAGE                            */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10
          flex-1
          min-w-0
          h-full
          flex
          items-center
          justify-center
          overflow-hidden
          px-6
          py-6
        "
      >

        {/* Main image + border */}
        <div
          className="
            relative
            max-w-full
            max-h-full
            flex
            items-center
            justify-center
            border-2
            border-mocha
            shadow-2xl
            overflow-hidden
          "
        >
          <img
            key={current.src}
            src={current.src}
            alt={current.alt || 'Photography'}
            className="
              block
              max-w-full
              max-h-[calc(100vh-48px)]
              w-auto
              h-auto
              object-contain
              object-center
              transition-all
              duration-700
            "
          />
        </div>

      </div>


      {/* ================================================= */}
      {/* RIGHT — IMAGE LIST                               */}
      {/* ================================================= */}

      <aside
        className="
          relative
          z-20
          w-[220px]
          xl:w-[240px]
          2xl:w-[260px]
          flex-shrink-0
          h-full
          ml-6
          self-stretch
          py-6
          pr-6
        "
      >

        <div
          className="
            h-full
            overflow-y-auto
            overflow-x-hidden
            pr-1
            scrollbar-thin
          "
        >

          <div className="flex flex-col gap-4">

            {images.map((img, index) => (
              <button
                key={`${img.src}-${index}`}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`View ${
                  img.alt || `image ${index + 1}`
                }`}
                className={`
                  relative
                  w-full
                  h-[125px]
                  flex-shrink-0
                  overflow-hidden
                  bg-black/10
                  transition-all
                  duration-300
                  focus:outline-none
                  ${
                    active === index
                      ? 'ring-2 ring-mocha ring-offset-2 ring-offset-transparent opacity-100'
                      : 'opacity-65 hover:opacity-100'
                  }
                `}
              >

                <img
                  src={img.src}
                  alt={img.alt || `Photography ${index + 1}`}
                  className="
                    w-full
                    h-full
                    object-contain
                    object-center
                    block
                  "
                />

              </button>
            ))}

          </div>

        </div>

      </aside>

    </section>
  )
}