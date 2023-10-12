import { Component, OnInit } from '@angular/core';
import { signalInterface } from 'src/app/interfaces/signalInterface';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { SignalService } from 'src/app/services/signal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-signal',
  templateUrl: './add-signal.component.html',
  styleUrls: ['./add-signal.component.scss']
})
export class AddSignalComponent implements OnInit{
  
  image: string = 'photoType.jpg'
  titre: string = ''
  description: string = ''
  localisation: string = ''
  messageERR:string = ''
  messageColor: string = ''

  constructor(private signalService: SignalService, private globalVariables: GlobalVariablesService, private router: Router){}

  ngOnInit(): void {
    this.globalVariables.globalUsername == "" && this.router.navigate(["/login"]); 

  }

  addSignal(){
    if(!this.image || !this.titre || !this.description || !this.localisation){
      this.messageColor = 'red'
      this.messageERR = "Tous les champs doivent être remplis"
    }else{
      const signal : signalInterface= {
        image: this.image,
        titre: this.titre,
        description: this.description,
        localisation: this.localisation
      }
      this.signalService.addSignal(signal).subscribe((text)=>{
        this.messageColor = '#6eeb83'
        this.messageERR = text.message
      })
    }
    
  }

}
