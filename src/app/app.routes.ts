import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'home',
    loadComponent: () => import('./pages/home/home'),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
