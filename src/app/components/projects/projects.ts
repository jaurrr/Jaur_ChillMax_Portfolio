import { Component } from '@angular/core';
import {
  PLATES,
  PROJECTS,
  PROJECTS_IMAGE,
  PROJECTS_SOON_EM,
  PROJECTS_SOON_LEAD,
  SECTIONS,
} from '../../data/portfolio';
import { RevealDirective } from '../../directives/reveal';

@Component({
  selector: 'app-projects',
  imports: [RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  protected readonly projects = PROJECTS;
  protected readonly projectsImage = PROJECTS_IMAGE;
  protected readonly meta = SECTIONS['projects'];
  protected readonly plate = PLATES['projects'];
  protected readonly soonLead = PROJECTS_SOON_LEAD;
  protected readonly soonEm = PROJECTS_SOON_EM;
}
