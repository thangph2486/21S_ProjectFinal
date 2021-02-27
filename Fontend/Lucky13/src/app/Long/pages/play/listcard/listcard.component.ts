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
export class ListcardComponent implements OnInit,OnDestroy {
  documents: Observable<string[]>;
  currentDoc: string;
  private _docSub: Subscription;
  dataGame: Observable<string[]>;
  constructor(public cardService: CardDataService,private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documents = this.documentService.documents;

    this.dataGame = this.documentService.gameData;
    this._docSub = this.documentService.currentDocument.subscribe(
      doc => {
        this.currentDoc = doc.id
      }
    );
  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
  }
  joinRoom(){
    this.documentService.joinRoom()
  }
  

  startGame() {
    this.documentService.letStart()
  }

  newDoc() {
    this.documentService.newDocument();
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

  // click(card:string){
  //   const element = <HTMLElement> document.getElementsByClassName(card)[0];
  //   element.style.marginBottom.valueOf() == '25px' ? element.style.marginBottom = '0px': element.style.marginBottom = '25px';
  //   console.log(element.style.marginBottom.valueOf());
  //   console.log(card);
  // }

  removeCard() {
    //xoa bai
    this.cardService.tempPush =[];
    for (let i = 0; i < this.cardService.temp.length; i++) {
      let index = this.cardService.cards.indexOf(this.cardService.temp[i]);
      this.cardService.cards.splice(index, 1);
      this.cardService.tempXuatCard.push(this.cardService.temp[i]);
    }
    this.cardService.temp.splice(0);
    //push mang lon
    this.cardService.tempPush.push(this.cardService.tempXuatCard);
    this.cardService.tempXuatCard= []
    console.log(this.cardService.tempPush);
  }

  clearCard() {
    this.cardService.tempPush.splice(0);
    console.log(this.cardService.tempXuatCard);
  }
}
// dqwdqw
//cscq
