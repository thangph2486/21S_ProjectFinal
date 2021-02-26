import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPageComponent } from './all-page.component';

const routes: Routes = [{ path: '', component: AllPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllPageRoutingModule { }
