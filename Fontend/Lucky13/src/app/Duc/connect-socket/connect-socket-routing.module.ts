import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectSocketComponent } from './connect-socket.component';

const routes: Routes = [{ path: '', component: ConnectSocketComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectSocketRoutingModule { }
