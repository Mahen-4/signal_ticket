import { Component, OnInit } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit{
  addIcon = faAdd
  firstLetter:string = ''

  constructor(private globalVariables: GlobalVariablesService){

  }

  ngOnInit(): void {
    this.firstLetter = this.globalVariables.globalUsername.charAt(0)
  }
}
