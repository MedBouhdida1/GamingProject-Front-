import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthClientGuard implements CanActivate {
  constructor(
    private router: Router,
    private toast: NgToastService
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var isAuthenticated = !!localStorage.getItem("Token");
    if (!isAuthenticated) {
      this.router.navigate(['/client/login']);
      this.toast.warning({
        summary: "You have to sign in to access this page"
      });
    }
    return isAuthenticated;
  }

}
