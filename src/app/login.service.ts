import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  login(username: string, password: string) {
    if (username === 'gerry' && password === '123') {
      return 'Success';
    }
    return 'user name or password is incorrect, please try again';
  }
}
