import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  stats = [
    { value: '50+', label: 'Authentic Products' },
    { value: '10k+', label: 'Happy Odia Families' },
    { value: '25+', label: 'Countries Delivered' },
    { value: '100%', label: 'Natural Ingredients' },
  ];
}
