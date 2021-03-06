import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, RouterLink } from '@angular/router';
import * as firebase from 'firebase';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(
    private userService: UserService,
    public auth: AngularFireAuth,
    public player: LoginService,
    public router: Router
  ) {}
  public user = null;
  async login() {
    const provider = new firebase.default.auth.GoogleAuthProvider();
    try {
      await this.auth.signInWithPopup(provider);
      alert('Login successful');
      this.router.navigate(['homeLogin']);
      this.userService.user = this.user;
    } catch (err) {
      alert('error');
    }
  }

  // console.log(this.user.uid);
  // if (this.user != null) {
  // await this.userService.createUser(
  //   this.user.displayName,
  //   this.user.email,
  //   this.user.photoURL,
  //   this.user.uid,
  //   '',
  //   ''
  // );
  // alert('dang nhap thanh cong');
  // }

  // async signOut(){
  //   try {
  //     await this.auth.signOut();
  //     alert("Signed out")
  //   }
  //   catch (err) {
  //     alert("Can't sign out")
  //   }
  // }

  ID: any;
  PW: any;

  async loginNow() {
    console.log(this.ID, this.PW);
    try {
      let temp = await this.userService.login(this.ID, this.PW);
      console.log(temp)
      if (temp) {
        this.router.navigate(['homeLogin']);
        this.userService.user = temp;
      } else {
        this.router.navigate(['/login']);
      }
    } catch (err) {
      alert('error');
    }
  }

  ngOnInit(): void {
    this.auth.authState.subscribe((auth) => {
      if (this.user == null) {
        this.user = auth;
        this.player.getUser(this.user);
      }
    });
  }
  ngOnDestroy(): void {
    this.user = null;
  }
}
