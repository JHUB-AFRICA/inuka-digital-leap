import { Directive, ElementRef, Input, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  @Input() appScrollReveal: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' = 'fade-up';
  @Input() delay = 0;
  @Input() threshold = 0.15;

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const el = this.el.nativeElement;
    el.style.opacity = '0';
    el.style.transition = `all 700ms cubic-bezier(0.16, 1, 0.3, 1) ${this.delay}ms`;

    switch (this.appScrollReveal) {
      case 'fade-up':
        el.style.transform = 'translateY(40px)';
        break;
      case 'fade-left':
        el.style.transform = 'translateX(-40px)';
        break;
      case 'fade-right':
        el.style.transform = 'translateX(40px)';
        break;
      case 'scale':
        el.style.transform = 'scale(0.95)';
        break;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0) translateX(0) scale(1)';
          this.observer?.unobserve(el);
        }
      },
      { threshold: this.threshold, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
