import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  
  constructor(private authService:AuthService , private router:Router){}
  logged_in:any=false;

  ngOnInit(): void {
    this.isLoggedIn();
  }
  isLoggedIn() {
    this.logged_in= localStorage.getItem('logged_in');
    return this.logged_in ? true : false;
  }
  logout() {
    localStorage.removeItem('logged_in');
    this.authService.logout();
}

}
