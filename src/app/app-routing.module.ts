import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/components/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/components/pages/contact-page/contact-page.component';
import { HomePageComponent } from './shared/components/pages/home-page/home-page.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component: HomePageComponent
  // },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule )
  },
  {
    path: '**',
    redirectTo: 'countries'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports: [
    RouterModule,
  ]

})
export class AppRoutingModule { }
