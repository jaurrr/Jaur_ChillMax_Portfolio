import { Component, HostListener, OnDestroy, signal } from '@angular/core';
import { GALLERY, SECTIONS } from '../../data/portfolio';
import { RevealDirective } from '../../directives/reveal';

@Component({
  selector: 'app-gallery',
  imports: [RevealDirective],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class GalleryComponent implements OnDestroy {
  protected readonly images = GALLERY;
  protected readonly meta = SECTIONS['gallery'];
  /** Index of the image open in the lightbox, or null when closed */
  protected readonly lightbox = signal<number | null>(null);

  protected open(i: number): void {
    this.lightbox.set(i);
    document.body.style.overflow = 'hidden';
  }

  protected close(): void {
    this.lightbox.set(null);
    document.body.style.overflow = '';
  }

  protected step(dir: 1 | -1): void {
    const cur = this.lightbox();
    if (cur === null) return;
    const n = this.images.length;
    this.lightbox.set((cur + dir + n) % n);
  }

  @HostListener('document:keydown', ['$event'])
  protected onKey(e: KeyboardEvent): void {
    if (this.lightbox() === null) return;
    if (e.key === 'Escape') this.close();
    if (e.key === 'ArrowRight') this.step(1);
    if (e.key === 'ArrowLeft') this.step(-1);
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }
}
