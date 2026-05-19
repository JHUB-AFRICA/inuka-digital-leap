import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { ACTIVITIES } from '../../../../core/constants';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [SectionHeaderComponent, ScrollRevealDirective],
  template: `
    <section class="activities section-padding" id="activities">
      <div class="container">
        <app-section-header
          title="Activities &amp; Experiences"
          subtitle="From hands-on labs to industry exposure — our trainees experience a dynamic learning environment."
          label="In Action"
        />

        <div class="activities__grid">
          @for (activity of activities; track activity.title; let i = $index) {
            <div class="activities__card" appScrollReveal="fade-up" [delay]="(i % 3) * 80">
              <div class="activities__card-visual">
                <span class="activities__card-icon" [class]="activity.icon" aria-hidden="true"></span>
              </div>
              <div class="activities__card-body">
                <div class="activities__card-meta">
                  <span class="activities__card-category">{{ activity.category }}</span>
                  <span class="activities__card-date">{{ activity.date }}</span>
                </div>
                <h3 class="activities__card-title">{{ activity.title }}</h3>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .activities {
      background: var(--color-surface-container-low);
    }

    .activities__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    .activities__card {
      background: var(--color-surface-container-lowest);
      border: 1px solid var(--color-outline-variant);
      border-radius: var(--rounded-xl);
      overflow: hidden;
      transition: all var(--transition-base);
    }

    .activities__card:hover {
      border-color: var(--color-electric-blue);
      box-shadow: var(--shadow-glow-blue);
      transform: translateY(-4px);
    }

    .activities__card-visual {
      height: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, rgba(0, 174, 239, 0.06), rgba(22, 196, 127, 0.06));
      border-bottom: 1px solid var(--color-outline-variant);
    }

    .activities__card-icon {
      font-size: 2.5rem;
      color: var(--color-electric-blue);
      opacity: 0.5;
    }

    .activities__card-body {
      padding: 20px;
    }

    .activities__card-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 10px;
      flex-wrap: wrap;
    }

    .activities__card-category {
      font: var(--label-caps);
      font-size: 0.65rem;
      color: var(--color-electric-blue);
      background: rgba(0, 174, 239, 0.08);
      padding: 3px 10px;
      border-radius: var(--rounded-full);
    }

    .activities__card-date {
      font-family: var(--font-body);
      font-size: 0.75rem;
      color: var(--color-on-surface-variant);
    }

    .activities__card-title {
      font-family: var(--font-heading);
      font-size: 1rem;
      font-weight: 700;
      color: var(--color-deep-navy);
      margin: 0;
      line-height: 1.4;
    }

    @media (max-width: 1024px) {
      .activities__grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .activities__grid {
        grid-template-columns: 1fr;
      }

      .activities__card-visual {
        height: 120px;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivitiesComponent {
  protected readonly activities = ACTIVITIES;
}
