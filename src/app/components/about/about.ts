import { Component } from '@angular/core';
import { ABOUT, PLATES, SECTIONS } from '../../data/portfolio';
import { RevealDirective } from '../../directives/reveal';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  protected readonly about = ABOUT;
  protected readonly meta = SECTIONS['about'];
  protected readonly plate = PLATES['about'];
}
