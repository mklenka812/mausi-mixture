export interface Product {
  id: number;
  name: string;
  nameOdia?: string;
  category: string;
  price: number;
  weight: string;
  description: string;
  image: string;
  badge?: string;
  isVeg: boolean;
  isBestseller?: boolean;
  spiceLevel?: 'mild' | 'medium' | 'hot' | 'extra-hot';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}
