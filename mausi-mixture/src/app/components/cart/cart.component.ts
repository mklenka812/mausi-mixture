import { Component, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Output() close = new EventEmitter<void>();
  productService = inject(ProductService);

  checkout() {
    alert('🎉 Order placed! We\'ll deliver a taste of Odisha to your door within 5-7 business days.\n\nThank you for choosing Mausi Mixture!');
    this.productService.clearCart();
    this.close.emit();
  }
}
