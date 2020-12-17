import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
// import { CrisisListComponent } from './crisis-center/crisis-list/crisis-list.component';
// import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { LoginComponent } from './auth/login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
// import { CrisisModule } from './crisis-center/crisis.module';
// import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

@NgModule({
  declarations: [
    AppComponent,
    // CrisisListComponent,
    // HeroesListComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    // CrisisModule,
    // AdminModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [SelectivePreloadingStrategyService],
  bootstrap: [AppComponent]
})
export class AppModule {
  // diagnostic only: inspect router configuration
  constructor(router: Router) {
    // use a custom replacer to display function names in the route configs
    const replacer = (key, value) => {
      return typeof value === 'function' ? value.name : value
    };

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
