import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from './auth-api.service';
import { of, Observable } from 'rxjs'
import { tap, catchError, map } from 'rxjs/operators'
import { LoggerService } from '../logger.service';
import { SignInData, UserData } from '../abstraction';
import { AUTH_TOKEN } from './constants';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;
  authApiService = inject(AuthApiService);
  router = inject(Router);
  loggerService = inject(LoggerService);
  userService = inject(UserService);

  signIn(signInData: SignInData): Observable<boolean> {
    return this.authApiService.signIn(signInData)
    .pipe(
      tap((user) => {
        this.userService.setUser(user);
        this.router.navigate(['./account']);
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
        this.router.navigate(['./account']);
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
