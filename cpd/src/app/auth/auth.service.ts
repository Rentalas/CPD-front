import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from './auth-api.service';
import { of, Observable } from 'rxjs'
import { tap, catchError, map } from 'rxjs/operators'
import { LoggerService } from '../logger.service';
import { Nullable } from '../abstraction';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthorized = false;

  constructor(
    private authApiService: AuthApiService,
    private router: Router,
    private loggerService: LoggerService,
    ) { }

  signIn(userData: Record<string, Nullable<string>>): Observable<boolean> {
    return this.authApiService.signIn(userData).pipe(
      tap((response) => {
        this.router.navigate(['http://localhost:4200/account']);
      }),
      map(() => true),
      catchError((error) => {
        this.loggerService.log(error);
        return of(false);
      })
    );
  }

  signUp(userData: Record<string, Nullable<string | number>>): Observable<boolean> {
    return this.authApiService.signIn(userData).pipe(
      tap((response) => {
        this.router.navigate(['http://localhost:4200/account']);
      }),
      map(() => true),
      catchError((error) => {
        this.loggerService.log(error);
        return of(false);
      })
    );
  }

  //TODO improve
  private checkAuthorization(): boolean {
    return Boolean(localStorage.getItem('authToken'));
  }
}
