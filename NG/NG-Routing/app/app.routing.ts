import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { NgModule } from '@angular/core'

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    loadChildren: 'app/about/about.module#AboutModule' // Lazy Module Module..
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent }
];


// @NgModule({
//   imports: [
//     RouterModule.forRoot(appRoutes)
//   ],
//   exports: [
//     RouterModule
//   ]
// })
// export class AppRoutingModule {

// }

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);