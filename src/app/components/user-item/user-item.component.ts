import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit(): void {
  }

  setClasses(){
    let classes = {
      user: true,
      'is-not-available': !this.user.completed

    }
    return classes;
  }

  onToggle(user){
    user.available = !user.completed;
  }

  onDelete(user){
    console.log('delete');
  }


}
