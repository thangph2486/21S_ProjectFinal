import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindroomRoutingModule } from './findroom-routing.module';
import { FindroomComponent } from './findroom.component';
import { NavFindroomComponent } from './components/nav-findroom/nav-findroom.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import {MatTableModule} from '@angular/material/table';
import { RoomComponent } from './components/room/room.component';
import { UserComponent } from './components/user/user.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [FindroomComponent, NavFindroomComponent, RoomComponent, UserComponent],
  imports: [
    CommonModule,
    FindroomRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class FindroomModule { }
