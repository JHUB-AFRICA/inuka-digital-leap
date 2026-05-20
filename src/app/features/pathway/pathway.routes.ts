import { Routes } from '@angular/router';

export const PATHWAY_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/pathway-page.component').then((m) => m.PathwayPageComponent),
  },
];
