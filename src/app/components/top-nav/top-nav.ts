import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { NAV_LINKS, PROFILE } from '../../data/portfolio';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.html',
  styleUrl: './top-nav.scss',
})
export class TopNavComponent implements OnInit, OnDestroy {
  protected readonly profile = PROFILE;
  protected readonly theme = inject(ThemeService);
  protected readonly links = NAV_LINKS;
  protected readonly active = signal('home');
  protected readonly menuOpen = signal(false);

  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.active.set(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );
    sections.forEach((s) => this.observer?.observe(s));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  protected go(id: string): void {
    this.menuOpen.set(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }
}
