import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { auth } from 'firebase/app';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayName;
  photoURL;

  constructor(private auth: AngularFireAuth, private af: AngularFireDatabase, private http: HttpClient) {

  }

  ngOnInit() {
    this.auth.authState.subscribe(authState => {
      
    })
  }  

  register() {
    this.auth.createUserWithEmailAndPassword('user@pepper.com', 'Pass.123')
      // .then(authState => console.log("REGISTER-THEN", authState))
      .then(authState => {
        authState.user.sendEmailVerification();
      })
      .catch(error => console.log("REGISTER-ERROR", error))
  }

  login() {
    this.auth.signInWithEmailAndPassword('user@pepper.com', 'Pass.123')
      .then(authState => console.log("LOGIN-THEN", authState))
      .catch(error => console.log("LOGIN-ERROR", error))
  }

  logout() {
    this.auth.signOut();
  }
}
