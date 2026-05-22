import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  template: `
    @if (visible()) {
      <div class="spinner-overlay">
        <div class="spinner"></div>
      </div>
    }
  `,
  styles: [`
    .spinner-overlay {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(7, 27, 52, 0.6);
      backdrop-filter: blur(4px);
    }

    .spinner {
      width: 48px;
      height: 48px;
      border: 4px solid rgba(255, 255, 255, 0.15);
      border-top-color: var(--color-electric-blue, #00AEEF);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  readonly visible = input(false);
}
