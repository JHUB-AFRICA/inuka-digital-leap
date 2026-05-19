import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { IMPACT_DATA } from '../../../../core/constants';

@Component({
  selector: 'app-impact',
  standalone: true,
  imports: [SectionHeaderComponent, ScrollRevealDirective],
  template: `
    <section class="impact section-padding" id="impact">
      <div class="container">
        <app-section-header
          title="Our Impact Dashboard"
          subtitle="Real numbers showing the measurable difference Inuka Digital Leap is making across Kenya."
          label="Impact"
        />

        <div class="impact__grid" appScrollReveal="fade-up" [delay]="0">
          @for (item of data.items; track item.label) {
            <div class="impact__card">
              <div class="impact__card-header">
                <span class="impact__card-label">{{ item.label }}</span>
                <span class="impact__card-value">{{ item.value }}{{ item.unit }}</span>
              </div>
              <div class="impact__progress">
                <div
                  class="impact__progress-bar"
                  [class.impact__progress-bar--blue]="item.color === 'blue'"
                  [class.impact__progress-bar--green]="item.color === 'green'"
                  [class.impact__progress-bar--gold]="item.color === 'gold'"
                  [style.width.%]="(item.value / item.target) * 100"
                ></div>
              </div>
              <span class="impact__card-target">Target: {{ item.target }}{{ item.unit }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .impact {
      background: var(--color-surface-container-low);
    }

    .impact__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      max-width: 900px;
      margin: 0 auto;
    }

    .impact__card {
      padding: 24px;
      background: var(--color-surface-container-lowest);
      border: 1px solid var(--color-outline-variant);
      border-radius: var(--rounded-xl);
      transition: all var(--transition-base);
    }

    .impact__card:hover {
      border-color: var(--color-electric-blue);
      box-shadow: var(--shadow-glow-blue);
    }

    .impact__card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .impact__card-label {
      font-family: var(--font-body);
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--color-on-surface);
    }

    .impact__card-value {
      font-family: var(--font-heading);
      font-size: 1.3rem;
      font-weight: 800;
      color: var(--color-deep-navy);
      line-height: 1;
    }

    .impact__progress {
      height: 6px;
      background: var(--color-surface-container);
      border-radius: var(--rounded-full);
      overflow: hidden;
      margin-bottom: 8px;
    }

    .impact__progress-bar {
      height: 100%;
      border-radius: var(--rounded-full);
      transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1);

      &--blue {
        background: linear-gradient(90deg, var(--color-electric-blue), #0088cc);
      }

      &--green {
        background: linear-gradient(90deg, var(--color-emerald-green), #0a9e63);
      }

      &--gold {
        background: linear-gradient(90deg, var(--color-gold), #b88910);
      }
    }

    .impact__card-target {
      font-family: var(--font-body);
      font-size: 0.75rem;
      color: var(--color-on-surface-variant);
    }

    @media (max-width: 1024px) {
      .impact__grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .impact__grid {
        grid-template-columns: 1fr;
      }

      .impact__card {
        padding: 20px;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImpactComponent {
  protected readonly data = IMPACT_DATA;
}
