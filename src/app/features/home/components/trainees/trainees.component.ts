import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { CarouselComponent } from '../../../../shared/components/carousel/carousel.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { TRAINEES } from '../../../../core/constants';

@Component({
  selector: 'app-trainees',
  standalone: true,
  imports: [SectionHeaderComponent, CarouselComponent, ScrollRevealDirective],
  template: `
    <section class="trainees section-padding" id="trainees">
      <div class="container">
        <app-section-header
          title="Meet the Trainees"
          subtitle="Meet the talented young Kenyans building the skills to power our nation's digital infrastructure."
          label="Cohort 1"
        />

        <div class="trainees__grid">
          @for (trainee of trainees; track trainee.name; let i = $index) {
            <div class="trainees__card" appScrollReveal="fade-up" [delay]="i * 100">
              <div class="trainees__portrait">
                <span class="trainees__avatar">{{ trainee.name.charAt(0) }}{{ trainee.name.split(' ')[1]?.charAt(0) }}</span>
              </div>
              <div class="trainees__info">
                <h3 class="trainees__name">{{ trainee.name }}</h3>
                <div class="trainees__tags">
                  <span class="trainees__tag trainees__tag--county">{{ trainee.county }}</span>
                  <span class="trainees__tag trainees__tag--focus">{{ trainee.focus }}</span>
                </div>
                <blockquote class="trainees__quote">
                  <p>"{{ trainee.quote }}"</p>
                </blockquote>
                <a href="#" class="trainees__cta">
                  View Profile
                  <span class="pi pi-arrow-right" aria-hidden="true"></span>
                </a>
              </div>
            </div>
          }
        </div>
        <div class="trainees__carousel">
          <app-carousel>
            @for (trainee of trainees; track trainee.name) {
              <div class="trainees__card">
                <div class="trainees__portrait">
                  <span class="trainees__avatar">{{ trainee.name.charAt(0) }}{{ trainee.name.split(' ')[1]?.charAt(0) }}</span>
                </div>
                <div class="trainees__info">
                  <h3 class="trainees__name">{{ trainee.name }}</h3>
                  <div class="trainees__tags">
                    <span class="trainees__tag trainees__tag--county">{{ trainee.county }}</span>
                    <span class="trainees__tag trainees__tag--focus">{{ trainee.focus }}</span>
                  </div>
                  <blockquote class="trainees__quote">
                    <p>"{{ trainee.quote }}"</p>
                  </blockquote>
                  <a href="#" class="trainees__cta">
                    View Profile
                    <span class="pi pi-arrow-right" aria-hidden="true"></span>
                  </a>
                </div>
              </div>
            }
          </app-carousel>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .trainees {
      background: var(--color-surface);
    }

    .trainees__grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }

    .trainees__carousel {
      display: none;
    }

    .trainees__card {
      display: flex;
      gap: 24px;
      padding: 28px;
      background: var(--color-surface-container-lowest);
      border: 1px solid var(--color-outline-variant);
      border-radius: var(--rounded-xl);
      transition: all var(--transition-base);
    }

    .trainees__card:hover {
      border-color: var(--color-electric-blue);
      box-shadow: var(--shadow-glow-blue);
      transform: translateY(-4px);
    }

    .trainees__portrait {
      flex-shrink: 0;
    }

    .trainees__avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 72px;
      height: 72px;
      border-radius: var(--rounded-xl);
      background: linear-gradient(135deg, var(--color-electric-blue), var(--color-emerald-green));
      font-family: var(--font-heading);
      font-size: 1.3rem;
      font-weight: 800;
      color: white;
    }

    .trainees__info {
      flex: 1;
      min-width: 0;
    }

    .trainees__name {
      font-family: var(--font-heading);
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--color-deep-navy);
      margin: 0 0 8px;
    }

    .trainees__tags {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 12px;
    }

    .trainees__tag {
      display: inline-flex;
      font-size: 0.7rem;
      font-weight: 600;
      padding: 3px 10px;
      border-radius: var(--rounded-full);
      letter-spacing: 0.02em;

      &--county {
        background: rgba(0, 174, 239, 0.08);
        color: var(--color-electric-blue);
      }

      &--focus {
        background: rgba(22, 196, 127, 0.08);
        color: var(--color-emerald-green);
      }
    }

    .trainees__quote {
      margin: 0 0 12px;
      padding: 0;
      border: none;
    }

    .trainees__quote p {
      font-family: var(--font-body);
      font-size: 0.875rem;
      line-height: 1.7;
      color: var(--color-on-surface-variant);
      margin: 0;
      font-style: italic;
    }

    .trainees__cta {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: var(--font-body);
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--color-electric-blue);
      transition: gap var(--transition-fast);

      &:hover {
        gap: 10px;
      }
    }

    @media (max-width: 1024px) {
      .trainees__card {
        flex-direction: column;
        gap: 16px;
      }
    }

    @media (max-width: 768px) {
      .trainees__grid {
        display: none;
      }
      .trainees__carousel {
        display: block;
      }
      .trainees__card {
        padding: 20px;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TraineesComponent {
  protected readonly trainees = TRAINEES;
}
