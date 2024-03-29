import { Component } from '@angular/core';
import { ReservationService } from '../../../service/reservation/reservation.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent {

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
  constructor(private reservationService: ReservationService,private router:Router) {}
  ngOnInit(): void {

  }
  
  addReservation() {
    

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
        this.router.navigate(['/']);
      })
      .catch(error => {
        console.error('Error adding reservation:', error);
      });
  
  }

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
}
