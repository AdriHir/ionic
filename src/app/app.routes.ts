import { Routes } from '@angular/router';
import { FirstDogPage } from './first-dog/first-dog.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'first-dog',
    loadComponent: () => import('./first-dog/first-dog.page').then( m => m.FirstDogPage)
  },

];
