import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserData } from '../abstraction';
import { Observable } from 'rxjs';
import { AuthEndPoints } from './constants';
import { SignInData } from './abstraction';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private http = inject(HttpClient);

  signIn(signInData: SignInData): Observable<User> {
    return this.http.post<User>(AuthEndPoints.SignInEndPoint, signInData);
  }

  signUp(userData: UserData): Observable<User> {
    return this.http.post<User>(AuthEndPoints.SignUpEndPoint, userData);
  }
}
