import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { StatisticsComponent } from '../../components/statistics/statistics.component';
import { WhyMattersComponent } from '../../components/why-matters/why-matters.component';
import { AboutComponent } from '../../components/about/about.component';
import { PathwayComponent } from '../../components/pathway/pathway.component';
import { LearningAreasComponent } from '../../components/learning-areas/learning-areas.component';
import { TraineesComponent } from '../../components/trainees/trainees.component';
import { ActivitiesComponent } from '../../components/activities/activities.component';
import { StoriesComponent } from '../../components/stories/stories.component';
import { ImpactComponent } from '../../components/impact/impact.component';
import { PartnersComponent } from '../../components/partners/partners.component';
import { FinalCtaComponent } from '../../components/final-cta/final-cta.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroComponent,
    StatisticsComponent,
    WhyMattersComponent,
    AboutComponent,
    PathwayComponent,
    LearningAreasComponent,
    TraineesComponent,
    ActivitiesComponent,
    StoriesComponent,
    ImpactComponent,
    PartnersComponent,
    FinalCtaComponent,
  ],
  template: `
    <main>
      <app-hero />
      <app-statistics />
      <app-why-matters />
      <app-about />
      <app-pathway />
      <app-learning-areas />
      <app-trainees />
      <app-activities />
      <app-stories />
      <app-impact />
      <app-partners />
      <app-final-cta />
    </main>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
