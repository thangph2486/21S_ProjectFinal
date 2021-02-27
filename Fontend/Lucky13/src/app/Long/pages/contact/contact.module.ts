import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ComponentsComponent } from './components/components.component';
import { NavbarcontactComponent } from './components/navbarcontact/navbarcontact.component';


@NgModule({
  declarations: [ContactComponent, ComponentsComponent, NavbarcontactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
