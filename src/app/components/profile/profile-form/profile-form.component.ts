import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.css'
})
export class ProfileFormComponent {
  constructor( private router:Router , private route: Router){ }
    id : any;
    user : any;
    
    dataPassword={
      currentPassword : '',
      newPassword : '',
      confirmPassword : ''
    }

    dataUser = {
      firstName : '',
      lastName : '',
      dateBirth: '',
      phone : '',
      email : '',
      address : ''
    };

    ngOnInit(): void {
      this.user=localStorage.getItem("user_login");
      this.user=JSON.parse(this.user);

            
      this.dataUser.firstName = this.user.firstName;
      this.dataUser.lastName = this.user.lastName;
      this.dataUser.dateBirth = this.user.dateBirth;
      this.dataUser.phone = this.user.phone;
      this.dataUser.email = this.user.email;
      this.dataUser.address = this.user.address;

    }
    updateProfile(){
      
    }
    updatePassword(){
     
    }
}
