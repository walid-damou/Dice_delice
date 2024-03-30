import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyReservationService {

  constructor(private db:AngularFirestore) { }
  getReservations(): Observable<any[]> {
    const reservations = this.db.collection('Reservations').valueChanges();
    return reservations;
  }
}
