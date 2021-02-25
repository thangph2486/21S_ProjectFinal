import { Component, OnInit } from '@angular/core';
import { CardDataService } from 'src/app/services/card-data.service';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-listcard',
  templateUrl: './listcard.component.html',
  styleUrls: ['./listcard.component.scss']
})
export class ListcardComponent implements OnInit {

  constructor(public cardService: CardDataService) {}

  ngOnInit(): void {
    this.cardService.cards;
  }

  // arr = [0,1,2];
  // getCards(arr){
  //   for ( let i =0; i<arr.length;i++){
  //     this.click(this.cardService.cards[i]);
  //   }
  // }
  // i=-1
  // removeCard(card){
  //   if( this.i==-1){
  //     // this.click(this.cards[i]);
  //     // let remove = this.cards.splice(i,1);
  //     console.log(this.cardService.cards.indexOf(card));
  //   }

  // }
  click(card:string){
    // this.isDisplay = !this.isDisplay;
    const element = <HTMLElement> document.getElementsByClassName(card)[0];
    element.style.marginBottom.valueOf() == '25px' ? element.style.marginBottom = '0px': element.style.marginBottom = '25px';
  }

}
