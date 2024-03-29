import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from '../../service/reservation/reservation.service';

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
  constructor(private reservationService: ReservationService) {}
  ngOnInit(): void {

  }
  
  addReservation() {
    
  console.log("reservation_date:", this.reservation_date);
  console.log("start_time:", this.start_time);
  console.log("end_time:", this.end_time);
  console.log("id_game:", this.id_game);
  console.log("id_user:", this.id_user);
  console.log("payement:", this.payement);
  console.log("instructions:", this.instructions);

    const reservationData = {
      "reservation_date": this.reservation_date,
      "start_time": this.start_time,
      "end_time": this.end_time,
      "id_game": this.id_game=1,
      "id_user": this.id_user=1,
      "payement": this.payement,
      "instructions": this.instructions,
    };

    console.log(reservationData);

    this.reservationService.addReservation(reservationData)
      .then(() => {
        console.log('Reservation added successfully!');
      })
      .catch(error => {
        console.error('Error adding reservation:', error);
      });
  
  }

  // showModal = false;
  // toggleModal(){
  //   this.showModal = !this.showModal;
  // }
}
