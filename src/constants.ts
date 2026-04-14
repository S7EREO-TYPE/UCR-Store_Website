import { Product, TimelineEvent, Collection } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'crest-hoodie',
    name: 'Crest Hoodie',
    price: 120.00,
    collection: 'HERITAGE COLLECTION',
    image: '/images/products/Product_1.jpeg',
    description: 'A premium heavyweight cotton hoodie featuring the iconic residence crest, reimagined in fine bullion thread. Built for longevity and crafted with architectural precision.',
    details: [
      'Complimentary priority delivery for alumni members.',
      'Authenticity guaranteed with unique digital pedigree.'
    ]
  },
  {
    id: 'classic-polo',
    name: 'Classic Polo',
    price: 85.00,
    collection: 'PULSE COLLECTION',
    image: '/images/products/Product_2.jpeg',
    description: 'Refined piqué polostyle designed for the hallowed halls. An enduring silhouette rooted in the prestige of the Upper Campus Residence.'
  },
  {
    id: 'varsity-jacket',
    name: 'Varsity Jacket',
    price: 245.00,
    collection: 'HERITAGE COLLECTION',
    image: '/images/products/Product_3.jpeg',
    description: 'Tailored varsity jacket with premium wool body and leather sleeves. Featuring intricate embroidery of the heritage crest.'
  },
  {
    id: 'heritage-cap',
    name: 'Heritage Cap',
    price: 45.00,
    collection: 'HERITAGE COLLECTION',
    image: '/images/products/Product_4.jpeg',
    description: 'Classic dad cap with embroidered oak leaf detail. A subtle nod to the campus grounds.'
  },
  {
    id: 'pulse-bucket-hat',
    name: 'Pulse Bucket Hat',
    price: 55.00,
    collection: 'PULSE COLLECTION',
    image: '/images/products/Product_5.jpeg',
    description: 'Technical corduroy bucket hat designed for life in motion. Forward-thinking silhouette for the urban campus.'
  },
  {
    id: 'editorial-hoodie-1',
    name: 'Editorial Hoodie I',
    price: 135.00,
    collection: 'PULSE COLLECTION',
    image: '/images/products/Hoodie_1.jpeg',
    description: 'Minimalist pullover hoodie. Clean lines and supreme comfort.'
  },
  {
    id: 'editorial-hoodie-2',
    name: 'Editorial Hoodie II',
    price: 145.00,
    collection: 'HERITAGE COLLECTION',
    image: '/images/products/Hoodie_2_Front.jpeg',
    secondaryImage: '/images/products/Hoodie_2_Back.jpeg',
    description: 'Signature graphic hoodie featuring detailed back print.'
  },
  {
    id: 'editorial-hoodie-3',
    name: 'Editorial Hoodie III',
    price: 145.00,
    collection: 'PULSE COLLECTION',
    image: '/images/products/Hoodie_3_Front.jpeg',
    secondaryImage: '/images/products/Hoodie_3_Back.jpeg',
    description: 'Heavyweight loopback terry with bold graphic intervention.'
  },
  {
    id: 'editorial-hoodie-4',
    name: 'Editorial Hoodie IV',
    price: 140.00,
    collection: 'HERITAGE COLLECTION',
    image: '/images/products/Hoodie_4_Front.jpeg',
    secondaryImage: '/images/products/Hoodie_4_Back.jpeg',
    description: 'Classic fit with collegiate typography styling.'
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '1928',
    title: 'The Foundational Stones',
    description: 'Smuts Hall opens its doors as a bastion of academic tradition. Named for a statesman of his era, the building’s neo-classical architecture reflected the formal rigor of early 20th-century collegiate life.',
    image: '/images/Journey/Journey_1.png',
    imageAlt: 'Smuts Hall - The Foundational Stones of Upper Campus Residence'
  },
  {
    year: '1976',
    title: 'Voices of Change',
    description: 'The residence becomes a crucible for debate as South Africa’s social landscape shifts. Conversations in the dining hall begin to reflect the growing demand for justice and inclusivity within the academic sphere.',
    image: '/images/Journey/Journey_2.jpg',
    imageAlt: 'Students gathered in a common room',
    quote: 'Tradition is not the worship of ashes, but the preservation of fire.'
  },
  {
    year: '2021',
    title: 'A New Identity',
    description: 'Smuts Hall is renamed to Upper Campus Residence. This transition marks a commitment to reconciliation and the creation of a space where every student, regardless of background, can feel a sense of belonging.',
    image: '/images/Journey/Journey_3.png',
    imageAlt: 'Students of diverse backgrounds laughing together'
  },
  {
    year: 'Today',
    title: 'The Inclusive Heart',
    description: 'Today, Upper Campus Residence stands as a vibrant, multicultural home. We honor our history by learning from it, ensuring that our legacy is one of excellence, equity, and shared values.',
    image: '/images/Journey/Journey_4.jpg',
    imageAlt: 'Modern student dorm interior'
  }
];

export const COLLECTIONS: Collection[] = [
  {
    id: 'heritage',
    number: '01',
    title: 'The Heritage Line',
    subtitle: 'Classicism',
    description: 'Tailored blazers, refined piqué polostyles, and heavy wool knits designed for the hallowed halls. An enduring silhouette rooted in the prestige of the Upper Campus Residence.',
    image: '/images/products/Product_1.jpeg',
    detailImage: '/images/products/Product_2.jpeg',
    color: 'primary'
  },
  {
    id: 'pulse',
    number: '02',
    title: 'The Pulse Line',
    subtitle: 'Modernity',
    description: 'Forward-thinking silhouettes for the urban campus. Oversized heavyweight hoodies, corduroy bucket hats, and technical layers designed for life in motion.',
    image: '/images/products/Product_2.jpeg',
    detailImage: '/images/products/Product_1.jpeg',
    color: 'tertiary'
  }
];
