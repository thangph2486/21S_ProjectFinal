import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectSocketRoutingModule } from './connect-socket-routing.module';
import { ConnectSocketComponent } from './connect-socket.component';


@NgModule({
  declarations: [ConnectSocketComponent],
  imports: [
    CommonModule,
    ConnectSocketRoutingModule
  ]
})
export class ConnectSocketModule { }
