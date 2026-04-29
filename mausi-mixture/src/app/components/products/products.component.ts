import { Component, signal, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input() showTitle = true;
  @Input() limitTo: number | null = null;

  productService = inject(ProductService);
  selectedCategory = signal('all');
  addedProductId = signal<number | null>(null);

  get categories() { return this.productService.categories; }

  get displayedProducts(): Product[] {
    const filtered = this.productService.getByCategory(this.selectedCategory());
    return this.limitTo ? filtered.slice(0, this.limitTo) : filtered;
  }

  selectCategory(id: string) { this.selectedCategory.set(id); }

  addToCart(product: Product) {
    this.productService.addToCart(product);
    this.addedProductId.set(product.id);
    setTimeout(() => this.addedProductId.set(null), 1500);
  }

  spiceEmoji(level?: string): string {
    const map: Record<string, string> = { mild: '🌶️', medium: '🌶️🌶️', hot: '🌶️🌶️🌶️', 'extra-hot': '🔥🔥🔥' };
    return level ? map[level] || '' : '';
  }
}
