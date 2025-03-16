import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from '../../@public/pages/home/home.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: '',

            loadComponent: () =>
              import('./dashboard/dashboard.component').then(
                (m) => m.DashboardComponent
              ), // Ruta hija con carga diferida
          },
          {
            path: 'users',
            loadComponent: () =>
              import('./users/users.component').then((m) => m.UsersComponent), // Ruta hija con carga diferida
          },
        ],
      },
    ],
  },
  

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
