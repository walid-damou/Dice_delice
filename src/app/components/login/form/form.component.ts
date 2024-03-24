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
}
