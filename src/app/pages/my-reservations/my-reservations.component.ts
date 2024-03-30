import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css']
})
export class MyReservationsComponent {
  reservations:any;
  user:any;


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.user=localStorage.getItem("user");
    this.user=JSON.parse(this.user);
    console.log(this.user.id);
    this.getReservations();
    
  }

  getReservations() {
    this.dataService.listReservations(this.user.id).subscribe(
    
      res=>{
        this.reservations = res;
        console.log(res);
      },
      error=>{
        console.log(error);
      
    });
  }
}
