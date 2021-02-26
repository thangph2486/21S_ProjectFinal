import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jsDocComment } from '@angular/compiler';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  user = null;
  async createUser(displayName, email, photoURL, uid, phone, password) {
    await this.httpClient
      .post(
        'http://127.0.0.1:7009/user/',
        {
          id: uid,
          displayName: displayName,
          email: email,
          photoURL: photoURL,
          phone: phone,
          password: password,
        },
        
      )
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
    //console.log(this.data)
  }

  async getUsers() {
    let users = await this.httpClient
      .get('http://127.0.0.1:7009/roomRT?rid=kNTlAEaaLBUVzYAgjXgKLenynO03')
      .toPromise();
    return users;
  }

  async login(uid,password) {
    await this.httpClient
      .post('http://127.0.0.1:7009/login',{
          uid: uid,
          password: password
      })
      .toPromise()
      .then((e) => {
        console.log(e);
      });
    //console.log(this.data)
  }
}
