import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  login;
  loginSub;
  constructor(private authService: AuthService) {
    this.loginSub = this.authService.logged.subscribe(
        (res: any) => {this.login = res; console.log('a guardban a res', res)},
    )
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return !this.login;
  }

}
