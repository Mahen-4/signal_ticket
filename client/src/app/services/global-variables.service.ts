import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {

  globalUsername: string = "";

  constructor() { }

  setGlobalUsername(newValue: string){
    this.globalUsername = newValue;
  }
}
