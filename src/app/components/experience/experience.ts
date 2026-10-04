import { Component, HostListener, signal } from '@angular/core';
import {
  CERT_OPEN_FULL,
  CERT_PDF_MODAL_TITLE,
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
  SECTIONS,
  type Certificate,
} from '../../data/portfolio';
import { RevealDirective } from '../../directives/reveal';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  protected readonly exp = EXPERIENCE;
  protected readonly certs = CERTIFICATIONS;
  protected readonly education = EDUCATION;
  protected readonly meta = SECTIONS['experience'];
  protected readonly selectedCert = signal<Certificate | null>(null);
  protected readonly modalTitle = CERT_PDF_MODAL_TITLE;
  protected readonly openFull = CERT_OPEN_FULL;

  protected openCert(cert: Certificate): void {
    this.selectedCert.set(cert);
    document.body.style.overflow = 'hidden';
  }

  protected closeCert(): void {
    this.selectedCert.set(null);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (this.selectedCert()) {
      this.closeCert();
    }
  }
}
