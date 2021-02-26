import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectSocketRoutingModule } from './connect-socket-routing.module';
import { ConnectSocketComponent } from './connect-socket.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DocumentComponent } from './components/document/document.component';

import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

@NgModule({
  declarations: [ConnectSocketComponent, DocumentListComponent, DocumentComponent],
  imports: [
    CommonModule,
    ConnectSocketRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ]
})
export class ConnectSocketModule { }
