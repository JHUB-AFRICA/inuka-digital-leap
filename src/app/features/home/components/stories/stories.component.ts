import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { STORIES } from '../../../../core/constants';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent, ScrollRevealDirective],
  template: `
    <section class="stories section-padding" id="stories">
      <div class="container">
        <app-section-header
          title="Latest Stories"
          subtitle="Insights, milestones, and updates from the Inuka Digital Leap programme."
          label="Blog & News"
        />

        <div class="stories__grid">
          @for (story of featured; track story.title; let i = $index) {
            <article
              class="stories__card"
              [class.stories__card--featured]="story.featured"
              appScrollReveal="fade-up"
              [delay]="i * 100"
            >
              <div class="stories__card-image">
                <div class="stories__card-placeholder">
                  <span class="pi pi-file-text" aria-hidden="true"></span>
                </div>
              </div>
              <div class="stories__card-body">
                <div class="stories__card-meta">
                  <span class="stories__card-category">{{ story.category }}</span>
                  <span class="stories__card-date">{{ story.date }}</span>
                </div>
                <h3 class="stories__card-title">{{ story.title }}</h3>
                @if (story.featured) {
                  <p class="stories__card-excerpt">{{ story.excerpt }}</p>
                }
                <a [routerLink]="['/stories', story.slug]" class="stories__card-link">
                  Read more
                  <span class="pi pi-arrow-right" aria-hidden="true"></span>
                </a>
              </div>
            </article>
          }
        </div>

        <div class="stories__cta" appScrollReveal="fade-up">
          <a routerLink="/stories" class="stories__cta-link">
            View all stories
            <span class="pi pi-arrow-right" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .stories {
      background: var(--color-surface);
    }

    .stories__grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 20px;
    }

    .stories__card {
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

      &--featured {
        .stories__card-image {
          height: 280px;
        }

        .stories__card-title {
          font-size: 1.25rem;
        }
      }
    }

    .stories__card-image {
      height: 180px;
      overflow: hidden;
    }

    .stories__card-placeholder {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, var(--color-deep-navy), #0a2a4a);
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255, 255, 255, 0.12);
      font-size: 3rem;
    }

    .stories__card-body {
      padding: 20px;
    }

    .stories__card-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 10px;
      flex-wrap: wrap;
    }

    .stories__card-category {
      font: var(--label-caps);
      font-size: 0.65rem;
      color: var(--color-electric-blue);
      background: rgba(237, 27, 36, 0.08);
      padding: 3px 10px;
      border-radius: var(--rounded-full);
    }

    .stories__card-date {
      font-family: var(--font-body);
      font-size: 0.75rem;
      color: var(--color-on-surface-variant);
    }

    .stories__card-title {
      font-family: var(--font-heading);
      font-size: 1rem;
      font-weight: 700;
      color: var(--color-deep-navy);
      margin: 0 0 8px;
      line-height: 1.35;
    }

    .stories__card-excerpt {
      font-family: var(--font-body);
      font-size: 0.85rem;
      line-height: 1.65;
      color: var(--color-on-surface-variant);
      margin: 0 0 12px;
    }

    .stories__card-link {
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

    .stories__cta {
      text-align: center;
      margin-top: 40px;
    }

    .stories__cta-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: var(--font-body);
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--color-electric-blue);
      padding: 12px 28px;
      border: 1px solid var(--color-electric-blue);
      border-radius: var(--rounded-full);
      transition: all var(--transition-base);

      &:hover {
        background: var(--color-electric-blue);
        color: #fff;
        gap: 12px;
      }
    }

    @media (max-width: 1024px) {
      .stories__grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 768px) {
      .stories__grid {
        grid-template-columns: 1fr;
      }

      .stories__card--featured .stories__card-image {
        height: 200px;
      }

      .stories__card-image {
        height: 160px;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoriesComponent {
  protected readonly featured = STORIES.filter((s) => s.featured).slice(0, 2);
}
