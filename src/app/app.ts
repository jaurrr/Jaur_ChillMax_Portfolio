import { Component } from '@angular/core';
import { IntroComponent } from './components/intro/intro';
import { TopNavComponent } from './components/top-nav/top-nav';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { ExperienceComponent } from './components/experience/experience';
import { ProjectsComponent } from './components/projects/projects';
import { GalleryComponent } from './components/gallery/gallery';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { SIDE_TEXT } from './data/portfolio';

@Component({
  selector: 'app-root',
  imports: [
    IntroComponent,
    TopNavComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  /** The ma design carries no side navigation — its vertical
      editorial aside lives here in the app shell instead. */
  protected readonly sideText = SIDE_TEXT;
}
