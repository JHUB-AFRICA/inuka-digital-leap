import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { PATHWAY_STEPS } from '../../../../core/constants';

@Component({
  selector: 'app-pathway',
  standalone: true,
  imports: [SectionHeaderComponent, ScrollRevealDirective],
  template: `
    <section class="pathway section-padding" id="pathway">
      <div class="container">
        <app-section-header
          title="Program Pathway"
          subtitle="A structured 6-month journey from selection to deployment — transforming talented youth into certified digital infrastructure professionals."
          label="The Journey"
        />

        <div class="pathway__track" appScrollReveal="fade-up" [delay]="0">
          @for (step of steps; track step.step) {
            <div class="pathway__stage">
              <div
                class="pathway__node"
                [class.pathway__node--completed]="step.status === 'completed'"
                [class.pathway__node--active]="step.status === 'active'"
              >
                <span class="pathway__node-icon" [class]="step.icon" aria-hidden="true"></span>
                <span class="pathway__node-step">Step {{ step.step }}</span>
              </div>

              @if (step.step < steps.length) {
                <div class="pathway__connector" [class.pathway__connector--active]="step.status === 'completed'"></div>
              }

              <div class="pathway__stage-content">
                <h3 class="pathway__stage-title">{{ step.title }}</h3>
                <p class="pathway__stage-desc">{{ step.description }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .pathway {
      background: var(--color-surface);
    }

    .pathway__track {
      display: flex;
      gap: 16px;
      justify-content: center;
      overflow-x: auto;
      padding-bottom: 16px;
    }

    .pathway__stage {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      min-width: 180px;
      max-width: 240px;
      position: relative;
    }

    .pathway__node {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(7, 27, 52, 0.06);
      border: 2px solid rgba(7, 27, 52, 0.12);
      color: var(--color-deep-navy);
      flex-shrink: 0;
      transition: all var(--transition-base);
      position: relative;
      z-index: 1;
      gap: 0;
    }

    .pathway__node .pi {
      font-size: 1.3rem;
    }

    .pathway__node-step {
      font-family: var(--font-mono);
      font-size: 0.55rem;
      font-weight: 600;
      color: inherit;
      letter-spacing: 0.05em;
      margin-top: 1px;
    }

    .pathway__node--completed {
      background: var(--color-emerald-green);
      border-color: var(--color-emerald-green);
      color: white;
      box-shadow: 0 0 15px rgba(22, 196, 127, 0.3);
    }

    .pathway__node--active {
      background: var(--color-electric-blue);
      border-color: var(--color-electric-blue);
      color: white;
      box-shadow: 0 0 20px rgba(0, 174, 239, 0.4);
      animation: pulseNode 2s ease-in-out infinite;
    }

    @keyframes pulseNode {
      0%, 100% { box-shadow: 0 0 15px rgba(0, 174, 239, 0.3); }
      50% { box-shadow: 0 0 30px rgba(0, 174, 239, 0.5); }
    }

    .pathway__connector {
      position: absolute;
      top: 36px;
      left: calc(50% + 38px);
      right: calc(-50% + 38px);
      height: 2px;
      background: rgba(7, 27, 52, 0.1);
      z-index: 0;

      &--active {
        background: var(--color-emerald-green);
      }
    }

    .pathway__stage-content {
      text-align: center;
      margin-top: 16px;
    }

    .pathway__stage-title {
      font-family: var(--font-heading);
      font-size: 1rem;
      font-weight: 700;
      color: var(--color-deep-navy);
      margin: 0 0 8px;
    }

    .pathway__stage-desc {
      font-family: var(--font-body);
      font-size: 0.8rem;
      line-height: 1.65;
      color: var(--color-on-surface-variant);
      margin: 0;
    }

    @media (max-width: 1024px) {
      .pathway__track {
        justify-content: flex-start;
      }

      .pathway__stage {
        min-width: 160px;
      }

      .pathway__node {
        width: 60px;
        height: 60px;
      }

      .pathway__node .pi {
        font-size: 1.1rem;
      }

      .pathway__connector {
        top: 30px;
        left: calc(50% + 32px);
        right: calc(-50% + 32px);
      }
    }

    @media (max-width: 768px) {
      .pathway__track {
        flex-direction: column;
        align-items: center;
        gap: 32px;
      }

      .pathway__stage {
        flex-direction: row;
        gap: 16px;
        min-width: auto;
        max-width: 100%;
        width: 100%;
      }

      .pathway__node {
        width: 56px;
        height: 56px;
        flex-shrink: 0;
      }

      .pathway__connector {
        display: none;
      }

      .pathway__stage-content {
        text-align: left;
        margin-top: 0;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PathwayComponent {
  protected readonly steps = PATHWAY_STEPS;
}
