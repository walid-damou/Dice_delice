import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';
import { ReservationsComponent } from './pages/reservations/reservations.component'; 
import { BooksComponent } from './pages/books/books.component';
import { GamesComponent } from './pages/games/games.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyReservationsComponent } from './pages/my-reservations/my-reservations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'games', component: GamesComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reservation', component: ReservationsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'myreservations', component: MyReservationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
