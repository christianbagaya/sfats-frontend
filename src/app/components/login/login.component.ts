import { Component, OnInit } from '@angular/core';
import { JwtService } from "../../services/jwt.service";
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string ;
  password: string;
  constructor(private jwtService: JwtService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onFormSubmit(loginForm){
    this.email = loginForm.value.email;
    this.password = loginForm.value.password;
    this.jwtService.login(this.email, this.password).subscribe(data=>{
      console.log(data);
    });
    this.router.navigateByUrl('/stafalty');
  }
}
