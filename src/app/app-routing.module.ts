import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
// import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'crisis-list', component: CrisisListComponent },
  // { path: 'heroes', component: HeroesListComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // debugging purposes only
      )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
