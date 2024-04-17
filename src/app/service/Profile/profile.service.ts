import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { User } from '../../interfaces/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private db: AngularFirestore , private afAuth : AngularFireAuth) { }

  getUserID_DocumentIdByEmail(email: string): Observable<string> {
    return this.db.collection('Users', ref => ref.where('email', '==', email)).get().pipe(
      map(querySnapshot => {
        if (!querySnapshot.empty) {
          // console.log("User_ID from FireBase : "+querySnapshot.docs[0].id);
          return querySnapshot.docs[0].id;
        } else {
          throw new Error('User not found');
        }
      })
    );
  }

  
  getUserByEmail(email: string): Observable<any[]> {
    return this.db.collection('Users', ref => ref.where('email', '==', email)).valueChanges();
  }

  updatePassword(dataPassword:string){
    
  }
}
