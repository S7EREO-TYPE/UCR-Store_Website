import { motion } from 'motion/react';
import { COLLECTIONS, PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

interface HomeProps {
  onProductClick: (product: Product) => void;
  setActivePage: (page: string) => void;
}

export default function Home({ onProductClick, setActivePage }: HomeProps) {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/Main_Background.jpg" 
            alt="University Heritage - Smuts Hall"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] tracking-[0.4em] uppercase text-white/60 mb-6"
          >
            The Future of Heritage
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl text-white mb-12 max-w-4xl leading-[0.9]"
          >
            Upper Campus Residence. <br />
            <span className="serif-italic">Where Heritage Meets Tomorrow.</span>
          </motion.h1>
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => setActivePage('shop')}
            className="bg-primary text-white px-10 py-4 font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary-container transition-all cloud-shadow"
          >
            Explore the Collection
          </motion.button>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-32 px-6 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-4">Curated Edits</p>
            <h2 className="text-5xl md:text-7xl">Featured Collections</h2>
          </div>
          <button 
            onClick={() => setActivePage('lookbook')}
            className="text-xs font-bold tracking-[0.2em] uppercase border-b border-primary pb-1 hover:text-primary transition-colors"
          >
            View All Collections
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {COLLECTIONS.map((collection, index) => (
            <motion.div 
              key={collection.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
              onClick={() => setActivePage('lookbook')}
            >
              <img 
                src={collection.image} 
                alt={collection.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                <h3 className="text-4xl md:text-5xl text-white mb-4 italic">{collection.title}</h3>
                <p className="text-white/80 max-w-xs mb-8 text-sm leading-relaxed">{collection.description}</p>
                <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase border-b border-white/40 pb-1">
                  Shop {collection.id}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-tertiary py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12 inline-block"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex items-center justify-center border border-white/20 shadow-2xl bg-white/5 backdrop-blur-sm">
              <img src="/images/logoWBackground.png" alt="University Logo" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <h2 className="text-3xl md:text-5xl text-white mb-12 leading-tight">
            "A transformation rooted in a century of tradition, evolving for the next generation of thinkers."
          </h2>
          <p className="text-white/70 text-lg mb-12 leading-relaxed">
            Upper Campus Residence isn't just a place of residence; it's a living archive. From the stone corridors of Smuts Hall to the modern energy of the Quad, our merch reflects this duality.
          </p>
          <button 
            onClick={() => setActivePage('journey')}
            className="text-white text-[10px] font-bold tracking-[0.2em] uppercase border-b border-white/40 pb-1 hover:border-white transition-colors"
          >
            Read Our Story
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 px-6 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="aspect-[4/5] overflow-hidden grayscale">
          <img 
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000&auto=format&fit=crop" 
            alt="Editorial Archive"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-5xl md:text-7xl mb-8">Join the <span className="serif-italic">Editorial</span></h2>
          <p className="text-on-surface-variant text-lg mb-12 leading-relaxed">
            Get early access to drops, exclusive lookbooks, and the stories behind the stitches. Our community is built on legacy.
          </p>
          <div className="space-y-8">
            <div className="relative">
              <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant/60 mb-2 block">Email Address</label>
              <input 
                type="email" 
                placeholder="legacy@university.edu"
                className="w-full bg-transparent border-b border-outline-variant/30 py-4 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <button className="bg-primary text-white px-12 py-4 font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary-container transition-all w-full md:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
