import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Card, OutCard } from 'src/app/models/card.model';
import { CardDataService } from 'src/app/services/card-data.service';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {




  constructor(private cardService: CardDataService,private documentService:DocumentService) { }

  ngOnInit(): void {

  }
  @Input()
  card: Card;







  click(card) {
    const element = <HTMLElement>document.getElementsByClassName(card)[0];
    if (element.style.marginBottom.valueOf() == '25px') {
      element.style.marginBottom = '0px';
      this.cardService.cardViewTemp.pop();
    } else {
      element.style.marginBottom = '25px';
      this.cardService.cardViewTemp.push(card);
    }
    console.log(this.cardService.cardViewTemp);
    //this.documentService.checkValid(card)
  }
}
