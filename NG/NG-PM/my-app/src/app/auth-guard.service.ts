import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuardService {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    let loggedIn = false;
    if (loggedIn) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
