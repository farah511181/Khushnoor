// =====================================================
// CENTRALIZED CONTENT DATA
// Hemant Sharma Photography Studio Website
// =====================================================


// =====================================================
// MAIN WEBSITE IMAGES
// src/assets/Imagess/
// =====================================================

import W1 from '../assets/Imagess/W1.jpeg'
import W2 from '../assets/Imagess/W2.jpeg'
import W3 from '../assets/Imagess/W3.jpeg'
import W4 from '../assets/Imagess/W4.jpeg'
import W5 from '../assets/Imagess/W5.jpeg'
import W6 from '../assets/Imagess/W6.jpeg'
import W7 from '../assets/Imagess/W7.jpeg'
import W8 from '../assets/Imagess/W8.jpeg'
import W9 from '../assets/Imagess/W9.jpeg'
import W10 from '../assets/Imagess/W10.jpeg'
import W11 from '../assets/Imagess/W11.jpeg'
import W12 from '../assets/Imagess/W12.jpeg'
import W13 from '../assets/Imagess/W13.jpeg'


import PW1 from '../assets/Imagess/PW1.jpeg'
import PW2 from '../assets/Imagess/PW2.jpeg'
import PW3 from '../assets/Imagess/PW3.jpeg'
import PW4 from '../assets/Imagess/PW4.jpeg'
import PW5 from '../assets/Imagess/PW5.jpeg'
import PW6 from '../assets/Imagess/PW6.jpeg'
import PW7 from '../assets/Imagess/PW7.jpeg'
import PW8 from '../assets/Imagess/PW8.jpeg'
import PW9 from '../assets/Imagess/PW9.jpeg'
import PW10 from '../assets/Imagess/PW10.jpeg'
import PW11 from '../assets/Imagess/PW11.jpeg'
import PW12 from '../assets/Imagess/PW12.jpeg'
import PW13 from '../assets/Imagess/PW13.jpeg'
import PW14 from '../assets/Imagess/PW14.jpeg'


import F2 from '../assets/Imagess/F2.jpeg'
import F3 from '../assets/Imagess/F3.jpeg'
import F4 from '../assets/Imagess/F4.jpeg'
import F5 from '../assets/Imagess/F5.jpeg'
import F6 from '../assets/Imagess/F6.jpeg'
import F7 from '../assets/Imagess/F7.jpeg'
import F8 from '../assets/Imagess/F8.jpeg'
import F9 from '../assets/Imagess/F9.jpeg'
import F10 from '../assets/Imagess/F10.jpeg'
import F11 from '../assets/Imagess/F11.jpeg'
import F12 from '../assets/Imagess/F12.jpeg'
import F13 from '../assets/Imagess/F13.jpeg'
import F14 from '../assets/Imagess/F14.jpeg'
import F15 from '../assets/Imagess/F15.jpeg'
import F16 from '../assets/Imagess/F16.jpeg'


import Fashion1 from '../assets/Imagess/Fashion1.jpeg'


// =====================================================
// CATEGORY IMAGE FOLDERS
// =====================================================
//
// IMPORTANT:
// These names match the folders in your VS Code project.
//
// Wedding:
// src/assets/Imagess/WeddingImagess/
//
// Pre-Wedding:
// src/assets/Imagess/Pre-WeddingImagess/
//
// Fashion:
// src/assets/Imagess/FashionImagess/
//


// =====================================================
// WEDDING CATEGORY IMAGES
// =====================================================

const weddingCategoryFiles = import.meta.glob(
  '../assets/Imagess/WeddingImagess/*',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
)

const weddingImages = Object.entries(weddingCategoryFiles)
  .sort(([pathA], [pathB]) =>
    pathA.localeCompare(pathB, undefined, {
      numeric: true,
      sensitivity: 'base',
    })
  )
  .map(([path, image], index) => ({
    src: image,
    alt: `Wedding Photography ${index + 1}`,
    fileName: path.split('/').pop(),
  }))


// =====================================================
// PRE-WEDDING CATEGORY IMAGES
// =====================================================

const preWeddingCategoryFiles = import.meta.glob(
  '../assets/Imagess/Pre-WeddingImagess/*',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
)

const preWeddingImages = Object.entries(preWeddingCategoryFiles)
  .sort(([pathA], [pathB]) =>
    pathA.localeCompare(pathB, undefined, {
      numeric: true,
      sensitivity: 'base',
    })
  )
  .map(([path, image], index) => ({
    src: image,
    alt: `Pre-Wedding Photography ${index + 1}`,
    fileName: path.split('/').pop(),
  }))


// =====================================================
// FASHION CATEGORY IMAGES
// =====================================================

const fashionCategoryFiles = import.meta.glob(
  '../assets/Imagess/FashionImagess/*',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
)

const fashionImages = Object.entries(fashionCategoryFiles)
  .sort(([pathA], [pathB]) =>
    pathA.localeCompare(pathB, undefined, {
      numeric: true,
      sensitivity: 'base',
    })
  )
  .map(([path, image], index) => ({
    src: image,
    alt: `Fashion Photography ${index + 1}`,
    fileName: path.split('/').pop(),
  }))


// =====================================================
// NAVIGATION
// =====================================================

export const NAV_LINKS = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Photography',
    path: '/photography',
  },
  {
    label: 'Films',
    path: '/films',
  },
  {
    label: 'Poetry',
    path: '/poetry',
  },
  {
    label: 'Journal',
    path: '/blog',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
]


// =====================================================
// PHOTOGRAPHY CATEGORIES
// =====================================================

export const CATEGORIES = [
  {
    slug: 'pre-wedding',
    name: 'Pre-Wedding',
    description:
      'Timeless moments before the big day — candid, romantic, and full of anticipation.',
    tagline: 'The beginning of forever',
    image: PW1,
  },

  {
    slug: 'post-wedding',
    name: 'Post-Wedding',
    description:
      'Fresh-off-the-celebration sessions that capture the joy and intimacy of newlyweds.',
    tagline: 'Newlywed warmth',
    image: W5,
  },

  {
    slug: 'wedding',
    name: 'Wedding',
    description:
      'Editorial storytelling of your most cherished day, from first look to last dance.',
    tagline: 'Your day, told in light',
    image: W1,
  },

  {
    slug: 'family',
    name: 'Family',
    description:
      'Honest, warm portraits of the people who make a house a home.',
    tagline: 'Roots & connection',
    image: F2,
  },

  {
    slug: 'fashion',
    name: 'Fashion',
    description:
      'Bold, editorial work that celebrates style, texture, and the art of the frame.',
    tagline: 'Style in motion',
    image: F3,
  },
]


// =====================================================
// FEATURED WORK
// =====================================================

export const FEATURED_WORK = [
  {
    id: 1,
    category: 'Wedding',
    title: 'Aarav & Meera',
    location: 'Jaipur, India',
  },

  {
    id: 2,
    category: 'Pre-Wedding',
    title: 'Rohan & Ananya',
    location: 'Udaipur, India',
  },

  {
    id: 3,
    category: 'Wedding',
    title: 'Kabir & Diya',
    location: 'Goa, India',
  },

  {
    id: 4,
    category: 'Family',
    title: 'The Malhotra Family',
    location: 'New Delhi, India',
  },
]


// =====================================================
// FILMS
// =====================================================

export const FILMS = [
  {
    id: 'the-last-goodbye',
    title: 'The Last Goodbye',
    category: 'Wedding Film',
    duration: '04:12',
    video: '/videos/films/the-last-goodbye.mp4',
    cover: W2,
    description:
      'A cinematic retelling of a day filled with teary vows, golden light, and a dance floor that never emptied.',
  },

  {
    id: 'wander',
    title: 'Wander',
    category: 'Pre-Wedding Film',
    duration: '03:08',
    video: '/videos/films/wander.mp4',
    cover: PW2,
    description:
      'Two souls drifting through lavender fields as the sun kisses the horizon — a love letter in motion.',
  },

  {
    id: 'homecoming',
    title: 'Homecoming',
    category: 'Family Film',
    duration: '05:21',
    video: '/videos/films/homecoming.mp4',
    cover: F4,
    description:
      'Generations gathered around a rustic table, where every laugh and lingering glance tells a story.',
  },
]


// =====================================================
// POEMS
// =====================================================

export const POEMS = [
  {
    id: 'golden-hour',
    title: 'Golden Hour',
    excerpt:
      'The light spills honey over the hill, and for a moment, everything is enough.',
    full:
      'The light spills honey over the hill, and for a moment, everything is enough. I hold the breath between heartbeats, the pause before the shutter falls, and call it art.',
  },

  {
    id: 'still-waters',
    title: 'Still Waters',
    excerpt:
      'A face reflected in quiet water asks what the mirror never dares.',
    full:
      'A face reflected in quiet water asks what the mirror never dares. I answer with a frame, a fragment of forever frozen mid-sigh.',
  },

  {
    id: 'the-waiting',
    title: 'The Waiting',
    excerpt:
      'Between the question and the answer, a whole lifetime waits to be seen.',
    full:
      'I capture the waiting — the held lace, the trembling hand, the almost.',
  },

  {
    id: 'in-your-eyes',
    title: 'In Your Eyes',
    excerpt:
      'Sometimes a single glance says everything words cannot.',
    full:
      'There are stories hidden inside a glance, quiet promises held between two people, waiting for the camera to notice.',
  },

  {
    id: 'forever-begins',
    title: 'Forever Begins',
    excerpt:
      'Every beginning carries the feeling of something that might last forever.',
    full:
      'Before the music begins and before the celebration fills the room, there is a quiet moment where forever begins.',
  },

  {
    id: 'between-moments',
    title: 'Between Moments',
    excerpt:
      'The most beautiful memories often live between the planned moments.',
    full:
      'Not every story happens in front of the camera. Some live between a laugh, a touch, a breath, and the silence that follows.',
  },

  {
    id: 'love-in-motion',
    title: 'Love in Motion',
    excerpt:
      'Love is never still — it moves through every little moment.',
    full:
      'A hand reaching for another, a dress moving with the wind, laughter carried across the room — love is always in motion.',
  },

  {
    id: 'the-beautiful-chaos',
    title: 'The Beautiful Chaos',
    excerpt:
      'Among the noise and celebration, there is always something quietly beautiful.',
    full:
      'The laughter, the tears, the dancing, the unexpected moments — somewhere inside the beautiful chaos is the story worth remembering.',
  },

  {
    id: 'after-the-light',
    title: 'After the Light',
    excerpt:
      'When the day ends, the photographs keep the feeling alive.',
    full:
      'The light eventually fades, the music becomes quiet, and everyone goes home. What remains are the moments we chose to keep.',
  },
]


// =====================================================
// POETRY GALLERY
// =====================================================

export const POETRY_IMAGES = [
  W1,
  PW2,
  F8,
  W7,
  PW5,
  F10,
  W11,
  PW9,
  F14,
]


// =====================================================
// BLOG POSTS
// =====================================================

export const BLOG_POSTS = [
  {
    id: 'lighting-guide',
    title: 'Chasing Light: A Guide to Golden Hour',
    category: 'Education',
    date: 'March 12, 2025',
    readTime: '6 min read',
    image: W5,
    excerpt:
      'Golden hour is more than a filter — it is a science and an art. Here is how to chase it anywhere in the world.',
  },

  {
    id: 'behind-the-scenes',
    title: 'Behind the Scenes: A Royal Wedding in Jaipur',
    category: 'Journal',
    date: 'February 28, 2025',
    readTime: '8 min read',
    image: W6,
    excerpt:
      'An intimate look at the chaos, the laughter, and the quiet magic that happens behind the camera.',
  },

  {
    id: 'storytelling',
    title: 'The Art of Visual Storytelling',
    category: 'Reflection',
    date: 'February 10, 2025',
    readTime: '5 min read',
    image: PW4,
    excerpt:
      'Every photograph is a sentence. Together, they become a poem. Here is how we compose the narrative.',
  },
]


// =====================================================
// TESTIMONIALS
// =====================================================

export const TESTIMONIALS = [
  {
    quote:
      'Hemant didn’t just photograph our wedding — they saw it. Every glance, every tear, every barefoot dance. We cry every time we watch our film.',
    name: 'Aarav & Meera',
    role: 'Wedding & Film',
    image: W5,
  },

  {
    quote:
      'The pre-wedding session felt like a dream we got to live twice. The images are pure poetry.',
    name: 'Rohan & Ananya',
    role: 'Pre-Wedding',
    image: PW5,
  },

  {
    quote:
      'Working with this team was effortless. They made three generations of our family feel at ease in front of the camera.',
    name: 'The Sharma Family',
    role: 'Family Session',
    image: W6,
  },
]


// =====================================================
// GALLERY IMAGES
// =====================================================

export const GALLERY_IMAGES = {

  // ---------------------------------------------------
  // WEDDING
  // Uses:
  // src/assets/Imagess/WeddingImagess/
  // ---------------------------------------------------

  wedding: weddingImages,


  // ---------------------------------------------------
  // PRE-WEDDING
  // Uses:
  // src/assets/Imagess/Pre-WeddingImagess/
  // ---------------------------------------------------

  'pre-wedding': preWeddingImages,


  // ---------------------------------------------------
  // POST-WEDDING
  // ---------------------------------------------------

  'post-wedding': [
    {
      src: W7,
      alt: 'Post-wedding couple laughing',
    },

    {
      src: W8,
      alt: 'Post-wedding romantic portrait',
    },

    {
      src: PW7,
      alt: 'Post-wedding city walk',
    },

    {
      src: W9,
      alt: 'Post-wedding golden portrait',
    },

    {
      src: PW8,
      alt: 'Post-wedding couple at dusk',
    },

    {
      src: W10,
      alt: 'Post-wedding wreath detail',
    },

    {
      src: PW12,
      alt: 'Post-wedding intimate moment',
    },

    {
      src: PW14,
      alt: 'Post-wedding celebration frame',
    },
  ],


  // ---------------------------------------------------
  // FAMILY
  // ---------------------------------------------------

  family: [
    {
      src: F2,
      alt: 'Family portrait in field',
    },

    {
      src: F3,
      alt: 'Generations together portrait',
    },

    {
      src: F4,
      alt: 'Mother and child portrait',
    },

    {
      src: F5,
      alt: 'Family portrait in natural light',
    },

    {
      src: F6,
      alt: 'Children playing',
    },

    {
      src: F7,
      alt: 'Family at home',
    },

    {
      src: F15,
      alt: 'Family candid portrait',
    },

    {
      src: F16,
      alt: 'Family warm moment',
    },
  ],


  // ---------------------------------------------------
  // FASHION
  // Uses:
  // src/assets/Imagess/FashionImagess/
  // ---------------------------------------------------

  fashion: fashionImages,
}


// =====================================================
// DEBUG
// =====================================================

console.log(
  '============================================'
)

console.log(
  'WEDDING IMAGES FOUND:',
  weddingImages.length
)

console.table(weddingImages)


console.log(
  'PRE-WEDDING IMAGES FOUND:',
  preWeddingImages.length
)

console.table(preWeddingImages)


console.log(
  'FASHION IMAGES FOUND:',
  fashionImages.length
)

console.table(fashionImages)


console.log(
  '============================================'
)