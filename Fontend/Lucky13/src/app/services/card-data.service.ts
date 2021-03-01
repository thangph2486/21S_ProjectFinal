import { Injectable } from '@angular/core';
import { Card } from '../models/card.model'
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  constructor(public socket: Socket) { }
  isPlaying = false
  temp = [];
  tempXuatCard = [];
  //mang lon de show
  tempPush = [];
  cardsOfUser = []
  cards = []

}
