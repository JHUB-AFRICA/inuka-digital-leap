import { Directive, ElementRef, Input, AfterViewInit, OnDestroy, output } from '@angular/core';

@Directive({
  selector: '[appCounterAnimation]',
  standalone: true,
})
export class CounterAnimationDirective implements AfterViewInit, OnDestroy {
  @Input({ alias: 'appCounterAnimation', required: true }) targetValue = 0;
  @Input() duration = 2000;
  @Input() threshold = 0.5;

  readonly complete = output<void>();

  private observer: IntersectionObserver | null = null;
  private animationId: number | null = null;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.animate();
          this.observer?.unobserve(this.el.nativeElement);
        }
      },
      { threshold: this.threshold }
    );
    this.observer.observe(this.el.nativeElement);
  }

  private animate(): void {
    const el = this.el.nativeElement;
    const start = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / this.duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * this.targetValue);
      el.textContent = current.toString();

      if (progress < 1) {
        this.animationId = requestAnimationFrame(step);
      } else {
        el.textContent = this.targetValue.toString();
        this.complete.emit();
      }
    };

    this.animationId = requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
    }
  }
}
