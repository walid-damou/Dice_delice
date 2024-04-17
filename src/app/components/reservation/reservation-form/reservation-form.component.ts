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

  games: any[] = [];
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
        this.user = user;
        this.id_user = user.uid;
  
        if (user.email) {
          this.reservationService.getUserDocumentIdByEmail(user.email)
            .subscribe(docId => {
              this.id_user = docId;
              console.log("Document ID of the user:", docId);
            }, error => {
              console.error('Error retrieving user document ID:', error);
            });
        } else {
          console.error('User email is null');
        }
      }
    });
  
    this.reservationService.getAllGames()
      .subscribe(games => {
        this.games = games;
        console.log("Games:", this.games);
      });
  }
  
  
  

  addReservation() {
    const selectedGame = this.games.find(game => game.id === this.id_game);
    
    if (selectedGame) {
      const reservationData = {
        "reservation_date": this.reservation_date,
        "start_time": this.start_time,
        "end_time": this.end_time,
        "id_game": selectedGame.id,
        "id_user": this.id_user,
        "payement": this.payement,
        "instructions": this.instructions,
      };
  
      console.log(reservationData);
  
      this.reservationService.addReservation(reservationData)
        .then((docRef) => {
          console.log('Reservation added successfully! Reservation ID:', docRef.id);
          this.router.navigate(['/']);
        })
        .catch(error => {
          console.error('Error adding reservation:', error);
        });
    } else {
      console.error('Selected game not found.');
    }
  }
  
  
  

  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
}