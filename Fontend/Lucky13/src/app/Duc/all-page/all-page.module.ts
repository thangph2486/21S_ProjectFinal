import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPageRoutingModule } from './all-page-routing.module';
import { AllPageComponent } from './all-page.component';


@NgModule({
  declarations: [AllPageComponent],
  imports: [
    CommonModule,
    AllPageRoutingModule
  ]
})
export class AllPageModule { }
