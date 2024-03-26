import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserData } from '../abstraction';
import { Observable } from 'rxjs';
import { SIGN_IN_ROUTE, SIGN_UP_ROUTE } from './constants';
import { SignInData } from './abstraction';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  private http = inject(HttpClient);

  signIn(signInData: SignInData): Observable<User> {
    return this.http.post<User>(SIGN_IN_ROUTE, signInData);
  }

  signUp(userData: UserData): Observable<User> {
    return this.http.post<User>(SIGN_UP_ROUTE, userData);
  }
}