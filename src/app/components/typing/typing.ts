import { Component, Input, OnDestroy, OnInit, signal } from '@angular/core';

/** Typewriter effect: types words, pauses, deletes, loops. Blinking caret via CSS. */
@Component({
  selector: 'app-typing',
  template: `<span class="typed-text">{{ display() }}</span><span class="caret" aria-hidden="true"></span>`,
  styleUrl: './typing.scss',
})
export class TypingComponent implements OnInit, OnDestroy {
  @Input() words: string[] = [];
  @Input() typeSpeed = 75;
  @Input() deleteSpeed = 38;
  @Input() holdTime = 1500;

  protected readonly display = signal('');

  private timers: ReturnType<typeof setTimeout>[] = [];
  private wordIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private destroyed = false;

  ngOnInit(): void {
    if (this.words.length === 0) return;
    this.schedule(this.typeSpeed);
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    this.timers.forEach(clearTimeout);
    this.timers = [];
  }

  private schedule(ms: number): void {
    if (this.destroyed) return;
    this.timers.push(setTimeout(() => this.tick(), ms));
  }

  private tick(): void {
    if (this.destroyed || this.words.length === 0) return;
    const word = this.words[this.wordIndex % this.words.length];

    if (!this.deleting) {
      this.charIndex++;
      this.display.set(word.slice(0, this.charIndex));
      if (this.charIndex >= word.length) {
        this.deleting = true;
        this.schedule(this.holdTime);
        return;
      }
      this.schedule(this.typeSpeed);
    } else {
      this.charIndex--;
      this.display.set(word.slice(0, this.charIndex));
      if (this.charIndex <= 0) {
        this.deleting = false;
        this.wordIndex++;
        this.schedule(350);
        return;
      }
      this.schedule(this.deleteSpeed);
    }
  }
}
