import { Component, ChangeDetectionStrategy } from '@angular/core';
import { StatCardComponent } from '../../../../shared/components/stat-card/stat-card.component';
import { STATISTICS } from '../../../../core/constants';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [StatCardComponent],
  template: `
    <section class="statistics-section">
      <div class="container">
        <div class="statistics-grid">
          @for (stat of stats; track stat.label; let i = $index) {
            <app-stat-card
              [value]="stat.value"
              [suffix]="stat.suffix"
              [label]="stat.label"
              [icon]="stat.icon"
              [delay]="i * 100"
            />
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .statistics-section {
      background: var(--color-surface-container);
      padding: 48px 0;
    }

    .statistics-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 16px;
    }

    @media (max-width: 1024px) {
      .statistics-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: 768px) {
      .statistics-section {
        padding: 32px 0;
      }
      .statistics-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsComponent {
  protected readonly stats = STATISTICS;
}
