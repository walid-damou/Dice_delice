import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  
  email : string = '';
  password : string = '';
  constructor(private authService:AuthService , private router:Router){

  }
  login(){
    this.authService.login(this.email , this.password)
  }
  
  ngOnInit(): void {
    
  }
  signInWithGoogle() {
    this.authService.signInWithGoogle().then(() => {
      // You can add any additional logic here that should run after successful sign-in
      // For example, navigating to a different page or updating the UI
    }).catch(error => {
      console.error("Error during Google sign-in:", error);
      // Handle any sign-in errors here, such as displaying a notification to the user
    });
  }
}
