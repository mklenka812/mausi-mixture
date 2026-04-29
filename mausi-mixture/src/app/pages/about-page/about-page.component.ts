import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule],
  template: `
<div class="about-page">
  <div class="about-hero">
    <div class="container">
      <div class="label">🌾 Our Story</div>
      <h1>The Woman Behind<br><em>Every Bite</em></h1>
      <p class="lead">Mausi Mixture was born out of one woman's love for her Odia roots — and a dream to share that love with Odia families across the world.</p>
    </div>
  </div>

  <div class="about-story">
    <div class="container story-grid">
      <div class="story-image">
        <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80" alt="Traditional Cooking">
        <div class="img-caption">Traditional Odia kitchen, Bhubaneswar</div>
      </div>
      <div class="story-text">
        <h2>Started in a Small Kitchen in Bhubaneswar</h2>
        <p>It began with Mausi — everyone's favourite aunt — who made the most incredible namkeens and mixtures in the neighborhood. Relatives visiting from abroad would pack bags full of her snacks. Friends begged for recipes. Children grew up with her mudhi and chuda bhaja as daily after-school snacks.</p>
        <p>When her nephew Raju moved to London in 2018, he found himself craving not just food — but belonging. One day he called Mausi and said: "Your snacks shouldn't just be for us. All Odias living abroad deserve this taste of home."</p>
        <p>That call became the seed for Mausi Mixture — a brand that isn't just about snacks, but about identity, memory, and the unbreakable thread that connects every Odia to their homeland.</p>
        <div class="story-highlight">
          "Food is how Odias carry their homeland in their hearts — no matter how far they go."
        </div>
      </div>
    </div>
  </div>

  <div class="values-section">
    <div class="container">
      <h2>Our Values</h2>
      <div class="values-grid">
        <div class="value-item" *ngFor="let v of values">
          <span class="value-icon">{{ v.icon }}</span>
          <h3>{{ v.title }}</h3>
          <p>{{ v.desc }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="team-banner">
    <div class="container">
      <div class="team-content">
        <h2>Made in Odisha 🧡</h2>
        <p>All our products are manufactured and packed in our FSSAI-certified facility in Bhubaneswar, using local ingredients sourced from Odia farmers and traditional recipes that have been in families for generations.</p>
        <div class="cert-badges">
          <div class="cert">✅ FSSAI Certified</div>
          <div class="cert">🌿 No Artificial Additives</div>
          <div class="cert">♻️ Eco-Friendly Packaging</div>
          <div class="cert">🏭 Made in Odisha</div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  styles: [`
.about-page { background: #0a0a0a; padding-top: 80px; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }
.about-hero {
  background: linear-gradient(180deg, rgba(231,76,60,0.08) 0%, transparent 100%);
  padding: 5rem 0 4rem;
  text-align: center;
  .label { color: var(--green); font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1rem; }
  h1 { font-family: 'Georgia', serif; font-size: clamp(2.2rem, 5vw, 3.5rem); color: #fff; font-weight: 700; margin: 0 0 1.5rem; em { color: var(--red); font-style: italic; } }
  .lead { color: rgba(255,255,255,0.6); font-size: 1.1rem; max-width: 600px; margin: 0 auto; line-height: 1.7; }
}
.about-story { padding: 6rem 0; }
.story-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 4rem; align-items: start; }
.story-image {
  img { width: 100%; border-radius: 20px; object-fit: cover; height: 400px; }
  .img-caption { color: rgba(255,255,255,0.3); font-size: 0.75rem; text-align: center; margin-top: 0.5rem; }
}
.story-text {
  h2 { font-family: 'Georgia', serif; font-size: 1.8rem; color: #fff; margin: 0 0 1.5rem; }
  p { color: rgba(255,255,255,0.55); line-height: 1.8; margin-bottom: 1.2rem; font-size: 0.95rem; }
  .story-highlight {
    border-left: 3px solid var(--red); padding-left: 1.2rem; margin-top: 2rem;
    font-family: 'Georgia', serif; font-style: italic; font-size: 1.05rem;
    color: rgba(255,255,255,0.7); line-height: 1.6;
  }
}
.values-section { background: #080808; padding: 5rem 0; h2 { font-family: 'Georgia', serif; font-size: 2rem; color: #fff; margin: 0 0 3rem; text-align: center; } }
.values-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1.5rem; }
.value-item {
  text-align: center; padding: 2rem 1.5rem;
  border: 1px solid rgba(255,255,255,0.07); border-radius: 16px;
  background: rgba(255,255,255,0.03); transition: all 0.3s;
  .value-icon { font-size: 2.5rem; display: block; margin-bottom: 1rem; }
  h3 { color: #fff; font-size: 1rem; font-weight: 700; margin: 0 0 0.5rem; }
  p { color: rgba(255,255,255,0.4); font-size: 0.85rem; line-height: 1.6; margin: 0; }
  &:hover { border-color: rgba(231,76,60,0.3); transform: translateY(-3px); }
}
.team-banner {
  padding: 5rem 0;
  background: linear-gradient(135deg, rgba(34,197,94,0.05) 0%, transparent 100%);
}
.team-content {
  max-width: 700px;
  h2 { font-family: 'Georgia', serif; font-size: 2rem; color: #fff; margin: 0 0 1rem; }
  p { color: rgba(255,255,255,0.55); line-height: 1.8; margin: 0 0 2rem; }
}
.cert-badges { display: flex; gap: 0.75rem; flex-wrap: wrap; }
.cert {
  background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.2);
  color: var(--green); padding: 0.4rem 1rem; border-radius: 100px; font-size: 0.8rem; font-weight: 600;
}
@media (max-width: 768px) { .story-grid { grid-template-columns: 1fr; } }
  `]
})
export class AboutPageComponent {
  values = [
    { icon: '🧡', title: 'Odia First', desc: 'Every decision we make is guided by what\'s best for Odia culture and community.' },
    { icon: '🌿', title: 'Natural Always', desc: 'We never compromise on quality. Pure ingredients, honest labels, no shortcuts.' },
    { icon: '👩‍🌾', title: 'Farmer Partnerships', desc: 'We source directly from Odia farmers, supporting local agriculture and livelihoods.' },
    { icon: '🌍', title: 'Global Community', desc: 'We see every Odia abroad not as a customer but as family, united by taste.' },
  ];
}
