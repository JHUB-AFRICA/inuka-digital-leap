import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PARTNERS, SITE_CONFIG, NAV_LINKS } from '../../constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly siteName = SITE_CONFIG.name;
  protected readonly tagline = SITE_CONFIG.tagline;
  protected readonly partners = PARTNERS;
  protected readonly navLinks = NAV_LINKS;
  protected readonly currentYear = new Date().getFullYear();
}
