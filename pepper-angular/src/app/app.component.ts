import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayName;
  photoURL;

  constructor(private auth: AngularFireAuth, private af: AngularFireDatabase) {

  }

  ngOnInit() {
    this.auth.authState.subscribe(authState => {
      if (!authState){
        this.displayName = null;
        this.photoURL = null;
        return;
      }

      console.log("AUTHSTATE", authState);
      this.displayName = authState.displayName
      this.photoURL = authState.photoURL; 
    })
  }  

  login() {
    let provider = new auth.FacebookAuthProvider();
    this.auth.signInWithPopup(provider).then((authState: any) => {
      console.log("AFTER LOGIN", authState);
      this.af.object('users/' + authState.user.uid).update({
        accessToken: authState.credential.accessToken
      })
    }).catch(err => console.log(err))
  }

  logout() {
    this.auth.signOut();
  }
}
