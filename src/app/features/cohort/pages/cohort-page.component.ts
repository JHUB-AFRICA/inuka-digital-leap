import { Component, ChangeDetectionStrategy, signal, computed, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';
import { CohortService } from '../../../core/services/cohort.service';
import { Fellow } from '../../../core/models/cohort.model';

@Component({
  selector: 'app-cohort-page',
  standalone: true,
  imports: [ScrollRevealDirective, RouterLink],
  template: `
    <main>
      <section class="cohort-hero">
        <div class="cohort-hero__bg" aria-hidden="true">
          <div class="cohort-hero__grid"></div>
          <div class="cohort-hero__glow cohort-hero__glow--1"></div>
          <div class="cohort-hero__glow cohort-hero__glow--2"></div>
        </div>
        <div class="container">
          <div class="cohort-hero__content">
            <span class="cohort-hero__badge">Cohort</span>
            <h1 class="cohort-hero__title">Meet Our Pioneer Trainees</h1>
          </div>
        </div>
      </section>

      <section class="cohort-grid section-padding">
        <div class="container">
          <div class="cohort-grid__header" appScrollReveal="fade-up" [delay]="0">
            <h2 class="cohort-grid__title">Full Roster</h2>
            <p class="cohort-grid__subtitle">
              Each trainee brings unique talents and perspectives to the programme, united by a
              shared commitment to building Kenya's digital future.
            </p>
          </div>

          <div class="cohort-grid__search" appScrollReveal="fade-up" [delay]="50">
            <span class="pi pi-search cohort-grid__search-icon" aria-hidden="true"></span>
            <input
              type="text"
              class="cohort-grid__search-input"
              placeholder="Search by name, county, or specialization..."
              [value]="searchTerm()"
              (input)="onSearch($event)"
            />
          </div>

          @if (loading()) {
            <div class="cohort-grid__loading">
              <span class="pi pi-spin pi-spinner" style="font-size:2rem;"></span>
              <p>Loading cohort members...</p>
            </div>
          }

          <div class="cohort-grid__list">
            @for (fellow of filteredFellows(); track fellow.id; let i = $index) {
              <a [routerLink]="['/cohort', fellow.id]" class="cohort-grid__card" appScrollReveal="fade-up" [delay]="(i % 4) * 80">
                <div class="cohort-grid__card-portrait">
                  @if (fellow.photo) {
                    <img [src]="fellow.photo" [alt]="fellow.full_name" class="cohort-grid__card-photo" />
                  } @else {
                    <span class="cohort-grid__card-avatar">
                      {{ fellow.full_name.charAt(0) }}{{ fellow.full_name.split(' ')[1]?.charAt(0) }}
                    </span>
                  }
                </div>
                <div class="cohort-grid__card-body">
                  <h3 class="cohort-grid__card-name">{{ fellow.full_name }}</h3>
                  <div class="cohort-grid__card-tags">
                    <span class="cohort-grid__card-tag cohort-grid__card-tag--county">{{ fellow.county }}</span>
                    <span class="cohort-grid__card-tag cohort-grid__card-tag--focus">{{ fellow.specialization }}</span>
                  </div>
                  @if (fellow.certifications && fellow.certifications.length) {
                    <span class="cohort-grid__card-certs">
                      <span class="pi pi-verified" aria-hidden="true"></span>
                      {{ fellow.certifications.length }} certification{{ fellow.certifications.length > 1 ? 's' : '' }}
                    </span>
                  }
                  @if (fellow.quote) {
                    <blockquote class="cohort-grid__card-quote">
                      <p>"{{ fellow.quote }}"</p>
                    </blockquote>
                  }
                  <span class="cohort-grid__card-link">
                    View Profile <span class="pi pi-arrow-right" aria-hidden="true"></span>
                  </span>
                </div>
              </a>
            }
          </div>

          @if (!loading() && filteredFellows().length === 0) {
            <div class="cohort-grid__empty">
              <p>No trainees found matching "{{ searchTerm() }}".</p>
            </div>
          }
        </div>
      </section>
    </main>
  `,
  styles: [
    `
      .cohort-hero {
        position: relative;
        min-height: 50vh;
        display: flex;
        align-items: center;
        overflow: hidden;
        background: url('/assets/fibre-ops.png') center / cover no-repeat;
        padding-top: var(--navbar-height);
      }
      .cohort-hero__bg { position: absolute; inset: 0; z-index: 0; }
      .cohort-hero__grid {
        position: absolute; inset: 0;
        background-image: linear-gradient(rgba(237, 27, 36, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(237, 27, 36, 0.04) 1px, transparent 1px);
        background-size: 60px 60px;
      }
      .cohort-hero__glow { position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none; }
      .cohort-hero__glow--1 { width: 500px; height: 500px; background: rgba(237, 27, 36, 0.1); top: -200px; right: -100px; }
      .cohort-hero__glow--2 { width: 400px; height: 400px; background: rgba(22, 196, 127, 0.06); bottom: -150px; left: -100px; }
      .cohort-hero__content { position: relative; z-index: 1; max-width: 700px; animation: fadeInUp 0.8s ease-out both; }
      @keyframes fadeInUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
      .cohort-hero__badge {
        display: inline-flex; align-items: center; font: var(--label-caps); letter-spacing: 0.15em;
        color: var(--color-electric-blue); border: 1px solid rgba(237, 27, 36, 0.3);
        padding: 6px 16px; border-radius: var(--rounded-md); background: rgba(237, 27, 36, 0.08); margin-bottom: 20px;
      }
      .cohort-hero__title {
        font-family: var(--font-heading); font-size: 3.2rem; font-weight: 900;
        line-height: 1.08; letter-spacing: -0.03em; color: white; margin: 0 0 16px;
      }
      .cohort-grid { background: var(--color-surface); }
      .cohort-grid__header { text-align: center; max-width: 640px; margin: 0 auto 32px; }
      .cohort-grid__title { font-family: var(--font-heading); font-size: 1.75rem; font-weight: 800; color: var(--color-deep-navy); margin: 0 0 12px; }
      .cohort-grid__subtitle { font-family: var(--font-body); font-size: 1rem; line-height: 1.7; color: var(--color-on-surface-variant); margin: 0; }

      .cohort-grid__search {
        position: relative; max-width: 480px; margin: 0 auto 40px;
      }
      .cohort-grid__search-icon {
        position: absolute; left: 18px; top: 50%; transform: translateY(-50%);
        color: var(--color-on-surface-variant); font-size: 0.95rem;
      }
      .cohort-grid__search-input {
        width: 100%; padding: 13px 18px 13px 44px; border-radius: var(--rounded-full);
        border: 1px solid var(--color-outline-variant); background: var(--color-surface-container-lowest);
        font-family: var(--font-body); font-size: 0.9rem; color: var(--color-deep-navy);
        transition: border-color var(--transition-fast);
      }
      .cohort-grid__search-input:focus { outline: none; border-color: var(--color-electric-blue); }

      .cohort-grid__loading, .cohort-grid__empty {
        text-align: center; padding: 60px; color: var(--color-on-surface-variant); font-family: var(--font-body);
      }
      .cohort-grid__list { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
      .cohort-grid__card {
        display: flex; flex-direction: column; gap: 20px; padding: 28px;
        background: var(--color-surface-container-lowest); border: 1px solid var(--color-outline-variant);
        border-radius: var(--rounded-xl); transition: all var(--transition-base);
        text-decoration: none; cursor: pointer;
      }
      .cohort-grid__card:hover { border-color: var(--color-electric-blue); box-shadow: var(--shadow-glow-blue); transform: translateY(-4px); }
      .cohort-grid__card-portrait { flex-shrink: 0; }
      .cohort-grid__card-photo { width: 64px; height: 64px; border-radius: var(--rounded-xl); object-fit: cover; }
      .cohort-grid__card-avatar {
        display: flex; align-items: center; justify-content: center; width: 64px; height: 64px; border-radius: var(--rounded-xl);
        background: linear-gradient(135deg, var(--color-electric-blue), var(--color-emerald-green));
        font-family: var(--font-heading); font-size: 1.2rem; font-weight: 800; color: white;
      }
      .cohort-grid__card-name { font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700; color: var(--color-deep-navy); margin: 0 0 8px; }
      .cohort-grid__card-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 10px; }
      .cohort-grid__card-tag {
        display: inline-flex; font-size: 0.7rem; font-weight: 600; padding: 3px 10px;
        border-radius: var(--rounded-full); letter-spacing: 0.02em;
      }
      .cohort-grid__card-tag--county { background: rgba(237, 27, 36, 0.08); color: var(--color-electric-blue); }
      .cohort-grid__card-tag--focus { background: rgba(22, 196, 127, 0.08); color: var(--color-emerald-green); }
      .cohort-grid__card-certs {
        display: inline-flex; align-items: center; gap: 5px; font-size: 0.72rem; font-weight: 600;
        color: var(--color-gold); margin-bottom: 10px;
      }
      .cohort-grid__card-quote { margin: 0 0 12px; padding: 0; border: none; }
      .cohort-grid__card-quote p {
        font-family: var(--font-body); font-size: 0.85rem; line-height: 1.65; color: var(--color-on-surface-variant);
        margin: 0; font-style: italic;
      }
      .cohort-grid__card-link {
        display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-body);
        font-size: 0.82rem; font-weight: 600; color: var(--color-electric-blue); margin-top: auto;
      }

      @media (max-width: 1200px) { .cohort-grid__list { grid-template-columns: repeat(3, 1fr); } }
      @media (max-width: 1024px) { .cohort-hero__title { font-size: 2.5rem; } .cohort-grid__list { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 768px) {
        .cohort-hero { min-height: 40vh; }
        .cohort-hero__title { font-size: 1.75rem; }
        .cohort-grid__list { grid-template-columns: 1fr; }
        .cohort-grid__card { padding: 24px; }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CohortPageComponent implements OnInit {
  private readonly cohortService = inject(CohortService);

  protected readonly fellows = signal<Fellow[]>([]);
  protected readonly loading = signal(true);
  protected readonly searchTerm = signal('');

  protected readonly filteredFellows = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) return this.fellows();
    return this.fellows().filter(f =>
      f.full_name.toLowerCase().includes(term) ||
      f.county.toLowerCase().includes(term) ||
      f.specialization.toLowerCase().includes(term)
    );
  });

  protected onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm.set(value);
  }

  ngOnInit(): void {
    this.cohortService.getActiveCohort().subscribe({
      next: (cohort) => {
        if (!cohort) {
          this.loading.set(false);
          return;
        }
        this.cohortService.getFellowsByCohort(cohort.id).subscribe({
          next: (data) => {
            this.fellows.set(data);
            this.loading.set(false);
          },
          error: () => this.loading.set(false)
        });
      },
      error: () => this.loading.set(false)
    });
  }
}
