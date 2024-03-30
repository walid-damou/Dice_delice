import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ReservationService } from '../../../service/reservation/reservation.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservation_date: any;
  start_time: any;
  end_time: any;
  payement: any;
  instructions: any;
  id_user: any;
  id_game: any;

  games: any;
  user: any;

  today: string = new Date().toISOString().substring(0, 10);

  constructor(
    private reservationService: ReservationService,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.firestore.collection('users').doc(user.uid).get().subscribe(userData => {
          this.id_user = userData.id;
        });
      }
    });
  }
  
  addReservation() {
    
    const reservationData = {
      "reservation_date": this.reservation_date,
      "start_time": this.start_time,
      "end_time": this.end_time,
      "id_game": this.id_game=1,
      "id_user": this.id_user,
      "payement": this.payement,
      "instructions": this.instructions,
    };

    console.log(reservationData);

    this.reservationService.addReservation(reservationData)
      .then(() => {
        console.log('Reservation added successfully!');
        this.router.navigate(['/']);
      })
      .catch(error => {
        console.error('Error adding reservation:', error);
      });
  }

  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
