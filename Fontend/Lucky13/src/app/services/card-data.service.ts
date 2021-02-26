import { Injectable } from '@angular/core';
import { Card } from '../models/card.model'

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  constructor() { }
  fullCards = [
    'Át♥', '02♥', '03♥', '04♥', '05♥', '06♥', '07♥', '08♥', '09♥', '10♥', 'JJ♥', 'QQ♥', 'KK♥',
    'Át♦', '02♦', '03♦', '04♦', '05♦', '06♦', '07♦', '08♦', '09♦', '10♦', 'JJ♦', 'QQ♦', 'KK♦',
    'Át♣', '02♣', '03♣', '04♣', '05♣', '06♣', '07♣', '08♣', '09♣', '10♣', 'JJ♣', 'QQ♣', 'KK♣',
    'Át♠', '02♠', '03♠', '04♠', '05♠', '06♠', '07♠', '08♠', '09♠', '10♠', 'JJ♠', 'QQ♠', 'KK♠'
]

  temp  = [];
  tempXuatCard = [];
  cards=['Át♥', '02♥', '03♥', '04♥', '05♥', '06♥', '07♥', '08♥', '09♥', '10♥', 'JJ♥', 'QQ♥', 'KK♥'];

  tempCards = [['02♦', '03♦', '04♣'],['02♣', '03♣', '04♦']];

}
