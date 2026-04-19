import { Home, Grid, BookOpen, History } from 'lucide-react';
import { NAV_ITEMS } from '../utils';

interface BottomNavProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  home: Home,
  shop: Grid,
  lookbook: BookOpen,
  journey: History,
};

export default function BottomNav({ activePage, setActivePage }: BottomNavProps) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-surface border-t border-outline-variant/20 px-4">
      {NAV_ITEMS.map((item) => {
        const Icon = ICON_MAP[item.id];
        const isActive = activePage === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActivePage(item.id)}
            className={`flex flex-col items-center justify-center transition-colors ${
              isActive ? 'text-primary' : 'text-on-surface-variant/60'
            }`}
          >
            <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
            <span className={`font-sans text-[10px] mt-1 font-medium tracking-widest uppercase ${isActive ? 'font-bold' : ''}`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
