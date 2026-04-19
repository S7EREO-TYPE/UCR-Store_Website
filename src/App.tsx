/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Lookbook from './pages/Lookbook';
import Journey from './pages/Journey';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import { Product, CartItem } from './types';
import CartDrawer from './components/CartDrawer';
import { AnimatePresence, motion } from 'motion/react';
import { scrollToTop, NAV_ITEMS } from './utils';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Scroll to top on page change
  useEffect(() => {
    scrollToTop();
  }, [activePage, selectedProduct]);

  const handleAddToCart = (product: Product, size: string) => {
    const existingItem = cartItems.find(item => item.product.id === product.id && item.size === size);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { id: `${product.id}-${size}`, product, size, quantity: 1 }]);
    }
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setActivePage('detail');
  };

  const handleBackToShop = () => {
    setSelectedProduct(null);
    setActivePage('shop');
  };

  const renderPage = () => {
    if (selectedProduct && activePage === 'detail') {
      return (
        <ProductDetail 
          product={selectedProduct} 
          onBack={handleBackToShop}
          onProductClick={handleProductClick}
          onAddToCart={handleAddToCart}
        />
      );
    }

    if (activePage === 'checkout') {
      return (
        <Checkout
          cartItems={cartItems}
          onClearCart={() => setCartItems([])}
          onBack={() => {
            setActivePage('shop');
            setIsCartOpen(true);
          }}
          onExploreMore={() => setActivePage('shop')}
        />
      );
    }

    switch (activePage) {
      case 'home':
        return <Home onProductClick={handleProductClick} setActivePage={setActivePage} />;
      case 'shop':
        return <Shop onProductClick={handleProductClick} />;
      case 'lookbook':
        return <Lookbook setActivePage={setActivePage} />;
      case 'journey':
        return <Journey />;
      default:
        return <Home onProductClick={handleProductClick} setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onMenuClick={() => setIsMenuOpen(!isMenuOpen)}
        onCartClick={() => setIsCartOpen(!isCartOpen)}
        activePage={activePage}
        setActivePage={setActivePage}
        cartCount={cartItems.length}
      />
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-[60]">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-on-surface/20 backdrop-blur-sm"
            />
            <motion.aside 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute left-0 top-0 h-full w-80 bg-surface shadow-[20px_0px_50px_rgba(26,28,28,0.06)] flex flex-col p-8 gap-6"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-3">
                  <img src="/images/Logo.png" alt="Logo" className="h-8 w-auto object-contain" />
                  <h2 className="font-serif italic text-2xl text-primary">UPPER CAMPUS</h2>
                </div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-surface-container-low rounded-full transition-colors"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <nav className="flex flex-col gap-8">
                {NAV_ITEMS.map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActivePage(item.id);
                    }}
                    className="text-on-surface-variant/60 font-serif text-3xl tracking-tighter hover:text-primary hover:translate-x-2 transition-all duration-300 text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              
              <div className="mt-auto pt-12 border-t border-outline-variant/20">
                <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant/40 mb-4">Member Access</p>
                <button className="text-sm font-medium hover:text-primary transition-colors">Login to Archive</button>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isCartOpen && (
          <CartDrawer 
            cartItems={cartItems}
            onRemoveItem={handleRemoveFromCart}
            onClose={() => setIsCartOpen(false)}
            onCheckout={() => {
              setIsCartOpen(false);
              setActivePage('checkout');
            }}
          />
        )}
      </AnimatePresence>
      <main className="flex-grow">{renderPage()}</main>
      <Footer />
      <BottomNav activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}
