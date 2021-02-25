import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }

  @Input()
  card:Card;
  ngOnInit(): void {
  }
  click(card){
    // this.isDisplay = !this.isDisplay;
    const element = <HTMLElement> document.getElementsByClassName(card)[0];
    element.style.marginBottom.valueOf() == '25px' ? element.style.marginBottom = '0px': element.style.marginBottom = '25px'
  }
  }
