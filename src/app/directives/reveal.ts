import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

/**
 * Adds `.reveal` (hidden, translated down) on init and `.revealed`
 * (visible) when the element scrolls into view. One-shot.
 * Usage: <div appReveal></div> or <div appReveal="120"></div> (delay in ms)
 */
@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements OnInit, OnDestroy {
  /** Optional stagger delay in ms, e.g. appReveal="150" */
  @Input() appReveal: number | string = 0;

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    const native = this.el.nativeElement;
    this.renderer.addClass(native, 'reveal');
    const delay = Number(this.appReveal) || 0;
    if (delay > 0) {
      this.renderer.setStyle(native, 'transition-delay', `${delay}ms`);
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(native, 'revealed');
            this.observer?.disconnect();
            this.observer = undefined;
            break;
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );
    this.observer.observe(native);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
