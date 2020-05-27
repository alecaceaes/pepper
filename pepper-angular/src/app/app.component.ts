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
      if (!authState){
        this.displayName = null;
        this.photoURL = null;
        return;
      }

      let userRefSub = this.af.object('users/' + authState.uid);
      let userRef = userRefSub.valueChanges();
      userRef.subscribe((user: any) => {
        let url = `https://graph.facebook.com/v7.0/me?fields=id%2Cfirst_name%2Clast_name%2Cgender&access_token=${user.accessToken}`;
        this.http.get(url).subscribe(response => {
          let user = response;
          userRefSub.update({
            firstName: user['first_name'],
            lastName: user['last_name']
          })
        })
      })

      console.log(authState)
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
