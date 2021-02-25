import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, RouterLink } from '@angular/router';
import * as firebase from 'firebase';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent  implements OnInit {
  constructor(
    private userService: UserService,
    public auth: AngularFireAuth,
    // public router: Router,
  ) {}
  public user = null;
  async login() {
    const provider = new firebase.default.auth.GoogleAuthProvider();
    try {
      await this.auth.signInWithPopup(provider);
      console.log(this.user.uid)
      if (this.user!=null) {
        await this.userService.createUser(
          this.user.displayName,
          this.user.email,
          this.user.photoURL,
          this.user.uid
        );
        alert('chuyen trang')
      }
      this.userService.user = this.user
    } catch (err) {
      alert(err);
    }
  }

  ngOnInit(): void {
    this.auth.authState.subscribe((auth) => {
      if (this.user == null) {
        this.user = auth;
      }
    });
  }
  ngOnDestroy(): void {
    this.user = null;
  }
}
