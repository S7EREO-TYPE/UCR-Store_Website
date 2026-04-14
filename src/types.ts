export interface Product {
  id: string;
  name: string;
  price: number;
  collection: string;
  image: string;
  secondaryImage?: string;
  description?: string;
  details?: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  quote?: string;
}

export interface Collection {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  detailImage: string;
  color: string;
}

export interface CartItem {
  id: string; // generate unique id for combining product + size
  product: Product;
  size: string;
  quantity: number;
}
