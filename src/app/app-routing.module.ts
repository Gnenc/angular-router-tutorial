import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
// import { CrisisListComponent } from './crisis-center/crisis-list/crisis-list.component';
// import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'crisis-center',
    loadChildren: () => import('./crisis-center/crisis.module').then(m => m.CrisisModule),
    data: { preload: true }
  },
  // { path: 'heroes', component: HeroesListComponent },
  { path: '', redirectTo: '/superheroes', pathMatch: 'full' },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthGuard]
  },
  { path: '**', component: PageNotFoundComponent },
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      routes,
      { 
        enableTracing: true, // debugging purposes only
        // does not load feature areas protected by a CanLoad guard
        preloadingStrategy: SelectivePreloadingStrategyService, //PreloadAllModules
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
