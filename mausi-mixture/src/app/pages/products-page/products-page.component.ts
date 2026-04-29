import { Component } from '@angular/core';
import { ProductsComponent } from '../../components/products/products.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ProductsComponent],
  template: `
    <div style="padding-top: 80px; background: #0a0a0a;">
      <div style="max-width:1200px;margin:0 auto;padding:3rem 2rem 1rem;text-align:center;">
        <div style="color:var(--green);font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin-bottom:0.8rem;">🛒 Full Catalogue</div>
        <h1 style="font-family:'Georgia',serif;font-size:clamp(2rem,4vw,3rem);color:#fff;margin:0 0 1rem;font-weight:700;">All Odia Products</h1>
        <p style="color:rgba(255,255,255,0.5);font-size:1rem;max-width:500px;margin:0 auto;">Browse and shop from our complete collection of authentic Odia food products.</p>
      </div>
      <app-products [showTitle]="false"></app-products>
    </div>
  `
})
export class ProductsPageComponent {}
