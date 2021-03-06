import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { JwtService } from './jwt.service';


@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {

    base_url: string;

    constructor(private router: Router
        , private authService: JwtService) {}

    canActivate() {
        // Check to see if a user has a valid token
        if (this.authService.loggedIn ){
            // If they do, return true and allow the user to load app
            return true;
        }
        // If not, they redirect them to the login page
        this.router.navigateByUrl('/login');
        return false;
    }


}