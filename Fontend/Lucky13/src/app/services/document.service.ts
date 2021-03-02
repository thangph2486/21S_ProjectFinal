import { createNgModule } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Document } from 'src/app/models/document.model';
import { CardDataService } from './card-data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  currentDocument = this.socket.fromEvent<Document>('document');
  documents = this.socket.fromEvent<string[]>('documents');

  gameData = this.socket.fromEvent<string[]>('gameData');

  socketID
  temp

  constructor(public socket: Socket, cardDataService: CardDataService) {
    this.gameData.subscribe(event => {
      console.log(event)
      cardDataService.cardsOfUser = event
    });
  }

  letStart() {
    this.socket.emit('letStart', 'r123');
  }
  getSocketID() {
    this.socket.on('getID', (id) => {
      this.socketID = id
    })
  }

  async joinRoom() {
    await this.socket.emit('join', "r123");
    this.socket.on('canJoin', function (res) {
      if (res) {
        this.router.navigate(["/play"]);
      }
      else {
        console.log('Room [r123] is full')
      }
    });
  }

  getDocument(id: string) {
    this.socket.emit('getDoc', id);
  }

  newDocument() {
    this.socket.emit('addDoc', { id: this.docId(), doc: '' });
  }


  editDocument(document: Document) {
    this.socket.emit('editDoc', document);
  }

  private docId() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
