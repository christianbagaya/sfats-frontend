import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schedule } from '../models/Schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  url:string = "https://sfats.herokuapp.com/api/schedule/";

  constructor(private http: HttpClient) { }

  getSchedules():Observable<Schedule[]>{
    return this.http.get<Schedule[]>(this.url);
  }

  toggleSchedule(schedule_id, current_status){
    status = ""
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
}
