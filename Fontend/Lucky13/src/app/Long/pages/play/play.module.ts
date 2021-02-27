import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';
import { PlayComponent } from './play.component';
import { CardsComponent } from './listcard/cards/cards.component';
import { ListcardComponent } from './listcard/listcard.component';
import { ListshowcardsComponent } from './listshowcards/listshowcards.component';
import { CardviewComponent } from './listshowcards/cardview/cardview.component';
import { CountdownComponent } from './countdown/countdown.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FormsModule } from '@angular/forms';
const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

@NgModule({
  declarations: [PlayComponent, CardsComponent, ListcardComponent, ListshowcardsComponent, CardviewComponent, CountdownComponent],
  imports: [
    CommonModule,
    PlayRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config)

  ]
})
export class PlayModule { }
