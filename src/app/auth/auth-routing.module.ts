import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
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
export class AuthRoutingModule { }
