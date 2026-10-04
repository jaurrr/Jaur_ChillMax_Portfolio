import { Component, OnInit, signal } from '@angular/core';
import { PROFILE } from '../../data/portfolio';

/** "Ma" preloader — serif name with a thin vermilion line, ~2.6s. */
@Component({
  selector: 'app-intro',
  templateUrl: './intro.html',
  styleUrl: './intro.scss',
})
export class IntroComponent implements OnInit {
  protected readonly visible = signal(true);
  protected readonly done = signal(false);
  protected readonly name = `${PROFILE.firstName} ${PROFILE.lastName}`;

  ngOnInit(): void {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hold = reduce ? 400 : 2400;
    const fallback = reduce ? 1200 : 4500;
    window.setTimeout(() => this.done.set(true), hold);
    window.setTimeout(() => this.visible.set(false), hold + 650);
    // Fallback in case timers drift on slow devices
    window.setTimeout(() => this.visible.set(false), fallback);
  }
}
