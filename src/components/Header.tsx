import { Menu, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  onMenuClick: () => void;
  onCartClick: () => void;
  activePage: string;
  setActivePage: (page: string) => void;
  cartCount?: number;
}

export default function Header({ onMenuClick, onCartClick, activePage, setActivePage, cartCount = 0 }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50 glass-header shadow-[0px_20px_50px_rgba(26,28,28,0.06)] flex justify-between items-center px-6 py-4">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="text-primary hover:bg-surface-container-low transition-colors duration-300 p-2 rounded-lg"
        >
          <Menu size={24} />
        </button>
      </div>

      <button 
        onClick={() => setActivePage('home')}
        className="cursor-pointer flex items-center gap-3"
      >
        <img src="/images/Logo.png" alt="Logo" className="h-8 md:h-10 w-auto object-contain" />
        <span className="hidden lg:block text-xl font-serif italic tracking-tighter text-primary">
          UPPER CAMPUS RESIDENCE
        </span>
      </button>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-8 text-[10px] font-medium tracking-[0.3em] uppercase text-on-surface-variant mr-8">
          <button 
            onClick={() => setActivePage('home')}
            className={`hover:text-primary transition-colors ${activePage === 'home' ? 'text-primary font-bold' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => setActivePage('shop')}
            className={`hover:text-primary transition-colors ${activePage === 'shop' ? 'text-primary font-bold' : ''}`}
          >
            Shop
          </button>
          <button 
            onClick={() => setActivePage('lookbook')}
            className={`hover:text-primary transition-colors ${activePage === 'lookbook' ? 'text-primary font-bold' : ''}`}
          >
            Lookbook
          </button>
          <button 
            onClick={() => setActivePage('journey')}
            className={`hover:text-primary transition-colors ${activePage === 'journey' ? 'text-primary font-bold' : ''}`}
          >
            Journey
          </button>
        </div>
        <button 
          onClick={onCartClick}
          className="text-primary hover:bg-surface-container-low transition-colors duration-300 p-2 rounded-lg relative"
        >
          <ShoppingBag size={24} />
          {cartCount > 0 && (
            <span className="absolute top-1 right-1 bg-secondary text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
