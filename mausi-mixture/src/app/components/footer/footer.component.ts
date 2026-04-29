import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
<footer class="footer">
  <div class="footer-top">
    <div class="footer-brand">
      <div class="brand-logo">🌶️ Mausi Mixture</div>
      <div class="brand-odia">ମାଉସୀ ମିଶ୍ରଣ</div>
      <p>Bringing authentic Odia flavours to Odia families across the globe since 2018. Made with love, packed with tradition.</p>
      <div class="social-links">
        <a href="#" title="Facebook">📘</a>
        <a href="#" title="Instagram">📸</a>
        <a href="#" title="WhatsApp">💬</a>
        <a href="#" title="YouTube">▶️</a>
      </div>
    </div>

    <div class="footer-links">
      <div class="link-group">
        <h4>Products</h4>
        <a routerLink="/products">Namkeens</a>
        <a routerLink="/products">Mixtures</a>
        <a routerLink="/products">Masalas</a>
        <a routerLink="/products">Chatua & Sattu</a>
        <a routerLink="/products">Pickles</a>
      </div>
      <div class="link-group">
        <h4>Company</h4>
        <a routerLink="/about">Our Story</a>
        <a routerLink="/contact">Contact Us</a>
        <a href="#">Blog</a>
        <a href="#">Press</a>
      </div>
      <div class="link-group">
        <h4>Support</h4>
        <a href="#">Shipping Info</a>
        <a href="#">Returns Policy</a>
        <a href="#">FAQ</a>
        <a href="#">Track Order</a>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="footer-trust">
      <span>🔒 Secure Payments</span>
      <span>🚚 Worldwide Shipping</span>
      <span>✅ FSSAI Certified</span>
      <span>🌿 100% Natural</span>
    </div>
    <p class="copyright">© 2024 Mausi Mixture. Made with ❤️ in Odisha. All rights reserved.</p>
  </div>
</footer>
  `,
  styles: [`
.footer {
  background: #050505;
  border-top: 1px solid rgba(255,255,255,0.08);
}

.footer-top {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: 4rem;
}

.footer-brand {
  .brand-logo {
    font-family: 'Georgia', serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.3rem;
  }
  .brand-odia {
    color: var(--green);
    font-size: 0.8rem;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }
  p {
    color: rgba(255,255,255,0.4);
    font-size: 0.85rem;
    line-height: 1.7;
    max-width: 280px;
  }
}

.social-links {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
  a {
    width: 36px;
    height: 36px;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.2s;
    &:hover {
      border-color: var(--red);
      background: rgba(231,76,60,0.1);
      transform: translateY(-2px);
    }
  }
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.link-group {
  h4 {
    color: rgba(255,255,255,0.6);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 0 0 1rem;
    font-weight: 600;
  }
  a {
    display: block;
    color: rgba(255,255,255,0.4);
    text-decoration: none;
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
    transition: color 0.2s;
    &:hover { color: rgba(255,255,255,0.8); }
  }
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.06);
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
}

.footer-trust {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  span {
    color: rgba(255,255,255,0.4);
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
}

.copyright {
  color: rgba(255,255,255,0.25);
  font-size: 0.8rem;
  margin: 0;
}

@media (max-width: 900px) {
  .footer-top { grid-template-columns: 1fr; gap: 2rem; }
}
@media (max-width: 600px) {
  .footer-links { grid-template-columns: repeat(2, 1fr); }
}
  `]
})
export class FooterComponent {}
