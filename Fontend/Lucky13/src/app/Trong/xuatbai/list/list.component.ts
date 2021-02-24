
import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.model';
import {SapbaiComponent} from '../sapbai/sapbai.component'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor() {}

  cards =['Át♥', '02♥', '03♥', '04♥', '05♥', '06♥', '07♥', '08♥', '09♥', '10♥', 'JJ♥', 'QQ♥', 'KK♥'];
  ngOnInit(): void {}
  // isDisplay = false;
  // onClick(){
  //   this.isDisplay = !this.isDisplay;
  // }
  arr = [4,5,6,7,8,9];
  getCards(arr){
    for ( let i =0; i<arr.length;i++){
      this.click(this.cards[i]);
    }
  }
  click(card){
    // this.isDisplay = !this.isDisplay;
    const element = <HTMLElement> document.getElementsByClassName(card)[0];
    element.style.marginBottom.valueOf() == '25px' ? element.style.marginBottom = '0px': element.style.marginBottom = '25px'
    console.log(card);
  }
}
