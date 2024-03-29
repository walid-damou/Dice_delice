import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination'; 

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
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';
import { ReservationFormComponent } from './components/reservation/reservation-form/reservation-form.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileFormComponent } from './components/profile/profile-form/profile-form.component';
import { ListOfReservationsComponent } from './components/myReservations/list-of-reservations/list-of-reservations.component';
import { SearchBarComponent } from './components/myReservations/search-bar/search-bar.component';
import { MyReservationsComponent } from './pages/my-reservations/my-reservations.component';


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
    UserManagementComponent,
    ForgotPasswordComponent,
    ReservationFormComponent,
    ReservationsComponent,
    ProfileComponent,
    ProfileFormComponent,
    ListOfReservationsComponent,
    SearchBarComponent,
    MyReservationsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
