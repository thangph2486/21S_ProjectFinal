import { keyframes } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-sapbai',
  templateUrl: './sapbai.component.html',
  styleUrls: ['./sapbai.component.scss']
})
export class SapbaiComponent implements OnInit {

  constructor() { }

  @Input()
  card:Card;

  ngOnInit(): void {
  }
  isDisplay = false;
  marginBot = 0
  click(card){
    //this.isDisplay = !this.isDisplay;
    const element = <HTMLElement> document.getElementsByClassName(card)[0];
    element.style.marginBottom.valueOf() == '25px' ? element.style.marginBottom = '0px': element.style.marginBottom = '25px'
    console.log(element.style.marginBottom.valueOf());
    console.log(card);
  }
}
