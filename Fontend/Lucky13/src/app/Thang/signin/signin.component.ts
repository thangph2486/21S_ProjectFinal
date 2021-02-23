import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import *as firebase from 'firebase';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private auth:AngularFireAuth) { }

  public user: any;

  ngOnInit(): void {
    this.auth.authState.subscribe((auth)=>{
      if (auth){
        this.user = auth
      }
    })
  }

  async login (){
    const provider=new firebase.default.auth.GoogleAuthProvider();
    try {
      await this.auth.signInWithPopup(provider);
      alert("login successfully");

    }
    catch(err){
      alert("login failed");
    }
  
  }


  async signout(){
    try{
       await this.auth.signOut();
       alert("signed out");
    }
    catch(err){
      alert("cannot signed out");
    }
  }


}
