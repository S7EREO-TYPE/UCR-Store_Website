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
import { AnimatePresence } from 'motion/react';
import { scrollToTop } from './utils';

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
