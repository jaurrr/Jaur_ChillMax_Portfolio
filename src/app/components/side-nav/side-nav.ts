import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { NAV_LINKS } from '../../data/portfolio';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
})
export class SideNavComponent implements OnInit, OnDestroy {
  protected readonly links = NAV_LINKS;
  protected readonly active = signal('home');
  protected readonly open = signal(false);

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
    window.addEventListener('juno:menu-toggle', this.onMenuToggle);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    window.removeEventListener('juno:menu-toggle', this.onMenuToggle);
  }

  private readonly onMenuToggle = (): void => {
    this.toggle();
  };

  protected go(id: string): void {
    this.open.set(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  protected toggle(): void {
    this.open.update((v) => !v);
  }
}
