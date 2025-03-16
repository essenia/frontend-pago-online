import { CommonModule } from '@angular/common';
import { UsersModule } from './@admin/pages/users/users.module';
import { UsersComponent } from './@admin/pages/users/users.component';
import { DashboardComponent } from './@admin/pages/dashboard/dashboard.component';
import { ContactComponent } from './@public/pages/contact/contact.component';
import { HomeComponent } from './@public/pages/home/home.component';
import { HomeModule } from './@public/pages/home/home.module';
import { ContactModule } from './@public/pages/contact/contact.module';

import { Routes } from '@angular/router';
import { AdminComponent } from './@admin/pages/admin.component';
import { AdminModule } from './@admin/pages/admin.module';
// import { DashboardComponent } from './@admin/pages/dashboard/dashboard.component';

export const routes: Routes = [
  //     {
  //         path: 'home',
  //         // loadChildren es un método utilizado en Angular para cargar módulos de manera perezosa (lazy loading)
  //         loadChildren: () => import('./@public/pages/home/home.component').then(m => m.HomeComponent)
  // },
  // {
  // path : 'contact',
  // loadChildren: () => import('./@public/pages/contact/contact.component').then(m => m.ContactComponent)

  // }

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'admin',
    component: AdminComponent, ////  el componente principal de la ruta "admin"
    children: [
      {
        path: '', // Ruta vacía, es la ruta por defecto cuando se accede a "admin"

        loadComponent: () =>
          import('./@admin/pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ), // Ruta hija con carga diferida
      },
      {
        path: 'users', // Ruta para "admin/users"
        loadComponent: () =>
          import('./@admin/pages/users/users.component').then(
            (m) => m.UsersComponent
          ), // Ruta hija con carga diferida
      },
    ],
  },
  {
    path: 'users',
    component: AdminComponent,
    children: [
      {
        path: '',

        loadComponent: () =>
          import('./@admin/pages/users/users.component').then(
            (m) => m.UsersComponent
          ), // Ruta hija con carga diferida
      },
    ],
  },

  {
    /*  rutas comodín */
    // ruta vacia
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    /*  rutas no existe */
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
