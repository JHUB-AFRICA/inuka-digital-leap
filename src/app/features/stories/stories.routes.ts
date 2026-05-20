import { Routes } from '@angular/router';

export const STORIES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/stories-page.component').then((m) => m.StoriesPageComponent),
  },
  {
    path: ':slug',
    loadComponent: () =>
      import('./pages/story-detail.component').then((m) => m.StoryDetailComponent),
  },
];
