import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  
  constructor(private firebaseAuth: AngularFireAuth, private router: Router) { }

  // Login
  login(email: string, password: string){
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        // Check if the email is verified
        if (res.user && res.user.emailVerified) {
          localStorage.setItem('user', JSON.stringify(res.user));
          localStorage.setItem('logged_in', 'true');
          this.router.navigate(['/']); // Navigate to the home page or dashboard
        } else {
          // If email is not verified
          alert('Please verify your email first.');
          res.user?.sendEmailVerification();
          this.firebaseAuth.signOut(); // Optional: Sign out the user until they verify their email
          this.router.navigate(['/login']); // Redirect back to the login page or a specific page instructing them to verify
        }
      })
      .catch(err => {
        // Handle login errors here
        alert(err.message); // Show the error message
        this.router.navigate(['/login']);
      });
  }
  
  
  // Sign up with email/password
  async SignUp(email: string, password: string) {
    try {
      const result = await this.firebaseAuth.createUserWithEmailAndPassword(email, password);
      if(result.user) {
        alert('Please verify your email');
        await this.sendVerificationMail(result.user);
        this.router.navigate(['/verify-email']); // Navigate to a verification notice page
      }
    } catch (error) {
      console.error("Signup Error:", error);
      this.router.navigate(['/signUp']);
      // Handle errors here (show to user, log, etc.)
    }
  }
  async sendVerificationMail(user : any) {
    try {
      await user.sendEmailVerification();
      console.log('Verification email sent.');
      // Email verification sent
      // Optionally, inform the user with a message
    } catch (error) {
      console.error("Error sending email verification", error);
      // Handle errors here
    }
  }

  getAuth() { 
    return this.firebaseAuth; 
  }
  resetPasswordInit(email: string) { 
    return this.firebaseAuth.sendPasswordResetEmail(
      email, 
      { url: 'http://localhost:4200/auth' }); 
    } 

  //Logout

  logout(){
    
    localStorage.removeItem('user');
    localStorage.removeItem('logged_in');
    this.firebaseAuth.signOut()
    this.router.navigate(['/login']);
  }
}