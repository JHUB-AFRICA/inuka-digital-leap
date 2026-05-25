import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="not-found">
      <div class="container">
        <span class="not-found__code">404</span>
        <h1 class="not-found__title">Page Not Found</h1>
        <p class="not-found__text">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a routerLink="/" class="not-found__btn">
          <span class="pi pi-home" aria-hidden="true"></span>
          Return home
        </a>
      </div>
    </section>
  `,
  styles: [`
    .not-found {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 120px 24px;
      background: var(--color-surface);
    }

    .not-found__code {
      display: block;
      font-family: var(--font-heading);
      font-size: clamp(4rem, 12vw, 8rem);
      font-weight: 900;
      color: var(--color-electric-blue);
      line-height: 1;
      margin-bottom: 8px;
      opacity: 0.3;
    }

    .not-found__title {
      font-family: var(--font-heading);
      font-size: clamp(1.5rem, 4vw, 2rem);
      font-weight: 800;
      color: var(--color-deep-navy);
      margin: 0 0 12px;
    }

    .not-found__text {
      font-family: var(--font-body);
      font-size: 1rem;
      color: var(--color-on-surface-variant);
      margin: 0 0 32px;
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
    }

    .not-found__btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: var(--font-body);
      font-size: 0.9rem;
      font-weight: 600;
      color: #fff;
      background: var(--color-electric-blue);
      padding: 12px 28px;
      border-radius: var(--rounded-full);
      text-decoration: none;
      transition: all var(--transition-base);

      &:hover {
        box-shadow: var(--shadow-glow-blue);
        transform: translateY(-2px);
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
  constructor() {
    inject(SeoService).setPageSeo({
      title: 'Page Not Found',
      description: 'The page you are looking for does not exist.',
    });
  }
}
