import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeLoginComponent } from './home-login.component';

const routes: Routes = [{ path: '', component: HomeLoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeLoginRoutingModule { }
