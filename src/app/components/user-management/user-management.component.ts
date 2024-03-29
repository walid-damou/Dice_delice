import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../../service/auth/auth.service';
import { UserManagementActions } from '../../service/auth/enums';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit, OnDestroy {

  ngUnsubscribe: Subject<any> = new Subject<any>();
  actions = UserManagementActions;

  mode: string | undefined;
  actionCode: string | undefined;

  newPassword: string = '';
  confirmPassword: string = '';
  actionCodeChecked: boolean = true;
  errorMessage: string | null = null;
  
  email: string | undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private afAuth: AngularFireAuth // Inject AngularFireAuth
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(params => {
        if (!params) this.router.navigate(['/home']);
  
        this.mode = params['mode'];
        this.actionCode = params['oobCode'];
  
        switch (this.mode) {
          case UserManagementActions.resetPassword: {
            // Extract email from query parameters if available
            const email = params['email'];
            if (email) {
              this.authService.resetPasswordInit(email)
                .then(() => {
                  this.actionCodeChecked = true;
                })
                .catch(e => {
                  alert(e);
                  this.router.navigate(['/auth/login']);
                });
            } else {
              // Handle case when email is not available
              alert('Email parameter is missing');
              this.router.navigate(['/auth/login']);
            }
          } break;        
          case UserManagementActions.recoverEmail: {
            // Handle email recovery
          } break;
          case UserManagementActions.verifyEmail: {
            // Handle email verification
          } break;
          default: {
            console.log('query parameters are missing');
            this.router.navigate(['/auth/login']);
          }
        }
      });
  }
  

  ngOnDestroy() {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
  }

  handleResetPassword() {
    if (!this.email) {
      alert('Email is missing');
      return;
    }
  
    if (this.newPassword !== this.confirmPassword) {
      alert('New Password and Confirm Password do not match');
      return;
    }
  
    if (!this.newPassword || !this.confirmPassword) {
      alert('New Password or Confirm Password is missing');
      return;
    }
  
    this.afAuth.sendPasswordResetEmail(this.email)
      .then(() => {
        alert('A password reset link has been sent to your email address');
        this.actionCodeChecked = true;
      })
      .catch(e => {
        alert(e);
        this.router.navigate(['/auth/login']);
      });
  }
  
}
