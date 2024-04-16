import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private db: AngularFirestore) { }
  
  addReservation(reservationData: any) {
    return this.db.collection('Reservations').add(reservationData);
  }
  

  getUserDocumentIdByEmail(email: string): Observable<string> {
    return this.db.collection('Users', ref => ref.where('email', '==', email)).get().pipe(
      map(querySnapshot => {
        if (!querySnapshot.empty) {
          return querySnapshot.docs[0].id;
        } else {
          throw new Error('User not found');
        }
      })
    );
  }
  
}
