import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-glass-card',
  standalone: true,
  template: `
    <div
      class="glass-card"
      [class.glass-card--hover]="hover"
      [class.glass-card--dark]="dark"
      [style.padding]="padding"
    >
      <ng-content />
    </div>
  `,
  styles: [`
    .glass-card {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: var(--rounded-xl);
      transition: all var(--transition-base);

      &--hover:hover {
        border-color: var(--color-electric-blue);
        box-shadow: var(--shadow-glow-blue);
      }

      &--dark {
        background: rgba(7, 27, 52, 0.7);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.08);
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlassCardComponent {
  @Input() hover = false;
  @Input() dark = false;
  @Input() padding = '32px';
}
