import { Routes } from '@angular/router';

export const ACTIVITIES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/activities-page.component').then((m) => m.ActivitiesPageComponent),
  },
  {
    path: ':slug',
    loadComponent: () =>
      import('./pages/activity-detail.component').then((m) => m.ActivityDetailComponent),
  },
];
