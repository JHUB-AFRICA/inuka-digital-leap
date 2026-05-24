import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <div class="section-header" appScrollReveal="fade-up" [delay]="0">
      @if (label) {
        <span class="section-header__label">{{ label }}</span>
      }
      <h2 class="section-header__title">{{ title }}</h2>
      @if (subtitle) {
        <p class="section-header__subtitle">{{ subtitle }}</p>
      }
    </div>
  `,
  styles: [`
    .section-header {
      text-align: center;
      max-width: 720px;
      margin: 0 auto var(--section-gap);
    }

    .section-header__label {
      display: inline-block;
      font: var(--label-caps);
      color: var(--color-electric-blue);
      letter-spacing: 0.12em;
      margin-bottom: 12px;
      padding: 4px 16px;
      border-radius: var(--rounded-full);
      background: rgba(237, 27, 36, 0.08);
    }

    .section-header__title {
      font: var(--headline-lg);
      color: var(--color-deep-navy);
      margin: 0 0 16px;
    }

    .section-header__subtitle {
      font: var(--body-lg);
      color: var(--color-on-surface-variant);
      margin: 0;
      line-height: 1.7;
    }

    @media (max-width: 768px) {
      .section-header {
        margin-bottom: 40px;
      }

      .section-header__title {
        font-size: 28px;
        line-height: 34px;
      }

      .section-header__subtitle {
        font-size: 16px;
        line-height: 26px;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeaderComponent {
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
  @Input() label?: string;
}
