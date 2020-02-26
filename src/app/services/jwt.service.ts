import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class JwtService {
  constructor(private httpClient: HttpClient) { }
  
  login(email:string, password:string) {
    return this.httpClient.post<{access:  string, refresh: string}>('http://sfats.herokuapp.com/api/token/', {email, password}).pipe(tap(res => {
    localStorage.setItem('access', res.access);
    localStorage.setItem('refresh', res.refresh);
  }))
  }
  register(email:string, password:string) {
    return this.httpClient.post<{access_token: string}>('http://sfats.herokuapp.com/signup', {email, password}).pipe(tap(res => {
    this.login(email, password)
}))
}

  logout() {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
  }

  public get loggedIn(): boolean{
    return localStorage.getItem('access') !==  null;
  }

  public refresh(refresh_token){
    return this.httpClient.post<{access: string}>('http://sfats.herokuapp.com/api/token/refresh/', {refresh: refresh_token}).pipe(tap(res => {
      localStorage.setItem('access', res.access);
    }))
  }

}
