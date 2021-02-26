import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService) {}
  user;
  ID: any;
  PW: any;
  name: any;
  phone: number;
  email: any;
  async login() {
    try {
      // console.log(this.user.uid)
      // if (this.user!=null) {
      console.log(this.name, this.email, '', this.ID, this.phone, this.PW);
      return await this.userService.createUser(
        this.name,
        this.email,
        '',
        this.ID,
        this.phone,
        this.PW
      ).then(()=>{alert('chuyen trang');});

      
      // }
      // this.userService.user = this.user
      // alert(this.ID );
      // alert(this.PW);
      // alert(this.name);
      // alert(this.phone);
      // alert(this.email);
    } catch (err) {
      console.log(err);
    }
  }

  ngOnInit(): void {
    this.user;
  }

  changeColor() {}
}
