import { Component, OnInit } from '@angular/core';
import { userInterface } from 'src/app/interfaces/userInterface';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-acc',
  templateUrl: './create-acc.component.html',
  styleUrls: ['./create-acc.component.scss']
})
export class CreateACCComponent implements OnInit {

  username: string = '';
  password: string = '';
  messageERR: string = '';

  constructor(private userService:UserService, private router: Router){}

  ngOnInit(): void {}

  createUser(){
    if(!this.username || !this.password){
      this.messageERR = "Tous les champs doivent être remplis"
    }else{
      const user: userInterface = {username:this.username, password:this.password}
      this.userService.createUser(user).subscribe((res)=>{
        this.router.navigate(['/login'])
      },(error)=>{
        if (error.status === 401 && error.error && error.error.message) {
          this.messageERR = error.error.message; 
        }
      });
    }
    
  }

}
