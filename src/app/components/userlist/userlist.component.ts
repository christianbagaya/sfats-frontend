import { Component, OnInit } from '@angular/core';
import { User } from "../../models/User";
import { UserService } from '../../services/user.service'
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  user_list: User [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.userService.getTodos().subscribe( users =>{
      // this.user_list = users;
      this.userService.getTodos().subscribe(data=>{
        this.user_list = data;
      });
      // console.log("hello");
      // console.log(users)
      // console.log(this.user_list);
    // }); 
  }

}
