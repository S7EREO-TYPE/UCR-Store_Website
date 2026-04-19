import { useState } from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';
import { smoothScrollToTop } from '../utils';

interface ShopProps {
  onProductClick: (product: Product) => void;
}

export default function Shop({ onProductClick }: ShopProps) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const filters = ['ALL', 'HERITAGE COLLECTION', 'PULSE COLLECTION'];

  const filteredProducts = activeFilter === 'ALL' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.collection === activeFilter);

  return (
    <div className="pt-32 pb-24 px-6 max-w-screen-2xl mx-auto">
      <header className="mb-24">
        <p className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant mb-4">The Collection</p>
        <h1 className="text-6xl md:text-9xl mb-8 italic">Shop All</h1>
        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed">
          Our permanent residence collection is a tribute to academic heritage, crafted for the modern scholar.
        </p>
      </header>

      <div className="flex flex-col md:flex-row justify-between items-center border-y border-outline-variant/20 py-6 mb-16 gap-6">
        <div className="flex gap-8 overflow-x-auto w-full md:w-auto no-scrollbar">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap transition-colors ${
                activeFilter === filter ? 'text-primary' : 'text-on-surface-variant/40 hover:text-on-surface-variant'
              }`}
            >
              {filter.replace(' COLLECTION', '')}
            </button>
          ))}
        </div>
        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant/40">
          {filteredProducts.length} Styles Found
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onClick={onProductClick} 
          />
        ))}
      </div>

      <div className="mt-32 text-center border-t border-outline-variant/20 pt-24">
        <p className="text-on-surface-variant italic text-lg mb-12">
          You've reached the end of our current seasonal curation. New arrivals drop monthly.
        </p>
        <button 
          onClick={smoothScrollToTop}
          className="bg-primary text-white px-12 py-4 font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary-container transition-all"
        >
          Back to Top
        </button>
      </div>
    </div>
  );
}
