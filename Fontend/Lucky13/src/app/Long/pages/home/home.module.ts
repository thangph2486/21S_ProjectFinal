import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavTopModule } from 'src/app/ShareComponent/nav-top/nav-top.module';


@NgModule({
  declarations: [HomeComponent, NavBarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavTopModule
  ]
})
export class HomeModule { }
