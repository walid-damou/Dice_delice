import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth/auth.service';
import { SignUpService } from '../../../service/signUp/sign-up.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  
  email : string = '';
  password : string = '';
  constructor(private authService:AuthService, private signupService:SignUpService , private router:Router){

  }
  login(){
    this.authService.login(this.email , this.password);
    const user = this.signupService.getUserByEmail(this.email);
    user.subscribe(user => {
      console.log("user Infos",user[0]);
      localStorage.setItem("user_login" , JSON.stringify(user[0]));
    });
  


  }
  
  ngOnInit(): void {
    
  }
  
}
