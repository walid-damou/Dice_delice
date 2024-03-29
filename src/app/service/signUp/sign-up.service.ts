import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  constructor(private db:AngularFirestore) { }
  
  // ajouter un utilisateur 
  addUser(newUser:any){
    this.db.collection("Users").doc().set(newUser)
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
  }

  // get un utilisateur 
  getUsers(): Observable<any[]> {
    const users = this.db.collection('Users').valueChanges();
    return users;
  }

  getUserByEmail(email: string): Observable<any[]> {
    return this.db.collection('Users', ref => ref.where('email', '==', email))
      .valueChanges()
      .pipe(
        map(users => {
          return users.map(user => {
            const data: any = user;
            return data;
          });
        })
      );
  }
}
