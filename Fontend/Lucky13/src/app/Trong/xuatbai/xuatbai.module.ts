import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XuatbaiRoutingModule } from './xuatbai-routing.module';
import { XuatbaiComponent } from './xuatbai.component';
import { SapbaiComponent } from './sapbai/sapbai.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [XuatbaiComponent, SapbaiComponent, ListComponent],
  imports: [
    CommonModule,
    XuatbaiRoutingModule
  ]
})
export class XuatbaiModule {

 }
