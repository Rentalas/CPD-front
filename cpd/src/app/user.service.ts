import { Injectable } from '@angular/core';
import { User } from './abstraction';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user;

  get user(): User {
    return this._user
  }

  setUser(data: User): void {
    this._user = data;
  }
}
