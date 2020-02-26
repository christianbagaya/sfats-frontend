import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/Profile';
import { ProfileService } from "../../services/profile.service"
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile_list: Profile[];
  email = new FormControl('');
  password = new FormControl('');
  constructor(private profileService: ProfileService, private route: Router) { }

  ngOnInit() {
    this.profileService.getProfile().subscribe(data=>{
      this.profile_list = data;
    });
  }

  scheduleMeeting(profile){
    // console.log("Jello");
    localStorage.setItem('user_id', profile.user);
    this.route.navigateByUrl('/schedule')
  }

  // scheduleMeeting(profile){
  //    localStorage.setItem("user_id", profile.user)
  // }

}
