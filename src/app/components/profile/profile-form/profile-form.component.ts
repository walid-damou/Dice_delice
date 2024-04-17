import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../../service/Profile/profile.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.css'
})
export class ProfileFormComponent implements OnInit {
  
  constructor( private profileService : ProfileService){ }
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
      console.log("waliddd");
      
      this.user=localStorage.getItem("user_login");
      this.user=JSON.parse(this.user);
      this.dataUser.firstName = this.user.firstName;
      this.dataUser.lastName = this.user.lastName;
      this.dataUser.dateBirth = this.user.dateBirth;
      this.dataUser.phone = this.user.phone;
      this.dataUser.email = this.user.email;
      this.dataUser.address = this.user.address;

      this.profileService.getUserID_DocumentIdByEmail(this.user.email)
          .subscribe(userId => {
            console.log("Document ID of the user:", userId);
            
          }, error => {
            console.error('Error retrieving user document ID:', error);
          });
      
    }
    updateProfile(){
      
    }
    updatePassword(){
      // this.profileService.getUserByEmail(this.user.email).subscribe((users: any[]) => {
      //   console.log('Users:', users);
      // }, error => {
      //   console.error('Error fetching user data:', error);
      // });
      this.profileService.updatePassword(this.dataPassword.newPassword)
      if (this.dataPassword.newPassword==this.dataPassword.confirmPassword){
        
      }
    }

    
}