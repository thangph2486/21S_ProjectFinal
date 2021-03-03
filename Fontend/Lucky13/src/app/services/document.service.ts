import { createNgModule } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Document } from 'src/app/models/document.model';
import { CardDataService } from './card-data.service';
import { Router } from '@angular/router';
import { eventNames } from 'process';
import { observeOn } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  currentDocument = this.socket.fromEvent<Document>('document');
  documents = this.socket.fromEvent<string[]>('documents');
  gameData = this.socket.fromEvent<string[]>('gameData');
  canJoin: boolean
  socketID
  temp

  constructor(public socket: Socket, cardDataService: CardDataService, private router: Router) {
    this.gameData.subscribe(event => {
      cardDataService.cardsOfUser = event
      console.log(cardDataService.cardsOfUser)
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
  //hello() { console.log('lo CC') }
  joinRoom() {
    this.socket.emit('join', "r123");
    this.socket.on('canJoin', e => {
      if (e) {
        this.router.navigate(['/play'])
      }
      else {
        console.log('room [r123] is full!')
      }
    })
  }

  createRoom() {
    this.socket.emit('createRoom', "r124");
    this.socket.on('canCreateRoom', e => {
      console.log(e)
      // if (e) {
      //   this.router.navigate(['/play'])
      // }
      // else {
      //   console.log('room [r123] is full!')
      // }
    })
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

  listen(eventName) {
    return new Observable((sub) => {
      this.socket.on(eventName, (data) => {
        sub.next(data)
      })
    })
  }
}
