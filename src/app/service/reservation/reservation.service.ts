import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private db: AngularFirestore) { }
  
  addReservation(reservationData: any) {
    return this.db.collection('Reservations').add(reservationData);
  }
}
