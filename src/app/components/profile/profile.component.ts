import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/Profile';
import { ProfileService } from "../../services/profile.service"
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile_list: Profile[];
  email = new FormControl('');
  password = new FormControl('');
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    console.log("this.email");
    this.profileService.getProfile().subscribe(data=>{
      this.profile_list = data;
      
    });

    

    
  }

}
