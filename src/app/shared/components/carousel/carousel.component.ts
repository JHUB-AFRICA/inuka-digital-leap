import { Component, viewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  template: `
    <div class="carousel">
      <button
        class="carousel__arrow carousel__arrow--left"
        (click)="scrollLeft()"
        aria-label="Scroll left"
        type="button"
      >
        <span class="pi pi-chevron-left" aria-hidden="true"></span>
      </button>

      <div class="carousel__track" #track>
        <ng-content />
      </div>

      <button
        class="carousel__arrow carousel__arrow--right"
        (click)="scrollRight()"
        aria-label="Scroll right"
        type="button"
      >
        <span class="pi pi-chevron-right" aria-hidden="true"></span>
      </button>
    </div>
  `,
  styles: [`
    .carousel {
      position: relative;
    }

    .carousel__track {
      display: flex;
      gap: 16px;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      padding: 4px 0;
    }

    .carousel__track::-webkit-scrollbar {
      display: none;
    }

    .carousel__track ::ng-deep > * {
      scroll-snap-align: start;
      flex: 0 0 280px;
      min-width: 0;
    }

    .carousel__arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 5;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;
      background: white;
      color: var(--color-deep-navy);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
      cursor: pointer;
      display: none;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      transition: all var(--transition-fast);

      &:hover {
        background: var(--color-electric-blue);
        color: white;
        box-shadow: var(--shadow-glow-blue);
      }

      &--left {
        left: -16px;
      }

      &--right {
        right: -16px;
      }
    }

    @media (max-width: 768px) {
      .carousel__track ::ng-deep > * {
        flex: 0 0 75vw;
        max-width: 300px;
      }

      .carousel__arrow {
        display: flex;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
  readonly trackRef = viewChild<ElementRef<HTMLElement>>('track');

  protected scrollLeft(): void {
    const track = this.trackRef()?.nativeElement;
    if (!track) return;
    const child = track.children[0] as HTMLElement | undefined;
    const scrollAmount = child ? child.offsetWidth + 16 : 300;
    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }

  protected scrollRight(): void {
    const track = this.trackRef()?.nativeElement;
    if (!track) return;
    const child = track.children[0] as HTMLElement | undefined;
    const scrollAmount = child ? child.offsetWidth + 16 : 300;
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}
