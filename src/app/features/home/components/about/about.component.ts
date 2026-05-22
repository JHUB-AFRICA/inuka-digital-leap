import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent, ScrollRevealDirective],
  template: `
    <section class="about section-padding" id="about">
      <div class="container">
        <app-section-header
          title="About Inuka Digital Leap"
          subtitle="A transformative partnership between JKUAT, Kenya Pipeline Company Foundation, and JHUB Africa."
        />

        <div class="about__layout">
          <div class="about__visual" appScrollReveal="fade-right" [delay]="0">
            <div class="about__image-block">
              <img
                src="assets/about-idl.png"
                alt="Inuka Digital Leap training lab session"
                class="about__image"
                loading="lazy"
              />
            </div>
          </div>

          <div class="about__content" appScrollReveal="fade-left" [delay]="100">
            <p class="about__paragraph">
              Inuka Digital Leap is a flagship talent development programme designed to address
              Kenya's critical shortage of skilled digital infrastructure professionals. The
              programme provides intensive, industry-aligned training in fibre optic engineering,
              network infrastructure, and broadband deployment.
            </p>

            <a routerLink="/about" class="about__cta">
              Learn More About Us
              <span class="pi pi-arrow-right" aria-hidden="true"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .about {
        background: var(--color-surface-container-low);
      }

      .about__layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 64px;
        align-items: center;
      }

      .about__image-block {
        border-radius: var(--rounded-xl);
        overflow: hidden;
        box-shadow: var(--shadow-glass-lg);
        aspect-ratio: 4 / 3;
      }

      .about__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .about__paragraph {
        font-family: var(--font-body);
        font-size: 1.05rem;
        line-height: 1.8;
        color: var(--color-on-surface-variant);
        margin: 0 0 28px;
      }

      .about__cta {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-family: var(--font-body);
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--color-electric-blue);
        padding: 12px 24px;
        border: 2px solid var(--color-electric-blue);
        border-radius: 9999px;
        transition: all var(--transition-base);
        text-decoration: none;

        &:hover {
          background: var(--color-electric-blue);
          color: white;
          box-shadow: var(--shadow-glow-blue);
          gap: 12px;
        }
      }

      @media (max-width: 1024px) {
        .about__layout {
          grid-template-columns: 1fr;
          gap: 40px;
        }

        .about__content {
          order: -1;
        }
      }

      @media (max-width: 768px) {
        .about__image-block {
          aspect-ratio: 16 / 9;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
