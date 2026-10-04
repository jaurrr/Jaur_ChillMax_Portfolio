import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'jauhar-portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  /* "Ma" is light-first: default to the warm paper editorial theme. */
  readonly theme = signal<Theme>('light');

  constructor() {
    this.init();
  }

  private init(): void {
    let initial: Theme = 'light';
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') {
        initial = stored;
      } else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
        initial = 'dark';
      }
    } catch {
      /* storage unavailable — stay on default */
    }
    this.apply(initial);
  }

  toggle(): void {
    this.apply(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private apply(t: Theme): void {
    this.theme.set(t);
    document.documentElement.setAttribute('data-theme', t);
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {
      /* ignore */
    }
  }
}
