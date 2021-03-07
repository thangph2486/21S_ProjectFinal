import { createNgModule } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Document } from 'src/app/models/document.model';
import { CardDataService } from './card-data.service';
import { Router } from '@angular/router';
import { eventNames } from 'process';
import { observeOn } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RoomService } from './room.service';
import { keyframes } from '@angular/animations';
import { Room } from '../models/room.model'
import { User } from '../models/user.model';
import { Rooms } from '../models/rooms.model';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  currentDocument = this.socket.fromEvent<Document>('document');
  documents = this.socket.fromEvent<string[]>('documents');
  gameData = this.socket.fromEvent<User>('gameData');
  roomData = this.socket.fromEvent<Room>('room')
  cardOutCheck = this.socket.fromEvent<boolean>('isValid')
  firstTurn = this.socket.fromEvent<string>("getCheck")
  takeCard = this.socket.fromEvent<string[]>("takeCard")
  endGame = this.socket.fromEvent<boolean>("endGame")
  roomsData = this.socket.fromEvent<string[]>('rooms');
  canJoin: boolean
  socketID
  temp

  constructor(public socket: Socket,cardDataService: CardDataService,private router: Router,private roomService: RoomService) {
    this.firstTurn.subscribe(event => {
      alert(event)
    })
    this.endGame.subscribe(event => {
      alert('ket thuc tran');
      this.router.navigate([''])
    })
    this.takeCard.subscribe(Event => {
      console.log("server " + Event)
      cardDataService.takCards = Event;
      for (let i = cardDataService.cardViewTemp.length; i < cardDataService.takCards.length; i++) {
        const element = <HTMLElement>document.getElementsByClassName(cardDataService.takCards[i])[0];
        if (element.style.marginBottom.valueOf() == '25px') {
          element.style.marginBottom = '0px';
        } else {
          element.style.marginBottom = '25px';
          cardDataService.cardViewTemp.push(cardDataService.takCards[i]);
        }
        //console.log(this.cardService.cardViewTemp);
      }

    })
    this.cardOutCheck.subscribe(event => {
      cardDataService.cardCheck = event;
      console.log(cardDataService.cardCheck)
    })
    this.gameData.subscribe(event => {
      cardDataService.User = event
      cardDataService.cardsOfUser = cardDataService.User.cards
      cardDataService.inTurn = cardDataService.User.inTurn;
      console.log(cardDataService.User)
    });
    this.roomData.subscribe(event => {
      cardDataService.Room = event;
      cardDataService.cardsViews = event.cardOut;
      cardDataService.roomId = event.roomId
      console.log(cardDataService.Room)
    });

    this.roomsData.subscribe(event => {
      let b = ''
      for (let i in event) {
        b += event[i]['roomId'] + event[i]['playerNum']
      }
      if (this.roomService.isChange != b) {
        this.roomService.isChange = ''
        this.roomService.rooms = new Array<Rooms>()
        for (let i in event) {
          let a = new Rooms()
          a.roomId = event[i]['roomId']
          a.playerNum = event[i]['playerNum']
          this.roomService.isChange += event[i]['roomId'] + event[i]['playerNum']
          this.roomService.rooms.push(a)
        }
      }
    });
  }

  quitTurn() {
    this.socket.emit('quitTurn', "")
  }

  letStart() {
    this.socket.emit('letStart', 'r123');
  }
  getSocketID() {
    this.socket.on('getID', (id) => {
      this.socketID = id
    })
  }

  checkValid(deck: Array<any>) {
    this.socket.emit('checkValid', deck)
  }


  sendCard(deck: Array<any>) {
    this.socket.emit('sendCards', deck);
  }

  //hello() { console.log('lo CC') }
  joinRoom(idRoom) {
    this.socket.emit('join', idRoom);
    this.socket.on('canJoin', e => {
      if (e == true) {
        this.router.navigate(['/play'])
      }
      else if (e == 'not found') {
        console.log(`room [${idRoom}] is not found!`)
      }
      else if (e == false) {
        console.log(`room [${idRoom}] is full!`)
      }
    })
  }

  createRoom(rid) {
    this.socket.emit('createRoom', rid);
    this.socket.on('canCreateRoom', e => {
      if (e) {
        this.joinRoom(rid)
      }
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
