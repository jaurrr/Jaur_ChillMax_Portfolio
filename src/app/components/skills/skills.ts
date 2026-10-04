import { Component } from '@angular/core';
import {
  PLATES,
  SECTIONS,
  SERVICES,
  SERVICES_IMAGE,
  SKILL_CATEGORIES,
} from '../../data/portfolio';
import { RevealDirective } from '../../directives/reveal';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  protected readonly categories = SKILL_CATEGORIES;
  protected readonly services = SERVICES;
  protected readonly servicesImage = SERVICES_IMAGE;
  protected readonly meta = SECTIONS['skills'];
  protected readonly plate = PLATES['services'];
}
