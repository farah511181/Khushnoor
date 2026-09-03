import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import './Intro.css'

// =========================================================
// INTRO IMAGES
// Images folder is OUTSIDE frontend
// Photography/Images/IntroImage/
// =========================================================

import Intro1 from '../../assets/Imagess/IntroImage/Intro1.jpeg'
import Intro2 from '../../assets/Imagess/IntroImage/Intro2.jpeg'
import Intro3 from '../../assets/Imagess/IntroImage/Intro3.jpeg'
import Intro4 from '../../assets/Imagess/IntroImage/Intro4.jpeg'
import Intro5 from '../../assets/Imagess/IntroImage/Intro5.jpeg'
import Intro6 from '../../assets/Imagess/IntroImage/Intro6.jpeg'
import Intro7 from '../../assets/Imagess/IntroImage/Intro7.jpeg'
import Intro8 from '../../assets/Imagess/IntroImage/Intro8.jpeg'
import Intro9 from '../../assets/Imagess/IntroImage/Intro9.jpeg'

const INTRO_IMAGES = [
  Intro1,
  Intro2,
  Intro3,
  Intro4,
  Intro5,
  Intro6,
  Intro7,
  Intro8,
  Intro9,
]


// =========================================================
// INTRO COMPONENT
// =========================================================

export default function Intro() {

  const navigate = useNavigate()

  const [activeIndex, setActiveIndex] = useState(0)


  // =======================================================
  // PRELOAD ALL IMAGES + AUTO SLIDER
  // =======================================================

  useEffect(() => {

    let timer

    const preloadImages = () => {

      const imagePromises = INTRO_IMAGES.map((src) => {

        return new Promise((resolve) => {

          const img = new Image()

          img.src = src

          img.onload = resolve

          img.onerror = resolve

        })

      })


      Promise.all(imagePromises).then(() => {

        timer = setInterval(() => {

          setActiveIndex((prev) => {

            return (prev + 1) % INTRO_IMAGES.length

          })

        }, 3000)

      })

    }


    preloadImages()


    return () => {

      if (timer) {
        clearInterval(timer)
      }

    }

  }, [])


  // =======================================================
  // VIEW MORE
  // =======================================================

  const handleViewMore = () => {

    navigate('/home')

  }


  // =======================================================
  // CONTACT
  // =======================================================

  const handleContact = () => {

    navigate('/contact')

  }


  // =======================================================
  // UI
  // =======================================================

  return (

    <main className="intro-page">


      {/* ===================================================
          BACKGROUND IMAGE
      =================================================== */}

      <div className="intro-slider">

        <AnimatePresence mode="sync">

          <motion.img
            key={activeIndex}
            src={INTRO_IMAGES[activeIndex]}
            alt={`Hemant Sharma Photography ${activeIndex + 1}`}
            className="intro-image"

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            transition={{
              opacity: {
                duration: 0.7,
                ease: 'easeInOut',
              },
            }}
          />

        </AnimatePresence>


        {/* DARK OVERLAY */}

        <div className="intro-overlay" />


        {/* BOTTOM GRADIENT */}

        <div className="intro-bottom-gradient" />

      </div>



      {/* ===================================================
          TOP CONTENT
      =================================================== */}

      <div className="intro-content">


        {/* =================================================
            HEMANT SHARMA PHOTOGRAPHY
        ================================================= */}

        <motion.h1
          className="intro-title intro-brand-title"

          initial={{
            opacity: 0,
            y: -15,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}
        >
          HEMANT SHARMA <span>PHOTOGRAPHY</span>
        </motion.h1>



        {/* =================================================
            BUTTONS
        ================================================= */}

        <motion.div
          className="intro-buttons"

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
        >

          <button
            type="button"
            className="intro-button intro-button-primary"
            onClick={handleViewMore}
          >
            VIEW MORE
          </button>


          <button
            type="button"
            className="intro-button intro-button-secondary"
            onClick={handleContact}
          >
            CONTACT US
          </button>

        </motion.div>

      </div>



      {/* ===================================================
          BOTTOM LEFT
      =================================================== */}

      <div className="intro-bottom-text">

        WEDDING · PORTRAIT · STORIES

      </div>



      {/* ===================================================
          COUNTER
      =================================================== */}

      <div className="intro-counter">

        <span>
          {String(activeIndex + 1).padStart(2, '0')}
        </span>

        <span className="intro-counter-line" />

        <span>
          {String(INTRO_IMAGES.length).padStart(2, '0')}
        </span>

      </div>


    </main>

  )
}