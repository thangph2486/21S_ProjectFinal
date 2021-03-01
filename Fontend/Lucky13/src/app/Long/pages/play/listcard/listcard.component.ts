import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { CardDataService } from 'src/app/services/card-data.service';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-listcard',
  templateUrl: './listcard.component.html',
  styleUrls: ['./listcard.component.scss'],
})
export class ListcardComponent implements OnInit, OnDestroy {
  dataGame


  constructor(
    public cardService: CardDataService,
    public documentService: DocumentService) {

  }

  ngOnInit(): void {
  }
  ngOnDestroy() {
  }
  joinRoom() {
    this.documentService.joinRoom()
  }
  startGame() {
    this.documentService.letStart()
  }
  newDoc() {
    this.documentService.newDocument();
  }
  removeCard() {
    this.cardService.tempPush = [];
    for (let i = 0; i < this.cardService.temp.length; i++) {
      let index = this.cardService.cardsOfUser.indexOf(this.cardService.temp[i]);
      this.cardService.cardsOfUser.splice(index, 1);
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