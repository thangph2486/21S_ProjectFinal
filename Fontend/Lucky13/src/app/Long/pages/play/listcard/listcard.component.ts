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

  sendCards() {
    //Gui bai socket

    //neu socket tra ve true=>

    for (let i = 0; i < this.cardService.cardViewTemp.length; i++) {
      let index = this.cardService.cardsOfUser.indexOf(this.cardService.cardViewTemp[i])
      this.cardService.cardsOfUser.splice(index, 1)
    }
    this.cardService.cardsViews.push(this.cardService.cardViewTemp)
    this.cardService.cardViewTemp = []

    console.log(this.cardService.cardsViews)
  }
  offTurn() {


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
}