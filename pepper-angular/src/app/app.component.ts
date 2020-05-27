import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Auth } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: 'app works!'

  constructor(public auth: Auth, private http: HttpClient) {

  }

  showProfile() {
    console.log(this.auth.userProfile);
  }

  updateProfile() {
    var url = 'https://dev-pepper.auth0.com/api/v2/users/' + this.auth.userProfile.sub;
    var data = {
      user_metadata: {
        location: 'Melbourne'
      }
    }
    this.http.patch(url, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    }).subscribe(res => {
      console.log(res);
    })
  }
}
