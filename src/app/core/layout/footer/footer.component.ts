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
  protected readonly currentYear = new Date().getFullYear();

  private readonly allLinks = [...NAV_LINKS];
  protected readonly quickLinksCol1 = this.allLinks.slice(0, Math.ceil(this.allLinks.length / 2));
  protected readonly quickLinksCol2 = this.allLinks.slice(Math.ceil(this.allLinks.length / 2));
}
