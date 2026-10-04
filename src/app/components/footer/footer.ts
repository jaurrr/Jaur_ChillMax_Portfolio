import { Component, inject } from '@angular/core';
import { FOOTER_LABEL, FOOTER_NOTE, FOOTER_TOP } from '../../data/portfolio';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  protected readonly label = FOOTER_LABEL;
  protected readonly note = FOOTER_NOTE;
  protected readonly top = FOOTER_TOP;
  protected readonly theme = inject(ThemeService);

  protected goTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
