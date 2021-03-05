
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
export class RoomService {
  gameData = this.socket.fromEvent<string[]>('gameData');
  rooms = []
  constructor(public socket: Socket, cardDataService: CardDataService, private router: Router) {
    this.gameData.subscribe(event => {
      cardDataService.cardsOfUser = event
      console.log(cardDataService.cardsOfUser)
    });
  }


}
