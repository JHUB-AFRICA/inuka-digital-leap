import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SITE_CONFIG } from '../../../../core/constants';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  protected readonly tagline = SITE_CONFIG.tagline;
  protected readonly name = SITE_CONFIG.name;
}
