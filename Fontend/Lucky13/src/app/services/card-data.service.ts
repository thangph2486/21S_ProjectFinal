import { Injectable } from '@angular/core';
import { Card } from '../models/card.model'

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  constructor() { }

  cards=['Át♥', '02♥', '03♥', '04♥', '05♥', '06♥', '07♥', '08♥', '09♥', '10♥', 'JJ♥', 'QQ♥', 'KK♥'];

  temp  = [];

  public addCard(card){
  }
  public removeCard(){

  }
  public deleteCard(pos:number){
    let i = 0;
    this.cards = this.cards.splice(this.temp[i])
  }

}
