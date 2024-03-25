import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInData, User, UserData } from '../abstraction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  http = inject(HttpClient);

  signIn(signInData: SignInData): Observable<User> {
    return this.http.post<User>('./sign-in', signInData);
  }

  signUp(userData: UserData): Observable<User> {
    return this.http.post<User>('./sign-up', userData);
  }
}