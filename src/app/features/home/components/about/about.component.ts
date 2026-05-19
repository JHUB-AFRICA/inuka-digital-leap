import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeaderComponent, ScrollRevealDirective],
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
                src="assets/jhub-img.jpg"
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
              programme provides intensive, industry-aligned training in network engineering, 
              cloud computing, cybersecurity, and software development.
            </p>

            <div class="about__cards">
              <div class="about__card">
                <div class="about__card-icon-wrapper">
                  <span class="pi pi-flag" aria-hidden="true"></span>
                </div>
                <div class="about__card-body">
                  <h3 class="about__card-title">Our Vision</h3>
                  <p class="about__card-text">
                    A self-sufficient Kenya with a world-class digital infrastructure workforce 
                    driving national transformation and global competitiveness.
                  </p>
                </div>
              </div>

              <div class="about__card">
                <div class="about__card-icon-wrapper">
                  <span class="pi pi-bullseye" aria-hidden="true"></span>
                </div>
                <div class="about__card-body">
                  <h3 class="about__card-title">Our Mission</h3>
                  <p class="about__card-text">
                    To identify, train, and deploy 500+ certified digital infrastructure 
                    professionals across Kenya by 2028, bridging the skills gap and powering 
                    the nation's digital economy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
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
      margin: 0 0 32px;
    }

    .about__cards {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .about__card {
      display: flex;
      gap: 16px;
      padding: 24px;
      background: var(--color-surface-container-lowest);
      border: 1px solid var(--color-outline-variant);
      border-radius: var(--rounded-xl);
      transition: all var(--transition-base);
    }

    .about__card:hover {
      border-color: var(--color-electric-blue);
      box-shadow: var(--shadow-glow-blue);
    }

    .about__card-icon-wrapper {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 174, 239, 0.08);
      border-radius: var(--rounded-lg);
      flex-shrink: 0;
    }

    .about__card-icon-wrapper .pi {
      font-size: 1.3rem;
      color: var(--color-electric-blue);
    }

    .about__card-title {
      font-family: var(--font-heading);
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--color-deep-navy);
      margin: 0 0 8px;
    }

    .about__card-text {
      font-family: var(--font-body);
      font-size: 0.9rem;
      line-height: 1.65;
      color: var(--color-on-surface-variant);
      margin: 0;
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
      .about__card {
        flex-direction: column;
        gap: 12px;
      }

      .about__image-block {
        aspect-ratio: 16 / 9;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
