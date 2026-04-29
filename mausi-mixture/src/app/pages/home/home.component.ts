import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProductsComponent } from '../../components/products/products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroComponent, ProductsComponent],
  template: `
    <app-hero></app-hero>

    <!-- Why Us Section -->
    <section class="why-us">
      <div class="container">
        <div class="section-label">💚 Why Mausi Mixture?</div>
        <h2 class="section-title">More Than Just Snacks —<br>A Taste of Identity</h2>
        <div class="features-grid">
          <div class="feature-card" *ngFor="let feature of features">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Bestsellers -->
    <app-products [showTitle]="true" [limitTo]="8"></app-products>

    <!-- Testimonials -->
    <section class="testimonials">
      <div class="container">
        <div class="section-label">❤️ Odia Love From Around the World</div>
        <h2 class="section-title">What Our Customers Say</h2>
        <div class="testimonials-grid">
          <div class="testimonial-card" *ngFor="let t of testimonials">
            <div class="stars">⭐⭐⭐⭐⭐</div>
            <p class="quote">"{{ t.quote }}"</p>
            <div class="customer">
              <div class="avatar">{{ t.initials }}</div>
              <div>
                <div class="customer-name">{{ t.name }}</div>
                <div class="customer-loc">{{ t.location }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="cta-banner">
      <div class="cta-content">
        <h2>"Pardesire thile bi Odia khana bhuliba nahin"</h2>
        <p>Even when you're far from home, never forget your Odia roots. We ship across 25+ countries.</p>
        <a routerLink="/products" class="cta-btn">Order Now — Taste Odisha</a>
      </div>
    </section>
  `,
  styles: [`
    .why-us {
      background: #080808;
      padding: 6rem 0;
    }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
    .section-label { color: var(--green); font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 0.8rem; }
    .section-title { font-family: 'Georgia', serif; font-size: clamp(1.8rem, 4vw, 2.6rem); color: #fff; margin: 0 0 3rem; font-weight: 700; }
    .features-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1.5rem; }
    .feature-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 16px;
      padding: 1.8rem;
      transition: all 0.3s ease;
      .feature-icon { font-size: 2.5rem; margin-bottom: 1rem; }
      h3 { color: #fff; font-size: 1rem; font-weight: 700; margin: 0 0 0.5rem; }
      p { color: rgba(255,255,255,0.45); font-size: 0.85rem; line-height: 1.6; margin: 0; }
      &:hover { border-color: rgba(231,76,60,0.3); background: rgba(231,76,60,0.04); transform: translateY(-3px); }
    }
    .testimonials { background: #0a0a0a; padding: 6rem 0; }
    .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }
    .testimonial-card {
      background: #111;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 16px;
      padding: 1.8rem;
      .stars { font-size: 0.9rem; margin-bottom: 1rem; }
      .quote { color: rgba(255,255,255,0.7); font-size: 0.9rem; line-height: 1.7; margin: 0 0 1.5rem; font-style: italic; }
    }
    .customer { display: flex; align-items: center; gap: 0.8rem; }
    .avatar {
      width: 40px; height: 40px; border-radius: 50%;
      background: var(--red); color: #fff; display: flex; align-items: center; justify-content: center;
      font-weight: 700; font-size: 0.85rem; flex-shrink: 0;
    }
    .customer-name { color: #fff; font-weight: 600; font-size: 0.9rem; }
    .customer-loc { color: rgba(255,255,255,0.35); font-size: 0.75rem; }
    .cta-banner {
      background: linear-gradient(135deg, #1a0808 0%, #0d0d0d 50%, #0a1a0a 100%);
      border-top: 1px solid rgba(231,76,60,0.2);
      border-bottom: 1px solid rgba(231,76,60,0.2);
      padding: 6rem 2rem;
      text-align: center;
    }
    .cta-content {
      max-width: 700px; margin: 0 auto;
      h2 { font-family: 'Georgia', serif; font-size: clamp(1.5rem, 3vw, 2.2rem); color: #fff; font-style: italic; margin: 0 0 1rem; }
      p { color: rgba(255,255,255,0.5); font-size: 1rem; margin: 0 0 2rem; }
    }
    .cta-btn {
      display: inline-block;
      background: var(--red);
      color: #fff;
      text-decoration: none;
      padding: 1rem 2.5rem;
      border-radius: 50px;
      font-weight: 700;
      font-size: 1rem;
      letter-spacing: 0.3px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 20px rgba(231,76,60,0.4);
      &:hover { background: #c0392b; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(231,76,60,0.5); }
    }
  `]
})
export class HomeComponent {
  features = [
    { icon: '👩‍🍳', title: 'Mausi\'s Own Recipes', desc: 'Every product follows time-tested recipes passed down through generations of Odia households.' },
    { icon: '🌿', title: '100% Natural', desc: 'No artificial colours, no preservatives. Just pure, natural Odia ingredients.' },
    { icon: '✈️', title: 'Ships Worldwide', desc: 'Delivered to Odias in USA, UK, Canada, Australia, UAE and 20+ more countries.' },
    { icon: '📦', title: 'Vacuum Sealed', desc: 'Premium packaging ensures freshness for up to 6 months — just like freshly made.' },
    { icon: '🏆', title: 'FSSAI Certified', desc: 'Fully certified and compliant with Indian food safety standards for your peace of mind.' },
    { icon: '💚', title: 'Made in Odisha', desc: 'Manufactured in Bhubaneswar with local ingredients sourced from Odia farmers.' },
  ];

  testimonials = [
    { quote: 'I have been living in London for 8 years and Mausi Mixture is the only thing that makes me feel truly at home. The Dalma Mixture is unreal!', name: 'Priyanka Mohanty', location: 'London, UK', initials: 'PM' },
    { quote: 'Ordered for my mother\'s birthday in New Jersey — she cried with joy. The Ambula Achaar is exactly like my grandmother used to make.', name: 'Subrat Panda', location: 'New Jersey, USA', initials: 'SP' },
    { quote: 'The Chatua I ordered from them saved me during Diwali in Dubai. Amazing quality, authentic taste, fast delivery.', name: 'Suchitra Dash', location: 'Dubai, UAE', initials: 'SD' },
    { quote: 'Khaja from Mausi Mixture tastes just like the Puri temple prasad! My whole Odia community in Toronto loves it.', name: 'Bikash Sahoo', location: 'Toronto, Canada', initials: 'BS' },
    { quote: 'The Panch Phutana masala is perfect. Finally I can cook Odia food the right way in Germany!', name: 'Mamata Jena', location: 'Berlin, Germany', initials: 'MJ' },
    { quote: 'Been ordering every month for 2 years. The consistency, taste, and packaging is always top-notch. Truly the best Odia store online.', name: 'Rakesh Nayak', location: 'Melbourne, Australia', initials: 'RN' },
  ];
}
