import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.routes').then((m) => m.HOME_ROUTES),
    data: { title: 'Home', description: "Building Kenya's Digital Infrastructure Talent Pipeline through intensive training, mentorship, and employment pathways." },
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.routes').then((m) => m.ABOUT_ROUTES),
    data: { title: 'About', description: 'Learn about the Inuka Digital Leap programme, our mission to bridge Kenya\'s digital infrastructure skills gap, and our partnership model.' },
  },
  {
    path: 'pathway',
    loadChildren: () =>
      import('./features/pathway/pathway.routes').then((m) => m.PATHWAY_ROUTES),
    data: { title: 'Program Pathway', description: 'Explore the 6-month Inuka Digital Leap training pathway covering fibre optics, network infrastructure, broadband deployment, and cloud engineering.' },
  },
  {
    path: 'cohort',
    loadChildren: () =>
      import('./features/cohort/cohort.routes').then((m) => m.COHORT_ROUTES),
    data: { title: 'Cohort', description: 'Meet the inaugural cohort of 15 trainees selected for the Inuka Digital Leap programme.' },
  },
  {
    path: 'stories',
    loadChildren: () =>
      import('./features/stories/stories.routes').then((m) => m.STORIES_ROUTES),
    data: { title: 'Stories & Updates', description: 'Insights, milestones, and updates from the Inuka Digital Leap programme.' },
  },
  {
    path: 'activities',
    loadChildren: () =>
      import('./features/activities/activities.routes').then((m) => m.ACTIVITIES_ROUTES),
    data: { title: 'Activities', description: 'Hands-on training activities, lab sessions, and field visits in the Inuka Digital Leap programme.' },
  },
  {
    path: 'partners',
    loadChildren: () =>
      import('./features/partners/partners.routes').then((m) => m.PARTNERS_ROUTES),
    data: { title: 'Partners', description: 'Meet the partner organisations making the Inuka Digital Leap programme possible.' },
  },
  {
    path: 'apply',
    loadChildren: () =>
      import('./features/apply/apply.routes').then((m) => m.APPLY_ROUTES),
    data: { title: 'Apply', description: 'Applications for Cohort 1 are closed. Cohort 2 details will be announced soon.' },
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./features/contact/contact.routes').then((m) => m.CONTACT_ROUTES),
    data: { title: 'Contact', description: 'Get in touch with the Inuka Digital Leap team for inquiries, partnerships, or support.' },
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
