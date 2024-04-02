import { Component,Input, OnInit } from '@angular/core';
import { MyReservationService } from '../../../service/myReservations/my-reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-reservations',
  templateUrl: './list-of-reservations.component.html',
  styleUrl: './list-of-reservations.component.css'
})
export class ListOfReservationsComponent implements OnInit {
  
  @Input() reservations!:any[];
  p: number = 1;

  constructor(private myReservationService : MyReservationService , private router:Router){ }
  ngOnInit(): void {
    const reservationsss = this.myReservationService.getReservations();
    reservationsss.subscribe(reservation => {
      console.log("reservations Infos",reservation);
      this.reservations=reservation;
      // localStorage.setItem("user_login" , JSON.stringify(user[0]));
    });
  }
}
