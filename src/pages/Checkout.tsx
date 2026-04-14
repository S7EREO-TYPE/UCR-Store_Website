import { CartItem } from '../types';
import { motion } from 'motion/react';
import { ChevronLeft, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

interface CheckoutProps {
  cartItems: CartItem[];
  onBack: () => void;
  onClearCart: () => void;
  onExploreMore: () => void;
}

export default function Checkout({ cartItems, onBack, onClearCart, onExploreMore }: CheckoutProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  const calculateSubtotal = () => cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const shipping = 10.00;
  const subtotal = calculateSubtotal();
  const total = subtotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      onClearCart();
    }, 500); // clear after transition starts
  };

  if (isSuccess) {
    return (
      <div className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center">
        <div className="max-w-lg w-full text-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-24 h-24 mx-auto rounded-full bg-primary flex items-center justify-center text-white mb-8"
          >
            <span className="material-symbols-outlined text-4xl">check</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-serif italic mb-6"
          >
            Order Confirmed.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-on-surface-variant text-lg leading-relaxed mb-12"
          >
            Your piece of the archive is secured. We've sent a digital pedigree and tracking metadata to your email address.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            onClick={onExploreMore}
            className="bg-primary text-white px-10 py-4 font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary-container transition-all cloud-shadow"
          >
            Continue Exploring
          </motion.button>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="pt-32 pb-24 px-6 min-h-[70vh] flex flex-col items-center justify-center text-center">
        <span className="material-symbols-outlined text-4xl text-on-surface-variant/40 mb-4">production_quantity_limits</span>
        <h2 className="text-3xl font-serif italic mb-8">Your cart is empty</h2>
        <button 
          onClick={onExploreMore}
          className="bg-primary text-white px-10 py-4 font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary-container transition-all cloud-shadow"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 max-w-screen-xl mx-auto">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-on-surface-variant/60 hover:text-primary transition-colors mb-12"
      >
        <ChevronLeft size={14} />
        Return to Cart
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        {/* Left: Form */}
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl mb-12 italic">Checkout</h2>
          
          <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-12">
            <div>
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">local_shipping</span>
                Shipping Information
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 md:col-span-1">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant/60 block mb-2">First Name</label>
                  <input required type="text" className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant/60 block mb-2">Last Name</label>
                  <input required type="text" className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="col-span-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant/60 block mb-2">Street Address</label>
                  <input required type="text" className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant/60 block mb-2">City</label>
                  <input required type="text" className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant/60 block mb-2">Postal Code</label>
                  <input required type="text" className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">credit_card</span>
                Payment Method
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant/60 block mb-2">Card Number</label>
                  <input required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant/60 block mb-2">Expiry Date</label>
                  <input required type="text" placeholder="MM/YY" className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant/60 block mb-2">CVC</label>
                  <input required type="text" placeholder="123" className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 items-start pt-6">
              <ShieldCheck className="text-primary mt-1" size={20} />
              <p className="text-xs text-on-surface-variant/80">Payments are entirely simulated for this conceptual build. No real transactions take place.</p>
            </div>
          </form>
        </div>

        {/* Right: Summary */}
        <div className="order-1 lg:order-2">
          <div className="bg-surface-container-low p-8 sticky top-32">
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-8">Order Summary</h3>
            
            <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-20 bg-surface flex-shrink-0">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 text-sm">
                    <h4 className="font-medium text-primary mb-1">{item.product.name}</h4>
                    <p className="text-on-surface-variant text-xs mb-2">Size: {item.size} | Qty: {item.quantity}</p>
                    <p className="font-bold">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 border-t border-outline-variant/20 pt-8 mb-8 text-sm">
              <div className="flex justify-between text-on-surface-variant">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-primary pt-4 border-t border-outline-variant/20">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button 
              form="checkout-form"
              type="submit"
              className="w-full bg-primary text-white py-5 font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary-container transition-all cloud-shadow"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
