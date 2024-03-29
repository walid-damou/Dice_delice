import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth/auth.service';
import { SignUpService } from '../../../service/signUp/sign-up.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent implements OnInit {

  firstName :any;
  lastName : any;
  gender : any;
  dateBirth: any;
  address : any;
  city : any;
  username : any;
  phone : any;
  email : any;
  password : any;
  Cpassword : any;
  
  constructor(private authService : AuthService ,private signupService:SignUpService, private router:Router){ }
  ngOnInit(): void {
    // localStorage.setItem("logged_in" , "false");
  }
  
  register(){
    const newUser = {
      "firstName":this.firstName,
      "lastName":this.lastName,
      "gender":this.gender,
      "dateBirth":this.dateBirth,
      "address":this.address,
      "city":this.city,
      "username":this.username,
      "phone":this.phone,
      "email":this.email,
      "picture":this.lastName+".jpeg"
  }
  localStorage.setItem("user" , JSON.stringify(newUser));
  this.signupService.addUser(newUser);
  this.authService.SignUp(newUser.email , this.Cpassword);
  
  }

}
