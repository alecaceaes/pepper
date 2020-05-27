import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayName;
  photoURL;

  constructor(private auth: AngularFireAuth) {

  }

  ngOnInit() {
    this.auth.authState.subscribe(authState => {
      if (!authState){
        this.displayName = null;
        this.photoURL = null;
        return;
      }

      this.displayName = authState.displayName
      this.photoURL = authState.photoURL; 
    })
  }  

  login() {
    let provider = new auth.FacebookAuthProvider();
    provider.setCustomParameters({
      'display': 'popup'
    });
    this.auth.signInWithPopup(provider).then(authState => {
      console.log("AFTER LOGIN", authState);
    }).catch(err => console.log(err))
  }

  logout() {
    this.auth.signOut();
  }
}
