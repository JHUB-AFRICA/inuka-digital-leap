import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { ACTIVITIES } from '../../../core/constants';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-activity-detail',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  template: `
    @if (activity) {
      <section class="detail-hero">
        <div class="container" appScrollReveal="fade-up">
          <a routerLink="/activities" class="detail-hero__back">
            <span class="pi pi-arrow-left" aria-hidden="true"></span>
            Back to activities
          </a>
          <div class="detail-hero__visual">
            <span
              class="detail-hero__icon"
              [class]="activity.icon"
              aria-hidden="true"
            ></span>
          </div>
          <span class="detail-hero__category">{{ activity.category }}</span>
          <span class="detail-hero__meta">{{ activity.duration }} &middot; {{ activity.date }}</span>
          <h1 class="detail-hero__title">{{ activity.title }}</h1>
        </div>
      </section>

      <article class="detail-content">
        <div class="container">
          <div class="detail-content__inner">
            @for (paragraph of paragraphs; track $index) {
              <p class="detail-content__paragraph">{{ paragraph }}</p>
            }
          </div>
        </div>
      </article>

      @if (relatedActivities.length) {
        <section class="detail-related">
          <div class="container">
            <h2 class="detail-related__heading">More Activities</h2>
            <div class="detail-related__grid">
              @for (related of relatedActivities; track related.title) {
                <a
                  [routerLink]="['/activities', related.slug]"
                  class="detail-related__card"
                  appScrollReveal="fade-up"
                >
                  <div class="detail-related__card-visual">
                    <span
                      class="detail-related__card-icon"
                      [class]="related.icon"
                      aria-hidden="true"
                    ></span>
                  </div>
                  <div class="detail-related__card-body">
                    <div class="detail-related__card-meta">
                      <span class="detail-related__card-category">{{ related.category }}</span>
                      <span class="detail-related__card-duration">{{ related.duration }}</span>
                    </div>
                    <h3 class="detail-related__card-title">{{ related.title }}</h3>
                    <span class="detail-related__card-link">
                      View activity
                      <span class="pi pi-arrow-right" aria-hidden="true"></span>
                    </span>
                  </div>
                </a>
              }
            </div>
          </div>
        </section>
      }
    } @else {
      <section class="detail-hero">
        <div class="container" style="text-align:center;">
          <h1 class="detail-hero__title">Activity Not Found</h1>
          <p style="color: rgba(255,255,255,0.65); margin-bottom: 24px;">
            The activity you're looking for doesn't exist or has been removed.
          </p>
          <a routerLink="/activities" class="detail-hero__back" style="display:inline-flex;">
            <span class="pi pi-arrow-left" aria-hidden="true"></span>
            Back to activities
          </a>
        </div>
      </section>
    }
  `,
  styles: [`
    .detail-hero {
      background: linear-gradient(135deg, var(--color-deep-navy) 0%, #0a2a4a 100%);
      padding: 120px 0 80px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .detail-hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at 30% 50%, rgba(0, 174, 239, 0.12) 0%, transparent 60%);
      pointer-events: none;
    }

    .detail-hero__back {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: var(--font-body);
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.6);
      margin-bottom: 24px;
      transition: color var(--transition-fast);
      position: relative;
      z-index: 1;

      &:hover {
        color: #fff;
      }
    }

    .detail-hero__visual {
      width: 80px;
      height: 80px;
      border-radius: var(--rounded-2xl);
      background: rgba(0, 174, 239, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      position: relative;
      z-index: 1;
    }

    .detail-hero__icon {
      font-size: 2.25rem;
      color: var(--color-electric-blue);
    }

    .detail-hero__category {
      display: inline-block;
      font: var(--label-caps);
      color: var(--color-electric-blue);
      background: rgba(0, 174, 239, 0.12);
      padding: 4px 16px;
      border-radius: var(--rounded-full);
      margin-bottom: 10px;
      position: relative;
      z-index: 1;
    }

    .detail-hero__meta {
      display: block;
      font-family: var(--font-body);
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.5);
      margin-bottom: 16px;
      position: relative;
      z-index: 1;
    }

    .detail-hero__title {
      font-family: var(--font-heading);
      font-size: clamp(1.5rem, 4vw, 2.75rem);
      font-weight: 800;
      color: #fff;
      margin: 0 auto;
      max-width: 800px;
      line-height: 1.15;
      position: relative;
      z-index: 1;
    }

    .detail-content {
      padding: 60px 0 80px;
      background: var(--color-surface);
    }

    .detail-content__inner {
      max-width: 720px;
      margin: 0 auto;
    }

    .detail-content__paragraph {
      font-family: var(--font-body);
      font-size: 1.05rem;
      line-height: 1.85;
      color: var(--color-on-surface-variant);
      margin: 0 0 24px;
    }

    .detail-related {
      padding: 0 0 100px;
      background: var(--color-surface);
    }

    .detail-related__heading {
      font-family: var(--font-heading);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-deep-navy);
      margin: 0 0 32px;
      text-align: center;
    }

    .detail-related__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .detail-related__card {
      display: block;
      text-decoration: none;
      background: var(--color-surface-container-lowest);
      border: 1px solid var(--color-outline-variant);
      border-radius: var(--rounded-xl);
      overflow: hidden;
      transition: all var(--transition-base);

      &:hover {
        border-color: var(--color-electric-blue);
        box-shadow: var(--shadow-glow-blue);
        transform: translateY(-4px);
      }
    }

    .detail-related__card-visual {
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, rgba(0, 174, 239, 0.06), rgba(22, 196, 127, 0.06));
      border-bottom: 1px solid var(--color-outline-variant);
    }

    .detail-related__card-icon {
      font-size: 2.25rem;
      color: var(--color-electric-blue);
      opacity: 0.4;
    }

    .detail-related__card-body {
      padding: 20px;
    }

    .detail-related__card-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
      flex-wrap: wrap;
    }

    .detail-related__card-category {
      font: var(--label-caps);
      font-size: 0.65rem;
      color: var(--color-electric-blue);
      background: rgba(0, 174, 239, 0.08);
      padding: 3px 10px;
      border-radius: var(--rounded-full);
    }

    .detail-related__card-duration {
      font-family: var(--font-body);
      font-size: 0.75rem;
      color: var(--color-on-surface-variant);
    }

    .detail-related__card-title {
      font-family: var(--font-heading);
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--color-deep-navy);
      margin: 0 0 10px;
      line-height: 1.35;
    }

    .detail-related__card-link {
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
      .detail-related__grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .detail-hero {
        padding: 100px 0 60px;
      }

      .detail-content__paragraph {
        font-size: 1rem;
      }

      .detail-related__grid {
        grid-template-columns: 1fr;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityDetailComponent {
  private readonly route = inject(ActivatedRoute);

  protected readonly activity =
    ACTIVITIES.find((a) => a.slug === this.route.snapshot.paramMap.get('slug')) ?? null;

  protected readonly paragraphs = this.activity?.content.split('\n\n') ?? [];

  protected readonly relatedActivities = this.activity
    ? ACTIVITIES.filter(
        (a) => a.slug !== this.activity!.slug && a.category === this.activity!.category,
      ).slice(0, 3)
    : [];
}
