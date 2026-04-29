import { Injectable, signal, computed } from '@angular/core';
import { Product, CartItem, Category } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  cartItems = signal<CartItem[]>([]);

  cartCount = computed(() => this.cartItems().reduce((sum, i) => sum + i.quantity, 0));
  cartTotal = computed(() => this.cartItems().reduce((sum, i) => sum + i.product.price * i.quantity, 0));

  categories: Category[] = [
    { id: 'all', name: 'All Products', icon: '🛒', description: 'Browse everything' },
    { id: 'namkeen', name: 'Namkeens', icon: '🥜', description: 'Crunchy & savory snacks' },
    { id: 'mixture', name: 'Mixtures', icon: '🌶️', description: 'Classic Odia mixtures' },
    { id: 'masala', name: 'Ruchi Masalas', icon: '🌿', description: 'Authentic spice blends' },
    { id: 'chatua', name: 'Chatua & Sattu', icon: '🌾', description: 'Traditional power foods' },
    { id: 'pickles', name: 'Achaar & Pickles', icon: '🫙', description: 'Tangy Odia pickles' },
    { id: 'sweets', name: 'Sweets & Mithai', icon: '🍬', description: 'Traditional Odia sweets' },
    { id: 'pakhala', name: 'Pakhala & Rice', icon: '🍚', description: 'Odia staples' },
  ];

  products: Product[] = [
    // Namkeens
    { id: 1, name: 'Bhunja Chana', nameOdia: 'ଭୁଞ୍ଜା ଚଣା', category: 'namkeen', price: 120, weight: '250g', description: 'Crispy roasted chana with Odia spices, a classic tea-time snack loved across generations.', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80', badge: 'Classic', isVeg: true, isBestseller: true, spiceLevel: 'medium' },
    { id: 2, name: 'Mudhi Mixture', nameOdia: 'ମୁଢ଼ି ମିଶ୍ରଣ', category: 'mixture', price: 90, weight: '200g', description: 'Puffed rice mixed with groundnuts, mustard seeds, curry leaves and special Odia masala.', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=80', badge: 'Bestseller', isVeg: true, isBestseller: true, spiceLevel: 'hot' },
    { id: 3, name: 'Chuda Bhaja', nameOdia: 'ଚୁଡ଼ା ଭଜା', category: 'namkeen', price: 100, weight: '250g', description: 'Crispy fried flattened rice with peanuts and spices — the quintessential Odia evening snack.', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80', isVeg: true, spiceLevel: 'mild' },
    { id: 4, name: 'Dalma Mixture', nameOdia: 'ଡାଲ୍ମା ମିଶ୍ରଣ', category: 'mixture', price: 150, weight: '300g', description: 'Inspired by the legendary Odia dish — a hearty, crunchy mixture that captures the taste of home.', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80', badge: 'Signature', isVeg: true, isBestseller: true, spiceLevel: 'medium' },
    { id: 5, name: 'Sev Bhuja', nameOdia: 'ସେଭ ଭୁଜା', category: 'namkeen', price: 80, weight: '200g', description: 'Fine gram flour sev seasoned with turmeric and red chilli — crispy gold strands of pure joy.', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80', isVeg: true, spiceLevel: 'medium' },
    { id: 6, name: 'Fried Masala Peanuts', nameOdia: 'ଭଜା ବାଦାମ', category: 'namkeen', price: 110, weight: '250g', description: 'Crunchy groundnuts coated in a spicy besan batter and fried to perfection.', image: 'https://images.unsplash.com/photo-1567892737950-30c4db5b14e3?w=400&q=80', isVeg: true, spiceLevel: 'hot' },
    // Masalas
    { id: 7, name: 'Panch Phutana', nameOdia: 'ପଞ୍ଚ ଫୁଟଣ', category: 'masala', price: 60, weight: '100g', description: 'The sacred five-spice blend — fenugreek, cumin, mustard, fennel & nigella — base of Odia cooking.', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80', badge: 'Authentic', isVeg: true },
    { id: 8, name: 'Rasagolla Masala', nameOdia: 'ରସଗୋଲ୍ଲା ମସଲା', category: 'masala', price: 75, weight: '50g', description: 'Special blend to make the perfect homestyle Odia Rasagolla — the pride of Odisha.', image: 'https://images.unsplash.com/photo-1611270418597-a6c77f4b7271?w=400&q=80', isVeg: true },
    { id: 9, name: 'Pakhala Masala', nameOdia: 'ପଖାଳ ମସଲା', category: 'masala', price: 65, weight: '75g', description: 'A must-have for authentic Pakhala Bhata lovers — tangy, cooling and unmistakably Odia.', image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80', badge: 'Unique', isVeg: true },
    { id: 10, name: 'Jhola Aloo Masala', nameOdia: 'ଝୋଳ ଆଳୁ ମସଲା', category: 'masala', price: 70, weight: '100g', description: 'The classic Odia Aloo Jhola spice pack — brings restaurant-style jhola to your kitchen abroad.', image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=400&q=80', isVeg: true },
    // Chatua
    { id: 11, name: 'Wheat Chatua', nameOdia: 'ଗହମ ଛତୁଆ', category: 'chatua', price: 130, weight: '500g', description: 'Stone-ground roasted wheat flour — a high-energy traditional breakfast. Mix with water or milk.', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80', badge: 'Nutritious', isVeg: true },
    { id: 12, name: 'Chana Chatua', nameOdia: 'ଚଣା ଛତୁଆ', category: 'chatua', price: 140, weight: '500g', description: 'Protein-rich roasted gram flour — a farmer\'s superfood. Rich, nutty and incredibly satisfying.', image: 'https://images.unsplash.com/photo-1568742200847-3ec2c95c97cd?w=400&q=80', isVeg: true, isBestseller: true },
    { id: 13, name: 'Mixed Grain Chatua', nameOdia: 'ମିଶ୍ରିତ ଛତୁଆ', category: 'chatua', price: 160, weight: '500g', description: 'Seven-grain power blend — a complete Odia superfood for daily nutrition and energy.', image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&q=80', badge: 'New', isVeg: true },
    // Pickles
    { id: 14, name: 'Ambula Achaar', nameOdia: 'ଅଁଳ ଆଚାର', category: 'pickles', price: 180, weight: '300g', description: 'Sun-dried raw mango pickle with mustard oil and Odia spices — the taste of grandmother\'s kitchen.', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&q=80', badge: 'Homestyle', isVeg: true, spiceLevel: 'hot' },
    { id: 15, name: 'Nimbu Achaar', nameOdia: 'ନିମ୍ବୁ ଆଚାର', category: 'pickles', price: 150, weight: '300g', description: 'Tangy lemon pickle with panch phutana — a zesty Odia classic that pairs with everything.', image: 'https://images.unsplash.com/photo-1627735561830-9c53b38680dd?w=400&q=80', isVeg: true, spiceLevel: 'medium' },
    // Sweets
    { id: 16, name: 'Khaja (Puri Style)', nameOdia: 'ଖଜା', category: 'sweets', price: 200, weight: '400g', description: 'The iconic flaky, sweet Khaja — a Jagannath Prasad favourite, now delivered to your door.', image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&q=80', badge: 'Prasad', isVeg: true, isBestseller: true },
    { id: 17, name: 'Chhena Poda Mix', nameOdia: 'ଛେନା ପୋଡ଼ ମିଶ୍ରଣ', category: 'sweets', price: 120, weight: '250g', description: 'Ready-mix for Odisha\'s beloved baked cheese dessert — golden, caramelized and divine.', image: 'https://images.unsplash.com/photo-1558024920-b41e1887dc32?w=400&q=80', isVeg: true },
    // Pakhala/Rice
    { id: 18, name: 'Basmati Parboiled Rice', nameOdia: 'ସିଝା ଚାଉଳ', category: 'pakhala', price: 250, weight: '1kg', description: 'Traditional Odia parboiled rice for authentic Pakhala Bhata, Dalma and Khechudi.', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80', isVeg: true },
    { id: 19, name: 'Instant Pakhala Kit', nameOdia: 'ଇନ୍ସ୍ଟ୍ ପଖାଳ', category: 'pakhala', price: 180, weight: '300g', description: 'Complete kit for making authentic Pakhala Bhata abroad — water rice, spice pack & dried jeera.', image: 'https://images.unsplash.com/photo-1594498653385-d5172c532c00?w=400&q=80', badge: 'Abroad Special', isVeg: true },
    { id: 20, name: 'Odia Special Mixture', nameOdia: 'ଓଡ଼ିଆ ସ୍ପେସିଆଲ ମିଶ୍ରଣ', category: 'mixture', price: 170, weight: '350g', description: 'Our flagship product — a complex, addictive mixture of fried lentils, peanuts, curry leaves and spices.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', badge: '⭐ #1 Seller', isVeg: true, isBestseller: true, spiceLevel: 'hot' },
  ];

  getByCategory(categoryId: string): Product[] {
    if (categoryId === 'all') return this.products;
    return this.products.filter(p => p.category === categoryId);
  }

  getBestsellers(): Product[] {
    return this.products.filter(p => p.isBestseller);
  }

  addToCart(product: Product): void {
    this.cartItems.update(items => {
      const existing = items.find(i => i.product.id === product.id);
      if (existing) {
        return items.map(i => i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...items, { product, quantity: 1 }];
    });
  }

  removeFromCart(productId: number): void {
    this.cartItems.update(items => items.filter(i => i.product.id !== productId));
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) { this.removeFromCart(productId); return; }
    this.cartItems.update(items => items.map(i => i.product.id === productId ? { ...i, quantity } : i));
  }

  clearCart(): void {
    this.cartItems.set([]);
  }
}
