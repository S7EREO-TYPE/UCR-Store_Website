import { TIMELINE_EVENTS } from '../constants';
import { motion } from 'motion/react';

export default function Journey() {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-24 mb-32 max-w-screen-2xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-9xl mb-8">
            Our <span className="serif-italic">Journey</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-2xl">
            From the foundational stones of Smuts Hall to the vibrant pulse of Upper Campus Residence, our story is one of transformation, heritage, and the enduring power of community.
          </p>
        </div>
      </section>

      <div className="relative">
        {/* Central Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-outline-variant/30 hidden md:block" />

        {TIMELINE_EVENTS.map((event, index) => (
          <section 
            key={event.year}
            className={`relative py-24 ${index % 2 !== 0 ? 'bg-surface-container-low' : 'bg-surface'}`}
          >
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center max-w-screen-2xl">
              <div className={`${index % 2 === 0 ? 'order-2 md:order-1 md:text-right md:pr-16' : 'order-2 md:pl-16'}`}>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-7xl md:text-9xl font-serif text-primary/10 mb-4 block"
                >
                  {event.year}
                </motion.span>
                <h2 className="text-3xl md:text-5xl mb-6">{event.title}</h2>
                <p className="text-on-surface-variant leading-relaxed max-w-md mx-auto md:mx-0">
                  {event.description}
                </p>
                {event.quote && (
                  <blockquote className={`mt-8 serif-italic text-xl text-primary border-l-2 border-primary pl-6 text-left ${index % 2 === 0 ? 'md:border-l-0 md:border-r-2 md:pl-0 md:pr-6 md:text-right' : ''}`}>
                    "{event.quote}"
                  </blockquote>
                )}
              </div>
              <div className={`${index % 2 === 0 ? 'order-1 md:order-2 md:pl-16' : 'order-1 md:pr-16'}`}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`bg-surface-variant aspect-[4/5] overflow-hidden cloud-shadow ${index < 2 ? 'grayscale' : ''}`}
                >
                  <img 
                    src={event.image} 
                    alt={event.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-tertiary text-white py-32 px-6 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
            Preserving the Past, <br />
            <span className="serif-italic">Pioneering the Future.</span>
          </h2>
          <div className="h-px w-24 bg-white/30 mx-auto mb-8" />
          <p className="text-white/70 font-light text-lg">
            Upper Campus Residence continues to be the premiere destination for leadership and academic excellence.
          </p>
          <button className="mt-12 bg-white text-primary px-10 py-4 font-sans text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-surface transition-all">
            Join Our Story
          </button>
        </div>
      </section>
    </div>
  );
}
