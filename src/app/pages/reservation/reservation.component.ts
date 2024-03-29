import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{
  reservation_date:any;
  start_time:any;
  end_time:any;
  payement:any;
  instructions:any;
  id_user:any;
  id_game:any;

  games : any;
  user : any;
  
  today: string = new Date().toISOString().substring(0, 10);

  ngOnInit(): void {
  }
  constructor() {}
  
  
  addReservation() {
    const reservationData = {
      reservation_date: this.reservation_date,
      start_time: this.start_time,
      end_time: this.end_time,
      id_game: this.id_game,
      id_user: this.id_user,
      payement: this.payement,
      instructions: this.instructions,
    };
    // console.log(reservationData);console.log(reservationData);
    
  }

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
}
