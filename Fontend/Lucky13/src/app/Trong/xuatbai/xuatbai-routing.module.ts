import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XuatbaiComponent } from './xuatbai.component';

const routes: Routes = [{ path: '', component: XuatbaiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XuatbaiRoutingModule { }
