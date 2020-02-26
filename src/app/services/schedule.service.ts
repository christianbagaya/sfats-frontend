import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schedule } from '../models/Schedule';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  url:string = "https://sfats.herokuapp.com/api/schedule/";

  constructor(private http: HttpClient, private jwtService: JwtService) { }

  getSchedules():Observable<Schedule[]>{
    return this.http.get<Schedule[]>(this.url);
  }

  toggleSchedule(schedule_id, current_status){
    status = "";
    if(current_status=='PENDING'){
      status = "ACCEPTED";
    }else{
      status= "PENDING";
    }
    let jwt = localStorage.getItem("access");
    let head= { headers: new HttpHeaders().set('Authorization', `Bearer ${jwt}`)};
    // headers= headers.append('Authorization', jwt);
    // headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    
    return this.http.patch(this.url+schedule_id + "/", {"avail_status": status}, head);
  }

  create_schedule(schedule_obj){
    this.jwtService.refresh;
    // let token = localStorage.getItem("access");
    // console.log(token);
    // let head= { headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)};
    return this.http.post(this.url, {"studentName": schedule_obj.studentName, "email_address": schedule_obj.email, "phone_number": schedule_obj.phone_number, "time": schedule_obj.time, "schedule_status": "PENDING", "stafalty": localStorage.getItem("user_id")} );
  }
  
}
