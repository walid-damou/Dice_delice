import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   // Check if the user is logged in
   const isLoggedIn = localStorage.getItem('logged_in');

   if (!isLoggedIn) {
     // Navigate to the login page if the user is not logged in
     this.router.navigate(['/login']);
     return false;
   }

   return true;
  }
  
}
