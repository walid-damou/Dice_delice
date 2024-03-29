import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormComponent } from './components/login/form/form.component';
import { PicLoginComponent } from './components/login/pic-login/pic-login.component';
import { UnderFormComponent } from './components/login/under-form/under-form.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CaraComponent } from './components/home/cara/cara.component';
import { CtaComponent } from './components/home/cta/cta.component';
import { Cta2Component } from './components/home/cta2/cta2.component';
import { FaqComponent } from './components/home/faq/faq.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { TestimonialsComponent } from './components/home/testimonials/testimonials.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { LeftDescriptionComponent } from './components/signUp/left-description/left-description.component';
import { RegistrationFormComponent } from './components/signUp/registration-form/registration-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthService } from './service/auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PicLoginComponent,
    UnderFormComponent,
    LoginComponent,
    HomeComponent,
    CaraComponent,
    CtaComponent,
    Cta2Component,
    FaqComponent,
    HeroComponent,
    TestimonialsComponent,
    HeaderComponent,
    FooterComponent,
    LeftDescriptionComponent,
    RegistrationFormComponent,
    SignUpComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
