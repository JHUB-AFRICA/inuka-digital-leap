import { Component, ChangeDetectionStrategy, inject, signal, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { CohortService } from '../../../../core/services/cohort.service';
import { Fellow } from '../../../../core/models/cohort.model';

@Component({
  selector: 'app-fellow-profile',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective, DatePipe],
  template: `
    @if (loading()) {
      <div class="profile-loading">
        <span class="pi pi-spin pi-spinner" style="font-size:2rem;"></span>
        <p>Loading profile...</p>
      </div>
    }

    @if (fellow(); as f) {
      <section class="profile-hero">
        <div class="container" appScrollReveal="fade-up">
          <a routerLink="/cohort" class="profile-hero__back">
            <span class="pi pi-arrow-left" aria-hidden="true"></span>
            Back to cohort
          </a>

          <div class="profile-hero__main">
            <div class="profile-hero__portrait">
              @if (f.photo) {
                <img [src]="f.photo" [alt]="f.full_name" class="profile-hero__photo" />
              } @else {
                <span class="profile-hero__avatar">
                  {{ f.full_name.charAt(0) }}{{ f.full_name.split(' ')[1]?.charAt(0) }}
                </span>
              }
            </div>
            <div class="profile-hero__info">
              @if (f.cohort_name) {
                <span class="profile-hero__cohort">{{ f.cohort_name }}</span>
              }
              <h1 class="profile-hero__name">{{ f.full_name }}</h1>
              <div class="profile-hero__tags">
                <span class="profile-hero__tag profile-hero__tag--county">
                  <span class="pi pi-map-marker" aria-hidden="true"></span> {{ f.county }}
                </span>
                <span class="profile-hero__tag profile-hero__tag--specialization">
                  <span class="pi pi-bolt" aria-hidden="true"></span> {{ f.specialization }}
                </span>
                <span class="profile-hero__tag profile-hero__tag--status">
                  {{ f.placement_status.replace('_',' ') }}
                </span>
              </div>
              @if (f.portfolio_url) {
                <a [href]="f.portfolio_url" target="_blank" rel="noopener noreferrer" class="profile-hero__portfolio-link">
                  View Portfolio <span class="pi pi-external-link" aria-hidden="true"></span>
                </a>
              }
            </div>
          </div>
        </div>
      </section>

      <section class="profile-content">
        <div class="container">
          <div class="profile-content__grid">

            <div class="profile-content__main">
              @if (f.quote) {
                <blockquote class="profile-quote">"{{ f.quote }}"</blockquote>
              }

              @if (f.bio) {
                <div class="profile-section">
                  <h2 class="profile-section__title">About</h2>
                  <p class="profile-section__text">{{ f.bio }}</p>
                </div>
              }

              <div class="profile-section">
                <h2 class="profile-section__title">Background</h2>
                <div class="profile-facts">
                  <div class="profile-fact">
                    <span class="profile-fact__label">Education Background</span>
                    <span class="profile-fact__value">{{ f.education_background || '—' }}</span>
                  </div>
                  <div class="profile-fact">
                    <span class="profile-fact__label">Technical Interest</span>
                    <span class="profile-fact__value">{{ f.technical_interest || '—' }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="profile-content__side">
              <h2 class="profile-section__title">Certifications</h2>
              @if (f.certifications && f.certifications.length) {
                <div class="cert-list">
                  @for (cert of f.certifications; track cert.id) {
                    <div class="cert-card">
                      @if (cert.badge) {
                        <img [src]="cert.badge" [alt]="cert.name" class="cert-card__badge" />
                      } @else {
                        <span class="cert-card__icon pi pi-verified" aria-hidden="true"></span>
                      }
                      <div class="cert-card__body">
                        <h3 class="cert-card__name">{{ cert.name }}</h3>
                        <p class="cert-card__issuer">{{ cert.issuing_body }}</p>
                        @if (cert.awarded_date) {
                          <span class="cert-card__date">Awarded {{ cert.awarded_date | date:'MMMM yyyy' }}</span>
                        }
                      </div>
                    </div>
                  }
                </div>
              } @else {
                <p class="cert-empty">No certifications recorded yet.</p>
              }
            </div>

          </div>
        </div>
      </section>
    } @else if (!loading()) {
      <section class="profile-hero">
        <div class="container" style="text-align:center;">
          <h1 class="profile-hero__name">Profile Not Found</h1>
          <p style="color: rgba(255,255,255,0.65); margin-bottom: 24px;">
            This fellow's profile doesn't exist or has been removed.
          </p>
          <a routerLink="/cohort" class="profile-hero__back" style="display:inline-flex;">
            <span class="pi pi-arrow-left" aria-hidden="true"></span>
            Back to cohort
          </a>
        </div>
      </section>
    }
  `,
  styles: [`
    .profile-loading { text-align: center; padding: 120px 20px; color: var(--color-on-surface-variant); font-family: var(--font-body); }
    .profile-hero {
      background: linear-gradient(135deg, var(--color-deep-navy) 0%, #0a2a4a 100%);
      padding: 120px 0 60px; position: relative; overflow: hidden;
    }
    .profile-hero::before {
      content: ''; position: absolute; inset: 0;
      background: radial-gradient(ellipse at 30% 50%, rgba(237,27,36,0.12) 0%, transparent 60%);
      pointer-events: none;
    }
    .profile-hero__back {
      display: inline-flex; align-items: center; gap: 6px;
      font-family: var(--font-body); font-size: 0.85rem; color: rgba(255,255,255,0.6);
      margin-bottom: 32px; transition: color var(--transition-fast); position: relative; z-index: 1;
    }
    .profile-hero__back:hover { color: #fff; }
    .profile-hero__main { display: flex; align-items: center; gap: 32px; position: relative; z-index: 1; flex-wrap: wrap; }
    .profile-hero__portrait { flex-shrink: 0; }
    .profile-hero__photo { width: 140px; height: 140px; border-radius: var(--rounded-2xl); object-fit: cover; border: 3px solid rgba(255,255,255,0.15); }
    .profile-hero__avatar {
      display: flex; align-items: center; justify-content: center;
      width: 140px; height: 140px; border-radius: var(--rounded-2xl);
      background: linear-gradient(135deg, var(--color-electric-blue), var(--color-emerald-green));
      font-family: var(--font-heading); font-size: 2.5rem; font-weight: 800; color: white;
    }
    .profile-hero__info { flex: 1; min-width: 260px; }
    .profile-hero__cohort {
      display: inline-block; font: var(--label-caps); color: var(--color-gold);
      background: rgba(212,175,55,0.12); padding: 4px 14px; border-radius: var(--rounded-full); margin-bottom: 12px;
    }
    .profile-hero__name { font-family: var(--font-heading); font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 800; color: #fff; margin: 0 0 14px; }
    .profile-hero__tags { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 16px; }
    .profile-hero__tag {
      display: inline-flex; align-items: center; gap: 6px; font-size: 0.8rem; font-weight: 600;
      padding: 5px 14px; border-radius: var(--rounded-full); color: white;
    }
    .profile-hero__tag--county { background: rgba(237,27,36,0.18); }
    .profile-hero__tag--specialization { background: rgba(22,196,127,0.18); }
    .profile-hero__tag--status { background: rgba(255,255,255,0.12); text-transform: capitalize; }
    .profile-hero__portfolio-link {
      display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-body); font-size: 0.9rem; font-weight: 600;
      color: var(--color-electric-blue); background: white; padding: 10px 22px; border-radius: var(--rounded-full);
      text-decoration: none; transition: all var(--transition-base);
    }
    .profile-hero__portfolio-link:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.2); }

    .profile-content { background: var(--color-surface); padding: 56px 0 100px; }
    .profile-content__grid { display: grid; grid-template-columns: 2fr 1fr; gap: 48px; }
    .profile-quote {
      font-family: var(--font-body); font-style: italic; font-size: 1.15rem; line-height: 1.7;
      color: var(--color-deep-navy); border-left: 3px solid var(--color-electric-blue);
      padding-left: 20px; margin: 0 0 32px;
    }
    .profile-section { margin-bottom: 32px; }
    .profile-section__title {
      font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700;
      color: var(--color-deep-navy); margin: 0 0 14px;
    }
    .profile-section__text { font-family: var(--font-body); font-size: 0.95rem; line-height: 1.75; color: var(--color-on-surface-variant); margin: 0; }
    .profile-facts { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .profile-fact { display: flex; flex-direction: column; gap: 4px; }
    .profile-fact__label { font: var(--label-caps); font-size: 0.7rem; color: var(--color-on-surface-variant); }
    .profile-fact__value { font-family: var(--font-body); font-size: 0.9rem; font-weight: 600; color: var(--color-deep-navy); }

    .cert-list { display: flex; flex-direction: column; gap: 14px; }
    .cert-card {
      display: flex; gap: 14px; padding: 16px; background: var(--color-surface-container-lowest);
      border: 1px solid var(--color-outline-variant); border-radius: var(--rounded-xl);
    }
    .cert-card__badge { width: 48px; height: 48px; object-fit: contain; flex-shrink: 0; }
    .cert-card__icon { font-size: 1.8rem; color: var(--color-gold); flex-shrink: 0; }
    .cert-card__name { font-family: var(--font-heading); font-size: 0.95rem; font-weight: 700; color: var(--color-deep-navy); margin: 0 0 4px; }
    .cert-card__issuer { font-family: var(--font-body); font-size: 0.82rem; color: var(--color-on-surface-variant); margin: 0 0 4px; }
    .cert-card__date { font-family: var(--font-body); font-size: 0.75rem; color: var(--color-on-surface-variant); }
    .cert-empty { font-family: var(--font-body); font-size: 0.9rem; color: var(--color-on-surface-variant); }

    @media (max-width: 900px) {
      .profile-content__grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 768px) {
      .profile-hero { padding: 100px 0 40px; }
      .profile-hero__main { flex-direction: column; align-items: flex-start; }
      .profile-facts { grid-template-columns: 1fr; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FellowProfileComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly cohortService = inject(CohortService);

  protected readonly fellow = signal<Fellow | null>(null);
  protected readonly loading = signal(true);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.loading.set(false);
      return;
    }
    this.cohortService.getFellow(id).subscribe({
      next: (data) => { this.fellow.set(data); this.loading.set(false); },
      error: () => this.loading.set(false)
    });
  }
}
