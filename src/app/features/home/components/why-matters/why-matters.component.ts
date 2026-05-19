import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-why-matters',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section class="why-matters section-padding" id="why">
      <div class="container">
        <div class="why-matters__layout">
          <div class="why-matters__text" appScrollReveal="fade-right" [delay]="0">
            <span class="why-matters__label">Why This Matters</span>
            <h2 class="why-matters__title">Kenya's Digital Infrastructure Skills Gap</h2>
            <p class="why-matters__desc">
              Kenya faces a critical shortage of skilled digital infrastructure professionals. 
              With the government's ambitious fibre rollout targeting universal connectivity by 2030 
              and rapid digitisation across sectors, the demand for trained network engineers, 
              cloud architects, and cybersecurity specialists has never been greater.
            </p>
            <p class="why-matters__desc">
              Inuka Digital Leap bridges this gap by providing intensive, industry-aligned training 
              that equips young Kenyans with the practical skills needed to build, operate, and 
              secure the nation's digital backbone.
            </p>
            <div class="why-matters__highlights">
              <div class="why-matters__highlight">
                <span class="why-matters__highlight-icon pi pi-chart-line" aria-hidden="true"></span>
                <span class="why-matters__highlight-text">60% of Kenyans lack reliable internet access</span>
              </div>
              <div class="why-matters__highlight">
                <span class="why-matters__highlight-icon pi pi-graduation-cap" aria-hidden="true"></span>
                <span class="why-matters__highlight-text">Skills mismatch between graduates and industry needs</span>
              </div>
              <div class="why-matters__highlight">
                <span class="why-matters__highlight-icon pi pi-bolt" aria-hidden="true"></span>
                <span class="why-matters__highlight-text">Growing demand for certified infrastructure professionals</span>
              </div>
            </div>
          </div>

          <div class="why-matters__visual" appScrollReveal="fade-left" [delay]="100">
            <div class="why-matters__graphic">
              <div class="why-matters__stat-ring">
                <svg viewBox="0 0 200 200" class="why-matters__ring-svg">
                  <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(0,174,239,0.1)" stroke-width="8"/>
                  <circle cx="100" cy="100" r="85" fill="none" stroke="var(--color-electric-blue)" stroke-width="8"
                    stroke-dasharray="534" stroke-dashoffset="214" stroke-linecap="round"
                    transform="rotate(-90 100 100)"/>
                </svg>
                <div class="why-matters__ring-text">
                  <span class="why-matters__ring-value">60%</span>
                  <span class="why-matters__ring-label">Connectivity<br/>Gap</span>
                </div>
              </div>
              <div class="why-matters__decorative-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .why-matters {
      background: var(--color-surface);
    }

    .why-matters__layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 64px;
      align-items: center;
    }

    .why-matters__label {
      display: inline-block;
      font: var(--label-caps);
      color: var(--color-electric-blue);
      letter-spacing: 0.12em;
      margin-bottom: 12px;
      padding: 4px 16px;
      border-radius: var(--rounded-full);
      background: rgba(0, 174, 239, 0.08);
    }

    .why-matters__title {
      font: var(--headline-lg);
      color: var(--color-deep-navy);
      margin: 0 0 20px;
    }

    .why-matters__desc {
      font-family: var(--font-body);
      font-size: 1.05rem;
      line-height: 1.8;
      color: var(--color-on-surface-variant);
      margin: 0 0 20px;
    }

    .why-matters__highlights {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 28px;
    }

    .why-matters__highlight {
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: var(--font-body);
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--color-deep-navy);
    }

    .why-matters__highlight-icon {
      font-size: 1.1rem;
      color: var(--color-emerald-green);
      flex-shrink: 0;
    }

    .why-matters__graphic {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }

    .why-matters__stat-ring {
      position: relative;
      width: 220px;
      height: 220px;
    }

    .why-matters__ring-svg {
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);
    }

    .why-matters__ring-text {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .why-matters__ring-value {
      font-family: var(--font-heading);
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-electric-blue);
      line-height: 1;
    }

    .why-matters__ring-label {
      font-family: var(--font-body);
      font-size: 0.8rem;
      color: var(--color-on-surface-variant);
      text-align: center;
      line-height: 1.4;
    }

    .why-matters__decorative-line {
      width: 80px;
      height: 2px;
      background: linear-gradient(90deg, var(--color-electric-blue), transparent);
      border-radius: 2px;
    }

    @media (max-width: 1024px) {
      .why-matters__layout {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .why-matters__graphic {
        order: -1;
      }
    }

    @media (max-width: 768px) {
      .why-matters__title {
        font-size: 28px;
        line-height: 34px;
      }

      .why-matters__stat-ring {
        width: 180px;
        height: 180px;
      }

      .why-matters__ring-value {
        font-size: 2rem;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhyMattersComponent {}
