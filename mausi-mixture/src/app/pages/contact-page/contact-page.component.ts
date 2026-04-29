import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
<div class="contact-page">
  <div class="contact-hero">
    <div class="container">
      <div class="label">📬 Get in Touch</div>
      <h1>We're Here For You</h1>
      <p>Questions about your order? Want to become a distributor? Just missing home? We'd love to hear from you.</p>
    </div>
  </div>

  <div class="contact-body">
    <div class="container contact-grid">
      <div class="contact-info">
        <h2>Contact Details</h2>
        <div class="info-item" *ngFor="let item of contactInfo">
          <span class="info-icon">{{ item.icon }}</span>
          <div>
            <div class="info-label">{{ item.label }}</div>
            <div class="info-value">{{ item.value }}</div>
          </div>
        </div>

        <div class="hours">
          <h3>Business Hours</h3>
          <p>Monday – Saturday: 9am – 6pm IST</p>
          <p>Sunday: 10am – 2pm IST</p>
          <p class="hours-note">For international orders, email response within 24 hours.</p>
        </div>

        <div class="distributor-box">
          <div class="dist-icon">🤝</div>
          <h3>Become a Distributor</h3>
          <p>Are you an Odia grocery store or community organization outside India? Partner with us!</p>
        </div>
      </div>

      <div class="contact-form">
        <h2>Send Us a Message</h2>
        <div class="form-group">
          <label>Your Name</label>
          <input type="text" [(ngModel)]="form.name" placeholder="Subrat Panda">
        </div>
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" [(ngModel)]="form.email" placeholder="subrat@gmail.com">
        </div>
        <div class="form-group">
          <label>Subject</label>
          <select [(ngModel)]="form.subject">
            <option value="">Select a topic</option>
            <option>Order Enquiry</option>
            <option>Bulk / Distributor Order</option>
            <option>Product Feedback</option>
            <option>Shipping Query</option>
            <option>Other</option>
          </select>
        </div>
        <div class="form-group">
          <label>Message</label>
          <textarea [(ngModel)]="form.message" rows="5" placeholder="Tell us how we can help..."></textarea>
        </div>
        <button class="submit-btn" (click)="submit()" [disabled]="submitted()">
          {{ submitted() ? '✓ Message Sent!' : 'Send Message →' }}
        </button>
      </div>
    </div>
  </div>
</div>
  `,
  styles: [`
.contact-page { background: #0a0a0a; padding-top: 80px; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }
.contact-hero {
  padding: 5rem 0 3rem; text-align: center;
  .label { color: var(--green); font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1rem; }
  h1 { font-family: 'Georgia', serif; font-size: clamp(2rem,4vw,3rem); color: #fff; margin: 0 0 1rem; }
  p { color: rgba(255,255,255,0.5); font-size: 1rem; max-width: 500px; margin: 0 auto; line-height: 1.7; }
}
.contact-body { padding: 4rem 0 6rem; }
.contact-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 4rem; }
.contact-info {
  h2 { font-family: 'Georgia', serif; font-size: 1.5rem; color: #fff; margin: 0 0 2rem; }
}
.info-item {
  display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 1.5rem;
  .info-icon { font-size: 1.4rem; flex-shrink: 0; margin-top: 2px; }
  .info-label { color: rgba(255,255,255,0.3); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; }
  .info-value { color: rgba(255,255,255,0.8); font-size: 0.9rem; margin-top: 2px; }
}
.hours {
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 1.2rem; margin: 1.5rem 0;
  h3 { color: #fff; font-size: 0.85rem; font-weight: 700; margin: 0 0 0.8rem; text-transform: uppercase; letter-spacing: 1px; }
  p { color: rgba(255,255,255,0.5); font-size: 0.85rem; margin: 0 0 0.3rem; }
  .hours-note { color: rgba(255,255,255,0.3); font-size: 0.8rem; font-style: italic; margin-top: 0.6rem; }
}
.distributor-box {
  background: rgba(34,197,94,0.06); border: 1px solid rgba(34,197,94,0.2); border-radius: 12px; padding: 1.5rem;
  .dist-icon { font-size: 2rem; margin-bottom: 0.5rem; }
  h3 { color: #fff; font-size: 1rem; margin: 0 0 0.5rem; }
  p { color: rgba(255,255,255,0.4); font-size: 0.85rem; line-height: 1.6; margin: 0; }
}
.contact-form {
  background: #111; border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 2.5rem;
  h2 { font-family: 'Georgia', serif; font-size: 1.5rem; color: #fff; margin: 0 0 2rem; }
}
.form-group { margin-bottom: 1.2rem; }
label { display: block; color: rgba(255,255,255,0.5); font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 0.5rem; }
input, select, textarea {
  width: 100%; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px;
  padding: 0.8rem 1rem; color: #fff; font-size: 0.9rem; box-sizing: border-box; outline: none;
  transition: border-color 0.2s; font-family: inherit;
  &::placeholder { color: rgba(255,255,255,0.25); }
  &:focus { border-color: var(--red); }
  option { background: #111; }
}
textarea { resize: vertical; }
.submit-btn {
  width: 100%; background: var(--red); color: #fff; border: none; padding: 1rem; border-radius: 10px;
  font-size: 1rem; font-weight: 700; cursor: pointer; margin-top: 0.5rem; transition: all 0.3s;
  &:hover:not(:disabled) { background: #c0392b; transform: translateY(-1px); }
  &:disabled { background: var(--green); cursor: default; }
}
@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; } }
  `]
})
export class ContactPageComponent {
  form = { name: '', email: '', subject: '', message: '' };
  submitted = signal(false);

  contactInfo = [
    { icon: '📧', label: 'Email', value: 'hello@mausimixture.com' },
    { icon: '📱', label: 'WhatsApp', value: '+91 98765 43210' },
    { icon: '📍', label: 'Address', value: 'Plot 42, Saheed Nagar, Bhubaneswar, Odisha 751007' },
    { icon: '🌐', label: 'Website', value: 'www.mausimixture.com' },
  ];

  submit() {
    if (!this.form.name || !this.form.email) return;
    this.submitted.set(true);
    setTimeout(() => this.submitted.set(false), 4000);
    this.form = { name: '', email: '', subject: '', message: '' };
  }
}
