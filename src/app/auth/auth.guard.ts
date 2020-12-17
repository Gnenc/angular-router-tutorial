import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot,
  RouterStateSnapshot, Router,
  UrlTree, CanActivateChild,
  NavigationExtras
} from '@angular/router';


import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): true | UrlTree {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): true | UrlTree {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): true | UrlTree {
    if (this.authService.isLoggedIn) {
      return true;
    }
    // store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // create a dummy session id
    const sessionId = 123456789;

    // set our navigation extras object
    // that contains our global query params and fragment
    const navigationExtras: NavigationExtras = {
      queryParams: { session_id: sessionId },
      fragment: 'anchor'
    };

    // redirect to the login page with extras
    return this.router.createUrlTree(['/login', navigationExtras]);
  }

}
