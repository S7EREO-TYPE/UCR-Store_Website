import { Product } from '../types';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { ChevronLeft, Download, ShieldCheck, Truck } from 'lucide-react';
import { useState } from 'react';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onProductClick: (product: Product) => void;
  onAddToCart?: (product: Product, size: string) => void;
}

export default function ProductDetail({ product, onBack, onProductClick, onAddToCart }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeImage, setActiveImage] = useState(product.image);
  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  const detailImages = product.secondaryImage 
    ? [product.secondaryImage, product.image] 
    : [product.image, product.image, product.image];

  return (
    <div className="pt-32 pb-24 px-6 max-w-screen-2xl mx-auto">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-on-surface-variant/60 hover:text-primary transition-colors mb-12"
      >
        <ChevronLeft size={14} />
        Back to Shop
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
        {/* Product Images */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="aspect-[4/5] bg-surface-container-low overflow-hidden"
          >
            <img 
              src={activeImage} 
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-300"
            />
          </motion.div>
          <div className={`grid ${detailImages.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-6`}>
            {detailImages.map((imgSrc, i) => (
              <div 
                key={i} 
                onClick={() => setActiveImage(imgSrc)}
                className={`aspect-square bg-surface-container-low overflow-hidden transition-all cursor-pointer ${activeImage === imgSrc ? 'grayscale-0 ring-2 ring-primary ring-offset-2' : 'grayscale hover:grayscale-0'}`}
              >
                <img 
                  src={imgSrc} 
                  alt={`${product.name} detail ${i}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <p className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-4">
            Archive {'>'} Outerwear
          </p>
          <h1 className="text-5xl md:text-7xl mb-6">{product.name}</h1>
          <p className="text-2xl font-sans font-medium mb-12">${product.price.toFixed(2)}</p>
          
          <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
            {product.description}
          </p>

          <div className="space-y-8 mb-12">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant">Select Size</label>
                <button className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-primary border-b border-primary/20">
                  <Download size={12} />
                  Download Sizing Guide
                </button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-4 border font-sans text-xs font-bold transition-all ${
                      size === selectedSize 
                        ? 'bg-primary border-primary text-white' 
                        : 'border-outline-variant/30 text-on-surface-variant hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => onAddToCart?.(product, selectedSize)}
              className="w-full bg-primary text-white py-6 font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary-container transition-all cloud-shadow"
            >
              Add to Bag
            </button>
          </div>

          <div className="space-y-6 pt-12 border-t border-outline-variant/20">
            <div className="flex gap-4 items-start">
              <Truck className="text-primary mt-1" size={20} />
              <div>
                <p className="text-sm font-medium italic">Complimentary priority delivery for alumni members.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <ShieldCheck className="text-primary mt-1" size={20} />
              <div>
                <p className="text-sm font-medium italic">Authenticity guaranteed with unique digital pedigree.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why it matters */}
      <section className="py-32 border-t border-outline-variant/20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-6">Why It Matters</p>
          <h2 className="text-4xl md:text-6xl mb-12">Investing in the <span className="serif-italic">Next Century</span></h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
            A portion of every {product.name} sale directly funds the <span className="text-primary font-bold">Upper Campus Residence Initiatives</span>. These proceeds support the preservation of our historic commons and provide need-based grants for the upcoming generation of residents. Your purchase isn't just a garment; it's a contribution to a legacy that spans decades.
          </p>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="text-4xl font-serif italic text-primary mb-2">15%</p>
              <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant/60">Goes to Heritage Fund</p>
            </div>
            <div>
              <p className="text-4xl font-serif italic text-primary mb-2">$45K</p>
              <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant/60">Raised This Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-32 border-t border-outline-variant/20">
        <p className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/60 mb-12">Editor's Choice</p>
        <h2 className="text-4xl md:text-6xl mb-16 italic">Style It With</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {relatedProducts.map(p => (
            <ProductCard key={p.id} product={p} onClick={onProductClick} />
          ))}
        </div>
      </section>
    </div>
  );
}
