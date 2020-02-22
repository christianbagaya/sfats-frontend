import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  todosUrl:string = "https://sfats.herokuapp.com/api/users/";
  // 'http://217.0.0.1:8000/api/users/';

  constructor(private http: HttpClient) { }

  getTodos(): Observable <User[]>{
    return this.http.get<User[]>(this.todosUrl);
  }
}
