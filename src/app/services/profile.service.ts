import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from "../models/Profile";
import { JwtService } from './jwt.service';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url = "http://sfats.herokuapp.com/api/profile/";
  // profile_list: Profile[]; 
  constructor(private http: HttpClient, private jwtService: JwtService) { }

  
  getProfile():Observable<Profile[]>{
    console.log("Here I am")
    return this.http.get<Profile[]>(this.url);
  }

  getProfileById(id):Observable<Profile>{
    return this.http.get<Profile>(this.url+id+"/");
  }

  toggleStatus(profile_id, current_status){
    status = ""
    if(current_status=='UNAVAILABLE'){
      status = "AVAILABLE";
    }else{
      status= "UNAVAILABLE";
    }
    let jwt = localStorage.getItem("access");
    let head= { headers: new HttpHeaders().set('Authorization', `Bearer ${jwt}`)};
    // headers= headers.append('Authorization', jwt);
    // headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.patch(this.url+profile_id + "/", {"avail_status": status}, head);
  }
  

}
