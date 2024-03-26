import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  resetPassword() {
    this.afAuth.sendPasswordResetEmail(this.email)
      .then(() => {
        alert('A password reset link has been sent to your email address');
        this.router.navigate(['/login']);
      })
      .catch(error => {
        alert(error.message);
      });
  }
}
