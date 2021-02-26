import { Component, Input, OnInit } from '@angular/core';
import { Card, OutCard } from 'src/app/models/card.model';
import { CardDataService } from 'src/app/services/card-data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  constructor(private cardService: CardDataService) {}

  ngOnInit(): void {}
  @Input()
  card: Card;

  click(card) {
    const element = <HTMLElement>document.getElementsByClassName(card)[0];
    if (element.style.marginBottom.valueOf() == '25px') {
      element.style.marginBottom = '0px';
      this.cardService.temp.pop();
    } else {
      element.style.marginBottom = '25px';
      this.cardService.temp.push(card);
    }
    console.log(this.cardService.temp);
  }
}
