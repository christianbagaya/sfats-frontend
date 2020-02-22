import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from "../models/Profile";


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url = "http://sfats.herokuapp.com/api/profile/";
  // profile_list: Profile[]; 
  constructor(private http: HttpClient) { }

  
  getProfile():Observable<Profile[]>{
    console.log("Here I am")
    return this.http.get<Profile[]>(this.url);
  }

}
