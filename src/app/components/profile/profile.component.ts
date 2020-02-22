import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/Profile';
import { ProfileService } from "../../services/profile.service"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile_list: Profile[];
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getProfile().subscribe(data=>{
      this.profile_list = data;
      
    })
  }

}
