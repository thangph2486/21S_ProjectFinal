import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindroomComponent } from './findroom.component';

const routes: Routes = [{ path: '', component: FindroomComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindroomRoutingModule { }
