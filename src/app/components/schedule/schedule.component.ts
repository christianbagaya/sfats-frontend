import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
  }

  onFormSubmit(loginForm){
    this.scheduleService.create_schedule(loginForm.value).subscribe(data=>{
      console.log(data);
    });
  }

}
