import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {}
  user = null;
  async createUser(displayName, email, photoURL, uid) {
    console.log("234")
    await this.httpClient
      .post('http://127.0.0.1:7009/user', {
        id: uid,
        displayName: displayName,
        email: email,
        photoURL: photoURL,
      })
      .toPromise()
      .then((e) => {
        console.log(e);
      });
    console.log("234")
  }

  async getUser(uid) {
    await this.httpClient
      .get('http://127.0.0.1:7009/user?uid='+uid, {})
      .toPromise()
      .then((e) => {
        console.log(e);
      });
    //console.log(this.data)
  }

  async getUsers(){
    let users = await this.httpClient.get('http://127.0.0.1:7009/roomRT?rid=kNTlAEaaLBUVzYAgjXgKLenynO03').toPromise()
    return users
  }
}
