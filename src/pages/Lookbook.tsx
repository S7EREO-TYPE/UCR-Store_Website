import { COLLECTIONS } from '../constants';
import { motion } from 'motion/react';
import { Archive } from 'lucide-react';

export default function Lookbook() {
  return (
    <div className="pt-32 pb-24">
      <header className="px-6 md:px-12 mb-32 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-baseline gap-4 md:gap-8 mb-12">
          <h1 className="text-6xl md:text-9xl italic tracking-tighter">Collections</h1>
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-on-surface-variant/60">Autumn / Winter Edition</span>
        </div>
        <div className="editorial-grid gap-6">
          <div className="col-span-12 md:col-span-8 overflow-hidden aspect-[16/9]">
            <img 
              src="/images/Main_Background.jpg" 
              alt="University Heritage"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-1000 ease-in-out scale-105 hover:scale-100"
            />
          </div>
          <div className="hidden md:block md:col-span-4 self-end pb-12">
            <p className="text-2xl leading-relaxed text-on-surface-variant max-w-xs italic">
              A curated dialogue between academic tradition and the rhythm of contemporary city life.
            </p>
          </div>
        </div>
      </header>

      {COLLECTIONS.map((collection, index) => (
        <section 
          key={collection.id}
          className={`py-32 ${index % 2 === 0 ? 'bg-surface-container-low' : 'bg-surface'}`}
        >
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <div className="editorial-grid gap-12 items-center">
              <div className={`col-span-12 md:col-span-5 ${index % 2 === 0 ? 'order-2 md:order-1' : 'order-2'}`}>
                <span className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6 block">
                  {collection.number} / {collection.subtitle}
                </span>
                <h2 className="text-5xl md:text-7xl mb-8">{collection.title}</h2>
                <p className="text-lg leading-relaxed text-on-surface-variant mb-12 max-w-md">
                  {collection.description}
                </p>
                <div className="flex flex-wrap gap-6">
                  <button className="px-8 py-4 bg-primary text-white font-sans text-[10px] uppercase tracking-widest font-bold hover:bg-primary-container transition-all">
                    Shop the Line
                  </button>
                  <button className="px-8 py-4 border-b border-outline-variant text-on-surface font-sans text-[10px] uppercase tracking-widest font-bold hover:text-primary transition-colors">
                    View Lookbook
                  </button>
                </div>
              </div>
              <div className={`col-span-12 md:col-span-7 ${index % 2 === 0 ? 'order-1 md:order-2' : 'order-1'}`}>
                <div className="relative group">
                  <img 
                    src={collection.image} 
                    alt={collection.title}
                    referrerPolicy="no-referrer"
                    className="w-full aspect-[4/5] object-cover cloud-shadow"
                  />
                  <div className={`absolute -bottom-8 ${index % 2 === 0 ? '-left-8' : '-right-8'} hidden lg:block w-48 h-64 bg-white p-2 cloud-shadow`}>
                    <img 
                      src={collection.detailImage} 
                      alt="Detail"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="max-w-screen-xl mx-auto px-6 my-32">
        <div className="bg-surface-container-low p-12 md:p-24 flex flex-col items-center text-center">
          <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 mb-4">Discovery</span>
          <h4 className="text-4xl md:text-5xl italic mb-8">The Editorial Archive</h4>
          <p className="max-w-xl text-on-surface-variant mb-12">Explore past seasons and the evolution of the Upper Campus Residence visual identity through our historical lookbooks.</p>
          <div className="h-16 flex items-center justify-center">
            <img src="/images/Logo.png" alt="Upper Campus Residence Logo" className="h-full w-auto object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
}
