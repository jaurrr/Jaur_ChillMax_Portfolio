import { Component, signal } from '@angular/core';
import {
  HERO_CV,
  HERO_LABEL,
  HERO_VIEW_WORK,
  PLATES,
  PROFILE,
} from '../../data/portfolio';
import { RevealDirective } from '../../directives/reveal';
import { TypingComponent } from '../typing/typing';

@Component({
  selector: 'app-hero',
  imports: [RevealDirective, TypingComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  protected readonly profile = PROFILE;
  protected readonly plate = PLATES['hero'];
  protected readonly label = HERO_LABEL;
  protected readonly viewWork = HERO_VIEW_WORK;
  protected readonly cvLabel = HERO_CV;
  /** Tap-to-flip for touch devices (hover handles desktop) */
  protected readonly flipped = signal(false);

  protected toggleFlip(): void {
    this.flipped.update((v) => !v);
  }
}
