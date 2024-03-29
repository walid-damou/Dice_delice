import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged_in: any = false;
  user: any | null = null;
  data_user = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn();
    const data_user = localStorage.getItem('user_login');
    this.user = data_user ? JSON.parse(data_user) : null;

    console.log('toktok');
    // console.log(this.user);
  }

  isLoggedIn() {
    this.logged_in = localStorage.getItem('logged_in');
    return this.logged_in ? true : false;
  }

 

  logout() {
    localStorage.removeItem('logged_in');
    this.authService.logout();
  }

}
