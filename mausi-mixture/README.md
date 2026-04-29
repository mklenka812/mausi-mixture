# 🌶️ Mausi Mixture — Angular Website

Authentic Odia Namkeens, Mixtures, Masalas & Packaged Food — delivered worldwide.

## 🚀 Getting Started

```bash
npm install
ng serve
# Open: http://localhost:4200
```

## 🏗️ Build for Production
```bash
ng build --configuration=production
```

## 📁 Project Structure
```
src/app/
├── models/product.model.ts         # Product, CartItem, Category interfaces
├── services/product.service.ts     # All product data + cart (Angular Signals)
├── components/
│   ├── navbar/    Sticky nav, cart badge, mobile hamburger
│   ├── hero/      Animated landing hero with floating chips + stats bar
│   ├── products/  Category filter tabs + product card grid
│   ├── cart/      Slide-in cart drawer with qty controls
│   └── footer/    Links, social icons, trust badges
└── pages/
    ├── home/          Full landing page
    ├── products-page/ Full catalogue
    ├── about-page/    Brand story
    └── contact-page/  Contact form
```

## 🎨 Brand Colors
| Color | Hex       |
|-------|-----------|
| Red   | #e74c3c   |
| Green | #22c55e   |
| Black | #0a0a0a   |

CSS vars in `src/styles.scss`: `--red`, `--green`

## ➕ Adding Products
Edit the `products` array in `src/app/services/product.service.ts`.

## ➕ Adding Categories
Edit the `categories` array in the same service file.

## 🌐 Routes
| Route      | Page              |
|------------|-------------------|
| /          | Home              |
| /products  | Product Catalogue |
| /about     | Our Story         |
| /contact   | Contact Us        |
