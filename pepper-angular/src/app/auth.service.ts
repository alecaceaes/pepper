import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import Auth0Lock from 'auth0-lock'

@Injectable()
export class Auth {
    userProfile;
    lock = new Auth0Lock(
        '5hJ1e3msoz5K4q009FeJqgQe3bLwCL3C', 
        'dev-pepper.auth0.com', 
        {
            auth: {
                responseType: 'token id_token'
            }
        }
    )

    constructor(public jwtHelper: JwtHelperService) {
        this.userProfile = JSON.parse(localStorage.getItem('profile'));


        this.lock.on('authenticated', authResult => {

            localStorage.setItem('id_token', authResult.idToken);
            this.lock.getProfile(authResult.accessToken, (error, profile) => {
                if (error) {
                    console.log("ERROR", error);
                    return;
                }                    

                localStorage.setItem('profile', JSON.stringify(profile));
                this.userProfile = profile;                
            })
        })        
    }

    login() {
        this.lock.show();
    }

    isAuthenticated() {
        let token = this.jwtHelper.tokenGetter()
        return !this.jwtHelper.isTokenExpired(token)
    }

    logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        this.userProfile = null;
    }
}