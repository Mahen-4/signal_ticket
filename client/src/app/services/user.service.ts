import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userInterface } from '../interfaces/userInterface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlUser = "http://localhost:3001/users/"
  
  constructor(private http:HttpClient) { }

  createUser(user:userInterface): Observable<any>{
     return this.http.post<userInterface>(`${this.urlUser}userCreation`,user)
  }

  loginUser(user:userInterface): Observable<any>{
    return this.http.post<userInterface>(`${this.urlUser}loginUser`, user)
  }

}
