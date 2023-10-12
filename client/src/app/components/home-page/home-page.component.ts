import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { SignalService } from 'src/app/services/signal.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  allSignal: Array<object> = [] 
  username: string = ""

  constructor(private globalVariables: GlobalVariablesService, private router: Router, private signalService: SignalService){}

  ngOnInit(): void {
    this.globalVariables.globalUsername == "" ? this.router.navigate(["/login"]) : this.username = this.globalVariables.globalUsername

    this.signalService.allSignal().subscribe((signals)=>{
      this.allSignal = signals.data
    })

  }
}
