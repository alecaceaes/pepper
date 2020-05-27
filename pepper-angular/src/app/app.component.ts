import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private auth: AngularFireAuth) {

  }

  ngOnInit() {
    
  }  

  login() {
    let provider = new auth.FacebookAuthProvider();
    this.auth.signInWithPopup(provider).then(authState => {
      console.log("AFTER LOGIN", authState);
    })
  }

  logout() {
    this.auth.signOut();
  }
}
