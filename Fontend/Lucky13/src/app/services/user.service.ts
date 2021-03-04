import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: firebase.default.User;
  public provider;
  constructor(
    private httpClient: HttpClient,
    private auth: AngularFireAuth,
    private router: Router
  ) {
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        console.log(this.user);
      } else {
        localStorage.setItem('user', null);
        console.log(this.user);
        console.log('User= null');
      }
    });
  }

  async createUser(displayName, email, photoURL, uid, phone, password) {
    await this.httpClient
      .post('http://127.0.0.1:7009/user/', {
        id: uid,
        displayName: displayName,
        email: email,
        photoURL: photoURL,
        phone: phone,
        password: password,
      })
      .toPromise()
      .then((e) => {
        console.log(e);
      });
  }

  async getUser(uid) {
    await this.httpClient
      .get('http://127.0.0.1:7009/user?uid=' + uid, {})
      .toPromise()
      .then((e) => {
        console.log(e);
      });
  }

  async getUsers() {
    let users = await this.httpClient
      .get('http://127.0.0.1:7009/roomRT?rid=kNTlAEaaLBUVzYAgjXgKLenynO03')
      .toPromise();
    return users;
  }

  async login(uid, password) {
    await this.httpClient
      .post('http://127.0.0.1:7009/login', {
        uid: uid,
        password: password,
      })
      .toPromise()
      .then((e) => {
        console.log(e);
      });
  }

  async loginWithGG() {
    this.provider = new firebase.default.auth.GoogleAuthProvider();
    await this.auth.signInWithPopup(
      new firebase.default.auth.GoogleAuthProvider()
    );
  }

  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      this.auth.onAuthStateChanged(function (user) {
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      });
    });
  }
}
