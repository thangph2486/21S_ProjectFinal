import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';
import { PlayComponent } from './play.component';
import { CardsComponent } from './cards/cards.component';
import { ListcardComponent } from './listcard/listcard.component';


@NgModule({
  declarations: [PlayComponent, CardsComponent, ListcardComponent],
  imports: [
    CommonModule,
    PlayRoutingModule
  ]
})
export class PlayModule { }
