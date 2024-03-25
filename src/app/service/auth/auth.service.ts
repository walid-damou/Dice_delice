import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  constructor(private firebaseAuth: AngularFireAuth , private router : Router) { }

  //Login
  login(email: string, password: string){
    this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res.user));
        localStorage.setItem('logged_in', 'true');
        localStorage.setItem('email', email);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/']);
        });
      })
      .catch(err => {
        console.error(err);
        this.router.navigate(['/login']);
      });
  }
  
  
  // Sign up with email/password
  SignUp(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          // console.log(result);
          this.router.navigate(['/home']);
        },
        error => {
          this.router.navigate(['/signUp']);
        });
  }

  //Logout

  logout(){
    
    localStorage.removeItem('user');
    localStorage.removeItem('logged_in');
    this.firebaseAuth.signOut()
    this.router.navigate(['/login']);
  }
}