import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public router: Router) { }
  canActivate(): boolean {
    if (sessionStorage.getItem("isLoggedIn")=="false") {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
