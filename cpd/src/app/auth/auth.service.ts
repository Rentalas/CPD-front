import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from './auth-api.service';
import { of, Observable } from 'rxjs'
import { tap, catchError, map } from 'rxjs/operators'
import { LoggerService } from '../logger.service';
import { UserData } from '../abstraction';
import { ACCOUNT_ROUTE, AUTH_TOKEN } from './constants';
import { UserService } from '../user.service';
import { SignInData } from './abstraction';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authApiService = inject(AuthApiService);
  private router = inject(Router);
  private loggerService = inject(LoggerService);
  private userService = inject(UserService);

  isAuth = false;

  signIn(signInData: SignInData): Observable<boolean> {
    return this.authApiService.signIn(signInData)
    .pipe(
      tap((user) => {
        this.userService.setUser(user);
        this.router.navigate([ACCOUNT_ROUTE]);
      }),
      map(() => true),
      catchError((error) => {
        this.loggerService.log(error);
        return of(false);
      })
    );
  }

  signUp(userData: UserData): Observable<boolean> {
    return this.authApiService.signUp(userData).pipe(
      tap((user) => {
        this.userService.setUser(user);
        this.router.navigate([ACCOUNT_ROUTE]);
      }),
      map(() => true),
      catchError((error) => {
        this.loggerService.log(error);
        return of(false);
      })
    );
  }

  //TODO improve
  private checkAuth(): boolean {
    return Boolean(localStorage.getItem(AUTH_TOKEN));
  }
}
