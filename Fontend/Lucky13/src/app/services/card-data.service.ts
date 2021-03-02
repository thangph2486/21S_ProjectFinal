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
  cardsOfUser = []//Bài hiện tại của người chơi.
  cardsViews = []//Tất cả bài đã đánh trong một vòng.
  cardViewTemp = []//Bài người chơi chọn.
 getRandom(){
  return Math.floor(Math.random() * 20);
}

}
