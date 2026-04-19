import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';
import { X, Trash2 } from 'lucide-react';
import { calculateCartTotal, formatCurrency } from '../utils';

interface CartDrawerProps {
  cartItems: CartItem[];
  onRemoveItem: (id: string) => void;
  onClose: () => void;
  onCheckout: () => void;
}

export default function CartDrawer({ cartItems, onRemoveItem, onClose, onCheckout }: CartDrawerProps) {
  const handleCheckoutClick = () => {
    onClose();
    onCheckout();
  };

  return (
    <div className="fixed inset-0 z-[70] flex justify-end">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-on-surface/20 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative h-full w-full max-w-md bg-surface shadow-[-20px_0px_50px_rgba(26,28,28,0.06)] flex flex-col pt-8"
      >
        {/* Header */}
        <div className="flex justify-between items-center px-8 mb-8">
          <h2 className="font-serif italic text-2xl text-primary">YOUR ARCHIVE</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-surface-container-low rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center pb-24 text-on-surface-variant/60">
              <span className="material-symbols-outlined text-4xl mb-4">inventory_2</span>
              <p className="font-medium tracking-widest uppercase text-xs">Your archive is currently empty.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex gap-4 p-4 border border-outline-variant/30 relative group"
                >
                  <div className="w-20 h-24 bg-surface-container-low overflow-hidden">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col py-1">
                    <p className="text-[10px] tracking-[0.2em] text-on-surface-variant uppercase mb-1">{item.product.collection}</p>
                    <h4 className="font-medium text-primary mb-1">{item.product.name}</h4>
                    <p className="text-sm text-on-surface-variant mb-auto">Size: {item.size}</p>
                    <div className="flex justify-between items-end">
                      <p className="font-bold">{formatCurrency(item.product.price)}</p>
                      <p className="text-xs text-on-surface-variant">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => onRemoveItem(item.id)}
                    className="absolute top-2 right-2 p-2 text-on-surface-variant/40 hover:text-error transition-colors opacity-0 group-hover:opacity-100"
                    title="Remove Item"
                  >
                    <Trash2 size={16} />
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-8 border-t border-outline-variant/20 bg-surface">
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] tracking-widest uppercase text-on-surface-variant font-bold">Subtotal</span>
              <span className="text-2xl font-serif italic text-primary">{formatCurrency(calculateCartTotal(cartItems))}</span>
            </div>
            <button 
              onClick={handleCheckoutClick}
              className="w-full bg-primary text-white py-4 font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary-container transition-all cloud-shadow"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
