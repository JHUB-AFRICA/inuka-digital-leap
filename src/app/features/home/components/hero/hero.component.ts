import { Component, signal, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { SITE_CONFIG } from '../../../../core/constants';

interface Slide {
  topic: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit, OnDestroy {
  protected readonly tagline = SITE_CONFIG.tagline;
  protected readonly name = SITE_CONFIG.name;
  protected readonly currentSlide = signal(0);
  private intervalId: ReturnType<typeof setInterval> | null = null;

  protected readonly slides: Slide[] = [
    {
      topic: 'Optical Fibre Fundamentals',
      description: 'Hands-on training in fibre optic theory, cable types, and light propagation principles.',
      image: 'url(assets/optical.jpg)',
    },
    {
      topic: 'Network Architecture',
      description: 'Lab sessions on routing, switching, and broadband network design.',
      image: 'url(assets/networking.jpg)',
    },
    {
      topic: 'Broadband Systems',
      description: 'Deploying and configuring fixed broadband infrastructure for last-mile connectivity.',
      image: 'url(assets/network-broadband.jpg)',
    },
    {
      topic: 'Installation Workflows',
      description: 'Cable blowing, fusion splicing, connectorisation, and field installation best practices.',
      image: 'url(assets/compare-fibre-.jpg)',
    },
    {
      topic: 'Testing & Troubleshooting',
      description: 'OTDR testing, power meter measurements, fault diagnosis, and service restoration.',
      image: 'url(assets/optical.jpg)',
    },
  ];

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentSlide.update((i) => (i + 1) % this.slides.length);
    }, 4000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  protected goToSlide(index: number): void {
    this.currentSlide.set(index);
  }
}
