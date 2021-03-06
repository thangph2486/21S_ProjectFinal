import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
import { HttpClientModule } from '@angular/common/http';
import { CountdownComponent } from './Long/pages/play/countdown/countdown.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    HttpClientModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
