import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home').then(m => m.Home)
  },
  {
    path: 'browse',
    loadComponent: () =>
      import('./features/browse/browse').then(m => m.Browse)
  },
  {
    path: 'title/:id',
    loadComponent: () =>
      import('./features/details/details').then(m => m.Details)
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./features/search/search').then(m => m.Search)
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' },
];
