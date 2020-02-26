import { Component, OnInit } from '@angular/core';
import { User } from "../../models/User";
import { UserService } from '../../services/user.service';
import { JwtService} from '../../services/jwt.service';
import * as jwt_decoder from 'jwt-decode';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from '../../models/Profile'
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ScheduleService } from 'src/app/services/schedule.service';
import { Schedule } from '../../models/Schedule';
import { element } from 'protractor';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  user_list: User [];
  user:Profile;
  user_id:number;
  profile_id:number;
  avail_status: string;
  color: string;
  status_color: string = "success";
  schedules: Schedule[]=[];
  schedule_status: string;

  constructor(
    private userService: UserService, 
    private jwtService: JwtService, 
    private profileService: ProfileService, 
    private router: Router,
    private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    // this.userService.getTodos().subscribe( users =>{
      // this.user_list = users;
      
    const token = localStorage.getItem("token");
    const refesh = localStorage.getItem("refresh");
    try{
      const decoded = jwt_decoder(token);    
      this.user_id = decoded.getItem("user_id");  
    }catch(Error){
      this.jwtService.refresh(refesh).subscribe(data=>{
        
      });
      const decoded = jwt_decoder(localStorage.getItem("refresh"));
      this.user_id = decoded["user_id"];

    }

    this.scheduleService.getSchedules().subscribe(data=>{
      data.forEach(element=>{
        if(element.stafalty == this.user_id){
          this.schedules.push(element);
          if(element.schedule_status == "ACCEPTED"){
            this.status_color = "success";
          }else{
            this.status_color = "warning"
          }
        }
      })
    });

    this.profileService.getProfile().subscribe(data=>{
      data.forEach(element => {
        if(element.user ==this.user_id){
          this.user = element;
          this.profile_id = element.id;
          this.avail_status = element.avail_status;
          if(this.avail_status=="AVAILABLE"){
            this.color="success";
          }else{
            this.color = "danger";
          }
          // console.log(this.user);
        }
      });
    });
  }

  toggleAvailability(){
    this.profileService.toggleStatus(this.profile_id, this.avail_status).subscribe(data=>{
      console.log(data);
    });
    window.location.reload();

    //  console.log("Change")
  }

  toggleSchedule(schedule){

    this.scheduleService.toggleSchedule(schedule.id, schedule.schedule_status).subscribe(data=>{
      console.log(data);
    });
    location.reload();
  }
}