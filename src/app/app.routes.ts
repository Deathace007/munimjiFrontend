import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
  {
    path: 'form',
    loadComponent: () => import('./components/form/form.component').then(m => m.FormComponent)
  },
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  }
];
