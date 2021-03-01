import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindroomRoutingModule } from './findroom-routing.module';
import { FindroomComponent } from './findroom.component';
import { NavFindroomComponent } from './components/nav-findroom/nav-findroom.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'


@NgModule({
  declarations: [FindroomComponent, NavFindroomComponent],
  imports: [
    CommonModule,
    FindroomRoutingModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class FindroomModule { }
