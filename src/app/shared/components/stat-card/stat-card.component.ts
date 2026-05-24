import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { CounterAnimationDirective } from '../../directives/counter-animation.directive';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [ScrollRevealDirective, CounterAnimationDirective],
  template: `
    <div class="stat-card" appScrollReveal="fade-up" [delay]="delay">
      @if (icon) {
        <div class="stat-card__icon-wrapper">
          <span [attr.class]="'stat-card__icon pi ' + icon" aria-hidden="true"></span>
        </div>
      }
      <div class="stat-card__value">
        <span class="stat-card__number" [appCounterAnimation]="value" [duration]="2000"></span>
        @if (suffix) {
          <span class="stat-card__suffix">{{ suffix }}</span>
        }
      </div>
      <p class="stat-card__label">{{ label }}</p>
    </div>
  `,
  styles: [`
    .stat-card {
      text-align: center;
      padding: 32px 20px 28px;
      background: var(--color-surface-container-lowest);
      border-radius: var(--rounded-xl);
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      overflow: hidden;
    }

    .stat-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--color-electric-blue), var(--color-emerald-green));
      opacity: 0;
      transition: opacity var(--transition-base);
    }

    .stat-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
    }

    .stat-card:hover::before {
      opacity: 1;
    }

    .stat-card__icon-wrapper {
      width: 52px;
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, rgba(237, 27, 36, 0.1), rgba(237, 27, 36, 0.04));
      border-radius: var(--rounded-lg);
      margin: 0 auto 16px;
      transition: all var(--transition-base);
    }

    .stat-card:hover .stat-card__icon-wrapper {
      background: linear-gradient(135deg, rgba(237, 27, 36, 0.18), rgba(237, 27, 36, 0.08));
      transform: scale(1.05);
    }

    .stat-card__icon {
      font-size: 1.3rem;
      color: var(--color-electric-blue);
    }

    .stat-card__value {
      font-family: var(--font-heading);
      font-size: 2.25rem;
      font-weight: 800;
      color: var(--color-deep-navy);
      line-height: 1;
      margin-bottom: 6px;
    }

    .stat-card__number {
      display: inline;
    }

    .stat-card__suffix {
      font-family: var(--font-heading);
      font-weight: 800;
      color: var(--color-electric-blue);
      font-size: 1.1rem;
    }

    .stat-card__label {
      font-family: var(--font-body);
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--color-on-surface-variant);
      margin: 0;
      line-height: 1.4;
    }

    @media (max-width: 768px) {
      .stat-card {
        padding: 24px 14px 20px;
      }

      .stat-card__value {
        font-size: 1.65rem;
      }

      .stat-card__icon-wrapper {
        width: 44px;
        height: 44px;
        margin-bottom: 12px;
      }

      .stat-card__icon {
        font-size: 1.1rem;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatCardComponent {
  @Input({ required: true }) value!: number;
  @Input() suffix = '';
  @Input({ required: true }) label!: string;
  @Input() icon?: string;
  @Input() delay = 0;
}
