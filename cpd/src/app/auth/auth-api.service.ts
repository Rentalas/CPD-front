import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private http: HttpClient) { }

  signIn(userData) {
    return this.http.post('./sign-in', userData)
  }

  signUp(userData) {
    return this.http.post('./sign-up', userData)
  }
}