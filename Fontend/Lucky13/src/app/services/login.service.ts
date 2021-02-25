import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(public router: Router) {}
  public user = null;

  getUser(user) {
    return (this.user = user);
  }
}
