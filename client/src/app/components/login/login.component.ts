import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { userInterface } from 'src/app/interfaces/userInterface';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  username: string = '';
  password: string = '';
  messageERR: string = '';

  constructor(private userService: UserService, private router: Router, private globalVariables: GlobalVariablesService){}

  ngOnInit(): void {}

  loginUser(){
    if(!this.username || !this.password){
      this.messageERR = "Tous les champs doivent être remplis"
    }else{
      const user: userInterface = {username: this.username, password: this.password}
      this.userService.loginUser(user).subscribe((text) => {
        console.log(text.username)
        this.globalVariables.setGlobalUsername(text.username)
        this.router.navigate(['/'])

      },(error)=>{
        if (error.status === 401 && error.error && error.error.message) {
          this.messageERR = error.error.message; 
        }
      })

    }
  }
}
