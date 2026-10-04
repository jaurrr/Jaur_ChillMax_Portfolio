import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CONTACT_IMAGE, PLATES, PROFILE, SECTIONS } from '../../data/portfolio';
import { RevealDirective } from '../../directives/reveal';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  protected readonly profile = PROFILE;
  protected readonly contactImage = CONTACT_IMAGE;
  protected readonly meta = SECTIONS['contact'];
  protected readonly plate = PLATES['contact'];

  protected readonly name = signal('');
  protected readonly email = signal('');
  protected readonly message = signal('');
  protected readonly sent = signal(false);

  protected submit(): void {
    const subject = encodeURIComponent(`Portfolio enquiry from ${this.name() || 'a visitor'}`);
    const body = encodeURIComponent(
      `Hi Jauhar,\n\n${this.message()}\n\n— ${this.name()} (${this.email()})`,
    );
    window.location.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
    this.sent.set(true);
    setTimeout(() => this.sent.set(false), 4000);
  }
}
