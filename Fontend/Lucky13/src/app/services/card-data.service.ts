import { Injectable } from '@angular/core';
import { Card } from '../models/card.model'
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  constructor(public socket: Socket) { }
  fullCards = [
    'Át♥', '02♥', '03♥', '04♥', '05♥', '06♥', '07♥', '08♥', '09♥', '10♥', 'JJ♥', 'QQ♥', 'KK♥',
    'Át♦', '02♦', '03♦', '04♦', '05♦', '06♦', '07♦', '08♦', '09♦', '10♦', 'JJ♦', 'QQ♦', 'KK♦',
    'Át♣', '02♣', '03♣', '04♣', '05♣', '06♣', '07♣', '08♣', '09♣', '10♣', 'JJ♣', 'QQ♣', 'KK♣',
    'Át♠', '02♠', '03♠', '04♠', '05♠', '06♠', '07♠', '08♠', '09♠', '10♠', 'JJ♠', 'QQ♠', 'KK♠'
  ]
  isPlaying = false
  temp = [];
  tempXuatCard = [];
  //mang lon de show
  tempPush = [];
  cards = ['Át♥', '02♥', '03♥', '04♥', '05♥', '06♥', '07♥', '08♥', '09♥', '10♥', 'JJ♥', 'QQ♥', 'KK♥'];

  //Duc
  gameData = this.socket.fromEvent<string[]>('gameData');
  socketID

  letStart() {
    this.socket.emit('letStart', '');
  }
  getSocketID() {
    this.socket.on('getID', (id) => {
      this.socketID = id
      console.log(id)
    })
  }
}
