import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../../service/Profile/profile.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.css'
})
export class ProfileFormComponent implements OnInit {
  
  constructor( private profileService : ProfileService , private router:Router){ }
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
    id_utilisateur='';

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
            localStorage.setItem("id_user" , userId );
            
          }, error => {
            console.error('Error retrieving user document ID:', error);
          });
      
    }
    updateProfile(){
      let id_utilisateur = localStorage.getItem("id_user");
      if(id_utilisateur != null){
        this.profileService.updateProfile(id_utilisateur , this.dataUser);
      }
      
      this.router.navigate(['/home'])
    }
    updatePassword(){
      
      this.profileService.updatePassword(this.dataPassword.newPassword)
      this.router.navigate(['/home'])
      if (this.dataPassword.newPassword==this.dataPassword.confirmPassword){
        
      }
    }

    
}