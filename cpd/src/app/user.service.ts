import { Injectable } from '@angular/core';
import { User } from './abstraction';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  setUser(data: User): void {
    this.user = data;
    console.log(this.user);
  }
}
