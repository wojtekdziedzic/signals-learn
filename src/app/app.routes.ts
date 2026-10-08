import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home.page').then((m) => m.HomePage) },
  {
    path: '01-basics',
    loadComponent: () => import('./lessons/01-basics/students-list').then((m) => m.StudentsList),
  },
  {
    path: '02-templates',
    loadComponent: () => import('./lessons/02-templates/zoneless-lab').then((m) => m.ZonelessLab),
  },
  {
    path: '03-component-api',
    loadComponent: () =>
      import('./lessons/03-component-api/students-page').then((m) => m.StudentsPage),
  },
  {
    path: '04-queries',
    loadComponent: () => import('./lessons/04-queries/queries-page').then((m) => m.QueriesPage),
  },
  {
    path: '05-effects',
    loadComponent: () => import('./lessons/05-effects/effects-lab').then((m) => m.EffectsLab),
  },
  {
    path: '06-linked-signal',
    loadComponent: () =>
      import('./lessons/06-linked-signal/linked-signal-lab').then((m) => m.LinkedSignalLab),
  },
  {
    path: '07-resource',
    loadComponent: () =>
      import('./lessons/07-resource/students-resource-page').then((m) => m.StudentsResourcePage),
  },
  {
    path: '08-rxjs-interop',
    loadComponent: () =>
      import('./lessons/08-rxjs-interop/rxjs-interop-page').then((m) => m.RxjsInteropPage),
  },
  {
    path: '09-store',
    loadComponent: () => import('./lessons/09-store/store-page').then((m) => m.StorePage),
  },
  {
    path: '10-signal-forms',
    loadComponent: () =>
      import('./lessons/10-signal-forms/lesson-form-page').then((m) => m.LessonFormPage),
  },
  { path: '**', redirectTo: '' },
];
