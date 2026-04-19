import { Menu, ShoppingBag } from 'lucide-react';
import { NAV_ITEMS } from '../utils';

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
      <button 
        onClick={onMenuClick}
        className="text-primary hover:bg-surface-container-low transition-colors duration-300 p-2 rounded-lg"
      >
        <Menu size={24} />
      </button>

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
        <nav className="hidden md:flex items-center gap-8 text-[10px] font-medium tracking-[0.3em] uppercase text-on-surface-variant mr-8">
          {NAV_ITEMS.map(item => (
            <button 
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`hover:text-primary transition-colors ${activePage === item.id ? 'text-primary font-bold' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
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
