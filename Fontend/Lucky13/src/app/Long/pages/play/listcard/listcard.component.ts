import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardDataService } from 'src/app/services/card-data.service';

@Component({
  selector: 'app-listcard',
  templateUrl: './listcard.component.html',
  styleUrls: ['./listcard.component.scss'],
})
export class ListcardComponent implements OnInit {
  constructor(public cardService: CardDataService) { }

  dataGame: Observable<string[]>;

  ngOnInit(): void {
    this.dataGame = this.cardService.gameData;

  }

  removeCard() {
    //xoa bai
    this.cardService.tempPush = [];
    for (let i = 0; i < this.cardService.temp.length; i++) {
      let index = this.cardService.cards.indexOf(this.cardService.temp[i]);
      this.cardService.cards.splice(index, 1);
      this.cardService.tempXuatCard.push(this.cardService.temp[i]);
    }
    this.cardService.temp.splice(0);
    //push mang lon
    this.cardService.tempPush.push(this.cardService.tempXuatCard);
    this.cardService.tempXuatCard = []
    console.log(this.cardService.tempPush);
  }

  clearCard() {
    this.cardService.tempPush.splice(0);
    console.log(this.cardService.tempXuatCard);
  }
}
