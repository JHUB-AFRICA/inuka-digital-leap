import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { PARTNERS } from '../../../../core/constants';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section class="partners section-padding" id="partners">
      <div class="container">
        <div class="partners__header" appScrollReveal="fade-up" [delay]="0">
          <span class="partners__label">Our Partners</span>
          <h2 class="partners__title">Backed by Kenya's Leading Institutions</h2>
        </div>

        <div class="partners__grid" appScrollReveal="fade-up" [delay]="100">
          @for (partner of partners; track partner.name) {
            <div class="partners__card">
              <img
                [src]="partner.logo"
                [alt]="partner.alt"
                class="partners__logo"
                loading="lazy"
              />
              <span class="partners__name">{{ partner.fullName }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .partners {
      background: var(--color-surface-container-low);
    }

    .partners__header {
      text-align: center;
      margin-bottom: 48px;
    }

    .partners__label {
      display: inline-block;
      font: var(--label-caps);
      color: var(--color-electric-blue);
      letter-spacing: 0.12em;
      margin-bottom: 12px;
      padding: 4px 16px;
      border-radius: var(--rounded-full);
      background: rgba(0, 174, 239, 0.08);
    }

    .partners__title {
      font-family: var(--font-heading);
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--color-deep-navy);
      margin: 0;
    }

    .partners__grid {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 32px;
      flex-wrap: wrap;
    }

    .partners__card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      padding: 36px 48px;
      background: var(--color-surface-container-lowest);
      border: 1px solid var(--color-outline-variant);
      border-radius: var(--rounded-xl);
      transition: all var(--transition-base);
      min-width: 240px;
    }

    .partners__card:hover {
      border-color: var(--color-electric-blue);
      box-shadow: var(--shadow-glow-blue);
      transform: translateY(-4px);
    }

    .partners__logo {
      height: 60px;
      width: auto;
      object-fit: contain;
    }

    .partners__name {
      font-family: var(--font-body);
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--color-on-surface-variant);
      text-align: center;
      line-height: 1.4;
    }

    @media (max-width: 1024px) {
      .partners__grid {
        gap: 20px;
      }

      .partners__card {
        padding: 28px 32px;
        min-width: 200px;
      }
    }

    @media (max-width: 768px) {
      .partners__grid {
        flex-direction: column;
        gap: 16px;
      }

      .partners__card {
        padding: 24px 32px;
        min-width: auto;
        width: 100%;
        max-width: 320px;
      }

      .partners__title {
        font-size: 1.35rem;
      }

      .partners__logo {
        height: 48px;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersComponent {
  protected readonly partners = PARTNERS;
}
