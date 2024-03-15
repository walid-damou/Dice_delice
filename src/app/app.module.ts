import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"dicedelice-8d551","appId":"1:1024789472025:web:57ae4127c324f26a011b88","storageBucket":"dicedelice-8d551.appspot.com","apiKey":"AIzaSyA99iISR9ZyXbaw-293xIoPb-GboczMUJE","authDomain":"dicedelice-8d551.firebaseapp.com","messagingSenderId":"1024789472025","measurementId":"G-6EYYKFSJNE"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
