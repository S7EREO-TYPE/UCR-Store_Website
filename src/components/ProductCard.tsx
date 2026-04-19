import { Product } from '../types';
import { motion } from 'motion/react';
import { formatCurrency } from '../utils';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group cursor-pointer"
      onClick={() => onClick(product)}
    >
      <div className="bg-surface-container-low aspect-[4/5] overflow-hidden mb-6 relative">
        <img 
          src={product.image} 
          alt={product.name}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${product.secondaryImage ? 'group-hover:opacity-0' : ''}`}
        />
        {product.secondaryImage && (
          <img 
            src={product.secondaryImage} 
            alt={`${product.name} alternate view`}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-10 pointer-events-none" />
      </div>
      <div className="flex justify-between items-baseline">
        <div>
          <h3 className="text-2xl font-serif italic mb-1">{product.name}</h3>
          <p className="text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">{product.collection}</p>
        </div>
        <p className="text-lg font-sans font-medium">{formatCurrency(product.price)}</p>
      </div>
    </motion.div>
  );
}
