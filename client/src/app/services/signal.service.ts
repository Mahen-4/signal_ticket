import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signalInterface } from '../interfaces/signalInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalService {
  private urlUser = "http://localhost:3001/signal/"
    
  constructor(private http:HttpClient) { }

  addSignal(signal:signalInterface): Observable<any>{
     return this.http.post<signalInterface>(`${this.urlUser}addSignal`,signal)
  }

  allSignal(): Observable<any>{
    return this.http.get<any>(`${this.urlUser}allSignal`)
  }
}
