import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.routes').then((m) => m.HOME_ROUTES),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.routes').then((m) => m.ABOUT_ROUTES),
  },
  {
    path: 'pathway',
    loadChildren: () =>
      import('./features/pathway/pathway.routes').then((m) => m.PATHWAY_ROUTES),
  },
  {
    path: 'cohort',
    loadChildren: () =>
      import('./features/cohort/cohort.routes').then((m) => m.COHORT_ROUTES),
  },
  {
    path: 'stories',
    loadChildren: () =>
      import('./features/stories/stories.routes').then((m) => m.STORIES_ROUTES),
  },
  {
    path: 'activities',
    loadChildren: () =>
      import('./features/activities/activities.routes').then((m) => m.ACTIVITIES_ROUTES),
  },
  {
    path: 'partners',
    loadChildren: () =>
      import('./features/partners/partners.routes').then((m) => m.PARTNERS_ROUTES),
  },
  {
    path: 'apply',
    loadChildren: () =>
      import('./features/apply/apply.routes').then((m) => m.APPLY_ROUTES),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./features/contact/contact.routes').then((m) => m.CONTACT_ROUTES),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
