import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {


  public time = 61
  constructor() {
    this.downTime()
   }

  ngOnInit(): void {
  }

  downTime(){
    this.time --
    if(this.time!=0)
      setTimeout(()=>this.downTime(),1000)
   }
}
