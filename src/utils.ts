import { CartItem } from './types';

// Navigation items
export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'shop', label: 'Shop' },
  { id: 'lookbook', label: 'Lookbook' },
  { id: 'journey', label: 'Journey' },
] as const;

// Calculate cart total
export const calculateCartTotal = (cartItems: CartItem[]): number => {
  return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
};

// Format currency
export const formatCurrency = (amount: number): string => {
  return `R${amount.toFixed(2)}`;
};

// Scroll to top
export const scrollToTop = (): void => {
  window.scrollTo(0, 0);
};

// Smooth scroll to top
export const smoothScrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
