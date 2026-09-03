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
        bg-white
      "
    >

      {/* ================================================= */}
      {/* LEFT — SELECTED IMAGE */}
      {/* ================================================= */}

      <div
        className="
          flex-1
          min-w-0
          h-full
          flex
          items-center
          justify-center
          overflow-hidden
          bg-white
        "
      >
        <img
          key={current.src}
          src={current.src}
          alt={current.alt || 'Photography'}
          className="
            max-w-full
            max-h-full
            w-auto
            h-auto
            object-contain
            object-center
            block
          "
        />
      </div>


      {/* ================================================= */}
      {/* RIGHT — IMAGE LIST */}
      {/* ================================================= */}

      {/* ================================================= */}
{/* RIGHT — IMAGE LIST                                */}
{/* ================================================= */}

<aside 
  className=" 
    w-[220px] 
    xl:w-[240px] 
    2xl:w-[260px] 
    flex-shrink-0 
    h-full 
    ml-6 
    self-stretch 
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
          aria-label={`View ${img.alt || `image ${index + 1}`}`}
          className={`
            relative
            w-full
            h-[125px]
            flex-shrink-0
            overflow-hidden
            bg-white
            transition-all
            duration-300
            focus:outline-none
            ${
              active === index
                ? 'ring-2 ring-mocha opacity-100'
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
              bg-white
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