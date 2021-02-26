import { Component, Input, OnInit } from '@angular/core';
import { OutCard } from 'src/app/models/card.model';
import { CardDataService } from 'src/app/services/card-data.service';

@Component({
  selector: 'app-listshowcards',
  templateUrl: './listshowcards.component.html',
  styleUrls: ['./listshowcards.component.scss']
})
export class ListshowcardsComponent implements OnInit {

  constructor(public cardService: CardDataService ) { }
  @Input()
  outCard: OutCard;

  ngOnInit(): void {
    //let cardsTemp=this.cardService.temp;
  }

}
