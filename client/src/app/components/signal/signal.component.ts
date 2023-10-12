import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.scss']
})
export class SignalComponent implements OnInit {
@Input() signalItem: any
  locationIcon = faLocationDot
  signalDate: any = ''
  signalImage= ""
constructor(private datePipe: DatePipe){}

ngOnInit(): void {
  console.log(this.signalItem)
  this.signalDate = this.datePipe.transform(this.signalItem.date_publication, 'dd MMMM yyyy');
  this.signalImage = this.signalItem.img
}

}
