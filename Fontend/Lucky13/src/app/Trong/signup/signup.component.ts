import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor() {}
  ID: any;
  PW: any;
  name: any;
  phone: number;
  email: any;
  async login() {}

  ngOnInit(): void {}
}
