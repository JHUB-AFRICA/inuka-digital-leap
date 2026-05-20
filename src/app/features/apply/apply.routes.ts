import { Routes } from '@angular/router';

export const APPLY_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/apply-page.component').then((m) => m.ApplyPageComponent),
  },
];
